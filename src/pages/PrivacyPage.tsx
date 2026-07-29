import { PageHeader } from '@/components/sections/PageHeader'
import { Section } from '@/components/ui/Section'
import { Seo } from '@/components/shared/Seo'
import { SITE, CONTACT } from '@/constants/site'

const SECTIONS = [
  {
    title: '1. Quais dados coletamos',
    text: 'Coletamos informações fornecidas voluntariamente por você em nossos formulários de contato, como nome, e-mail, telefone e mensagem, além de dados de navegação coletados por cookies e ferramentas de análise.',
  },
  {
    title: '2. Como usamos seus dados',
    text: 'Utilizamos os dados coletados para responder solicitações de contato e orçamento, melhorar a experiência de navegação no site e enviar comunicações relacionadas aos nossos serviços, quando autorizado.',
  },
  {
    title: '3. Compartilhamento de dados',
    text: 'Não vendemos ou compartilhamos seus dados pessoais com terceiros para fins de marketing. Dados podem ser compartilhados com prestadores de serviço estritamente para viabilizar nossas operações internas.',
  },
  {
    title: '4. Seus direitos',
    text: 'Você pode solicitar a qualquer momento a confirmação, correção, anonimização ou exclusão dos seus dados pessoais, entrando em contato pelo e-mail informado abaixo.',
  },
  {
    title: '5. Segurança da informação',
    text: 'Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acessos não autorizados, perda ou alteração indevida.',
  },
  {
    title: '6. Cookies',
    text: 'Utilizamos cookies para melhorar a experiência de navegação e obter métricas de uso do site. Você pode desabilitar cookies nas configurações do seu navegador a qualquer momento.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Política de Privacidade"
        description="Entenda como a EficientIA coleta, utiliza e protege seus dados pessoais."
        path="/privacidade"
      />

      <PageHeader eyebrow="Legal" title="Política de Privacidade" description={`Última atualização: julho de 2026.`} />

      <Section tone="light">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 font-display text-xl font-bold text-navy-900">{section.title}</h2>
              <p className="leading-relaxed text-slate-600">{section.text}</p>
            </div>
          ))}
          <div>
            <h2 className="mb-3 font-display text-xl font-bold text-navy-900">7. Contato</h2>
            <p className="leading-relaxed text-slate-600">
              Dúvidas sobre esta política podem ser enviadas para{' '}
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
