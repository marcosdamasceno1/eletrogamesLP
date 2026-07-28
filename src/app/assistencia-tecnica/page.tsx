import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import Steps from '@/components/Steps';
import TrustBar from '@/components/TrustBar';
import FAQ, { supportFaq } from '@/components/FAQ';
import CTA from '@/components/CTA';
import ContactInfo from '@/components/ContactInfo';
import JsonLd from '@/components/JsonLd';
import { CommonProblems, supportServices } from '@/components/TechSupport';
import {
  IconCheck,
  IconClock,
  IconGamepad,
  IconShield,
  IconStore,
  IconWhatsApp,
  IconWrench,
} from '@/components/Icons';
import { faqSchema, serviceSchema } from '@/lib/schema';
import { whatsappLink, whatsappMessages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Assistência Técnica de Videogames | Manutenção de Console e Controle',
  description:
    'Assistência técnica especializada em videogames: diagnóstico, manutenção e reparo de consoles, controles e manetes. Mais de 28 anos de experiência no segmento. Solicite sua avaliação técnica.',
  alternates: { canonical: '/assistencia-tecnica' },
  openGraph: {
    title: 'Assistência técnica especializada em videogames | Eletrogames',
    description:
      'Manutenção de console e conserto de controle com quem trabalha com videogames há mais de 28 anos.',
    url: '/assistencia-tecnica',
  },
};

const consoleTopics = [
  'Avaliação de consoles que não ligam ou desligam inesperadamente',
  'Análise de falhas de funcionamento apresentadas durante o uso',
  'Verificação de problemas de conexão do equipamento',
  'Diagnóstico técnico antes de qualquer serviço',
];

const controllerTopics = [
  'Controles e manetes que não respondem corretamente',
  'Botões e analógicos com problemas de funcionamento',
  'Falhas de conexão entre controle e console',
  'Avaliação técnica de controles de diferentes gerações',
];

const differentials = [
  {
    icon: IconClock,
    title: 'Mais de 28 anos no segmento',
    text: 'Experiência construída acompanhando diferentes gerações de videogames.',
  },
  {
    icon: IconWrench,
    title: 'Foco em videogames',
    text: 'Não somos uma assistência genérica: consoles e controles são o nosso dia a dia.',
  },
  {
    icon: IconShield,
    title: 'Diagnóstico antes do serviço',
    text: 'A avaliação técnica vem primeiro. O serviço só acontece após a sua aprovação.',
  },
  {
    icon: IconStore,
    title: 'Venda e assistência juntas',
    text: 'Produtos e suporte técnico especializado no mesmo lugar.',
  },
];

export default function AssistenciaTecnicaPage() {
  return (
    <>
      <PageHero
        eyebrow="Assistência Técnica"
        title="Assistência técnica especializada em videogames"
        description="Seu console ou controle apresentou problema? Fale com quem possui mais de 28 anos de experiência no universo dos videogames."
        trust={[
          '+28 anos de experiência',
          'Consoles, controles e manetes',
          'Diagnóstico antes do serviço',
        ]}
      >
        <Button
          href={whatsappLink(whatsappMessages.support)}
          variant="support"
          size="lg"
          external
        >
          <IconWhatsApp className="h-5 w-5" />
          Solicitar avaliação técnica
        </Button>
        <Button href="#como-funciona" variant="ghost" size="lg">
          Como funciona a avaliação
        </Button>
      </PageHero>

      <TrustBar />

      {/* 3. Problemas atendidos */}
      <section className="py-20 sm:py-28" aria-labelledby="problemas-title">
        <div className="container-site">
          <SectionTitle
            eyebrow="Problemas atendidos"
            title={<span id="problemas-title">Seu videogame está apresentando algum destes sinais?</span>}
            description="Se o seu equipamento se encaixa em alguma dessas situações, ele pode passar por uma avaliação técnica na Eletrogames."
          />
          <div className="mt-12">
            <CommonProblems />
          </div>
        </div>
      </section>

      {/* 4 e 5. Manutenção de consoles e de controles */}
      <section className="relative py-20 sm:py-28" aria-labelledby="manutencao-title">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-900" />
        <div className="container-site">
          <SectionTitle
            eyebrow="Nossos serviços"
            title={<span id="manutencao-title">Manutenção de consoles e de controles</span>}
            description="A Eletrogames é especializada em diagnóstico, manutenção e reparo dos dois lados do equipamento: o console e o que você tem nas mãos."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-accent/20 bg-ink-800/60 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent-light">
                <IconWrench className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">
                Manutenção de consoles
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Diagnóstico e manutenção especializada para diferentes tipos de problemas
                apresentados por consoles, com análise técnica antes de qualquer serviço.
              </p>
              <ul className="mt-6 space-y-3">
                {consoleTopics.map((topic) => (
                  <li key={topic} className="flex gap-3 text-sm text-slate-300">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-light" />
                    {topic}
                  </li>
                ))}
              </ul>
              <Button
                href={whatsappLink(whatsappMessages.console)}
                variant="support"
                className="mt-7 w-full sm:w-auto"
                external
              >
                <IconWhatsApp className="h-5 w-5" />
                Falar sobre meu console
              </Button>
            </article>

            <article className="rounded-2xl border border-accent/20 bg-ink-800/60 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent-light">
                <IconGamepad className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">
                Manutenção de controles
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Avaliação e reparo de controles e manetes, com atenção às queixas mais comuns de
                quem joga com frequência.
              </p>
              <ul className="mt-6 space-y-3">
                {controllerTopics.map((topic) => (
                  <li key={topic} className="flex gap-3 text-sm text-slate-300">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-light" />
                    {topic}
                  </li>
                ))}
              </ul>
              <Button
                href={whatsappLink(whatsappMessages.controller)}
                variant="support"
                className="mt-7 w-full sm:w-auto"
                external
              >
                <IconWhatsApp className="h-5 w-5" />
                Falar sobre meu controle
              </Button>
            </article>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Como funciona a avaliação */}
      <Steps />

      {/* 7. Diferenciais */}
      <section className="py-20 sm:py-28" aria-labelledby="diferenciais-title">
        <div className="container-site">
          <SectionTitle
            eyebrow="Diferenciais"
            title={<span id="diferenciais-title">Por que trazer seu equipamento para a Eletrogames</span>}
            description="Experiência não se improvisa. São mais de 28 anos convivendo com consoles e controles, na venda e na parte técnica."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {differentials.map(({ icon: Icon, title, text }) => (
              <li key={title} className="surface flex gap-5 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-light">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQ
        items={supportFaq}
        title="Dúvidas sobre a assistência técnica"
        description="O que mais nos perguntam antes de trazer um console ou controle para avaliação."
      />

      {/* 9. CTA WhatsApp */}
      <CTA
        title="Antes de substituir seu equipamento, fale com nossos especialistas."
        text="Descreva o que está acontecendo com seu console ou controle e solicite uma avaliação técnica com quem trabalha com videogames há mais de 28 anos."
        whatsappMessage={whatsappMessages.support}
        primaryLabel="Acessar a Loja"
        secondaryLabel="Solicitar avaliação técnica"
      />

      {/* 10. Localização e contato */}
      <ContactInfo description="Traga seu equipamento ou fale com a equipe antes de vir — o que for mais prático para você." />

      <JsonLd data={serviceSchema()} />
      <JsonLd data={faqSchema(supportFaq)} />
    </>
  );
}
