import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { useLanguage } from '../i18n/LanguageContext'
import depot from '../images/depot.jpg'

export default function About() {
  const { t } = useLanguage()
  const values = t('about.values')

  return (
    <section id="about" className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel>{t('about.label')}</SectionLabel>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                {t('about.title')}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="flex flex-col justify-end gap-6">
            <p className="text-lg leading-relaxed text-ink/70">
              {t('about.body')}
            </p>
            <p className="text-lg leading-relaxed text-ink/70">
              {t('about.body2')}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <div className="overflow-hidden">
            <img
              src={depot}
              alt={t('about.imgCaption')}
              loading="lazy"
              decoding="async"
              className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:h-[400px] lg:h-[480px]"
            />
          </div>
          <p className="mt-3 text-right text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/40">
            {t('about.imgCaption')}
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal
              key={i}
              delay={i * 0.1}
              className="group relative bg-paper p-8 transition-colors duration-300 hover:bg-ink"
            >
              <span
                className={`font-display text-sm font-bold ${
                  i % 2 ? 'text-flame' : 'text-accent'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight transition-colors group-hover:text-paper">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-paper/60">
                {v.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
