import { PageHeader } from '@/components/sections/PageHeader'
import { CasesGrid } from '@/components/sections/CasesGrid'
import { CtaSection } from '@/components/sections/CtaSection'
import { Section } from '@/components/ui/Section'
import { Seo } from '@/components/shared/Seo'
import { CASES } from '@/constants/cases'

export default function CasesPage() {
  return (
    <>
      <Seo
        title="Cases de Sucesso"
        description="Conheça histórias reais de transformação digital: o desafio, a solução desenvolvida e os resultados alcançados por clientes da EficientIA."
        path="/cases"
      />

      <PageHeader
        eyebrow="Cases de sucesso"
        title="Histórias reais de empresas que transformaram sua operação"
        description="Mais do que telas bonitas: cada case aqui representa um problema de negócio real resolvido com tecnologia."
      />

      <Section tone="light">
        <CasesGrid cases={CASES} />
      </Section>

      <CtaSection
        title="Sua empresa pode ser o próximo case de sucesso"
        description="Vamos conversar sobre o desafio que você está enfrentando hoje."
      />
    </>
  )
}
