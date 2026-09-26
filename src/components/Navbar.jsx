import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import logo from '../images/logo.png'

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

  const base = import.meta.env.BASE_URL
  const links = [
    [base, t('nav.home')],
    [`${base}entreprise.html`, t('nav.entreprise')],
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? 'border-ink/10 bg-paper/90 backdrop-blur-xl'
          : 'border-transparent bg-paper'
      }`}
    >
      <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href={base} className="inline-flex items-center">
          <img
            src={logo}
            alt="KC Trade International"
            className="h-16 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
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
                  lang === l ? 'text-accent' : 'text-ink/40 hover:text-ink/80'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={`${base}#contact`}
            className="group inline-flex items-center gap-1.5 bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-accent-deep"
          >
            {t('nav.cta')}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          className="text-ink lg:hidden"
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
            className="overflow-hidden border-b border-ink/10 bg-paper/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {links.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 font-display text-2xl font-semibold text-ink"
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
                      lang === l ? 'text-accent' : 'text-ink/40'
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
