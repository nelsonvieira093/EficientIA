import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/animations/variants'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/ui/Container'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/25 blur-[120px]" />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-2xl"
        >
          <Badge tone="light" className="mb-5">
            {eyebrow}
          </Badge>
          <h1 className="text-balance font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="text-balance mt-5 text-lg leading-relaxed text-slate-300">{description}</p>
          )}
          {children}
        </motion.div>
      </Container>
    </section>
  )
}
