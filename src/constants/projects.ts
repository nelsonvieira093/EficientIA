import type { Project } from '@/types'

export const PROJECTS: Project[] = [
  {
    slug: 'erp-eficientia',
    title: 'ERP EficientIA',
    category: 'ERP',
    summary: 'Plataforma ERP SaaS multiempresa com módulos fiscal, financeiro e contábil integrados.',
    description:
      'ERP EficientIA é uma plataforma ERP SaaS multiempresa voltada para pequenas e médias empresas, centralizando a gestão fiscal, financeira e contábil em um único sistema. Os módulos conversam entre si automaticamente: ao importar uma NF-e, o Fiscal valida e organiza a nota, o Financeiro gera a conta a pagar correspondente e, quando ela é paga, o Contábil lança o registro automaticamente — eliminando retrabalho e reduzindo erros. Cada cliente administra sua própria empresa (dados, usuários, permissões e assinatura) enquanto a EficientIA opera um painel de Super Admin para gerenciar todos os clientes, planos, cobrança recorrente e auditoria da plataforma. A IA auxilia na leitura de documentos fiscais, extraindo dados de PDFs/DANFEs quando o XML não está disponível.',
    image: 'erp-eficientia',
    technologies: ['PostgreSQL', 'Row-Level Security', 'Stripe', 'IA'],
    objective:
      'Unificar a gestão fiscal, financeira e contábil de pequenas e médias empresas em uma plataforma SaaS multiempresa única, eliminando retrabalho entre planilhas e sistemas desconectados.',
    result:
      'Cada empresa opera isolada em um ambiente multi-tenant seguro, com integração automática entre os módulos fiscal, financeiro e contábil, enquanto a EficientIA gerencia clientes, planos e cobrança recorrente via Stripe em um painel de Super Admin.',
    year: '2024',
  },
  {
    slug: 'gps-tec',
    title: 'GPS Tec',
    category: 'IA',
    summary: 'Plataforma de revista inteligente por IA para controle de acesso a áreas de segurança.',
    description:
      'GPS Tec é uma plataforma de revista inteligente que usa inteligência artificial para automatizar a inspeção de colaboradores, visitantes e prestadores de serviço na entrada e saída de instalações, substituindo ou apoiando a revista manual feita por seguranças. Ao entrar na cabine, o sistema combina imagens de câmera RGB e câmera térmica com sensores físicos — detector de metais, RFID/crachá, sensor de presença e outros sensores industriais — e usa IA para cruzar essas informações e identificar anomalias. O resultado é classificado como liberado, atenção ou irregularidade, com resposta imediata em tela e áudio para o colaborador, envio do resultado ao operador e registro completo (horário, imagens e resultado) para histórico e auditoria.',
    image: 'gps-tec',
    technologies: ['Visão Computacional', 'IA', 'IoT', 'Python'],
    objective:
      'Automatizar e padronizar a revista de pessoas em áreas de segurança, detectando objetos metálicos escondidos, celulares, ferramentas não autorizadas, facas, armas, volumes suspeitos e tentativas de ocultação — sem depender apenas da revista manual.',
    result:
      'Reduz a dependência da revista manual, padroniza a triagem com critérios objetivos de IA e mantém histórico auditável de cada inspeção. Aplicável a mineração, siderúrgicas, portos, indústrias, centros de distribuição, presídios, usinas, data centers e outras áreas de alta segurança (e como apoio, não substituição, em aeroportos).',
    year: '2024',
  },
  {
    slug: 'portal-corporativo',
    title: 'Portal Corporativo',
    category: 'Web',
    summary: 'Intranet moderna para comunicação interna e gestão de documentos.',
    description:
      'Portal corporativo com autenticação unificada, gestão documental, comunicados internos e integração com o sistema de RH da empresa.',
    image: 'portal-corporativo',
    technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Azure'],
    objective:
      'Centralizar comunicação interna e documentos corporativos, hoje espalhados em e-mails e pastas compartilhadas.',
    result: 'Aumento de 60% no engajamento com comunicados internos nos primeiros três meses.',
    year: '2023',
  },
  {
    slug: 'dashboard-financeiro',
    title: 'Dashboard Financeiro',
    category: 'BI',
    summary: 'Painel executivo com indicadores financeiros em tempo real.',
    description:
      'Dashboard de Business Intelligence que consolida dados de múltiplas fontes financeiras em indicadores visuais para a diretoria acompanhar a saúde do negócio.',
    image: 'dashboard-financeiro',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    objective:
      'Dar à diretoria visibilidade em tempo real do fluxo de caixa, inadimplência e margem por unidade de negócio.',
    result: 'Decisões estratégicas que levavam semanas passaram a ser tomadas em poucos dias.',
    year: '2024',
  },
  {
    slug: 'plataforma-atendimento',
    title: 'Plataforma de Atendimento',
    category: 'IA',
    summary: 'Central de atendimento omnichannel com agente de IA integrado.',
    description:
      'Plataforma de atendimento ao cliente com triagem automática via IA, histórico unificado de conversas e roteamento inteligente para os atendentes certos.',
    image: 'plataforma-atendimento',
    technologies: ['React', 'Python', 'OpenAI', 'N8N', 'Docker'],
    objective:
      'Reduzir o tempo médio de resposta ao cliente e automatizar respostas para dúvidas recorrentes.',
    result: 'Queda de 50% no tempo médio de primeira resposta e 30% dos atendimentos resolvidos sem intervenção humana.',
    year: '2024',
  },
  {
    slug: 'sistema-vistoria-remota',
    title: 'Sistema de Vistoria Remota',
    category: 'Mobile',
    summary: 'App mobile para vistorias técnicas com laudos automatizados.',
    description:
      'Aplicativo mobile para equipes de campo realizarem vistorias técnicas com checklist digital, fotos georreferenciadas e geração automática de laudos em PDF.',
    image: 'sistema-vistoria-remota',
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'AWS'],
    objective:
      'Eliminar formulários em papel e acelerar a emissão de laudos técnicos em campo.',
    result: 'Tempo de emissão de laudos reduzido de 2 dias para menos de 1 hora.',
    year: '2023',
  },
  {
    slug: 'automacoes-com-ia',
    title: 'Automações com IA',
    category: 'Automação',
    summary: 'Conjunto de automações inteligentes para back-office financeiro.',
    description:
      'Automações que classificam documentos fiscais, conciliam extratos bancários e alimentam o ERP automaticamente usando IA e RPA.',
    image: 'automacoes-com-ia',
    technologies: ['Python', 'OpenAI', 'N8N', 'PostgreSQL'],
    objective:
      'Reduzir o trabalho manual do time financeiro na classificação e lançamento de documentos.',
    result: 'Mais de 500 horas de trabalho manual economizadas por trimestre.',
    year: '2024',
  },
  {
    slug: 'marketplace-b2b',
    title: 'Marketplace B2B',
    category: 'Web',
    summary: 'Plataforma de compras corporativas entre empresas parceiras.',
    description:
      'Marketplace B2B com catálogo dinâmico, cotações automatizadas, negociação entre empresas e integração direta com os ERPs dos participantes.',
    image: 'marketplace-b2b',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
    objective:
      'Digitalizar o processo de cotação e compra entre empresas parceiras de uma mesma cadeia produtiva.',
    result: 'Ciclo médio de cotação reduzido de 5 dias para menos de 24 horas.',
    year: '2022',
  },
]
