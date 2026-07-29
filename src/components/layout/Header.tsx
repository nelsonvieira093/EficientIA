import { useEffect, useState } from 'react'
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS } from '@/constants/site'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { cn } from '@/utils/cn'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useLockBodyScroll(open)

  // Every page opens on a dark navy hero, so an unscrolled/closed header
  // must render light text over it; once glass (scrolled or menu open)
  // takes over with a light background, text flips to dark navy.
  const solid = scrolled || open

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy-950/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          solid ? 'glass shadow-soft py-3' : 'bg-transparent py-5',
        )}
      >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Navegação principal">
        <Logo dark={!solid} />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <RouterNavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-brand-500'
                      : solid
                        ? 'text-navy-700 hover:text-brand-600'
                        : 'text-white/85 hover:text-white',
                  )
                }
              >
                {link.label}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button as="link" to="/contato" size="sm" icon={<ArrowRight className="h-4 w-4" />}>
            Solicitar orçamento
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className={cn('flex h-10 w-10 items-center justify-center rounded-full lg:hidden', solid ? 'text-navy-900' : 'text-white')}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-white shadow-elevated lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <RouterNavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                        isActive ? 'bg-brand-50 text-brand-600' : 'text-navy-700 hover:bg-navy-50',
                      )
                    }
                  >
                    {link.label}
                  </RouterNavLink>
                </li>
              ))}
              <li className="pt-2">
                <Button as="link" to="/contato" className="w-full">
                  Solicitar orçamento
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  )
}
