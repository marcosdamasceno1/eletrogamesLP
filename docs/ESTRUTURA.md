# Como o projeto está organizado

Guia para quem vai dar manutenção no site depois. Diz onde cada coisa mora e,
principalmente, onde **não** mexer.

---

## A regra mais importante

O site tem dois lados:

| | O que é | Você edita? |
| --- | --- | --- |
| **`src/`** | O código-fonte. É aqui que o site é escrito. | Sim |
| **`dist/`** | O resultado pronto, que vai para o servidor. | Não |

A pasta `dist/` é gerada por inteiro toda vez que alguém roda `npm run publicar`.
O HTML dela vem comprimido em poucas linhas, porque foi otimizado para carregar
rápido, e não para ser lido por uma pessoa.

Se você abrir esses arquivos e achar que o código está bagunçado: está tudo certo.
Nenhum site feito com ferramenta moderna gera HTML legível na saída. Cada arquivo
de `dist/` começa com um comentário lembrando disso.

Alterações feitas direto em `dist/` funcionam até o próximo `npm run publicar`, e
somem. Mexa sempre em `src/`.

---

## O que tem em cada pasta

```
docs/            Estes guias
scripts/         Tarefas do build (o carimbo de aviso no HTML gerado)
public/          Arquivos servidos como estão: logomarca, imagem de compartilhamento
src/
├─ app/          Uma pasta por página do site
├─ components/   As peças visuais, separadas por papel
└─ lib/          Dados e configuração, sem visual nenhum
```

### `src/app` — as páginas

Cada pasta vira um endereço no site.

| Pasta | Endereço |
| --- | --- |
| `page.tsx` | `/` |
| `sobre/` | `/sobre` |
| `assistencia-tecnica/` | `/assistencia-tecnica` |
| `contato/` | `/contato` |
| `politica-de-privacidade/` | `/politica-de-privacidade` |

Também moram aqui: `layout.tsx` (cabeçalho, rodapé e informações para o Google),
`not-found.tsx` (a página de erro 404), `globals.css` (estilos gerais),
`sitemap.ts` e `robots.ts` (arquivos que os buscadores leem).

### `src/components` — as peças visuais

| Pasta | O que guarda |
| --- | --- |
| `layout/` | Cabeçalho, rodapé, logotipo e o botão flutuante do WhatsApp |
| `sections/` | Cada bloco de conteúdo do site. Um arquivo por seção |
| `ui/` | Peças pequenas reaproveitadas: botão, título, cartões, ícones |
| `fx/` | Os efeitos (revelação ao rolar, cursor, holofote, contador) |

Para mudar o texto de uma seção, procure em `sections/`. O nome do arquivo é o
nome da seção. A tabela completa está em `docs/EDITAR-O-SITE.md`.

### `src/lib` — os dados

| Arquivo | O que guarda |
| --- | --- |
| `site.ts` | Telefone, WhatsApp, endereço, horário, links, menu, garantia |
| `brand.ts` | Caminhos dos arquivos da logomarca |
| `schema.ts` | As informações que o Google lê sobre a empresa |

Este é o lugar onde a maior parte das alterações do dia a dia acontece. Nenhum
desses arquivos tem visual: é só informação.

---

## Por que o código está em componentes, e não em um HTML só

O cabeçalho, o rodapé e o botão do WhatsApp aparecem em cinco páginas. Em um site
de arquivos HTML soltos, mudar o telefone significaria editar cinco arquivos e
torcer para não esquecer nenhum.

Aqui o telefone está escrito em um lugar só, em `src/lib/site.ts`, e as cinco
páginas leem dali. Trocar leva uma linha.

O mesmo vale para as seções: `sections/FAQ.tsx` é usado na página inicial e na de
assistência técnica, com perguntas diferentes. É o mesmo componente, alimentado
com conteúdo diferente.

---

## O ciclo de trabalho

```bash
npm install        # só na primeira vez
npm run dev        # abre em http://localhost:3000 e recarrega ao salvar
npm run publicar   # gera a pasta dist/ para enviar ao servidor
```

Enquanto o `npm run dev` estiver rodando, cada arquivo salvo aparece no navegador
na hora. É assim que dá para conferir uma alteração antes de publicar.
