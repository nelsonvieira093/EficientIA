import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/constants/site'

export function WhatsAppButton() {
  return (
    <motion.a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Fale conosco pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  )
}
