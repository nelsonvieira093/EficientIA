import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOnce } from '@/animations/variants'
import { PROCESS_STEPS } from '@/constants/process'

export function ProcessTimeline() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.1)}
      className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
    >
      <div className="pointer-events-none absolute inset-x-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent lg:block" />
      {PROCESS_STEPS.map((step) => {
        const Icon = step.icon
        return (
          <motion.div key={step.step} variants={fadeUp} className="relative flex flex-col items-start">
            <div className="relative z-10 mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-navy-100 bg-white shadow-soft">
              <Icon className="h-8 w-8 text-brand-600" strokeWidth={1.5} />
              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-navy-900 font-display text-xs font-bold text-white">
                {step.step}
              </span>
            </div>
            <h3 className="mb-2 font-display text-lg font-bold text-navy-900">{step.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
