import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Newspaper } from 'lucide-react'
import { fadeUp } from '@/animations/variants'
import { MediaPlaceholder } from '@/components/shared/MediaPlaceholder'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/utils/format'
import type { BlogPost } from '@/types'

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div variants={fadeUp} className="group h-full">
      <Link
        to={`/blog/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated"
      >
        <MediaPlaceholder
          seed={post.slug}
          icon={Newspaper}
          className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="flex flex-1 flex-col p-6">
          <Badge className="mb-3 w-fit">{post.category}</Badge>
          <h3 className="mb-2 font-display text-lg font-bold leading-snug text-navy-900">{post.title}</h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
          <div className="flex items-center justify-between border-t border-navy-100 pt-4 text-xs text-slate-500">
            <span>
              {formatDate(post.date)} · {post.readTime} de leitura
            </span>
            <ArrowRight className="h-4 w-4 text-brand-600 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
