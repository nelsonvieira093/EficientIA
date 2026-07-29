import type { NavLink } from '@/types'

export const SITE = {
  name: 'EficientIA',
  tagline: 'Tecnologia que transforma negócios.',
  url: 'https://www.eficientia.com.br',
  description:
    'A EficientIA desenvolve softwares sob medida, aplicações web, inteligência artificial, automações e soluções empresariais para empresas que desejam inovar.',
  foundingYear: 2016,
  cnpj: '66.088.400/0001-09',
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Projetos', path: '/projetos' },
  { label: 'Cases', path: '/cases' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contato', path: '/contato' },
]

export const FOOTER_LINKS = {
  company: [
    { label: 'Sobre nós', path: '/sobre' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Cases de sucesso', path: '/cases' },
  ],
  resources: [
    { label: 'Blog', path: '/blog' },
    { label: 'Contato', path: '/contato' },
    { label: 'Política de Privacidade', path: '/privacidade' },
    { label: 'Termos de Uso', path: '/termos' },
  ],
}

export const CONTACT = {
  phone: '+55 (11) 94910-7860',
  phoneRaw: '+5511949107860',
  whatsapp: '+55 (11) 94910-7860',
  whatsappLink: 'https://wa.me/5511949107860',
  email: 'contato.eficientia@outlook.com',
  address: 'Osasco - São Paulo',
  hours: [
    { day: 'Segunda a sexta', time: '09h às 18h' },
    { day: 'Sábado, domingo e feriados', time: 'Fechado' },
  ],
  mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent('Osasco, São Paulo')}&output=embed`,
}

export const SOCIALS = [
  { label: 'LinkedIn', short: 'in', url: 'https://linkedin.com/company/eficientia', color: '#0A66C2' },
  { label: 'Instagram', short: 'ig', url: 'https://instagram.com/eficientia', color: '#E1306C' },
  { label: 'GitHub', short: 'gh', url: 'https://github.com/eficientia', color: '#6e7681' },
  { label: 'YouTube', short: 'yt', url: 'https://youtube.com/@eficientia', color: '#FF0000' },
] as const
