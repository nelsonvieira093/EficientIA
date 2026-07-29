import { motion } from 'framer-motion'
import { staggerContainer, viewportOnce } from '@/animations/variants'
import { ServiceCard } from './ServiceCard'
import { SERVICES } from '@/constants/services'

interface ServicesGridProps {
  limit?: number
  detailed?: boolean
}

export function ServicesGrid({ limit, detailed = false }: ServicesGridProps) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.08)}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} detailed={detailed} />
      ))}
    </motion.div>
  )
}
