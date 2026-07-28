# Eletrogames — Site institucional

Site institucional e de conversão da Eletrogames: loja especializada em videogames
com mais de 28 anos de mercado, atuando em venda de consoles, controles, periféricos
e acessórios, além de assistência técnica de consoles e controles/manetes.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- Zero dependências de UI de terceiros — ícones em SVG inline, acordeão em `<details>` nativo

## Como rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm start       # serve o build
```

## ⚠️ Antes de publicar: preencha os dados reais

Todos os dados da empresa estão centralizados em **`src/lib/site.ts`**.
Nenhuma informação foi inventada — o que não foi fornecido está marcado como
placeholder entre colchetes. Substitua:

| Campo | Onde aparece |
| --- | --- |
| `url` | canonical, sitemap, robots, Open Graph |
| `storeUrl` | todos os CTAs de "Loja Online" / "Ver produtos na loja" |
| `whatsappUrl` | botão flutuante, CTAs de assistência, rodapé |
| `phone`, `email`, `instagram`, `instagramUrl` | rodapé e página de contato |
| `address.*` (endereço, cidade, estado, CEP, Google Maps, lat/long) | rodapé, contato, SEO local |
| `openingHours` | rodapé e contato |

Os links tratam placeholders com segurança: enquanto um valor estiver no formato
`[ALGUMA COISA]`, `safeHref()` devolve `#` em vez de gerar um link quebrado, e o
Schema.org omite o campo em vez de publicar dado falso.

### Outros conteúdos a preencher

- **Depoimentos** — `src/components/Testimonials.tsx`. Os cards estão marcados como
  `[DEPOIMENTO REAL DO CLIENTE]`. Nenhuma avaliação foi inventada.
- **Fotos históricas e linha do tempo** — `src/components/History.tsx`. Há áreas
  reservadas para a galeria antiga da loja e para os marcos reais da empresa.
- **Mapa** — `src/components/ContactInfo.tsx`. Ao preencher `address.mapsUrl` com uma
  URL de embed, troque o bloco reservado por um `<iframe loading="lazy">`.
- **Política de privacidade** — `src/app/politica-de-privacidade/page.tsx` é um modelo
  base e precisa de revisão jurídica antes da publicação.
- **Logotipo e cores** — `src/components/Logo.tsx` traz uma marca provisória em texto.
  Ao receber o logotipo oficial, substitua por `<Image />` e ajuste as cores da marca
  em `tailwind.config.ts` (`brand` e `accent`).

## Estrutura

```
src/
├─ app/
│  ├─ layout.tsx                     # metadata global, fontes, header/footer, Schema Store
│  ├─ page.tsx                       # Home (landing institucional completa)
│  ├─ sobre/page.tsx                 # /sobre
│  ├─ assistencia-tecnica/page.tsx   # /assistencia-tecnica (landing de conversão)
│  ├─ contato/page.tsx               # /contato
│  ├─ politica-de-privacidade/page.tsx
│  ├─ not-found.tsx, sitemap.ts, robots.ts, globals.css
├─ components/                       # Header, Hero, SectionTitle, ProductCard,
│                                    # ServiceCard, Benefits, History, FAQ, CTA,
│                                    # Footer, WhatsAppButton, TrustBar, Steps,
│                                    # Testimonials, ContactInfo, PageHero, Icons…
└─ lib/
   ├─ site.ts                        # dados da empresa, navegação, mensagens de WhatsApp
   └─ schema.ts                      # Schema.org (Store, Service, FAQPage)
```

## Decisões de conversão

- **CTA de loja e CTA de assistência são sempre visualmente distintos**: verde sólido
  para a loja, azul para o serviço técnico. O usuário nunca confunde os dois caminhos.
- Os links de WhatsApp já saem com mensagem pré-preenchida por contexto
  (`whatsappMessages` em `src/lib/site.ts`): geral, assistência, console, controle.
- `/assistencia-tecnica` funciona como landing independente, pronta para receber
  tráfego de Google Ads, com hero, problemas, serviços, etapas, diferenciais, FAQ,
  CTA de WhatsApp e bloco de localização.

## SEO

- H1 único por página, hierarquia H2/H3 consistente, HTML semântico
- Metadata por rota (title, description, canonical, Open Graph, Twitter)
- Schema.org: `Store` (global), `Service` e `FAQPage` (assistência), `FAQPage` (home)
- `sitemap.xml` e `robots.txt` gerados pelo App Router
- SEO local preparado: ao preencher endereço, cidade, estado e coordenadas, os campos
  entram automaticamente na marcação `Store`

## Acessibilidade e performance

- Contraste alto sobre fundo escuro, foco visível em todos os elementos interativos
- Skip link, aria-labels no menu e no botão de WhatsApp, alvos de toque ≥ 44px
- Acordeão do FAQ em `<details>/<summary>` — funciona sem JavaScript
- Todas as rotas são estáticas; JS compartilhado ~105 kB; `prefers-reduced-motion`
  desativa as animações
