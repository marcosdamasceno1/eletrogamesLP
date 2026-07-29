# Eletrogames — Site institucional

Site institucional e de conversão da Eletrogames: loja especializada em videogames
com mais de 28 anos de mercado, atuando em venda de consoles, controles, periféricos
e acessórios, além de assistência técnica de consoles e controles/manetes.

## Guias práticos

Se você veio para mexer no conteúdo e não no código, comece por aqui:

- **[docs/EDITAR-O-SITE.md](docs/EDITAR-O-SITE.md)** — trocar textos, telefone, endereço,
  WhatsApp, depoimentos e perguntas frequentes.
- **[docs/LOGOMARCA.md](docs/LOGOMARCA.md)** — subir a logomarca oficial e ajustar as
  cores da marca.
- **[docs/PUBLICAR.md](docs/PUBLICAR.md)** — gerar os arquivos e enviar para o servidor.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- Zero dependências de UI, animação ou 3D. Ícones em SVG inline, acordeão em `<details>`
  nativo, e todos os efeitos escritos à mão em CSS mais um único observer.

## Direção de arte

A identidade vem da loja online da própria Eletrogames: fundo quase preto com
fundo violeta, neon violeta/magenta nos destaques e ciano no lado técnico.

Os dois acentos têm função fixa e nunca trocam de lado:

- **violeta → magenta** = comprar. Loja, produtos, catálogo.
- **ciano** = consertar. Assistência, avaliação, diagnóstico.

Tipografia: **Archivo** nos títulos, em caixa alta e peso máximo, no registro do
banner da loja. **IBM Plex Sans** no texto e **IBM Plex Mono** nos rótulos.

O elemento de assinatura é o **controle desenhado em neon no hero**, que se traça
sozinho quando entra na tela. É SVG escrito à mão com gradiente violeta→magenta→ciano:
pesa poucos KB, fica nítido em qualquer tela e acompanha a cor da marca.

As categorias de produto são as mesmas da loja online, na mesma ordem: manetes,
consoles, headset, controles mobile e acessórios. Quem sai daqui e cai lá encontra a
prateleira com o nome que já leu aqui.

### Uma nota sobre o neon e o contraste

O preenchimento dos botões é um violeta escurecido de propósito (`#7526E0`), e não o
violeta vibrante. O brilho vem do halo em volta, não da cor de fundo. Isso foi medido:
com o violeta claro, o texto branco dos botões reprovava no critério AA de contraste.
O magenta segue vivo nos títulos, bordas e brilhos, onde não carrega texto pequeno.

## Efeitos e onde eles moram

Quase tudo está em `src/components/fx/Interactions.tsx`, um único componente cliente
com um observer, um listener de ponteiro e um de rolagem para a página inteira. Os
efeitos são delegados por atributo, então conteúdo renderizado no servidor participa
sem virar componente cliente:

- `data-reveal` — sobe e revela ao entrar na tela (`--d` controla o atraso)
- `data-tilt` — cartão inclina sob o ponteiro
- `data-magnetic="0.2"` — o elemento persegue o ponteiro (o número é a força)
- `data-cursor="Ver loja"` — o cursor vira um disco azul com esse rótulo

Cursor, ímã e inclinação só entram em ponteiros finos. Nada disso roda no toque nem
para quem pediu movimento reduzido, e o conteúdo nunca fica escondido esperando
animação: sem JavaScript, o `<noscript>` deixa tudo visível.

## Como rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run publicar   # gera a pasta dist/ pronta para o servidor
```

## Antes de publicar: preencha os dados reais

Todos os dados da empresa estão centralizados em **`src/lib/site.ts`**. Nenhuma
informação foi inventada: o que não foi fornecido está marcado como placeholder entre
colchetes. Substitua:

| Campo | Onde aparece |
| --- | --- |
| `url` | canonical, sitemap, robots, Open Graph |
| `storeUrl` | todos os CTAs de "Loja Online" e "Ver produtos na loja" |
| `whatsappUrl` | botão flutuante, CTAs de assistência, rodapé |
| `phone`, `instagram`, `instagramUrl` | rodapé e página de contato |
| `address.*` (endereço, cidade, estado, CEP, Google Maps, coordenadas) | rodapé, contato, SEO local |
| `openingHours` | rodapé e contato |

Os links tratam placeholders com segurança: enquanto um valor estiver no formato
`[ALGUMA COISA]`, `safeHref()` devolve `#` em vez de gerar um link quebrado, e o
Schema.org omite o campo em vez de publicar dado falso.

### Outros conteúdos a preencher

- **Logomarca** — `src/lib/brand.ts`, com o passo a passo em `docs/LOGOMARCA.md`.
- **Depoimentos** — `src/components/Testimonials.tsx`. Os cartões estão marcados como
  `[DEPOIMENTO REAL DO CLIENTE]`. Nenhuma avaliação foi inventada.
- **Fotos históricas e linha do tempo** — `src/components/History.tsx`.
- **Mapa** — `src/components/ContactInfo.tsx`. Ao preencher `address.mapsUrl` com uma
  URL de embed, troque o bloco reservado por um `<iframe loading="lazy">`.
- **Política de privacidade** — `src/app/politica-de-privacidade/page.tsx` é um modelo
  base e precisa de revisão jurídica antes da publicação.

## Estrutura

```
docs/                                # guias de edição, logomarca e publicação
public/
├─ brand/                            # arquivos da logomarca oficial
└─ og-image.svg                      # imagem de compartilhamento
src/
├─ app/
│  ├─ layout.tsx                     # metadata global, fontes, header/footer, Schema Store
│  ├─ page.tsx                       # Home (landing institucional completa)
│  ├─ sobre/, assistencia-tecnica/, contato/, politica-de-privacidade/
│  └─ not-found.tsx, sitemap.ts, robots.ts, globals.css
├─ components/                       # Header, Hero, Blueprint, SectionTitle,
│  │                                 # ProductCard, ServiceCard, Benefits, History,
│  │                                 # FAQ, CTA, Footer, WhatsAppButton, TrustBar,
│  │                                 # Steps, Testimonials, ContactInfo, PageHero
│  └─ fx/                            # Interactions, SplitText, Counter
└─ lib/
   ├─ site.ts                        # dados da empresa, navegação, mensagens de WhatsApp
   ├─ brand.ts                       # logomarca
   └─ schema.ts                      # Schema.org (Store, Service, FAQPage)
```

## Decisões de conversão

- Loja e assistência nunca competem pelo mesmo peso visual: em cada seção só uma das
  duas ações é a preenchida.
- Os links de WhatsApp já saem com mensagem pré-preenchida por contexto
  (`whatsappMessages` em `src/lib/site.ts`): geral, assistência, console, controle.
- `/assistencia-tecnica` funciona como landing independente, pronta para receber
  tráfego de Google Ads, com hero, problemas, serviços, etapas, diferenciais, FAQ,
  CTA de WhatsApp e bloco de localização.

## SEO

- H1 único por página, hierarquia H2/H3 consistente, HTML semântico
- Metadata por rota (title, description, canonical, Open Graph, Twitter)
- Schema.org: `Store` (global), `Service` e `FAQPage` (assistência), `FAQPage` (home)
- `sitemap.xml` e `robots.txt` gerados no build
- SEO local preparado: ao preencher endereço, cidade, estado e coordenadas, os campos
  entram automaticamente na marcação `Store`

## Acessibilidade e performance

- Contraste conferido no navegador em todas as páginas, com os tons de texto ajustados
  até passarem no critério AA (o único item que ainda aparece nos testes é um título
  reservado a leitores de tela, invisível por definição)
- Foco visível em todos os elementos interativos, com anel invertido nas seções azuis
- Skip link, aria-labels no menu e no botão de WhatsApp
- Acordeão do FAQ em `<details>/<summary>`, funciona sem JavaScript
- Alvos de toque de 44px ou mais no celular, sem overflow horizontal de 320px a 1440px
- Site exportado como arquivos estáticos. 110 kB de JS na home, dentro do orçamento de
  150 kB que essa página precisa manter para receber tráfego pago no celular
- `prefers-reduced-motion` remove o movimento e mantém a estética
