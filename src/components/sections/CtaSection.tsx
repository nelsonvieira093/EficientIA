import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, viewportOnce } from '@/animations/variants'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'

interface CtaSectionProps {
  title?: string
  description?: string
}

export function CtaSection({
  title = 'Pronto para transformar sua empresa com tecnologia?',
  description = 'Fale com nosso time e descubra como podemos ajudar sua empresa a crescer, automatizar processos e inovar.',
}: CtaSectionProps) {
  return (
    <Section tone="dark" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-600/30 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="relative mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 text-balance text-lg text-slate-300">{description}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button as="link" to="/contato" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Solicitar orçamento
          </Button>
          <Button as="link" to="/projetos" size="lg" variant="outline-light">
            Conheça nossos projetos
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
