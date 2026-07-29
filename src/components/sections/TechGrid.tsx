import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOnce } from '@/animations/variants'
import { TechIcon } from '@/components/shared/TechIcon'
import { TECH_STACK } from '@/constants/tech'

export function TechGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.04)}
      className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5"
    >
      {TECH_STACK.map((tech) => (
        <motion.div
          key={tech.name}
          variants={fadeUp}
          className="flex flex-col items-center gap-3 rounded-2xl border border-navy-100 bg-white px-4 py-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-elevated"
        >
          <TechIcon name={tech.name} icon={tech.icon} color={tech.color} size={32} />
          <span className="text-xs font-semibold text-navy-700">{tech.name}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
