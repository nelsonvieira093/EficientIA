import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOnce } from '@/animations/variants'
import { DIFFERENTIALS } from '@/constants/differentials'
import { cn } from '@/utils/cn'

export function DifferentialsGrid({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.06)}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {DIFFERENTIALS.map((item) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className={cn(
              'rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1',
              tone === 'dark'
                ? 'border-white/10 bg-white/5 hover:bg-white/10'
                : 'border-navy-100 bg-white shadow-soft hover:shadow-elevated',
            )}
          >
            <Icon className={cn('mb-4 h-7 w-7', tone === 'dark' ? 'text-brand-400' : 'text-brand-600')} strokeWidth={1.5} />
            <h3 className={cn('mb-2 font-display text-base font-bold', tone === 'dark' ? 'text-white' : 'text-navy-900')}>
              {item.title}
            </h3>
            <p className={cn('text-sm leading-relaxed', tone === 'dark' ? 'text-slate-300' : 'text-slate-600')}>
              {item.description}
            </p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
