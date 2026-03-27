'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const roles = [
  'CIO / CTO / CDO',
  'Enterprise Architect',
  'Transformation Leader',
  'Strategy / Operating Model',
  'Risk / Compliance',
  'Product / Innovation',
  'Other Executive',
  'Other',
]

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    role: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<typeof formData>>({})

  const validate = () => {
    const newErrors: Partial<typeof formData> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required.'
    if (!formData.company.trim()) newErrors.company = 'Company is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) newErrors.message = 'A brief message helps us prepare.'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setState('submitting')
    setErrors({})

    // TODO: Replace with your form backend integration.
    // Options: Resend, Formspree, a Next.js API route, or server action.
    // Example API route would POST to /api/contact with formData.
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-slate-deep border border-steel rounded-2xl p-8 lg:p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
          <span className="text-accent text-xl">&#10003;</span>
        </div>
        <h2 className="heading-md mb-3">Thank you.</h2>
        <p className="text-frost leading-relaxed">
          We have received your message and will follow up within one business day.
          We look forward to speaking with you.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-slate-deep border border-steel rounded-2xl p-7 lg:p-9">
      <h2 className="heading-sm mb-6">Request a demo or conversation</h2>

      {state === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">
            Something went wrong. Please try again or email us directly at hello@magnarix.com.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-off-white text-sm font-medium mb-2">
              Full name <span className="text-accent">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className={`w-full bg-midnight border rounded-lg px-4 py-2.5 text-off-white text-sm placeholder:text-frost/40 focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
                errors.name ? 'border-red-500/60' : 'border-steel focus:border-accent'
              }`}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-red-400 text-xs">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-off-white text-sm font-medium mb-2">
              Company <span className="text-accent">*</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Corporation"
              className={`w-full bg-midnight border rounded-lg px-4 py-2.5 text-off-white text-sm placeholder:text-frost/40 focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
                errors.company ? 'border-red-500/60' : 'border-steel focus:border-accent'
              }`}
              aria-describedby={errors.company ? 'company-error' : undefined}
            />
            {errors.company && (
              <p id="company-error" className="mt-1.5 text-red-400 text-xs">{errors.company}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-off-white text-sm font-medium mb-2">
            Work email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={`w-full bg-midnight border rounded-lg px-4 py-2.5 text-off-white text-sm placeholder:text-frost/40 focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
              errors.email ? 'border-red-500/60' : 'border-steel focus:border-accent'
            }`}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-red-400 text-xs">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="role" className="block text-off-white text-sm font-medium mb-2">
            Your role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full bg-midnight border border-steel focus:border-accent rounded-lg px-4 py-2.5 text-off-white text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-colors appearance-none"
          >
            <option value="" className="text-frost/60">Select your role</option>
            {roles.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-off-white text-sm font-medium mb-2">
            What would you like to discuss? <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Briefly describe your organization's context and what you are hoping to explore with MagnaRix."
            className={`w-full bg-midnight border rounded-lg px-4 py-2.5 text-off-white text-sm placeholder:text-frost/40 focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none ${
              errors.message ? 'border-red-500/60' : 'border-steel focus:border-accent'
            }`}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-red-400 text-xs">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={state === 'submitting'}
        >
          {state === 'submitting' ? 'Sending\u2026' : 'Send Message'}
        </Button>

        <p className="text-frost/60 text-xs text-center leading-snug">
          By submitting this form you agree to our{' '}
          <a href="/privacy" className="underline hover:text-frost transition-colors">
            Privacy Policy
          </a>
          . We do not share your information with third parties.
        </p>
      </form>
    </div>
  )
}
