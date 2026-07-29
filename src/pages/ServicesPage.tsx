import { motion } from 'framer-motion'
import { Rocket, ArrowRight } from 'lucide-react'
import { fadeUp, viewportOnce } from '@/animations/variants'
import { PageHeader } from '@/components/sections/PageHeader'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { DifferentialsGrid } from '@/components/sections/DifferentialsGrid'
import { CtaSection } from '@/components/sections/CtaSection'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Seo } from '@/components/shared/Seo'
import { SITE } from '@/constants/site'
import { SERVICES } from '@/constants/services'

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Serviços"
        description="Conheça os serviços da EficientIA: desenvolvimento web, mobile, sistemas empresariais, inteligência artificial, automação, cloud, arquitetura de software, APIs e mais."
        path="/servicos"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: SERVICES.map((service, index) => ({
            '@type': 'Service',
            position: index + 1,
            name: service.title,
            description: service.description,
            provider: { '@type': 'Organization', name: SITE.name },
          })),
        }}
      />

      <PageHeader
        eyebrow="O que fazemos"
        title="Serviços de tecnologia sob medida para cada etapa do seu negócio"
        description="De um MVP validado em semanas à modernização de sistemas legados complexos — temos o time certo para cada desafio."
      />

      <Section tone="light">
        <ServicesGrid detailed />
      </Section>

      <Section tone="light" className="!pt-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col items-start gap-6 rounded-2xl border border-brand-100 bg-brand-50 p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex gap-4">
            <Rocket className="h-8 w-8 shrink-0 text-brand-600" />
            <p className="text-sm leading-relaxed text-navy-800 sm:text-base">
              <strong>Também construímos SaaS.</strong> O ERP EficientIA é uma plataforma SaaS
              multiempresa completa que desenvolvemos internamente — com cobrança recorrente,
              multi-tenant e painel de administração. Veja como.
            </p>
          </div>
          <Button
            as="link"
            to="/cases/erp-eficientia"
            variant="secondary"
            icon={<ArrowRight className="h-4 w-4" />}
            className="w-full shrink-0 sm:w-auto"
          >
            Ver o case
          </Button>
        </motion.div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Diferenciais" title="Como entregamos cada um desses serviços" />
        <div className="mt-14">
          <DifferentialsGrid />
        </div>
      </Section>

      <CtaSection
        title="Não sabe por onde começar?"
        description="Conte o que sua empresa precisa e nossa equipe indica o melhor caminho — sem compromisso."
      />
    </>
  )
}
