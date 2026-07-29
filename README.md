# EficientIA — Site Institucional

Site institucional da EficientIA: tecnologia, automação e inteligência artificial aplicada a negócios.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router · Framer Motion · React Hook Form + Zod · TanStack Query

## Rodando localmente

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173` (ou a próxima porta livre).

## Variáveis de ambiente

O formulário de contato envia e-mails via [Web3Forms](https://web3forms.com) (sem backend próprio). Copie `.env.example` para `.env` e defina sua chave:

```bash
cp .env.example .env
```

```
VITE_WEB3FORMS_ACCESS_KEY=sua_chave_aqui
```

Sem essa variável, o formulário exibe um aviso de "não configurado" com um botão de fallback para WhatsApp, em vez de falhar silenciosamente.

**Importante:** ao fazer deploy (Vercel, Netlify, etc.), configure essa mesma variável nas configurações de ambiente da plataforma de hospedagem.

## Build

```bash
npm run build   # gera a pasta dist/
npm run preview # serve o build localmente
```

## Estrutura

```
src/
  components/  # ui (primitivos), layout (header/footer), sections, shared
  pages/       # uma página por rota
  layouts/     # MainLayout
  constants/   # conteúdo do site (serviços, projetos, cases, blog, etc.)
  hooks/       # hooks reutilizáveis
  services/    # integrações externas (ex: envio do formulário)
  animations/  # variantes do Framer Motion
  types/       # tipos TypeScript compartilhados
  utils/       # funções utilitárias
```
