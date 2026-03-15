import { cn } from '@/lib/cn';
export function Panel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('panel', className)} {...props} />;
}
export function Pill({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'warn' | 'danger' | 'success' }) {
  const tones = {
    neutral: 'border-slate-700 bg-slate-900 text-slate-200',
    warn: 'border-amber-500/20 bg-amber-500/10 text-amber-200',
    danger: 'border-red-500/20 bg-red-500/10 text-red-200',
    success: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-200'
  } as const;
  return <span className={cn('inline-flex rounded-full border px-3 py-1 text-xs font-medium', tones[tone])}>{children}</span>;
}
export function SectionHeading({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return <div className="max-w-3xl"><p className="kicker">{kicker}</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">{title}</h2><p className="mt-3 text-base leading-7 text-slate-300">{description}</p></div>;
}
