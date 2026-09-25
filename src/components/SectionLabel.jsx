export default function SectionLabel({ children, dark = false }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em]">
      <span className="h-2 w-2 bg-accent" />
      <span className={dark ? 'text-paper/60' : 'text-ink/60'}>{children}</span>
    </div>
  )
}
