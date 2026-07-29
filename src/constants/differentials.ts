import { Layers, Sparkles, TrendingUp, ShieldCheck, Gauge, LifeBuoy, Users, BrainCircuit } from 'lucide-react'
import type { Differential } from '@/types'

export const DIFFERENTIALS: Differential[] = [
  {
    icon: Layers,
    title: 'Arquitetura moderna',
    description: 'Sistemas desenhados para durar, com padrões que suportam o crescimento do seu negócio.',
  },
  {
    icon: Sparkles,
    title: 'Código limpo',
    description: 'Código legível, testado e documentado — sem gambiarras que geram dívida técnica.',
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidade',
    description: 'Soluções prontas para crescer de centenas a milhões de usuários sem reescrever tudo.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança',
    description: 'Boas práticas de segurança aplicadas desde a primeira linha de código.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Aplicações rápidas, otimizadas e testadas sob carga real de uso.',
  },
  {
    icon: LifeBuoy,
    title: 'Suporte contínuo',
    description: 'Acompanhamento após o lançamento, com SLA definido e evolução constante.',
  },
  {
    icon: Users,
    title: 'Equipe especializada',
    description: 'Profissionais seniores em engenharia de software, dados e produto.',
  },
  {
    icon: BrainCircuit,
    title: 'IA integrada',
    description: 'Inteligência artificial aplicada de forma prática, não como modismo.',
  },
]
