import type { LucideIcon } from 'lucide-react'
import { hashString } from '@/utils/hash'
import { cn } from '@/utils/cn'

interface MediaPlaceholderProps {
  seed: string
  icon?: LucideIcon
  label?: string
  className?: string
  iconClassName?: string
}

const GRADIENTS = [
  'from-brand-600 via-brand-700 to-navy-900',
  'from-navy-800 via-brand-700 to-brand-500',
  'from-navy-900 via-navy-700 to-brand-600',
  'from-brand-700 via-navy-800 to-navy-950',
  'from-brand-500 via-brand-800 to-navy-900',
]

/**
 * Deterministic gradient "artwork" used in place of real photography for
 * fictional demo content — swap for a real <img> once assets exist.
 */
export function MediaPlaceholder({ seed, icon: Icon, label, className, iconClassName }: MediaPlaceholderProps) {
  const gradient = GRADIENTS[hashString(seed) % GRADIENTS.length]

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-gradient-to-br',
        gradient,
        className,
      )}
      role="img"
      aria-label={label ?? seed}
    >
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="bg-noise absolute inset-0" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-black/20 blur-3xl" />
      {Icon && <Icon className={cn('relative h-14 w-14 text-white/25', iconClassName)} strokeWidth={1.25} />}
      {label && (
        <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  )
}
