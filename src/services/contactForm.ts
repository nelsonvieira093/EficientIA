import { z } from 'zod'
import { CONTACT, SITE } from '@/constants/site'

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome completo.'),
  email: z.email('Informe um e-mail válido.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Informe um telefone válido com DDD.')
    .max(20, 'Telefone inválido.'),
  company: z.string().trim().optional(),
  service: z.string().min(1, 'Selecione um serviço de interesse.'),
  message: z.string().trim().min(10, 'Conte um pouco mais sobre seu projeto (mín. 10 caracteres).'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

/**
 * Sends the contact form straight from the browser to Web3Forms, which
 * relays it by email to CONTACT.email — no backend required. Requires
 * VITE_WEB3FORMS_ACCESS_KEY (see .env.example) to be set at build time.
 */
export async function submitContactForm(values: ContactFormValues): Promise<{ success: true }> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error(
      'Formulário não configurado: defina VITE_WEB3FORMS_ACCESS_KEY (veja .env.example) para ativar o envio de e-mails.',
    )
  }

  // Web3Forms' CORS support only covers application/json bodies — form-urlencoded
  // (and, inconsistently, multipart FormData) submissions trigger CORS failures
  // from the browser. See https://docs.web3forms.com/getting-started/troubleshooting
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Novo contato pelo site — ${SITE.name}`,
      from_name: `${SITE.name} — Site institucional`,
      to: CONTACT.email,
      name: values.name,
      email: values.email,
      phone: values.phone,
      company: values.company || 'Não informado',
      service: values.service,
      message: values.message,
    }),
  })

  const data = await response.json()

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Não foi possível enviar sua mensagem. Tente novamente em instantes.')
  }

  return { success: true }
}
