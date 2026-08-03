# Eletrogames — Site institucional

Site institucional e de conversão da Eletrogames: loja especializada em videogames
com mais de 28 anos de mercado, atuando em venda de consoles, controles,
periféricos e acessórios, além de assistência técnica de consoles e controles.

Feito em HTML, CSS e JavaScript comuns. Sem framework, sem build, sem programa
para instalar. Para abrir, dê dois cliques no `index.html`.

## Guias

- **[docs/EDITAR-O-SITE.md](docs/EDITAR-O-SITE.md)** — preencher os dados da
  empresa e trocar textos, cores e imagens.
- **[docs/PUBLICAR.md](docs/PUBLICAR.md)** — enviar os arquivos para o servidor.
- **[docs/ESTRUTURA.md](docs/ESTRUTURA.md)** — como os arquivos se conectam.
- **[docs/LOGOMARCA.md](docs/LOGOMARCA.md)** — colocar a logomarca oficial.
- **[docs/AVALIACOES-DO-GOOGLE.md](docs/AVALIACOES-DO-GOOGLE.md)** — puxar as
  avaliações do Google automaticamente.

## Páginas

| Arquivo | Endereço | Para que serve |
| --- | --- | --- |
| `index.html` | `/` | Página inicial, com todas as seções |
| `assistencia-tecnica.html` | `/assistencia-tecnica.html` | Landing de conversão, pronta para Google Ads |
| `sobre.html` | `/sobre.html` | Nossa história |
| `contato.html` | `/contato.html` | Contato e localização |
| `politica-de-privacidade.html` | | Documento legal (modelo, revisar) |
| `404.html` | | Página de erro |
| `avaliacoes.php` | | Busca as avaliações no Google. Opcional |

## Antes de publicar

O site foi entregue com marcações no lugar das informações que ainda não foram
passadas. Use Localizar e Substituir para trocar, de uma vez, em todos os
arquivos:

`LINK_DA_LOJA` · `NUMERO_DO_WHATSAPP` · `SEU-DOMINIO.com.br` · `[TELEFONE]` ·
`[ENDEREÇO]` · `[CIDADE]` · `[ESTADO]` · `[WHATSAPP]` · `[INSTAGRAM]` ·
`[HORÁRIO DE FUNCIONAMENTO]` · `[PRAZO DA GARANTIA]`

Também aguardam conteúdo real: os quatro marcos da linha do tempo, as fotos
antigas da loja e o mapa. Nada disso foi inventado.

As três avaliações da página inicial são reais. Elas podem ser trocadas pelas
avaliações do Google, automaticamente — veja
[docs/AVALIACOES-DO-GOOGLE.md](docs/AVALIACOES-DO-GOOGLE.md).

## Identidade visual

Azul, azul escuro e pouco branco, sobre um preto azulado. São as cores da
loja, e o site não usa nenhuma outra.

Cada cor tem uma função fixa:

| Cor | Onde aparece | Significa |
| --- | --- | --- |
| **Azul** `#1E5BFF` | botão da loja, painéis, caixa de destaque nos títulos | comprar |
| **Azul escuro** `#0B2A8C` | painéis sólidos e cartões alternados | base, estrutura |
| **Branco** | botão da assistência, ícones técnicos | consertar |

O branco é usado pouco de propósito. É o que faz o botão da assistência
técnica saltar no meio de uma página azul, sem precisar inventar uma quarta
cor.

**A caixa de destaque** (`<em class="destaque">palavra</em>`) marca uma ou
duas palavras por título. Se virar hábito e aparecer em toda frase, para de
funcionar: o destaque só existe enquanto for exceção.

Tipografia: Archivo nos títulos, IBM Plex Sans nos textos, IBM Plex Mono nos
rótulos. As três ficam hospedadas em `assets/fontes/`, então o site não depende
de nenhum servidor externo para carregar.

## Cuidados que valem manter

- **Contraste dos botões.** O azul de fundo tem esse tom de propósito para o
  texto branco ser legível. Clarear essa cor quebra a legibilidade.
- **Nada de conteúdo escondido esperando animação.** Se o JavaScript falhar, o
  site continua legível e navegável.
- **Alvos de toque de 44px** nos links do rodapé e nos botões, para o celular.
- **`prefers-reduced-motion`** desliga as animações para quem configurou o
  sistema assim.
