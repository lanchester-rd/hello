const fs = require('fs')
const path = require('path')

let admin
let db
try {
  admin = require('firebase-admin')
  if (!admin.apps.length) {
    // Initialize if credentials available; rely on ADC or env
    try {
      admin.initializeApp()
    } catch (e) {
      // ignore init errors here
    }
  }
  db = admin.firestore()
} catch (e) {
  // firebase-admin not available — fall back to file storage
  admin = null
}

const FILE_PATH = '/tmp/lean_learn_data.json'

function readFileStore() {
  try {
    if (!fs.existsSync(FILE_PATH)) return {profiles:{}, consents:{}, exports:{}}
    const raw = fs.readFileSync(FILE_PATH, 'utf8')
    return JSON.parse(raw || '{}')
  } catch (e) {
    return {profiles:{}, consents:{}, exports:{}}
  }
}

function writeFileStore(obj) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(obj, null, 2))
}

async function getProfile(uid) {
  if (db) {
    const doc = await db.collection('users').doc(uid).get()
    return doc.exists ? doc.data() : null
  }
  const store = readFileStore()
  return store.profiles[uid] || null
}

async function updateProfile(uid, data) {
  if (db) {
    await db.collection('users').doc(uid).set(data, {merge:true})
    return await getProfile(uid)
  }
  const store = readFileStore()
  store.profiles = store.profiles || {}
  store.profiles[uid] = Object.assign(store.profiles[uid] || {}, data)
  writeFileStore(store)
  return store.profiles[uid]
}

async function saveConsent(uidOrAnon, record) {
  if (db) {
    await db.collection('cookie_consents').doc(uidOrAnon).set(record)
    return record
  }
  const store = readFileStore()
  store.consents = store.consents || {}
  store.consents[uidOrAnon] = record
  writeFileStore(store)
  return record
}

async function getConsent(uidOrAnon) {
  if (db) {
    const doc = await db.collection('cookie_consents').doc(uidOrAnon).get()
    return doc.exists ? doc.data() : null
  }
  const store = readFileStore()
  return (store.consents || {})[uidOrAnon] || null
}

async function requestExport(uid) {
  // Create a simple export file in /tmp and return path
  const profile = await getProfile(uid)
  const consent = await getConsent(uid)
  const out = {profile, consent, exportedAt: new Date().toISOString()}
  const filename = `/tmp/lean_learn_export_${uid}_${Date.now()}.json`
  fs.writeFileSync(filename, JSON.stringify(out, null, 2))
  if (db) {
    await db.collection('exports').add({uid, filename, createdAt: new Date().toISOString()})
  } else {
    const store = readFileStore(); store.exports = store.exports || {}; store.exports[uid] = filename; writeFileStore(store)
  }
  return filename
}

async function deleteAccount(uid) {
  if (db) {
    await db.collection('users').doc(uid).delete()
    await db.collection('cookie_consents').doc(uid).delete()
    return true
  }
  const store = readFileStore()
  if (store.profiles && store.profiles[uid]) delete store.profiles[uid]
  if (store.consents && store.consents[uid]) delete store.consents[uid]
  writeFileStore(store)
  return true
}

module.exports = { getProfile, updateProfile, saveConsent, getConsent, requestExport, deleteAccount }
