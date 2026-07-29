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

## Páginas

| Arquivo | Endereço | Para que serve |
| --- | --- | --- |
| `index.html` | `/` | Página inicial, com todas as seções |
| `assistencia-tecnica.html` | `/assistencia-tecnica.html` | Landing de conversão, pronta para Google Ads |
| `sobre.html` | `/sobre.html` | Nossa história |
| `contato.html` | `/contato.html` | Contato e localização |
| `politica-de-privacidade.html` | | Documento legal (modelo, revisar) |
| `404.html` | | Página de erro |

## Antes de publicar

O site foi entregue com marcações no lugar das informações que ainda não foram
passadas. Use Localizar e Substituir para trocar, de uma vez, em todos os
arquivos:

`LINK_DA_LOJA` · `NUMERO_DO_WHATSAPP` · `SEU-DOMINIO.com.br` · `[TELEFONE]` ·
`[ENDEREÇO]` · `[CIDADE]` · `[ESTADO]` · `[WHATSAPP]` · `[INSTAGRAM]` ·
`[HORÁRIO DE FUNCIONAMENTO]` · `[PRAZO DA GARANTIA]`

Também aguardam conteúdo real: os três depoimentos, os quatro marcos da linha do
tempo, as fotos antigas da loja e o mapa. Nada disso foi inventado.

## Identidade visual

Fundo quase preto com fundo violeta, neon violeta/magenta nos destaques e ciano
no lado técnico, seguindo a loja online da própria marca.

As duas cores de ação têm função fixa e nunca trocam de lado:

- **violeta → magenta** = comprar (loja, produtos)
- **ciano** = consertar (assistência, avaliação)

Tipografia: Archivo nos títulos, IBM Plex Sans nos textos, IBM Plex Mono nos
rótulos. As três ficam hospedadas em `assets/fontes/`, então o site não depende
de nenhum servidor externo para carregar.

## Cuidados que valem manter

- **Contraste dos botões.** O violeta de fundo é escurecido de propósito para o
  texto branco ser legível. Clarear essa cor quebra a legibilidade.
- **Nada de conteúdo escondido esperando animação.** Se o JavaScript falhar, o
  site continua legível e navegável.
- **Alvos de toque de 44px** nos links do rodapé e nos botões, para o celular.
- **`prefers-reduced-motion`** desliga as animações para quem configurou o
  sistema assim.
