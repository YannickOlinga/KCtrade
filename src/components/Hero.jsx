import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const lines = t('hero.lines')
  const accentLine = t('hero.accentLine')
  const meta = t('hero.meta')

  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-accent/20 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-paper/50"
        >
          <span className="h-2 w-2 bg-accent" />
          {t('hero.eyebrow')}
        </motion.div>

        <h1 className="font-display text-[13vw] font-bold leading-[0.92] tracking-tight text-paper sm:text-[11vw] lg:text-[7.5rem]">
          {lines.map((line, i) => (
            <motion.span
              key={i}
              className="block"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {i === accentLine ? (
                <span className="text-accent">{line}</span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-base leading-relaxed text-paper/60 sm:text-lg">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-2 bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-white"
              >
                {t('hero.ctaPrimary')}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end"
          >
            {meta.map((m, i) => (
              <div
                key={i}
                className="border-l-2 border-accent pl-3 text-[12px] font-medium uppercase tracking-[0.15em] text-paper/50"
              >
                {m}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <ArrowDown className="h-4 w-4 animate-bounce text-paper/30" />
        </motion.div>
      </div>
    </section>
  )
}
