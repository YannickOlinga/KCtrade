import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['about', t('nav.about')],
    ['products', t('nav.products')],
    ['hse', t('nav.hse')],
    ['careers', t('nav.careers')],
    ['contact', t('nav.contact')],
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-paper"
        >
          KC<span className="text-accent">.</span>TRADE
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-[13px] font-medium text-paper/70 transition-colors hover:text-paper"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-1 text-[12px] font-semibold">
            {['fr', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-1.5 py-0.5 uppercase transition-colors ${
                  lang === l ? 'text-accent' : 'text-paper/40 hover:text-paper/80'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-accent-deep"
          >
            {t('nav.cta')}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          className="text-paper lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {links.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="py-2.5 font-display text-2xl font-semibold text-paper"
                >
                  {label}
                </a>
              ))}
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                {['fr', 'en'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2 py-1 uppercase ${
                      lang === l ? 'text-accent' : 'text-paper/40'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
