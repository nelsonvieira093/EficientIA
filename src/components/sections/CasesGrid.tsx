import { motion } from 'framer-motion'
import { staggerContainer, viewportOnce } from '@/animations/variants'
import { CaseCard } from './CaseCard'
import type { CaseStudy } from '@/types'

export function CasesGrid({ cases }: { cases: CaseStudy[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.1)}
      className="grid grid-cols-1 gap-6"
    >
      {cases.map((item) => (
        <CaseCard key={item.slug} item={item} />
      ))}
    </motion.div>
  )
}
