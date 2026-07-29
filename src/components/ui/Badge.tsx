import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps {
  children: ReactNode
  className?: string
  tone?: 'brand' | 'navy' | 'light'
}

const tones = {
  brand: 'bg-brand-50 text-brand-700 border-brand-100',
  navy: 'bg-navy-900/5 text-navy-800 border-navy-900/10',
  light: 'bg-white/10 text-white border-white/20',
}

export function Badge({ children, className, tone = 'brand' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
