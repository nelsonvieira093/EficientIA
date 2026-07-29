import { motion } from 'framer-motion'
import { staggerContainer, viewportOnce } from '@/animations/variants'
import { ProjectCard } from './ProjectCard'
import type { Project } from '@/types'

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.08)}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </motion.div>
  )
}
