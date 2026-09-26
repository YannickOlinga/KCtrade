import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Construction,
  Factory,
  Flame,
  Fuel,
  HeartHandshake,
  TrendingUp,
  Truck,
  Waypoints,
  Wheat,
  Zap,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import { useLanguage } from '../i18n/LanguageContext'
import cover from '../images/coucher.jpg'
import logo from '../images/logo.png'
import vie1 from '../images/vie1.jpeg'
import vie2 from '../images/vie2.jpeg'
import vie3 from '../images/vie3.jpeg'
import vie4 from '../images/vie4.jpeg'

const BASE = import.meta.env.BASE_URL
const missionIcons = [Flame, Waypoints, HeartHandshake, TrendingUp]
const clientIcons = [Factory, Truck, Fuel, Wheat, Zap, Construction]

export default function Entreprise() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main>
        {/* ---------- hero ---------- */}
        <section className="relative overflow-hidden bg-ink">
          <div className="absolute inset-0">
            <img
              src={cover}
              alt=""
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
          </div>

          <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-36 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-paper/50"
            >
              <span className="h-2 w-2 bg-accent" />
              {t('ent.label')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl"
            >
              {t('ent.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/65"
            >
              {t('ent.intro')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
            >
              {t('ent.meta').map((m, i) => (
                <div
                  key={i}
                  className="border-l-2 border-accent pl-3 text-[12px] font-medium uppercase tracking-[0.15em] text-paper/50"
                >
                  {m}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ---------- qui sommes-nous ---------- */}
        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
            <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
              <Reveal>
                <SectionLabel>{t('ent.about.label')}</SectionLabel>
                <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                  {t('ent.about.title')}
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-ink/70">
                  {t('ent.about.body')}
                </p>
                <p className="mt-5 text-lg leading-relaxed text-ink/70">
                  {t('ent.about.body2')}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="border border-ink/10 bg-white p-8 sm:p-10">
                  <img
                    src={logo}
                    alt="KC Trade International S.A."
                    loading="lazy"
                    decoding="async"
                    className="w-56"
                  />
                  <div className="mt-8 border-t border-ink/10">
                    {t('ent.about.facts').map((f, i) => (
                      <div
                        key={i}
                        className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4"
                      >
                        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/45">
                          {f.k}
                        </span>
                        <span className="text-right text-sm font-medium">
                          {f.v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- missions ---------- */}
        <section className="bg-paper-soft text-ink">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <Reveal className="max-w-3xl">
              <SectionLabel>{t('ent.missions.label')}</SectionLabel>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                {t('ent.missions.title')}
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {t('ent.missions.items').map((m, i) => {
                const Icon = missionIcons[i]
                return (
                  <Reveal
                    key={i}
                    delay={i * 0.1}
                    className="group bg-paper-soft p-8 transition-colors duration-300 hover:bg-ink"
                  >
                    <Icon
                      className={`h-6 w-6 ${i % 2 ? 'text-flame' : 'text-accent'}`}
                    />
                    <span className="mt-8 block font-display text-sm font-bold text-ink/30 transition-colors group-hover:text-paper/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight transition-colors group-hover:text-paper">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-paper/60">
                      {m.desc}
                    </p>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ---------- clients ---------- */}
        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <Reveal>
                <SectionLabel>{t('ent.clients.label')}</SectionLabel>
                <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                  {t('ent.clients.title')}
                </h2>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/70">
                  {t('ent.clients.body')}
                </p>
              </Reveal>

              <div className="grid gap-px self-start overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
                {t('ent.clients.items').map((c, i) => {
                  const Icon = clientIcons[i]
                  return (
                    <Reveal
                      key={i}
                      delay={i * 0.06}
                      className="group bg-paper p-7 transition-colors duration-300 hover:bg-ink"
                    >
                      <Icon className="h-5 w-5 text-accent" />
                      <h3 className="mt-5 font-display text-lg font-bold tracking-tight transition-colors group-hover:text-paper">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-paper/60">
                        {c.desc}
                      </p>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- vie de l'entreprise ---------- */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div
            className="pointer-events-none absolute right-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <Reveal>
                <SectionLabel dark>{t('ent.life.label')}</SectionLabel>
                <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                  {t('ent.life.title')}
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="max-w-md text-lg leading-relaxed text-paper/60 lg:justify-self-end">
                  {t('ent.life.body')}
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:grid-cols-4 lg:auto-rows-[240px]">
              {[
                { src: vie1, cls: 'col-span-2 lg:row-span-2' },
                { src: vie2, cls: '' },
                { src: vie3, cls: '' },
                { src: vie4, cls: '' },
              ].map((p, i) => (
                <Reveal
                  key={i}
                  delay={i * 0.08}
                  className={`group relative overflow-hidden ${p.cls}`}
                >
                  <img
                    src={p.src}
                    alt={t('ent.life.captions')[i]}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="absolute bottom-4 left-4 translate-y-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {t('ent.life.captions')[i]}
                  </p>
                </Reveal>
              ))}
              <Reveal
                delay={0.35}
                className="flex items-center justify-center bg-accent p-8"
              >
                <p className="font-display text-xl font-bold leading-snug text-ink">
                  {t('ent.life.quote')}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <Reveal className="flex flex-col items-start justify-between gap-8 border border-ink/10 p-10 sm:p-14 lg:flex-row lg:items-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t('ent.cta.title')}
              </h2>
              <a
                href={`${BASE}#contact`}
                className="group inline-flex shrink-0 items-center gap-3 bg-ink px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-accent"
              >
                {t('ent.cta.button')}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
