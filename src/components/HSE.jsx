import { Leaf, ShieldCheck, Users } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { useLanguage } from '../i18n/LanguageContext'

const icons = [ShieldCheck, Leaf, Users]

export default function HSE() {
  const { t } = useLanguage()
  const pillars = t('hse.pillars')

  return (
    <section id="hse" className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute left-[-15%] top-1/3 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <SectionLabel dark>{t('hse.label')}</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {t('hse.title')}
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="flex items-end">
            <p className="max-w-md text-lg leading-relaxed text-paper/60">
              {t('hse.body')}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = icons[i]
            return (
              <Reveal
                key={i}
                delay={i * 0.1}
                className="group bg-ink p-8 transition-colors duration-300 hover:bg-ink-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-white/15 text-accent transition-colors duration-300 group-hover:border-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 font-display text-xl font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/55">
                  {p.desc}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
