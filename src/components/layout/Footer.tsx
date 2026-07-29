import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { Container } from '@/components/ui/Container'
import { FOOTER_LINKS, CONTACT, SOCIALS, SITE } from '@/constants/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-slate-300">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo dark className="mb-4" />
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">{SITE.description}</p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                style={{ '--social-color': social.color } as React.CSSProperties}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold uppercase text-slate-300 transition-colors hover:border-[var(--social-color)] hover:text-[var(--social-color)]"
              >
                {social.short}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Empresa">
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Empresa</h3>
          <ul className="space-y-3 text-sm">
            {FOOTER_LINKS.company.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-slate-400 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Recursos">
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Recursos</h3>
          <ul className="space-y-3 text-sm">
            {FOOTER_LINKS.resources.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-slate-400 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Contato</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-brand-400" />
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-brand-400" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {SITE.name}. Todos os direitos reservados. CNPJ {SITE.cnpj}
          </p>
          <div className="flex gap-6">
            <Link to="/privacidade" className="hover:text-slate-300">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="hover:text-slate-300">
              Termos de Uso
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}
