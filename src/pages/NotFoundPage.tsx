import { ArrowLeft } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Seo } from '@/components/shared/Seo'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Página não encontrada" description="A página que você procura não existe ou foi movida." path="/404" />
      <Section tone="light" className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <p className="font-display text-8xl font-extrabold text-brand-100">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-navy-900">Página não encontrada</h1>
        <p className="mt-3 max-w-sm text-slate-600">
          O endereço que você tentou acessar não existe ou foi movido para outro lugar.
        </p>
        <Button as="link" to="/" className="mt-8" icon={<ArrowLeft className="h-4 w-4" />} iconPosition="left">
          Voltar para a home
        </Button>
      </Section>
    </>
  )
}
