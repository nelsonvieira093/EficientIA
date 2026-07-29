import { useMemo, useState } from 'react'
import { PageHeader } from '@/components/sections/PageHeader'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { CtaSection } from '@/components/sections/CtaSection'
import { Section } from '@/components/ui/Section'
import { Seo } from '@/components/shared/Seo'
import { PROJECTS } from '@/constants/projects'
import { cn } from '@/utils/cn'
import type { ProjectCategory } from '@/types'

const CATEGORIES: (ProjectCategory | 'Todos')[] = [
  'Todos',
  'Web',
  'Mobile',
  'ERP',
  'IA',
  'Automação',
  'Cloud',
  'BI',
]

export default function ProjectsPage() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('Todos')

  const filtered = useMemo(
    () => (category === 'Todos' ? PROJECTS : PROJECTS.filter((p) => p.category === category)),
    [category],
  )

  return (
    <>
      <Seo
        title="Projetos"
        description="Conheça projetos desenvolvidos pela EficientIA: ERPs, aplicativos mobile, plataformas com IA, dashboards de BI e sistemas empresariais sob medida."
        path="/projetos"
      />

      <PageHeader
        eyebrow="Portfólio"
        title="Projetos que já colocamos em produção"
        description="Uma amostra do que desenvolvemos para empresas que decidiram investir em tecnologia para crescer."
      />

      <Section tone="light">
        <div className="mb-12 flex flex-wrap gap-2">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                category === item
                  ? 'border-brand-600 bg-brand-600 text-white'
                  : 'border-navy-100 text-navy-700 hover:border-brand-300 hover:text-brand-600',
              )}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>

        <ProjectsGrid projects={filtered} />
      </Section>

      <CtaSection />
    </>
  )
}
