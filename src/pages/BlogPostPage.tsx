import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, Newspaper } from 'lucide-react'
import { fadeUp } from '@/animations/variants'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Seo } from '@/components/shared/Seo'
import { MediaPlaceholder } from '@/components/shared/MediaPlaceholder'
import { BlogGrid } from '@/components/sections/BlogGrid'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BLOG_POSTS } from '@/constants/blog'
import { SITE } from '@/constants/site'
import { formatDate } from '@/utils/format'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { '@type': 'Organization', name: SITE.name },
          publisher: { '@type': 'Organization', name: SITE.name },
        }}
      />

      <section className="relative overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
        <Container className="relative">
          <Link to="/blog" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Voltar para o blog
          </Link>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <Badge tone="light" className="mb-5">
              {post.category}
            </Badge>
            <h1 className="text-balance font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime} de leitura
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <MediaPlaceholder seed={post.slug} icon={Newspaper} className="aspect-[16/9] rounded-3xl" />

          <article className="mt-12">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="muted">
          <SectionHeading eyebrow="Continue lendo" title="Mais artigos sobre este tema" align="left" className="mx-0 mb-12" />
          <BlogGrid posts={related} />
        </Section>
      )}
    </>
  )
}
