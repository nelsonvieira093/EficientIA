import {
  Stethoscope,
  Code2,
  Smartphone,
  Building2,
  BrainCircuit,
  Workflow,
  Cloud,
  Layers,
  Plug,
  Webhook,
  ShieldCheck,
  Search,
  BarChart3,
} from 'lucide-react'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    slug: 'diagnostico-automacao-ia',
    icon: Stethoscope,
    title: 'Diagnóstico de Automação & IA',
    shortDescription:
      'Um raio-X consultivo dos seus processos para descobrir onde automação e IA geram ganho real.',
    description:
      'Muitas empresas querem usar automação e inteligência artificial, mas travam na pergunta "por onde começar?". O Diagnóstico de Automação & IA identifica gargalos operacionais e aponta quais processos realmente fazem sentido automatizar — entregando um plano claro, pronto para ser executado pelo seu time ou por nós.',
    capabilities: [
      'Mapeamento de processos manuais e retrabalho',
      'Identificação de gargalos operacionais',
      'Oportunidades de automação priorizadas',
      'Onde a IA pode gerar ganho real',
      'Recomendação de ferramentas e sistemas',
      'Estimativa de ganho em eficiência operacional',
    ],
  },
  {
    slug: 'desenvolvimento-web',
    icon: Code2,
    title: 'Desenvolvimento Web',
    shortDescription:
      'Sites institucionais, portais e plataformas web de alta performance construídos sob medida.',
    description:
      'Criamos aplicações web modernas, rápidas e escaláveis, do front-end ao back-end, com foco em experiência do usuário, performance e SEO técnico.',
    capabilities: [
      'Sites institucionais e landing pages',
      'Plataformas web e portais corporativos',
      'E-commerce e marketplaces',
      'Progressive Web Apps (PWA)',
    ],
  },
  {
    slug: 'aplicativos-mobile',
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    shortDescription:
      'Apps nativos e híbridos para iOS e Android com experiência fluida e design consistente.',
    description:
      'Desenvolvemos aplicativos mobile robustos e escaláveis, integrados aos sistemas da sua empresa, com foco em usabilidade e desempenho.',
    capabilities: [
      'Apps híbridos com Flutter',
      'Integração com APIs e sistemas legados',
      'Notificações push e geolocalização',
      'Publicação em App Store e Google Play',
    ],
  },
  {
    slug: 'sistemas-empresariais',
    icon: Building2,
    title: 'Sistemas Empresariais & SaaS',
    shortDescription:
      'ERPs, CRMs e plataformas SaaS multiempresa sob medida para os processos reais do seu negócio.',
    description:
      'Construímos sistemas empresariais que se adaptam à operação da sua empresa, eliminando planilhas soltas e processos manuais desconectados — do sistema interno a uma plataforma SaaS completa, com cobrança recorrente e um cliente por empresa.',
    capabilities: [
      'ERPs e sistemas de gestão sob medida',
      'Plataformas SaaS multiempresa (multi-tenant)',
      'CRMs e plataformas de relacionamento',
      'Módulos financeiro, estoque e vendas',
      'Assinatura recorrente e cobrança (ex: Stripe)',
      'Migração de sistemas legados',
    ],
  },
  {
    slug: 'inteligencia-artificial',
    icon: BrainCircuit,
    title: 'Inteligência Artificial',
    shortDescription:
      'Modelos de IA generativa, agentes autônomos e machine learning aplicados ao seu negócio.',
    description:
      'Aplicamos IA de forma prática: agentes que atendem clientes, modelos que preveem demanda e automações inteligentes que economizam horas de trabalho.',
    capabilities: [
      'Agentes de IA e chatbots inteligentes',
      'Integração com LLMs (OpenAI e outros)',
      'Modelos preditivos e machine learning',
      'Análise e classificação de dados com IA',
    ],
  },
  {
    slug: 'automacao-processos',
    icon: Workflow,
    title: 'Automação de Processos',
    shortDescription:
      'Eliminamos tarefas manuais repetitivas com automações que conectam seus sistemas.',
    description:
      'Mapeamos processos internos e construímos automações que reduzem erros, tempo e custo operacional, integrando ferramentas que sua empresa já usa.',
    capabilities: [
      'Automações com N8N e RPA',
      'Integração entre sistemas e planilhas',
      'Fluxos de aprovação automatizados',
      'Rotinas de geração de relatórios',
    ],
  },
  {
    slug: 'cloud-computing',
    icon: Cloud,
    title: 'Cloud Computing',
    shortDescription:
      'Infraestrutura em nuvem escalável, segura e otimizada para custo e desempenho.',
    description:
      'Projetamos e gerenciamos infraestrutura em nuvem com foco em disponibilidade, segurança e escalabilidade, usando containers e orquestração moderna.',
    capabilities: [
      'Infraestrutura AWS e Azure',
      'Containers com Docker e Kubernetes',
      'CI/CD e deploy automatizado',
      'Monitoramento e observabilidade',
    ],
  },
  {
    slug: 'arquitetura-de-software',
    icon: Layers,
    title: 'Arquitetura de Software',
    shortDescription:
      'Arquiteturas escaláveis e resilientes, pensadas para crescer junto com sua empresa.',
    description:
      'Desenhamos arquiteturas de software sólidas — microsserviços, monolitos modulares ou serverless — de acordo com a real necessidade do seu negócio.',
    capabilities: [
      'Arquitetura de microsserviços',
      'Modelagem de dados e domínios',
      'Padrões de escalabilidade e resiliência',
      'Auditoria e revisão de arquitetura',
    ],
  },
  {
    slug: 'integracoes',
    icon: Plug,
    title: 'Integrações',
    shortDescription:
      'Conectamos seus sistemas, ERPs e plataformas para que os dados fluam sem retrabalho.',
    description:
      'Integramos sistemas internos, plataformas de terceiros e serviços externos para eliminar silos de informação e retrabalho manual.',
    capabilities: [
      'Integração entre ERPs e e-commerces',
      'Conectores com gateways de pagamento',
      'Sincronização de dados em tempo real',
      'Middlewares e filas de mensageria',
    ],
  },
  {
    slug: 'apis',
    icon: Webhook,
    title: 'APIs',
    shortDescription:
      'APIs REST e GraphQL documentadas, seguras e prontas para escalar.',
    description:
      'Desenvolvemos APIs robustas e bem documentadas, seguindo boas práticas de segurança, versionamento e performance para suportar múltiplos consumidores.',
    capabilities: [
      'APIs REST e GraphQL',
      'Autenticação e autorização seguras',
      'Documentação com OpenAPI/Swagger',
      'Rate limiting e observabilidade',
    ],
  },
  {
    slug: 'consultoria',
    icon: Search,
    title: 'Consultoria',
    shortDescription:
      'Diagnóstico técnico e estratégico para decisões de tecnologia mais seguras.',
    description:
      'Ajudamos empresas a tomar decisões tecnológicas mais assertivas, com diagnósticos técnicos, roadmaps de produto e planos de modernização.',
    capabilities: [
      'Diagnóstico técnico e de processos',
      'Roadmap tecnológico',
      'Seleção de stack e fornecedores',
      'Auditoria de segurança e performance',
    ],
  },
  {
    slug: 'business-intelligence',
    icon: BarChart3,
    title: 'Business Intelligence',
    shortDescription:
      'Transformamos dados dispersos em decisões claras e baseadas em evidências.',
    description:
      'Estruturamos pipelines de dados e ferramentas de BI que dão visibilidade real da operação para a liderança tomar decisões mais rápidas e seguras.',
    capabilities: [
      'Pipelines de dados (ETL/ELT)',
      'Data warehouse e modelagem analítica',
      'Relatórios e indicadores estratégicos',
      'Dashboards interativos',
    ],
  },
  {
    slug: 'dashboards',
    icon: ShieldCheck,
    title: 'Segurança & Dashboards',
    shortDescription:
      'Dashboards em tempo real com governança de dados e segurança da informação.',
    description:
      'Construímos dashboards executivos e operacionais em tempo real, com controle de acesso e boas práticas de segurança da informação por padrão.',
    capabilities: [
      'Dashboards em tempo real',
      'Controle de acesso e permissões',
      'Criptografia e boas práticas de segurança',
      'Alertas e monitoramento de indicadores',
    ],
  },
]
