import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOnce } from '@/animations/variants'
import { useCountUp } from '@/hooks/useCountUp'
import { STATS } from '@/constants/stats'
import { cn } from '@/utils/cn'
import type { Stat } from '@/types'

function StatItem({ stat, tone }: { stat: Stat; tone: 'light' | 'dark' }) {
  const { ref, value } = useCountUp(stat.value)

  return (
    <motion.div variants={fadeUp} className="text-center">
      <p
        ref={ref as never}
        className={cn(
          'font-display text-4xl font-extrabold tabular-nums sm:text-5xl',
          tone === 'dark' ? 'text-white' : 'text-navy-900',
        )}
      >
        {value}
        <span className="text-brand-500">{stat.suffix}</span>
      </p>
      <p className={cn('mt-2 text-sm font-medium', tone === 'dark' ? 'text-slate-300' : 'text-slate-500')}>
        {stat.label}
      </p>
    </motion.div>
  )
}

export function StatsSection({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.1)}
      className="grid grid-cols-2 gap-8 lg:grid-cols-4"
    >
      {STATS.map((stat) => (
        <StatItem key={stat.label} stat={stat} tone={tone} />
      ))}
    </motion.div>
  )
}
