import { Target, Eye, HeartHandshake, ShieldCheck, Lightbulb, Users } from 'lucide-react'
import type { Differential } from '@/types'

export const VALUES: Differential[] = [
  {
    icon: Target,
    title: 'Foco em resultado',
    description: 'Cada linha de código existe para resolver um problema real de negócio, não por modismo técnico.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparência',
    description: 'Comunicação honesta sobre prazos, riscos e limitações — sem promessas que não podemos cumprir.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação aplicada',
    description: 'Testamos novas tecnologias com critério, adotando apenas o que realmente agrega valor ao cliente.',
  },
  {
    icon: Users,
    title: 'Parceria de longo prazo',
    description: 'Não entregamos e desaparecemos: acompanhamos a evolução do produto junto com o cliente.',
  },
]

export const MISSION_VISION = [
  {
    icon: Target,
    title: 'Missão',
    text: 'Simplificar processos e acelerar o crescimento das empresas por meio de tecnologia sob medida, unindo engenharia de software, dados e inteligência artificial.',
  },
  {
    icon: Eye,
    title: 'Visão',
    text: 'Ser reconhecida como referência em desenvolvimento de software e IA aplicada a negócios, dentro e fora do Brasil.',
  },
  {
    icon: HeartHandshake,
    title: 'Compromisso',
    text: 'Entregar software de qualidade, com previsibilidade, segurança e suporte contínuo — tratando cada projeto como se fosse nosso.',
  },
]
