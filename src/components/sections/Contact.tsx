import React, { useState } from 'react'
import { SectionLabel } from '../ui/SectionLabel'
import { Icons } from '../ui/Icons'

interface FormState {
  firstName: string
  lastName:  string
  email:     string
  subject:   string
  message:   string
}

const contactItems = [
  { icon: <Icons.Mail />,      label: 'Email',    value: 'gwyneth.veniegas@email.com' },
  { icon: <Icons.Phone />,     label: 'Phone',    value: '+63 917 XXX XXXX' },
  { icon: <Icons.Location />,  label: 'Location', value: 'Metro Manila, Philippines' },
]

const socials = [
  { title: 'LinkedIn', icon: <Icons.LinkedIn /> },
  { title: 'Email',    icon: <Icons.Mail /> },
  { title: 'Resume',   icon: <Icons.FileText /> },
  { title: 'GitHub',   icon: <Icons.GitHub /> },
]

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', email: '', subject: '', message: '',
  })

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    alert('Message sent! (demo)')
  }

  const inputClass = [
    'w-full px-[.95rem] py-[.75rem]',
    'bg-white/6 border border-white/10 rounded-[4px]',
    'font-outfit text-[.86rem] text-white outline-none',
    'transition-all duration-300',
    'placeholder:text-white/23',
    'focus:border-[rgba(200,168,75,.6)] focus:bg-white/8 focus:shadow-[0_0_0_3px_rgba(200,168,75,.12)]',
  ].join(' ')

  return (
    <section id="contact" className="bg-navy relative overflow-hidden">
      {/* Geo bg */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_70%_at_80%_50%,rgba(200,168,75,.07)_0%,transparent_65%),radial-gradient(ellipse_50%_60%_at_10%_80%,rgba(255,255,255,.03)_0%,transparent_60%)]" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 relative z-[1]">
        <SectionLabel>06 — Get In Touch</SectionLabel>
        <h2 className="rv font-playfair text-[clamp(2rem,4vw,3.1rem)] font-bold text-white leading-[1.12] tracking-tight mb-2"
          style={{ transitionDelay: '.08s' }}>
          Let&apos;s <em className="not-italic text-gold2">Connect</em>
        </h2>
        <p className="rv text-[.98rem] font-light text-white/42 max-w-[480px] leading-[1.7] mb-14"
          style={{ transitionDelay: '.16s' }}>
          Open to full-time roles, internships, and professional conversations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-24">
          {/* Left info */}
          <div className="rvl flex flex-col gap-8">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-[41px] h-[41px] rounded-[5px] flex-shrink-0 bg-white/6 border border-white/10 flex items-center justify-center [&>span>svg]:w-4 [&>span>svg]:h-4 [&>span>svg]:stroke-white/58 [&>span>svg]:fill-none [&>span>svg]:[stroke-width:1.8]">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[.66rem] uppercase tracking-[.14em] text-white/30 mb-[.18rem]">{item.label}</div>
                  <div className="text-[.88rem] text-white/75">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Socials */}
            <div>
              <div className="text-[.66rem] uppercase tracking-[.14em] text-white/30 mb-3.5">
                Follow &amp; Connect
              </div>
              <div className="flex gap-[.65rem]">
                {socials.map((s) => (
                  <a
                    key={s.title}
                    href="#"
                    title={s.title}
                    className="soc w-[41px] h-[41px] rounded-[5px] bg-white/6 border border-white/10 flex items-center justify-center no-underline text-white/50 transition-all duration-300 hover:bg-gold hover:text-navy hover:border-gold hover:-translate-y-[3px] hover:scale-105 [&>span>svg]:w-3.5 [&>span>svg]:h-3.5"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="rvr bg-white/5 border border-white/10 rounded-[14px] p-[2.6rem] backdrop-blur-xl">
            <div className="font-playfair text-[1.45rem] font-bold text-white mb-7">
              Send a Message
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[1.1rem]">
              <div>
                <label className="block text-[.68rem] uppercase tracking-[.12em] text-white/38 font-medium mb-[.45rem]">First Name</label>
                <input className={inputClass} placeholder="John" value={form.firstName} onChange={set('firstName')} />
              </div>
              <div>
                <label className="block text-[.68rem] uppercase tracking-[.12em] text-white/38 font-medium mb-[.45rem]">Last Name</label>
                <input className={inputClass} placeholder="Smith" value={form.lastName} onChange={set('lastName')} />
              </div>
            </div>

            <div className="mb-[1.1rem]">
              <label className="block text-[.68rem] uppercase tracking-[.12em] text-white/38 font-medium mb-[.45rem]">Email Address</label>
              <input type="email" className={inputClass} placeholder="john.smith@company.com" value={form.email} onChange={set('email')} />
            </div>

            <div className="mb-[1.1rem]">
              <label className="block text-[.68rem] uppercase tracking-[.12em] text-white/38 font-medium mb-[.45rem]">Subject</label>
              <input className={inputClass} placeholder="Job Opportunity / Inquiry" value={form.subject} onChange={set('subject')} />
            </div>

            <div className="mb-[1.1rem]">
              <label className="block text-[.68rem] uppercase tracking-[.12em] text-white/38 font-medium mb-[.45rem]">Message</label>
              <textarea
                className={`${inputClass} resize-y min-h-[118px]`}
                placeholder="Hello Gwyneth, I came across your portfolio and would like to discuss..."
                value={form.message}
                onChange={set('message')}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-[.55rem] px-[2.1rem] py-[.88rem] bg-gradient-to-br from-gold to-gold2 text-navy font-bold text-[.78rem] uppercase tracking-[.1em] rounded-sm cursor-none transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_14px_36px_rgba(200,168,75,.42)] shadow-[0_6px_24px_rgba(200,168,75,.32)]"
            >
              <Icons.Send />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
