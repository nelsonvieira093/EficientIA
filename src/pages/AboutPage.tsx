import { motion } from 'framer-motion'
import { fadeUp, slideInLeft, slideInRight, viewportOnce, staggerContainer } from '@/animations/variants'
import { PageHeader } from '@/components/sections/PageHeader'
import { StatsSection } from '@/components/sections/StatsSection'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { CtaSection } from '@/components/sections/CtaSection'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Seo } from '@/components/shared/Seo'
import { MediaPlaceholder } from '@/components/shared/MediaPlaceholder'
import { MISSION_VISION, VALUES } from '@/constants/about'
import { SITE } from '@/constants/site'
import { Building2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Sobre a EficientIA"
        description="Conheça a história, missão, visão e valores da EficientIA — uma empresa de tecnologia focada em desenvolvimento de software, dados e inteligência artificial."
        path="/sobre"
      />

      <PageHeader
        eyebrow="Quem somos"
        title="Tecnologia com propósito, feita por gente que entende de negócio"
        description="A EficientIA nasceu para simplificar processos e acelerar o crescimento de empresas por meio de software bem construído."
      />

      <Section tone="light">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={slideInLeft}>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">Nossa história</span>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              De uma equipe enxuta a um parceiro estratégico de tecnologia
            </h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                A {SITE.name} nasceu com o propósito de desenvolver soluções tecnológicas que simplificam
                processos e aceleram o crescimento das empresas. Começamos atendendo pequenas operações que
                precisavam sair das planilhas — hoje desenvolvemos sistemas críticos para empresas de médio
                e grande porte em diversos setores.
              </p>
              <p>
                Nossa equipe combina experiência em desenvolvimento de software, arquitetura de sistemas e
                inteligência artificial para entregar produtos modernos, seguros e escaláveis. Cada projeto
                começa com uma pergunta simples: qual problema de negócio estamos realmente resolvendo?
              </p>
              <p>
                Esse jeito de trabalhar — técnico, mas orientado a resultado — é o que nos trouxe até aqui e
                é o que guia cada linha de código que escrevemos hoje.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={slideInRight}>
            <MediaPlaceholder seed="about-history" icon={Building2} className="aspect-[4/3] rounded-3xl" />
          </motion.div>
        </div>
      </Section>

      <Section tone="muted" className="!py-14">
        <StatsSection />
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Missão, visão e compromisso"
          title="O que nos move todos os dias"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {MISSION_VISION.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-navy-100 bg-white p-8 shadow-soft"
              >
                <Icon className="mb-4 h-8 w-8 text-brand-600" strokeWidth={1.5} />
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Nossos valores" title="Princípios que orientam nossas decisões" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {VALUES.map((value) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="flex gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-soft"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="mb-1.5 font-display text-base font-bold text-navy-900">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section tone="dark" className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
        <SectionHeading
          eyebrow="Forma de trabalhar"
          title="Um processo desenhado para reduzir risco e aumentar previsibilidade"
          tone="dark"
        />
        <div className="relative mt-16">
          <ProcessTimeline />
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
