import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `[Site web] ${form.name}${form.company ? ` — ${form.company}` : ''}`
    )
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.company}\n${form.email}`
    )
    window.location.href = `mailto:contact@kctrade-sa.com?subject=${subject}&body=${body}`
  }

  const info = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'contact@kctrade-sa.com',
      href: 'mailto:contact@kctrade-sa.com',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+237 688 63 60 56 · +237 650 08 32 47',
      href: 'tel:+237688636056',
    },
    {
      icon: MapPin,
      label: t('contact.info.location'),
      value: t('contact.info.locationValue'),
    },
  ]

  const inputCls =
    'w-full border-b border-ink/20 bg-transparent py-3.5 text-[15px] text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-accent'

  return (
    <section id="contact" className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <SectionLabel>{t('contact.label')}</SectionLabel>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                {t('contact.title')}
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
                {t('contact.body')}
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              {info.map((item, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08} className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 text-accent">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/45">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1.5 block font-medium text-ink transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 font-medium">{item.value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <form
              onSubmit={submit}
              className="border border-ink/15 bg-paper p-8 sm:p-10"
            >
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">
                <input
                  required
                  value={form.name}
                  onChange={set('name')}
                  placeholder={t('contact.form.name')}
                  className={inputCls}
                />
                <input
                  value={form.company}
                  onChange={set('company')}
                  placeholder={t('contact.form.company')}
                  className={inputCls}
                />
              </div>
              <input
                required
                type="email"
                value={form.email}
                onChange={set('email')}
                placeholder={t('contact.form.email')}
                className={`${inputCls} mt-2`}
              />
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={set('message')}
                placeholder={t('contact.form.message')}
                className={`${inputCls} mt-2 resize-none`}
              />
              <button
                type="submit"
                className="group mt-10 inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-accent"
              >
                {t('contact.form.submit')}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
