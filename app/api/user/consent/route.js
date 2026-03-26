import { NextResponse } from 'next/server'
const ds = require('../../../../lib/dataStore')

export async function POST(req) {
  try {
    const body = await req.json()
    // Expect {consentedCategories: [...], source?, uid?}
    const categories = body.consentedCategories || []
    const source = body.source || 'banner'
    const uid = body.uid || req.headers.get('x-user-id') || `anon_${req.headers.get('x-forwarded-for')||'unknown'}`
    const record = {consentedCategories: categories, timestamp: new Date().toISOString(), source}
    await ds.saveConsent(uid, record)
    return NextResponse.json({ok:true, record})
  } catch (e) {
    return NextResponse.json({error: e.message}, {status:500})
  }
}

export async function GET(req){
  const uid = req.headers.get('x-user-id') || `anon_${req.headers.get('x-forwarded-for')||'unknown'}`
  const rec = await ds.getConsent(uid)
  return NextResponse.json(rec || {})
}
