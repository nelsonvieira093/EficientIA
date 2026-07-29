import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Clock, MapPin, Send, CheckCircle2, Loader2, AlertTriangle } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, viewportOnce } from '@/animations/variants'
import { PageHeader } from '@/components/sections/PageHeader'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Seo } from '@/components/shared/Seo'
import { CONTACT, SOCIALS } from '@/constants/site'
import { SERVICES } from '@/constants/services'
import { contactFormSchema, submitContactForm, type ContactFormValues } from '@/services/contactForm'
import { cn } from '@/utils/cn'

const inputClasses =
  'w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) })

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null)
    try {
      await submitContactForm(values)
      setSubmitted(true)
      reset()
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Não foi possível enviar sua mensagem. Tente novamente.',
      )
    }
  }

  return (
    <>
      <Seo
        title="Contato"
        description="Entre em contato com a EficientIA para solicitar um orçamento ou tirar dúvidas sobre desenvolvimento de software, IA e automação para o seu negócio."
        path="/contato"
      />

      <PageHeader
        eyebrow="Fale com a gente"
        title="Vamos conversar sobre o seu próximo projeto"
        description="Preencha o formulário ou fale diretamente com nosso time comercial pelos canais abaixo."
      />

      <Section tone="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 p-12 text-center">
                <CheckCircle2 className="mb-4 h-12 w-12 text-brand-600" />
                <h2 className="mb-2 font-display text-xl font-bold text-navy-900">Mensagem enviada!</h2>
                <p className="mb-6 max-w-sm text-sm text-slate-600">
                  Recebemos sua solicitação e nossa equipe entrará em contato em até 24 horas úteis.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Nome completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      className={inputClasses}
                      placeholder="Seu nome"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className={inputClasses}
                      placeholder="voce@empresa.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputClasses}
                      placeholder="(11) 91234-5678"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-xs text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Empresa <span className="font-normal text-slate-400">(opcional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      className={inputClasses}
                      placeholder="Nome da sua empresa"
                      {...register('company')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy-800">
                    Serviço de interesse
                  </label>
                  <select
                    id="service"
                    className={cn(inputClasses, 'appearance-none bg-white')}
                    defaultValue=""
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                    {...register('service')}
                  >
                    <option value="" disabled>
                      Selecione um serviço
                    </option>
                    {SERVICES.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Outro">Outro</option>
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-1.5 text-xs text-red-600">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-800">
                    Conte sobre seu projeto
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={cn(inputClasses, 'resize-none')}
                    placeholder="Descreva brevemente o que você precisa..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>
                      {submitError} Se preferir, fale com a gente direto pelo{' '}
                      <a href={CONTACT.whatsappLink} target="_blank" rel="noreferrer" className="font-semibold underline">
                        WhatsApp
                      </a>
                      .
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  icon={isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
            className="space-y-4 lg:col-span-2"
          >
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
              <h3 className="mb-4 font-display text-base font-bold text-navy-900">Canais diretos</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-navy-800">Telefone</p>
                    <a href={`tel:${CONTACT.phoneRaw}`} className="text-slate-600 hover:text-brand-600">
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-navy-800">WhatsApp</p>
                    <a href={CONTACT.whatsappLink} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-brand-600">
                      {CONTACT.whatsapp}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-navy-800">E-mail</p>
                    <a href={`mailto:${CONTACT.email}`} className="text-slate-600 hover:text-brand-600">
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-navy-800">Endereço</p>
                    <p className="text-slate-600">{CONTACT.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-navy-800">Horário de atendimento</p>
                    {CONTACT.hours.map((h) => (
                      <p key={h.day} className="text-slate-600">
                        {h.day}: {h.time}
                      </p>
                    ))}
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex gap-2 border-t border-navy-100 pt-6">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-100 text-xs font-bold uppercase text-navy-600 transition-colors hover:border-brand-500 hover:text-brand-600"
                  >
                    {social.short}
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="overflow-hidden rounded-2xl border border-navy-100 shadow-soft"
            >
              <iframe
                title="Localização da EficientIA no mapa"
                src={CONTACT.mapEmbedUrl}
                width="100%"
                height="240"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
