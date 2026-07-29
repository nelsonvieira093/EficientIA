import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, BrainCircuit, LineChart, Code2, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/ui/Container'

const floatingCards = [
  { icon: Code2, label: 'Deploy concluído', sub: 'API v2.4 em produção', className: 'left-0 top-6', delay: 0.6 },
  { icon: BrainCircuit, label: 'Agente de IA', sub: '128 atendimentos hoje', className: 'right-0 top-32', delay: 0.9 },
  { icon: LineChart, label: 'Performance', sub: '+34% este trimestre', className: 'left-4 bottom-4', delay: 1.2 },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-brand-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-40 h-[420px] w-[420px] rounded-full bg-brand-400/20 blur-[120px]" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge tone="light">
              <Sparkles className="h-3.5 w-3.5" />
              Software, dados e IA sob um mesmo teto
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance mt-6 font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          >
            Tecnologia que <span className="text-brand-400">impulsiona</span> empresas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            Desenvolvemos soluções digitais inteligentes para empresas que desejam crescer,
            automatizar processos e inovar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button as="link" to="/contato" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Solicitar orçamento
            </Button>
            <Button as="link" to="/projetos" size="lg" variant="outline-light">
              Conheça nossos projetos
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex items-center gap-2 text-sm text-slate-400"
          >
            <ShieldCheck className="h-4 w-4 text-brand-400" />
            Projetos entregues com arquitetura segura e escalável desde o primeiro dia.
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          <div className="glass-dark absolute inset-8 rounded-[2rem]" />
          <div className="absolute inset-16 rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/30 via-navy-800/40 to-transparent" />

          {floatingCards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: card.delay },
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: card.delay },
                }}
                className={`glass absolute w-56 rounded-2xl p-4 shadow-elevated ${card.className}`}
              >
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </div>
                <p className="text-sm font-bold text-navy-900">{card.label}</p>
                <p className="text-xs text-slate-500">{card.sub}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
