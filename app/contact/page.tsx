"use client"
import { useState } from 'react'
import SectionContainer from '../../components/SectionContainer'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', interest: 'Not sure', timeline: 'Exploring' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name) e.name = 'Name is required'
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.message) e.message = 'Tell us about the project'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    console.log('contact submission', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <SectionContainer className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">Thanks — we received your note</h2>
          <p className="mt-4 text-gray-600">We’ll reply within a few days.</p>
        </div>
      </SectionContainer>
    )
  }

  return (
    <SectionContainer className="py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-3 text-gray-600">Use this form to start a conversation — we’ll follow up within a few days.</p>
        <form className="mt-8 grid gap-4" onSubmit={handleSubmit} noValidate>
          <label className="flex flex-col">
            <span className="text-sm font-medium">Name</span>
            <input aria-invalid={!!errors.name} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border border-gray-100 rounded-md p-3 mt-1" />
            {errors.name && <span className="text-xs text-red-600 mt-1">{errors.name}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Email</span>
            <input aria-invalid={!!errors.email} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="border border-gray-100 rounded-md p-3 mt-1" />
            {errors.email && <span className="text-xs text-red-600 mt-1">{errors.email}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Company / Organization</span>
            <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="border border-gray-100 rounded-md p-3 mt-1" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">What are you building?</span>
            <textarea aria-invalid={!!errors.message} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5} className="border border-gray-100 rounded-md p-3 mt-1" />
            {errors.message && <span className="text-xs text-red-600 mt-1">{errors.message}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Engagement interest</span>
            <select value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })} className="border border-gray-100 rounded-md p-3 mt-1">
              <option>Venture Builder</option>
              <option>Product Leadership Partner</option>
              <option>Design Systems</option>
              <option>Regulated Systems</option>
              <option>Not sure</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Timeline</span>
            <select value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })} className="border border-gray-100 rounded-md p-3 mt-1">
              <option>ASAP</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>Exploring</option>
            </select>
          </label>

          <div className="flex gap-3">
            <button type="submit" className="px-5 py-3 bg-accent text-white rounded-md">Submit</button>
            <button type="button" onClick={() => setForm({ name: '', email: '', company: '', message: '', interest: 'Not sure', timeline: 'Exploring' })} className="px-5 py-3 border border-gray-100 rounded-md">Reset</button>
          </div>
        </form>
      </div>
    </SectionContainer>
  )
}
