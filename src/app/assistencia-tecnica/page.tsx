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
  'Consoles que não ligam ou desligam sozinhos',
  'Falhas de funcionamento que aparecem durante o uso',
  'Problemas de conexão do aparelho',
  'Diagnóstico técnico antes de qualquer serviço',
];

const controllerTopics = [
  'Controles e manetes que não respondem corretamente',
  'Botões e analógicos com problemas de funcionamento',
  'Falhas de conexão entre controle e console',
  'Avaliação de controles de diferentes gerações',
];

const differentials = [
  {
    icon: IconClock,
    title: 'Mais de 28 anos no segmento',
    text: 'Experiência construída acompanhando diferentes gerações de videogames.',
  },
  {
    icon: IconWrench,
    title: 'Videogame o dia inteiro',
    text: 'Não somos uma assistência genérica. Console e controle são o nosso trabalho diário.',
  },
  {
    icon: IconShield,
    title: 'Diagnóstico antes do serviço',
    text: 'A avaliação vem primeiro. O serviço acontece depois da sua aprovação.',
  },
  {
    icon: IconStore,
    title: 'Loja e bancada juntas',
    text: 'Produtos e suporte técnico especializado no mesmo endereço.',
  },
];

export default function AssistenciaTecnicaPage() {
  return (
    <>
      <PageHero
        eyebrow="Assistência técnica"
        tone="diag"
        title="Assistência técnica especializada em videogames"
        highlight="especializada"
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
          external
          cursorLabel="Avaliação"
        >
          <IconWhatsApp className="h-5 w-5" />
          Solicitar avaliação técnica
        </Button>
        <Button href="#como-funciona" variant="ghost" cursorLabel="Ver">
          Como funciona a avaliação
        </Button>
      </PageHero>

      <TrustBar />

      {/* Problemas atendidos */}
      <section className="py-24 sm:py-32" aria-labelledby="problemas-title">
        <div className="container-site">
          <SectionTitle
            eyebrow="Problemas atendidos"
            id="problemas-title"
            tone="diag"
            title="Seu videogame está apresentando algum destes sinais?"
            highlight="sinais?"
            description="Se o seu equipamento se encaixa em alguma dessas situações, ele pode passar por uma avaliação técnica na Eletrogames."
          />
          <div className="mt-14">
            <CommonProblems />
          </div>
        </div>
      </section>

      {/* Manutenção de consoles e de controles */}
      <section className="relative py-24 sm:py-32" aria-labelledby="manutencao-title">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-panel/40" />
        <div className="container-site">
          <SectionTitle
            eyebrow="Nossos serviços"
            id="manutencao-title"
            tone="diag"
            title="Manutenção de consoles e de controles"
            highlight="controles"
            description="A Eletrogames trabalha com os dois lados do equipamento: o aparelho que fica na estante e o que você segura na mão."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article
              className="rounded-[var(--radius)] border border-diag/20 bg-panel-raised/50 p-8"
              data-reveal
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-diag/30 bg-diag/[0.08] text-diag">
                <IconWrench className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-ink">Manutenção de consoles</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-faint">
                Diagnóstico e manutenção especializada para diferentes tipos de problemas
                apresentados por consoles, com análise técnica antes de qualquer serviço.
              </p>
              <ul className="mt-7 space-y-3">
                {consoleTopics.map((topic) => (
                  <li key={topic} className="flex gap-3 text-[15px] text-ink-muted">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-diag" />
                    {topic}
                  </li>
                ))}
              </ul>
              <Button
                href={whatsappLink(whatsappMessages.console)}
                variant="support"
                size="md"
                external
                cursorLabel="Falar"
                className="mt-8 w-full sm:w-auto"
              >
                <IconWhatsApp className="h-5 w-5" />
                Falar sobre meu console
              </Button>
            </article>

            <article
              className="rounded-[var(--radius)] border border-diag/20 bg-panel-raised/50 p-8"
              data-reveal
              style={{ ['--d' as string]: '110ms' }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-diag/30 bg-diag/[0.08] text-diag">
                <IconGamepad className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-ink">Manutenção de controles</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-faint">
                Avaliação e reparo de controles e manetes, com atenção às queixas mais comuns de
                quem joga com frequência.
              </p>
              <ul className="mt-7 space-y-3">
                {controllerTopics.map((topic) => (
                  <li key={topic} className="flex gap-3 text-[15px] text-ink-muted">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-diag" />
                    {topic}
                  </li>
                ))}
              </ul>
              <Button
                href={whatsappLink(whatsappMessages.controller)}
                variant="support"
                size="md"
                external
                cursorLabel="Falar"
                className="mt-8 w-full sm:w-auto"
              >
                <IconWhatsApp className="h-5 w-5" />
                Falar sobre meu controle
              </Button>
            </article>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportServices.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Steps />

      {/* Diferenciais */}
      <section className="py-24 sm:py-32" aria-labelledby="diferenciais-title">
        <div className="container-site">
          <SectionTitle
            eyebrow="Diferenciais"
            id="diferenciais-title"
            title="Por que trazer seu equipamento para a Eletrogames"
            highlight="Eletrogames"
            description="Experiência não se improvisa. São mais de 28 anos convivendo com consoles e controles, no balcão e na bancada."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {differentials.map(({ icon: Icon, title, text }, index) => (
              <li
                key={title}
                className="surface flex gap-5 p-6"
                data-reveal
                style={{ ['--d' as string]: `${index * 80}ms` }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 text-diag">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[17px] font-bold text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-faint">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ
        items={supportFaq}
        tone="diag"
        title="Dúvidas sobre a assistência técnica"
        description="O que mais nos perguntam antes de trazer um console ou controle para avaliação."
      />

      <CTA
        title="Antes de trocar de aparelho, vale uma avaliação."
        text="Descreva o que está acontecendo com seu console ou controle e fale com quem trabalha com videogame há mais de 28 anos."
        whatsappMessage={whatsappMessages.support}
        primaryLabel="Acessar a Loja"
        secondaryLabel="Solicitar avaliação técnica"
      />

      <ContactInfo description="Traga seu equipamento ou fale com a equipe antes de vir, o que for mais prático para você." />

      <JsonLd data={serviceSchema()} />
      <JsonLd data={faqSchema(supportFaq)} />
    </>
  );
}
