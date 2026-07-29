import type { ReactNode } from 'react'
import { Container } from './Container'
import { cn } from '@/utils/cn'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
  tone?: 'light' | 'dark' | 'muted'
}

const toneClasses = {
  light: 'bg-white',
  muted: 'bg-slate-50',
  dark: 'bg-navy-900 text-white',
}

export function Section({ id, children, className, containerClassName, tone = 'light' }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 lg:py-28 scroll-mt-20', toneClasses[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
