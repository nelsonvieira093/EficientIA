import type { CaseStudy } from '@/types'

export const CASES: CaseStudy[] = [
  {
    slug: 'gps-tec',
    client: 'GPS Tec',
    segment: 'Segurança industrial e controle de acesso',
    title: 'Como o GPS Tec substitui a revista manual por triagem inteligente com IA',
    challenge:
      'Áreas de alta segurança como mineradoras, siderúrgicas, portos, presídios e data centers dependem quase totalmente da revista manual feita por seguranças — um processo sujeito a falhas humanas, inconsistente e sem registro auditável de cada inspeção.',
    solution:
      'Desenvolvemos o GPS Tec, uma cabine de revista inteligente que combina câmera RGB, câmera térmica e sensores físicos (detector de metais, RFID, presença) com IA para identificar objetos metálicos, celulares, ferramentas e volumes suspeitos automaticamente, classificando cada pessoa como liberada, em atenção ou irregular — com resposta em tempo real na tela e histórico completo para auditoria.',
    technologies: ['Visão Computacional', 'IA', 'IoT', 'Python'],
    results: [
      { label: 'Sensores combinados por IA (RGB, térmica, metal, RFID, presença)', value: '5+' },
      { label: 'Níveis de classificação automática', value: '3' },
      { label: 'Setores de alta segurança atendidos', value: '9' },
    ],
    image: 'case-gps-tec',
  },
  {
    slug: 'erp-eficientia',
    client: 'ERP EficientIA',
    segment: 'Gestão empresarial (ERP SaaS)',
    title: 'Como o ERP EficientIA elimina retrabalho entre fiscal, financeiro e contábil',
    challenge:
      'Pequenas e médias empresas costumam operar com sistemas fiscais, financeiros e contábeis desconectados — ou até planilhas soltas — gerando retrabalho manual, notas fiscais duplicadas e lançamentos contábeis feitos à mão.',
    solution:
      'Criamos o ERP EficientIA, uma plataforma SaaS multiempresa onde os módulos conversam entre si automaticamente: ao importar uma NF-e, o Fiscal valida a nota, o Financeiro gera a conta a pagar e, quando ela é paga, o Contábil lança o registro sozinho — com um painel de Super Admin para administrar todos os clientes, planos e cobrança recorrente via Stripe.',
    technologies: ['PostgreSQL', 'Row-Level Security', 'Stripe', 'IA'],
    results: [
      { label: 'Módulos integrados automaticamente', value: '3' },
      { label: 'Isolamento de dados por empresa', value: 'Multi-tenant' },
      { label: 'Painel para gerenciar clientes e cobrança', value: 'Super Admin' },
    ],
    image: 'case-erp-eficientia',
  },
  {
    slug: 'grupo-vantage-logistica',
    client: 'Grupo Vantage Logística',
    segment: 'Logística e transporte',
    title: 'Como reduzimos em 40% o tempo operacional de uma transportadora',
    challenge:
      'A Vantage operava com planilhas desconectadas para gestão de frota, rotas e faturamento, gerando retrabalho, erros manuais e falta de visibilidade sobre a operação em tempo real.',
    solution:
      'Desenvolvemos uma plataforma unificada de gestão logística com rastreamento em tempo real, roteirização inteligente e faturamento automatizado, integrada ao ERP existente da empresa.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    results: [
      { label: 'Redução no tempo operacional', value: '40%' },
      { label: 'Queda em custos com combustível', value: '18%' },
      { label: 'Aumento na pontualidade', value: '25%' },
    ],
    image: 'case-vantage',
  },
  {
    slug: 'orbita-saude',
    client: 'Orbita Saúde',
    segment: 'Healthtech',
    title: 'Um app que virou diferencial competitivo para uma healthtech',
    challenge:
      'A Orbita precisava lançar um aplicativo de telemedicina robusto em poucos meses, com segurança de dados sensíveis de pacientes e integração com múltiplos convênios.',
    solution:
      'Construímos um app mobile e um painel médico com arquitetura segura, conformidade com boas práticas de proteção de dados e integração via API com sistemas de convênios parceiros.',
    technologies: ['Flutter', 'Python', 'FastAPI', 'PostgreSQL', 'Azure'],
    results: [
      { label: 'Consultas realizadas no app', value: '+50 mil' },
      { label: 'Tempo médio de agendamento', value: '-70%' },
      { label: 'Avaliação média nas lojas de apps', value: '4.8/5' },
    ],
    image: 'case-orbita',
  },
  {
    slug: 'fintera-pagamentos',
    client: 'Fintera Pagamentos',
    segment: 'Fintech',
    title: 'Automatizando a conciliação financeira com inteligência artificial',
    challenge:
      'O time financeiro da Fintera gastava dezenas de horas por semana conciliando manualmente transações e classificando documentos fiscais recebidos por e-mail.',
    solution:
      'Implementamos um pipeline de automação com IA que lê, classifica e concilia documentos financeiros automaticamente, integrando o resultado diretamente ao ERP da empresa via API.',
    technologies: ['Python', 'OpenAI', 'N8N', 'PostgreSQL'],
    results: [
      { label: 'Horas manuais economizadas por mês', value: '+160h' },
      { label: 'Precisão na classificação automática', value: '97%' },
      { label: 'Redução no tempo de fechamento', value: '35%' },
    ],
    image: 'case-fintera',
  },
  {
    slug: 'construtora-horizonte',
    client: 'Construtora Horizonte',
    segment: 'Construção civil',
    title: 'Visibilidade total da operação com um dashboard executivo',
    challenge:
      'A diretoria da Horizonte tomava decisões estratégicas com base em relatórios manuais desatualizados, sem visão consolidada de custos e margem por obra.',
    solution:
      'Desenvolvemos um dashboard de Business Intelligence que consolida dados de obras, compras e financeiro em tempo real, com indicadores personalizados por perfil de usuário.',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    results: [
      { label: 'Tempo para gerar relatórios', value: '-90%' },
      { label: 'Obras monitoradas em tempo real', value: '32' },
      { label: 'Precisão nas projeções de margem', value: '+22%' },
    ],
    image: 'case-horizonte',
  },
]
