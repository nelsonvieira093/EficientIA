import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp } from '@/animations/variants'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  detailed?: boolean
}

export function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div id={service.slug} variants={fadeUp} className="group h-full scroll-mt-28">
      <Link
        to={`/servicos#${service.slug}`}
        className="relative flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-elevated"
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>

        <h3 className="mb-2 flex items-center justify-between font-display text-lg font-bold text-navy-900">
          {service.title}
          <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-navy-300 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-brand-600 group-hover:opacity-100" />
        </h3>

        <p className="text-sm leading-relaxed text-slate-600">{service.shortDescription}</p>

        {detailed && (
          <ul className="mt-5 space-y-2 border-t border-navy-100 pt-5">
            {service.capabilities.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </Link>
    </motion.div>
  )
}
