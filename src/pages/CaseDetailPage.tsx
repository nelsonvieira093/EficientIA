import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Target, Lightbulb, Building2 } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Seo } from '@/components/shared/Seo'
import { MediaPlaceholder } from '@/components/shared/MediaPlaceholder'
import { CASES } from '@/constants/cases'
import { SITE } from '@/constants/site'

export default function CaseDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const item = CASES.find((c) => c.slug === slug)

  if (!item) return <Navigate to="/cases" replace />

  return (
    <>
      <Seo
        title={item.title}
        description={item.challenge}
        path={`/cases/${item.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: item.title,
          author: { '@type': 'Organization', name: SITE.name },
          about: item.client,
        }}
      />

      <section className="relative overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
        <Container className="relative">
          <Link to="/cases" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Voltar para cases
          </Link>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <Badge tone="light" className="mb-5">
              {item.client} · {item.segment}
            </Badge>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              {item.title}
            </h1>
          </motion.div>
        </Container>
      </section>

      <Section tone="light">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <MediaPlaceholder seed={item.slug} icon={Building2} label={item.segment} className="aspect-[21/9] rounded-3xl" />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-soft">
            <Target className="mb-4 h-7 w-7 text-brand-600" />
            <h2 className="mb-3 font-display text-xl font-bold text-navy-900">O desafio</h2>
            <p className="leading-relaxed text-slate-600">{item.challenge}</p>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-soft">
            <Lightbulb className="mb-4 h-7 w-7 text-brand-600" />
            <h2 className="mb-3 font-display text-xl font-bold text-navy-900">A solução</h2>
            <p className="leading-relaxed text-slate-600">{item.solution}</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-navy-100 bg-slate-50 p-8">
          <h3 className="mb-4 font-display text-base font-bold text-navy-900">Tecnologias utilizadas</h3>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 shadow-soft">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-navy-900">Resultados alcançados</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {item.results.map((result) => (
              <motion.div
                key={result.label}
                variants={fadeUp}
                className="rounded-2xl border border-brand-100 bg-brand-50 p-8 text-center"
              >
                <p className="font-display text-4xl font-extrabold text-brand-700">{result.value}</p>
                <p className="mt-2 text-sm font-medium text-navy-700">{result.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button as="link" to="/contato" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Quero um resultado assim
          </Button>
        </div>
      </Section>
    </>
  )
}
