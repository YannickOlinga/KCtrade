import { useLanguage } from '../i18n/LanguageContext'

export default function Marquee() {
  const { t } = useLanguage()
  const items = t('marquee')
  const row = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-ink/10 bg-accent py-4">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-display text-xl font-bold uppercase tracking-tight text-paper">
              {item}
            </span>
            <span className="h-2 w-2 rotate-45 bg-paper" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  )
}
