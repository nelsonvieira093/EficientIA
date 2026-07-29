import type { BlogPost } from '@/types'

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'tendencias-de-tecnologia-para-empresas',
    title: '5 tendências de tecnologia que empresas não podem ignorar',
    excerpt:
      'De IA generativa a plataformas low-code, veja quais tendências tecnológicas realmente merecem atenção da liderança neste ano.',
    content: [
      'Todo ano surgem dezenas de "tendências" tecnológicas, mas poucas realmente mudam a forma como empresas operam. Separar o que é hype do que é substância é essencial para investir tempo e orçamento com inteligência.',
      'IA generativa aplicada a processos internos, plataformas low-code para acelerar automações simples, arquiteturas orientadas a eventos e observabilidade como prática padrão são movimentos que já deixaram de ser experimentais.',
      'Mais importante do que adotar uma tendência por modismo é entender qual problema de negócio ela resolve para a sua empresa especificamente — é esse filtro que separa investimentos que geram retorno de projetos que nunca saem do papel.',
    ],
    category: 'Tecnologia',
    author: 'Equipe EficientIA',
    date: '2026-07-02',
    readTime: '5 min',
    image: 'blog-tendencias',
  },
  {
    slug: 'como-a-ia-esta-mudando-o-desenvolvimento-de-software',
    title: 'Como a IA está mudando o desenvolvimento de software',
    excerpt:
      'Da geração de código a testes automatizados, entenda como a inteligência artificial está acelerando o ciclo de desenvolvimento sem substituir engenheiros.',
    content: [
      'A inteligência artificial deixou de ser uma promessa distante para se tornar parte do dia a dia de times de engenharia. Ferramentas de geração de código, revisão automatizada e testes inteligentes já fazem parte do fluxo de trabalho de equipes de alta performance.',
      'Mais do que substituir desenvolvedores, a IA amplia a capacidade de entrega: tarefas repetitivas são automatizadas, bugs são identificados mais cedo e o tempo da equipe é redirecionado para decisões de arquitetura e experiência do usuário.',
      'Na EficientIA, integramos IA em etapas específicas do nosso processo de desenvolvimento — sempre com revisão humana — para entregar software de qualidade em menos tempo, sem abrir mão de segurança e manutenibilidade.',
    ],
    category: 'IA',
    author: 'Equipe EficientIA',
    date: '2026-06-12',
    readTime: '6 min',
    image: 'blog-ia-dev',
  },
  {
    slug: 'erp-sob-medida-vs-erp-de-prateleira',
    title: 'ERP sob medida vs. ERP de prateleira: qual escolher?',
    excerpt:
      'Entenda as diferenças entre adotar um ERP pronto e investir em um sistema de gestão desenvolvido sob medida para o seu negócio.',
    content: [
      'ERPs de prateleira resolvem problemas genéricos rapidamente, mas raramente se encaixam perfeitamente nos processos específicos de cada empresa — o que muitas vezes gera módulos não utilizados e customizações caras.',
      'Um ERP sob medida, por outro lado, é desenhado a partir dos processos reais da operação, o que reduz fricção no dia a dia das equipes e evita pagar por funcionalidades que nunca serão usadas.',
      'A decisão ideal depende do estágio da empresa, da complexidade dos processos e do orçamento disponível. Empresas em crescimento acelerado, com processos únicos, tendem a se beneficiar mais de soluções sob medida.',
    ],
    category: 'ERP',
    author: 'Equipe EficientIA',
    date: '2026-05-28',
    readTime: '7 min',
    image: 'blog-erp',
  },
  {
    slug: 'guia-de-migracao-para-cloud',
    title: 'Guia prático de migração para a nuvem',
    excerpt:
      'Um passo a passo para empresas que querem migrar sua infraestrutura para AWS ou Azure sem dor de cabeça.',
    content: [
      'Migrar para a nuvem é mais do que mover servidores: é repensar arquitetura, segurança e custos operacionais. O primeiro passo é mapear a infraestrutura atual e identificar dependências críticas.',
      'Em seguida, é fundamental escolher entre uma estratégia lift-and-shift, mais rápida, ou uma re-arquitetura completa, que aproveita melhor os recursos nativos da nuvem, como escalabilidade automática e serviços gerenciados.',
      'Independentemente da estratégia, monitoramento e controle de custos devem ser definidos desde o primeiro dia — migrações mal planejadas costumam gerar surpresas na fatura no fim do mês.',
    ],
    category: 'Cloud',
    author: 'Equipe EficientIA',
    date: '2026-05-10',
    readTime: '8 min',
    image: 'blog-cloud',
  },
  {
    slug: 'automacao-de-processos-por-onde-comecar',
    title: 'Automação de processos: por onde começar?',
    excerpt:
      'Nem toda automação exige um projeto complexo. Veja como identificar rapidamente processos com maior potencial de automação.',
    content: [
      'O primeiro erro de muitas empresas é tentar automatizar tudo de uma vez. O caminho mais eficiente é mapear processos repetitivos, de alto volume e baixa variabilidade — esses são os melhores candidatos.',
      'Ferramentas como N8N permitem prototipar automações rapidamente, conectando sistemas que já existem na empresa sem exigir reescrever nada do zero.',
      'Depois de validar o ganho em processos simples, é possível evoluir para automações mais sofisticadas, incluindo tomada de decisão assistida por inteligência artificial.',
    ],
    category: 'Automação',
    author: 'Equipe EficientIA',
    date: '2026-04-22',
    readTime: '5 min',
    image: 'blog-automacao',
  },
  {
    slug: 'arquitetura-de-microsservicos-quando-vale-a-pena',
    title: 'Arquitetura de microsserviços: quando vale a pena?',
    excerpt:
      'Microsserviços não são solução para todos os problemas. Entenda em quais cenários essa arquitetura realmente compensa.',
    content: [
      'Microsserviços prometem escalabilidade e times autônomos, mas também trazem complexidade operacional significativa — comunicação entre serviços, observabilidade e consistência de dados exigem maturidade técnica.',
      'Para produtos em estágio inicial, um monolito bem modularizado costuma ser mais eficiente: mais simples de manter, testar e evoluir com times pequenos.',
      'A migração para microsserviços faz mais sentido quando times crescem, domínios de negócio se tornam claros e a necessidade de escalar partes específicas do sistema de forma independente se torna real.',
    ],
    category: 'Desenvolvimento',
    author: 'Equipe EficientIA',
    date: '2026-04-05',
    readTime: '9 min',
    image: 'blog-microsservicos',
  },
  {
    slug: 'dados-como-vantagem-competitiva',
    title: 'Dados como vantagem competitiva para pequenas e médias empresas',
    excerpt:
      'Business Intelligence não é só para grandes corporações. Veja como PMEs podem usar dados para tomar decisões melhores.',
    content: [
      'Muitas pequenas e médias empresas acumulam dados valiosos em sistemas dispersos sem nunca transformá-los em decisão. O primeiro passo é centralizar essas fontes em um repositório confiável.',
      'Dashboards simples, com poucos indicadores realmente relevantes, geram mais valor do que painéis complexos que ninguém consulta no dia a dia.',
      'Empresas que desenvolvem cultura de dados — por menor que seja a operação — tomam decisões mais rápidas e reduzem o risco de escolhas baseadas apenas em intuição.',
    ],
    category: 'Negócios',
    author: 'Equipe EficientIA',
    date: '2026-03-18',
    readTime: '6 min',
    image: 'blog-dados',
  },
]
