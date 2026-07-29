import { PageHeader } from '@/components/sections/PageHeader'
import { Section } from '@/components/ui/Section'
import { Seo } from '@/components/shared/Seo'
import { SITE, CONTACT } from '@/constants/site'

const SECTIONS = [
  {
    title: '1. Aceitação dos termos',
    text: `Ao acessar e utilizar o site da ${SITE.name}, você concorda com os termos e condições descritos nesta página. Caso não concorde, recomendamos que não utilize este site.`,
  },
  {
    title: '2. Uso do conteúdo',
    text: 'Todo o conteúdo publicado neste site — textos, imagens, marcas e identidade visual — é de propriedade da EficientIA ou de seus licenciadores, sendo proibida a reprodução sem autorização prévia.',
  },
  {
    title: '3. Propostas e orçamentos',
    text: 'Informações sobre serviços e projetos apresentadas neste site têm caráter informativo. Orçamentos e prazos definitivos são formalizados por escrito após reunião de escopo com nossa equipe comercial.',
  },
  {
    title: '4. Limitação de responsabilidade',
    text: 'A EficientIA não se responsabiliza por decisões tomadas exclusivamente com base em conteúdo informativo publicado neste site, incluindo o blog.',
  },
  {
    title: '5. Alterações nos termos',
    text: 'Estes termos podem ser atualizados periodicamente. Recomendamos revisão ocasional desta página para se manter informado sobre eventuais mudanças.',
  },
]

export default function TermsPage() {
  return (
    <>
      <Seo title="Termos de Uso" description="Termos e condições de uso do site institucional da EficientIA." path="/termos" />

      <PageHeader eyebrow="Legal" title="Termos de Uso" description="Última atualização: julho de 2026." />

      <Section tone="light">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 font-display text-xl font-bold text-navy-900">{section.title}</h2>
              <p className="leading-relaxed text-slate-600">{section.text}</p>
            </div>
          ))}
          <div>
            <h2 className="mb-3 font-display text-xl font-bold text-navy-900">6. Contato</h2>
            <p className="leading-relaxed text-slate-600">
              Dúvidas sobre estes termos podem ser enviadas para{' '}
              <a href={`mailto:${CONTACT.email}`} className="font-semibold text-brand-600">
                {CONTACT.email}
              </a>
              . {SITE.name} — CNPJ {SITE.cnpj} — {CONTACT.address}.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
