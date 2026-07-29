import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Target, TrendingUp, Calendar, Layers } from 'lucide-react'
import { fadeUp, viewportOnce } from '@/animations/variants'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Seo } from '@/components/shared/Seo'
import { MediaPlaceholder } from '@/components/shared/MediaPlaceholder'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROJECTS } from '@/constants/projects'
import { SITE } from '@/constants/site'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projetos" replace />

  const related = PROJECTS.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3)

  return (
    <>
      <Seo
        title={project.title}
        description={project.summary}
        path={`/projetos/${project.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          creator: { '@type': 'Organization', name: SITE.name },
        }}
      />

      <section className="relative overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
        <Container className="relative">
          <Link to="/projetos" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Voltar para projetos
          </Link>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <Badge tone="light">{project.category}</Badge>
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                <Calendar className="h-3.5 w-3.5" />
                {project.year}
              </span>
            </div>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-balance mt-5 text-lg leading-relaxed text-slate-300">{project.summary}</p>
          </motion.div>
        </Container>
      </section>

      <Section tone="light">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <MediaPlaceholder seed={project.slug} icon={Layers} className="aspect-[21/9] rounded-3xl" />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 font-display text-2xl font-bold text-navy-900">Sobre o projeto</h2>
            <p className="leading-relaxed text-slate-600">{project.description}</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
                <Target className="mb-3 h-6 w-6 text-brand-600" />
                <h3 className="mb-2 font-display font-bold text-navy-900">Objetivo</h3>
                <p className="text-sm leading-relaxed text-slate-600">{project.objective}</p>
              </div>
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
                <TrendingUp className="mb-3 h-6 w-6 text-brand-600" />
                <h3 className="mb-2 font-display font-bold text-navy-900">Resultado</h3>
                <p className="text-sm leading-relaxed text-slate-600">{project.result}</p>
              </div>
            </div>
          </div>

          <aside className="rounded-2xl border border-navy-100 bg-slate-50 p-7 lg:sticky lg:top-28 lg:h-fit">
            <h3 className="mb-4 font-display text-base font-bold text-navy-900">Tecnologias utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 shadow-soft">
                  {tech}
                </span>
              ))}
            </div>
            <Button as="link" to="/contato" className="mt-7 w-full" icon={<ArrowRight className="h-4 w-4" />}>
              Iniciar projeto parecido
            </Button>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="muted">
          <SectionHeading eyebrow="Relacionados" title="Outros projetos dessa categoria" align="left" className="mx-0 mb-12" />
          <ProjectsGrid projects={related} />
        </Section>
      )}
    </>
  )
}
