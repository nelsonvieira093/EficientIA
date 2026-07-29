import { useMemo, useState } from 'react'
import { PageHeader } from '@/components/sections/PageHeader'
import { BlogGrid } from '@/components/sections/BlogGrid'
import { Section } from '@/components/ui/Section'
import { Seo } from '@/components/shared/Seo'
import { BLOG_POSTS } from '@/constants/blog'
import { cn } from '@/utils/cn'
import type { BlogCategory } from '@/types'

const CATEGORIES: (BlogCategory | 'Todos')[] = [
  'Todos',
  'Tecnologia',
  'IA',
  'Cloud',
  'Automação',
  'Desenvolvimento',
  'ERP',
  'Negócios',
]

export default function BlogPage() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('Todos')

  const filtered = useMemo(
    () => (category === 'Todos' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === category)),
    [category],
  )

  return (
    <>
      <Seo
        title="Blog"
        description="Artigos sobre tecnologia, inteligência artificial, cloud, automação, desenvolvimento de software, ERP e negócios produzidos pela equipe da EficientIA."
        path="/blog"
      />

      <PageHeader
        eyebrow="Blog"
        title="Ideias, tendências e aprendizados sobre tecnologia"
        description="Conteúdo produzido pela nossa equipe de engenharia para ajudar você a tomar decisões melhores sobre tecnologia."
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

        <BlogGrid posts={filtered} />
      </Section>
    </>
  )
}
