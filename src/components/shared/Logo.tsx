import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

interface LogoProps {
  className?: string
  dark?: boolean
}

export function Logo({ className, dark }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="EficientIA — página inicial"
      className={cn('flex items-center gap-2.5 font-display text-xl font-bold tracking-tight', className)}
    >
      <img src="/logo-mark.png" alt="" aria-hidden="true" width="34" height="31" className="h-8 w-auto shrink-0" />
      <span className={dark ? 'text-white' : 'text-navy-900'}>
        Eficient<span className="text-brand-600">IA</span>
      </span>
    </Link>
  )
}
