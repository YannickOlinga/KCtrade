import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const links = [
    ['about', t('nav.about')],
    ['products', t('nav.products')],
    ['hse', t('nav.hse')],
    ['careers', t('nav.careers')],
    ['contact', t('nav.contact')],
  ]

  return (
    <footer className="border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-5xl font-bold tracking-tight sm:text-7xl">
              KC<span className="text-accent">.</span>TRADE
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/50">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-paper/40">
                {t('footer.nav')}
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-sm text-paper/60 transition-colors hover:text-accent"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-paper/40">
                {t('footer.contact')}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-paper/60">
                <li>
                  <a
                    href="mailto:contact@kctrade-sa.com"
                    className="transition-colors hover:text-accent"
                  >
                    contact@kctrade-sa.com
                  </a>
                </li>
                <li>+237 688 63 60 56</li>
                <li>Douala — Akwa, Cameroun</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-paper/40">
            © {new Date().getFullYear()} KC Trade International S.A.{' '}
            {t('footer.rights')} — {t('footer.group')}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-paper/50 transition-colors hover:text-accent"
          >
            Top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
