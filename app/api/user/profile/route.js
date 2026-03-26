import { NextResponse } from 'next/server'
const ds = require('../../../../lib/dataStore')

async function resolveUid(req) {
  // Prefer x-user-id header for dev; if Authorization Bearer token and firebase-admin present, verify
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
    } catch (e) {
      // fallthrough
    }
  }
  return null
}

export async function GET(req) {
  const uid = await resolveUid(req)
  if (!uid) return NextResponse.json({error: 'unauthenticated'}, {status:401})
  const profile = await ds.getProfile(uid)
  return NextResponse.json(profile || {})
}

export async function PATCH(req) {
  const uid = await resolveUid(req)
  if (!uid) return NextResponse.json({error: 'unauthenticated'}, {status:401})
  const body = await req.json()
  const allowed = {}
  if (body.displayName !== undefined) allowed.displayName = body.displayName
  if (body.marketingConsent !== undefined) allowed.marketingConsent = !!body.marketingConsent
  const updated = await ds.updateProfile(uid, allowed)
  return NextResponse.json(updated)
}

export async function DELETE(req) {
  const uid = await resolveUid(req)
  if (!uid) return NextResponse.json({error: 'unauthenticated'}, {status:401})
  await ds.deleteAccount(uid)
  return NextResponse.json({ok:true})
}
