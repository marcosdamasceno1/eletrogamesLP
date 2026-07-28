import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de privacidade do site institucional da Eletrogames: como tratamos os dados de quem entra em contato conosco.',
  alternates: { canonical: '/politica-de-privacidade' },
  robots: { index: false, follow: true },
};

/**
 * Modelo base de política de privacidade.
 * Revise com o responsável jurídico da empresa antes de publicar e preencha
 * os placeholders com os dados oficiais da Eletrogames.
 */
export default function PoliticaPage() {
  return (
    <>
      <PageHero
        eyebrow="Documento"
        title="Política de Privacidade"
        highlight="Privacidade"
        description="Como a Eletrogames trata as informações de quem acessa este site e entra em contato conosco."
      />

      <section className="pb-24">
        <div className="container-site max-w-3xl space-y-8 text-base leading-relaxed text-ink-muted">
          <p className="rounded-xl border border-white/10 bg-panel-raised/60 p-5 text-sm text-ink-faint">
            [MODELO BASE: revisar com o responsável jurídico da Eletrogames antes da publicação.]
          </p>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">1. Informações que coletamos</h2>
            <p className="mt-3">
              Este site é institucional e não realiza vendas nem processa pagamentos. As informações
              que você compartilha são aquelas enviadas voluntariamente ao entrar em contato com a
              Eletrogames, por exemplo, nome, telefone e a descrição do equipamento ao solicitar
              uma avaliação técnica pelo WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">2. Como usamos as informações</h2>
            <p className="mt-3">
              Utilizamos os dados recebidos exclusivamente para responder ao seu contato, prestar
              atendimento sobre produtos e conduzir o processo de avaliação e manutenção de
              equipamentos.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">3. Compartilhamento</h2>
            <p className="mt-3">
              A Eletrogames não comercializa dados pessoais. Compartilhamentos ocorrem apenas quando
              necessários para a prestação do serviço solicitado ou por exigência legal.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">4. Links externos</h2>
            <p className="mt-3">
              Este site direciona o visitante para a loja online da Eletrogames e para canais como
              WhatsApp e redes sociais. Esses ambientes possuem políticas próprias de privacidade,
              independentes deste site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">5. Cookies e medição</h2>
            <p className="mt-3">
              [DESCREVER AS FERRAMENTAS DE MEDIÇÃO UTILIZADAS, CASO EXISTAM: por exemplo, ferramentas
              de análise de tráfego ou campanhas de anúncios.]
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">6. Seus direitos</h2>
            <p className="mt-3">
              Você pode solicitar informações sobre os seus dados, sua correção ou sua exclusão,
              conforme a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">7. Contato</h2>
            <p className="mt-3">
              Para tratar de qualquer assunto relacionado a esta política, fale com a Eletrogames:
              <br />
              Telefone: {siteConfig.phone}
              <br />
              WhatsApp: {siteConfig.whatsappDisplay}
              <br />
              Endereço: {siteConfig.address.street} — {siteConfig.address.city}/
              {siteConfig.address.state}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
