import { motion } from 'framer-motion'
import { staggerContainer, viewportOnce } from '@/animations/variants'
import { BlogCard } from './BlogCard'
import type { BlogPost } from '@/types'

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return <p className="py-12 text-center text-slate-500">Nenhum artigo encontrado nesta categoria.</p>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.08)}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </motion.div>
  )
}
