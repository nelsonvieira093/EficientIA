import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Lightbulb, TrendingUp, Building2 } from 'lucide-react'
import { fadeUp } from '@/animations/variants'
import { MediaPlaceholder } from '@/components/shared/MediaPlaceholder'
import type { CaseStudy } from '@/types'

export function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <motion.div variants={fadeUp} className="h-full">
      <Link
        to={`/cases/${item.slug}`}
        className="group grid h-full grid-cols-1 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition-all duration-300 hover:shadow-elevated lg:grid-cols-5"
      >
        <MediaPlaceholder
          seed={item.slug}
          icon={Building2}
          label={item.segment}
          className="aspect-[16/10] lg:aspect-auto lg:col-span-2"
        />

        <div className="flex flex-col p-7 lg:col-span-3">
          <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
            {item.client}
          </span>
          <h3 className="mb-4 font-display text-xl font-bold leading-snug text-navy-900">{item.title}</h3>

          <div className="mb-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <div className="flex gap-2">
              <Target className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <p className="line-clamp-3">{item.challenge}</p>
            </div>
            <div className="flex gap-2">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <p className="line-clamp-3">{item.solution}</p>
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-6 border-t border-navy-100 pt-5">
            {item.results.slice(0, 2).map((result) => (
              <div key={result.label}>
                <div className="flex items-center gap-1.5 font-display text-2xl font-bold text-navy-900">
                  <TrendingUp className="h-4 w-4 text-brand-500" />
                  {result.value}
                </div>
                <p className="text-xs text-slate-500">{result.label}</p>
              </div>
            ))}
            <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
              Ler case
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
