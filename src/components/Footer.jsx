import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import logo from '../images/logo.png'

export default function Footer() {
  const { t } = useLanguage()

  const base = import.meta.env.BASE_URL
  const links = [
    [`${base}entreprise.html`, t('nav.entreprise')],
    [`${base}#products`, t('nav.products')],
    [`${base}#hse`, t('nav.hse')],
    [`${base}#careers`, t('nav.careers')],
    [`${base}#contact`, t('nav.contact')],
  ]

  return (
    <footer className="border-t border-ink/10 bg-paper-soft text-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <img
              src={logo}
              alt="KC Trade International S.A."
              loading="lazy"
              decoding="async"
              className="w-92"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/55">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink/45">
                {t('footer.nav')}
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-sm text-ink/60 transition-colors hover:text-accent"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink/45">
                {t('footer.contact')}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-ink/60">
                <li>
                  <a
                    href="mailto:contact@kctrade-sa.com"
                    className="transition-colors hover:text-accent"
                  >
                    contact@kctrade-sa.com
                  </a>
                </li>
                <li>+237 688 63 60 56</li>
                <li>Akwa, Douala, Cameroun</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink/40">
            © {new Date().getFullYear()} KC Trade International S.A.{' '}
            {t('footer.rights')} · {t('footer.group')}
          </p>
          <a
            href={base}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-accent"
          >
            Top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
