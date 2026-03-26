import fs from 'node:fs'
import path from 'node:path'
import { parse } from '@babel/parser'

const ROOTS = ['app', 'components']
const VALID_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx'])
const REQUIRED_ATTRS = ['alt', 'loading', 'decoding']

function collectFiles(rootDir, collected = []) {
  for (const entry of fs.readdirSync(rootDir, { withFileTypes: true })) {
    const fullPath = path.join(rootDir, entry.name)

    if (entry.isDirectory()) {
      collectFiles(fullPath, collected)
      continue
    }

    if (VALID_EXTENSIONS.has(path.extname(entry.name))) {
      collected.push(fullPath)
    }
  }

  return collected
}

function getAttrName(attr) {
  if (!attr || attr.type !== 'JSXAttribute') return null
  if (attr.name?.type !== 'JSXIdentifier') return null
  return attr.name.name
}

function walkAst(node, onNode) {
  if (!node || typeof node !== 'object') return
  onNode(node)

  for (const key of Object.keys(node)) {
    const value = node[key]

    if (Array.isArray(value)) {
      for (const child of value) walkAst(child, onNode)
      continue
    }

    walkAst(value, onNode)
  }
}

const files = ROOTS.filter((root) => fs.existsSync(root)).flatMap((root) => collectFiles(root))
const failures = []

for (const filePath of files) {
  const source = fs.readFileSync(filePath, 'utf8')
  let ast

  try {
    ast = parse(source, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
      errorRecovery: true,
    })
  } catch (error) {
    failures.push({
      filePath,
      line: 1,
      missing: ['parse-error'],
      message: error instanceof Error ? error.message : String(error),
    })
    continue
  }

  walkAst(ast.program, (node) => {
    if (
      node.type === 'JSXOpeningElement' &&
      node.name?.type === 'JSXIdentifier' &&
      node.name.name === 'img'
    ) {
      const attrs = new Set(node.attributes.map(getAttrName).filter(Boolean))
      const missing = REQUIRED_ATTRS.filter((attr) => !attrs.has(attr))

      if (missing.length > 0) {
        failures.push({
          filePath,
          line: node.loc?.start?.line || 1,
          missing,
        })
      }
    }
  })
}

if (failures.length === 0) {
  console.log('check-img-attrs: all <img> tags include alt/loading/decoding.')
  process.exit(0)
}

console.error('check-img-attrs: missing required attributes on <img> tags:')
for (const failure of failures) {
  const message = failure.message ? ` (${failure.message})` : ''
  console.error(
    ` - ${failure.filePath}:${failure.line} missing [${failure.missing.join(', ')}]${message}`,
  )
}

process.exit(1)
