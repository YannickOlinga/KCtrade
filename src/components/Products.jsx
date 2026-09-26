import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { useLanguage } from '../i18n/LanguageContext'
import tanker from '../images/tanker.jpg'

export default function Products() {
  const { t } = useLanguage()
  const items = t('products.items')
  const services = t('products.services')

  return (
    <section id="products" className="bg-paper-soft text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel>{t('products.label')}</SectionLabel>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                {t('products.title')}
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/70">
                {t('products.intro')}
              </p>
              <div className="mt-10 overflow-hidden">
                <img
                  src={tanker}
                  alt={t('products.imgCaption')}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full max-w-sm object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <p className="mt-3 max-w-sm text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/40">
                {t('products.imgCaption')}
              </p>
            </Reveal>
          </div>

          <div className="border-t border-ink/15">
            {items.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group flex items-center gap-6 border-b border-ink/15 py-7 transition-colors hover:bg-paper">
                  <span className="font-display text-sm font-bold text-ink/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-ink/50">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <Reveal className="max-w-2xl">
            <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t('products.servicesTitle')}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              {t('products.servicesIntro')}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal
                key={i}
                delay={i * 0.1}
                className="group bg-paper-soft p-8 transition-colors duration-300 hover:bg-ink"
              >
                <span className="block h-1 w-10 bg-accent transition-all duration-300 group-hover:w-16" />
                <h4 className="mt-6 font-display text-xl font-bold tracking-tight transition-colors group-hover:text-paper">
                  {s.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-paper/60">
                  {s.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
