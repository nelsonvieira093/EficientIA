import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers } from 'lucide-react'
import { fadeUp } from '@/animations/variants'
import { MediaPlaceholder } from '@/components/shared/MediaPlaceholder'
import { Badge } from '@/components/ui/Badge'
import type { Project } from '@/types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={fadeUp} className="group h-full">
      <Link
        to={`/projetos/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated"
      >
        <MediaPlaceholder
          seed={project.slug}
          icon={Layers}
          className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="flex flex-1 flex-col p-6">
          <Badge className="mb-3 w-fit">{project.category}</Badge>
          <h3 className="mb-2 font-display text-lg font-bold text-navy-900">{project.title}</h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">{project.summary}</p>

          <div className="mb-5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                {tech}
              </span>
            ))}
          </div>

          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
            Ver detalhes
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
