import { Search, ClipboardList, Palette, Code2, TestTube2, Rocket, LifeBuoy } from 'lucide-react'
import type { ProcessStep } from '@/types'

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Descoberta',
    description:
      'Mergulhamos no seu negócio para entender processos, dores e objetivos antes de propor qualquer solução.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Planejamento',
    description:
      'Definimos escopo, arquitetura e roadmap com metas claras, prazos realistas e critérios de sucesso.',
    icon: ClipboardList,
  },
  {
    step: '03',
    title: 'Design',
    description:
      'Prototipamos interfaces centradas no usuário, validando fluxos antes de qualquer linha de código.',
    icon: Palette,
  },
  {
    step: '04',
    title: 'Desenvolvimento',
    description:
      'Construímos o produto em ciclos curtos e iterativos, com entregas visíveis e código de alta qualidade.',
    icon: Code2,
  },
  {
    step: '05',
    title: 'Testes',
    description:
      'Testamos exaustivamente funcionalidades, performance e segurança antes de qualquer entrega.',
    icon: TestTube2,
  },
  {
    step: '06',
    title: 'Implantação',
    description:
      'Colocamos a solução no ar com deploy automatizado, monitoramento e planos de contingência.',
    icon: Rocket,
  },
  {
    step: '07',
    title: 'Suporte',
    description:
      'Acompanhamos a evolução do produto com suporte contínuo, melhorias e novas funcionalidades.',
    icon: LifeBuoy,
  },
]
