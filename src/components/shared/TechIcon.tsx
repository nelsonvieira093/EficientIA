import { Cloud, Database, Sparkles, Box, type LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

const FALLBACK_BY_NAME: Record<string, LucideIcon> = {
  AWS: Cloud,
  Azure: Cloud,
  OpenAI: Sparkles,
  'SQL Server': Database,
  '.NET': Box,
}

interface TechIconProps {
  name: string
  icon?: { path: string }
  color: string
  size?: number
  className?: string
}

export function TechIcon({ name, icon, color, size = 28, className }: TechIconProps) {
  if (icon) {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={color}
        className={cn('shrink-0', className)}
      >
        <path d={icon.path} />
      </svg>
    )
  }

  const Fallback = FALLBACK_BY_NAME[name] ?? Sparkles
  return (
    <Fallback
      aria-label={name}
      width={size}
      height={size}
      color={color}
      strokeWidth={1.75}
      className={cn('shrink-0', className)}
    />
  )
}
