"use client"
import React, {useEffect, useState} from 'react'
import CookieBanner from '../../components/CookieBanner'

export default function ProfilePage(){
  const [profile, setProfile] = useState<any>(null)
  const [name, setName] = useState('')
  const [marketing, setMarketing] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    async function load(){
      try{
        const res = await fetch('/api/user/profile')
        if(res.ok){ const j = await res.json(); setProfile(j); setName(j.displayName||''); setMarketing(!!j.marketingConsent) }
      }catch(e){}
    }
    load()
  },[])

  async function save(){
    setLoading(true)
    try{
      await fetch('/api/user/profile', {method:'PATCH', headers:{'Content-Type':'application/json'}, body: JSON.stringify({displayName: name, marketingConsent: marketing})})
      setLoading(false)
      alert('Profile updated')
    }catch(e){ setLoading(false); alert('Failed') }
  }

  async function exportData(){
    setLoading(true)
    try{
      await fetch('/api/user/export', {method:'POST'})
      alert('Export requested — we will email you when ready')
    }catch(e){ alert('Failed to request export') }
    setLoading(false)
  }

  async function deleteAccount(){
    if(!confirm('Delete your account? This will remove personal data per our Privacy Policy. This action cannot be undone.')) return
    setLoading(true)
    try{
      await fetch('/api/user', {method:'DELETE'})
      alert('Account deletion requested')
    }catch(e){ alert('Failed') }
    setLoading(false)
  }

  return (
    <main style={{padding: '2rem', maxWidth: 900, margin: '0 auto'}}>
      <CookieBanner />
      <h1>Your profile</h1>
      {profile === null ? <p>Loading...</p> : (
        <section>
          <div style={{marginBottom:12}}>
            <label style={{display:'block',fontSize:13}}>Name</label>
            <input value={name} onChange={e=>setName(e.target.value)} style={{padding:8,width:'100%'}} />
          </div>
          <div style={{marginBottom:12}}>
            <label style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <span>Receive product update emails</span>
              <input type="checkbox" checked={marketing} onChange={e=>setMarketing(e.target.checked)} />
            </label>
          </div>
          <div style={{display:'flex',gap:8}}>
            <button onClick={save} disabled={loading} style={{padding:'8px 12px'}}>Save</button>
            <button onClick={exportData} disabled={loading} style={{padding:'8px 12px'}}>Export my data</button>
            <button onClick={deleteAccount} disabled={loading} style={{padding:'8px 12px',background:'#fff',border:'1px solid #f44336',color:'#f44336'}}>Delete account</button>
          </div>
        </section>
      )}
    </main>
  )
}
