"use client"
import React, {useEffect, useState} from 'react'
import Link from 'next/link'

type ConsentRecord = {
  consentedCategories: string[]
  timestamp: string
}

const STORAGE_KEY = 'learn_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [consent, setConsent] = useState<ConsentRecord | null>(null)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(()=>{
    try{
      const raw = localStorage.getItem(STORAGE_KEY)
      if(raw){
        setConsent(JSON.parse(raw))
      } else {
        setVisible(true)
      }
    }catch(e){
      setVisible(true)
    }
  },[])

  function saveConsent(categories: string[], source='banner'){
    const record: ConsentRecord = {consentedCategories: categories, timestamp: new Date().toISOString()}
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(record)); setConsent(record); setVisible(false); setShowModal(false) }catch(e){}
    // Try to notify server; best-effort, failure should not block UI
    try{
      fetch('/api/user/consent', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({consentedCategories: categories, source})}).catch(()=>{})
    }catch(e){}
  }

  if(!visible && !showModal) return null

  return (
    <div>
      {visible && (
        <div className="fixed left-4 right-4 bottom-4 z-[9999] pointer-events-auto">
          <div className="mx-auto max-w-3xl bg-[#0b1113] border border-black/30 rounded-[8px] shadow-lg p-3 flex items-center justify-between gap-3 text-sm text-white">
            <div className="flex-1 pr-3">
              <div className="font-semibold text-sm">We use cookies to improve your experience</div>
              <div className="mt-1 text-xs text-slate-300">Required cookies enable core features. Optional cookies help us improve the product and measure campaigns. See our <Link href="/privacy" className="underline">Privacy Policy</Link>.</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={()=>{saveConsent(['required']);}} className="px-3 py-1 text-xs border border-white/10 rounded-md bg-transparent text-slate-200">Reject non‑essential</button>
              <button onClick={()=>setShowModal(true)} className="px-3 py-1 text-xs border border-white/10 rounded-md bg-transparent text-slate-200">Manage</button>
              <button onClick={()=>saveConsent(['required','analytics','marketing'])} className="px-3 py-1 text-xs bg-accent text-black rounded-md font-semibold">Accept all</button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[10000]">
          <div className="bg-[#071018] p-5 max-w-xl w-full rounded-lg text-white">
            <h3 className="text-base font-semibold">Cookie preferences</h3>
            <p className="text-xs text-slate-300 mt-2">Choose which cookies we may use. You can change these at any time in your profile.</p>
            <div className="mt-4">
              <div className="mb-3">
                <div className="font-medium">Required (always active)</div>
                <div className="text-xs text-slate-300">Cookies strictly necessary for authentication, security, and core features.</div>
              </div>

              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">Performance & Analytics</div>
                  <div className="text-xs text-slate-300">Helps us understand how the Service is used to improve features and reliability.</div>
                </div>
                <input type="checkbox" className="w-4 h-4" checked={analytics} onChange={(e)=>setAnalytics(e.target.checked)} />
              </div>

              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">Marketing & Product updates</div>
                  <div className="text-xs text-slate-300">Enables product update emails and campaign measurement.</div>
                </div>
                <input type="checkbox" className="w-4 h-4" checked={marketing} onChange={(e)=>setMarketing(e.target.checked)} />
              </div>
            </div>

            <div className="flex justify-end items-center gap-3 mt-4">
              <button onClick={()=>setShowModal(false)} className="px-3 py-1 text-xs border border-white/10 rounded-md">Cancel</button>
              <button onClick={()=>{saveConsent(['required', ...(analytics?['analytics']:[]), ...(marketing?['marketing']:[])])}} className="px-3 py-1 text-xs bg-accent text-black rounded-md font-semibold">Save</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
