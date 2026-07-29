import { Link } from 'react-router-dom'
import { ArrowRight, Rocket } from 'lucide-react'
import { Hero } from '@/components/sections/Hero'
import { AutomationSection } from '@/components/sections/AutomationSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { TechGrid } from '@/components/sections/TechGrid'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { DifferentialsGrid } from '@/components/sections/DifferentialsGrid'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Seo } from '@/components/shared/Seo'
import { PROJECTS } from '@/constants/projects'
import { SITE } from '@/constants/site'

export default function HomePage() {
  return (
    <>
      <Seo
        title={`${SITE.name} | ${SITE.tagline}`}
        description={SITE.description}
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE.name,
          url: SITE.url,
          description: SITE.description,
          slogan: SITE.tagline,
        }}
      />

      <Hero />

      <Section tone="light">
        <AutomationSection />
      </Section>

      <Section tone="light" className="!py-14 border-y border-navy-100">
        <StatsSection />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Sobre a EficientIA"
          title="Uma empresa de tecnologia construída para resolver problemas reais"
          description="Combinamos engenharia de software, dados e inteligência artificial para entregar produtos modernos, seguros e escaláveis — do primeiro protótipo à operação em escala."
          align="left"
          className="mx-0 mb-12"
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Nossa missão',
              text: 'Simplificar processos e acelerar o crescimento das empresas por meio de tecnologia sob medida.',
            },
            {
              title: 'Nossa visão',
              text: 'Ser referência em desenvolvimento de software e inteligência artificial aplicada a negócios.',
            },
            {
              title: 'Nosso compromisso',
              text: 'Entregar software de qualidade, com transparência, previsibilidade e suporte de verdade.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-navy-100 bg-white p-7 shadow-soft">
              <h3 className="mb-2 font-display text-lg font-bold text-navy-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button as="link" to="/sobre" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            Conheça nossa história
          </Button>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Serviços pensados para cada etapa da sua jornada digital"
          description="De um MVP à modernização de sistemas legados, temos o time certo para cada desafio."
        />
        <div className="mt-14">
          <ServicesGrid limit={6} />
        </div>
        <div className="mt-10 flex justify-center">
          <Button as="link" to="/servicos" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            Ver todos os serviços
          </Button>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos que já colocamos em produção"
          description="Uma amostra do que desenvolvemos para empresas que decidiram investir em tecnologia."
        />
        <div className="mt-14">
          <ProjectsGrid projects={PROJECTS.slice(0, 6)} />
        </div>
        <div className="mt-10 flex justify-center">
          <Button as="link" to="/projetos" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            Ver portfólio completo
          </Button>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Tecnologias"
          title="Stack moderna, testada em produção"
          description="Escolhemos cada tecnologia pela robustez, não pela moda."
        />
        <div className="mt-14">
          <TechGrid />
        </div>
      </Section>

      <Section tone="dark" className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
        <SectionHeading
          eyebrow="Metodologia"
          title="Um processo claro, do briefing ao suporte contínuo"
          description="Cada etapa existe para reduzir risco, alinhar expectativas e garantir qualidade."
          tone="dark"
        />
        <div className="relative mt-16">
          <ProcessTimeline />
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que empresas escolhem a EficientIA"
        />
        <div className="mt-14">
          <DifferentialsGrid />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Depoimentos" title="O que dizem os clientes que confiaram na EficientIA" />
        <div className="mt-14">
          <TestimonialsSection />
        </div>
      </Section>

      <CtaSection
        title="Vamos construir a próxima etapa da sua empresa juntos?"
        description="Conte um pouco sobre seu projeto e nossa equipe retorna com um plano de ação em até 24 horas úteis."
      />

      <Section tone="light" className="!py-14">
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50 px-8 py-10 text-center">
          <Rocket className="h-8 w-8 text-brand-600" />
          <p className="max-w-lg text-sm text-navy-700">
            Curioso sobre como aplicamos tudo isso na prática? Veja nossas{' '}
            <Link to="/cases" className="font-semibold text-brand-700 underline underline-offset-2">
              cases de sucesso
            </Link>{' '}
            com desafios, soluções e resultados reais.
          </p>
        </div>
      </Section>
    </>
  )
}
