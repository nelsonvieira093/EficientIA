import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/animations/variants'
import { Badge } from './Badge'
import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <Badge tone={tone === 'dark' ? 'light' : 'brand'} className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2
        className={cn(
          'text-balance text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]',
          tone === 'dark' ? 'text-white' : 'text-navy-900',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-balance text-lg leading-relaxed', tone === 'dark' ? 'text-slate-300' : 'text-slate-600')}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
