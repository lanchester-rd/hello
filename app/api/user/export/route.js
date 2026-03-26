import { NextResponse } from 'next/server'
const ds = require('../../../../lib/dataStore')

async function resolveUid(req) {
  const hdr = req.headers.get('x-user-id')
  if (hdr) return hdr
  const auth = req.headers.get('authorization')
  if (auth && auth.startsWith('Bearer ')) {
    const token = auth.slice('Bearer '.length)
    try {
      const admin = require('firebase-admin')
      if (admin && admin.auth) {
        const decoded = await admin.auth().verifyIdToken(token)
        return decoded.uid
      }
    } catch (e) {}
  }
  return null
}

export async function POST(req) {
  const uid = await resolveUid(req)
  if (!uid) return NextResponse.json({error: 'unauthenticated'}, {status:401})
  const filename = await ds.requestExport(uid)
  // For security we don't return file contents; return 202 Accepted and filename path for dev
  return NextResponse.json({ok:true, filename, message: 'Export created; you will be notified when ready'})
}
