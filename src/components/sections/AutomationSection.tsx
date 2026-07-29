import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Rocket, Stethoscope } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, viewportOnce } from '@/animations/variants'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { AUTOMATION_BENEFITS, DIAGNOSTIC_ANALYSIS } from '@/constants/automation'

export function AutomationSection() {
  return (
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
      <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={slideInLeft}>
        <Badge className="mb-5">
          <Rocket className="h-3.5 w-3.5" />
          Automação & IA
        </Badge>
        <h2 className="text-balance font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          Automação & IA para transformar sua operação
        </h2>
        <p className="mt-5 leading-relaxed text-slate-600">
          Muitas empresas ainda perdem tempo com processos manuais, retrabalho e falta de integração
          entre sistemas. Na <strong className="text-navy-800">EficientIA</strong>, ajudamos empresas a
          identificar gargalos e implementar automações que realmente geram resultado.
        </p>

        <ul className="mt-6 space-y-3">
          {AUTOMATION_BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3 text-sm font-medium text-navy-800">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
              {benefit}
            </li>
          ))}
        </ul>

        <blockquote className="mt-8 border-l-2 border-brand-500 pl-5">
          <p className="font-display text-xl font-bold leading-snug text-navy-900">
            Automação não é sobre tecnologia.
            <br />É sobre resultado.
          </p>
        </blockquote>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button as="link" to="/contato" icon={<ArrowRight className="h-4 w-4" />}>
            Fazer diagnóstico gratuito
          </Button>
          <Button as="link" to="/servicos#diagnostico-automacao-ia" variant="outline">
            Ver como funciona
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={slideInRight}
        className="rounded-3xl border border-navy-100 bg-white p-8 shadow-elevated"
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <Stethoscope className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <h3 className="mb-1 font-display text-xl font-bold text-navy-900">
          O que é um Diagnóstico de Automação & IA?
        </h3>
        <p className="mb-5 text-sm font-semibold text-brand-600">"Por onde começar?"</p>
        <p className="mb-6 text-sm leading-relaxed text-slate-600">
          É um serviço consultivo que ajuda empresas a identificar onde estão os gargalos operacionais
          e quais processos realmente fazem sentido automatizar. Durante o diagnóstico, analisamos:
        </p>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="mb-6 grid gap-2.5 sm:grid-cols-2"
        >
          {DIAGNOSTIC_ANALYSIS.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-start gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-medium text-navy-700"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <div className="rounded-2xl bg-brand-50 p-5">
          <p className="text-sm leading-relaxed text-navy-800">
            O resultado é um <strong>plano claro de automação</strong>, pronto para ser executado pelo
            seu time interno ou por nós, com acompanhamento estratégico.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
