export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

import { NextRequest } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const LOG_DIR = path.join(process.cwd(), 'data')
const LOG_FILE = path.join(LOG_DIR, 'consent_logs.ndjson')

async function ensureDir(){
  try{ await fs.mkdir(LOG_DIR, { recursive: true }) }catch(e){}
}

export async function POST(req: NextRequest){
  try{
    const body = await req.json()
    const record = { ...body, receivedAt: new Date().toISOString() }
    await ensureDir()
    await fs.appendFile(LOG_FILE, JSON.stringify(record) + '\n')
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }catch(e:any){
    return new Response(JSON.stringify({ ok: false, error: (e && e.message) || String(e) }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}

export async function GET(){
  try{
    const exists = await fs.stat(LOG_FILE).then(()=>true).catch(()=>false)
    if(!exists) return new Response(JSON.stringify({ ok: true, count: 0 }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    const content = await fs.readFile(LOG_FILE, 'utf-8')
    const lines = content.split('\n').filter(Boolean)
    return new Response(JSON.stringify({ ok: true, count: lines.length }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }catch(e:any){
    return new Response(JSON.stringify({ ok: false, error: (e && e.message) || String(e) }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}
