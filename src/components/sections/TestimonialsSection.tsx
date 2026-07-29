import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { staggerContainer, fadeUp, viewportOnce } from '@/animations/variants'
import { TESTIMONIALS } from '@/constants/testimonials'

export function TestimonialsSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.08)}
      className="grid grid-cols-1 gap-6 md:grid-cols-2"
    >
      {TESTIMONIALS.map((testimonial) => (
        <motion.figure
          key={testimonial.name}
          variants={fadeUp}
          className="flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-soft"
        >
          <Quote className="mb-4 h-7 w-7 text-brand-300" fill="currentColor" strokeWidth={0} />
          <blockquote className="mb-6 flex-1 text-[15px] leading-relaxed text-slate-700">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="flex items-center gap-3 border-t border-navy-100 pt-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
              {testimonial.avatar}
            </div>
            <div>
              <p className="text-sm font-bold text-navy-900">{testimonial.name}</p>
              <p className="text-xs text-slate-500">
                {testimonial.role} · {testimonial.company}
              </p>
            </div>
          </figcaption>
        </motion.figure>
      ))}
    </motion.div>
  )
}
