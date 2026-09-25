import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function Careers() {
  const { t } = useLanguage()

  return (
    <section id="careers" className="bg-accent text-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink/60">
              {t('careers.label')}
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              {t('careers.title')}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
              {t('careers.body')}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:justify-self-end">
            <a
              href="mailto:contact@kctrade-sa.com"
              className="group inline-flex items-center gap-3 bg-ink px-8 py-5 font-display text-base font-bold text-paper transition-transform duration-300 hover:-translate-y-1"
            >
              {t('careers.cta')}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
