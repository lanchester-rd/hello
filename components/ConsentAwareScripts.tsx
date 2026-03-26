"use client"
import React, {useEffect} from 'react'

const STORAGE_KEY = 'learn_consent'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''
const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID || ''

function loadScript(src: string, attrs: Record<string,string> = {}){
  return new Promise((resolve, reject)=>{
    if(document.querySelector(`script[src="${src}"]`)) return resolve(null)
    const s = document.createElement('script')
    s.src = src
    s.async = true
    Object.entries(attrs).forEach(([k,v])=>s.setAttribute(k,v))
    s.onload = ()=>resolve(null)
    s.onerror = (e)=>reject(e)
    document.head.appendChild(s)
  })
}

export default function ConsentAwareScripts(){
  useEffect(()=>{
    try{
      const raw = localStorage.getItem(STORAGE_KEY)
      if(!raw) return
      const rec = JSON.parse(raw)
      const cats = rec.consentedCategories || []
      if(cats.includes('analytics')){
        if(GA_ID){
          loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`).catch(()=>{})
          try{
            (window as any).dataLayer = (window as any).dataLayer || []
            function gtag(...args: any[]){(window as any).dataLayer.push(args)}
            ;(window as any).gtag = gtag
            gtag('js', new Date())
            gtag('config', GA_ID, {anonymize_ip: true})
          }catch(e){}
        }

        // Hotjar is treated as analytics here; load if provided
        if(HOTJAR_ID){
          try{
            if(!(window as any)._hjSettings){
              (window as any)._hjSettings = {hjid: Number(HOTJAR_ID), hjsv: 6}
            }
            const script = document.createElement('script')
            script.async = true
            script.innerHTML = `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
            document.head.appendChild(script)
          }catch(e){}
        }
      }
      if(cats.includes('marketing')){
        // Placeholder for marketing scripts (pixels, A/B testing)
        // Add conditional loaders here and guard with NEXT_PUBLIC_* IDs
      }
    }catch(e){}
  },[])
  return null
}
