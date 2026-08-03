# A logomarca da Eletrogames

**Já está feito.** As seis páginas usam o arquivo `assets/img/logo.png`, no
cabeçalho e no rodapé, e o símbolo provisório de liga/desliga foi removido.

Este guia serve para quando a marca precisar ser trocada de novo.

---

## Para trocar o arquivo

Substitua `assets/img/logo.png` por outro com **o mesmo nome**. Não precisa
mexer em nenhum HTML.

Se o arquivo novo tiver outra extensão (`.svg`, por exemplo), aí sim é preciso
procurar por `logo.png` em cada `.html` e trocar. São dois lugares por página,
doze no total.

---

## O que o arquivo precisa ter

**Fundo transparente.** O site é escuro. Um PNG com fundo branco ou cinza
aparece como um retângulo claro em volta da marca.

**Versão clara** (branca ou colorida), pelo mesmo motivo: uma versão escura
some no fundo.

**Alta resolução.** A marca aparece com cerca de 210 pixels de largura no
cabeçalho, então mande um arquivo de 800 pixels ou mais. Assim ela fica nítida
em tela de celular e em monitor 4K.

**SVG é melhor que PNG**, se o designer tiver. Fica nítido em qualquer tamanho
e costuma pesar menos.

---

## O tamanho é o CSS que cuida

Não coloque altura dentro do HTML. A classe `logo__imagem`, em
`assets/css/estilo.css`, já define:

- 38 pixels de altura no cabeçalho
- 34 quando a página rola e o cabeçalho encolhe
- 44 no rodapé

E o `object-fit: contain` garante que a marca nunca estique nem achate, seja
qual for a proporção do arquivo.

---

## Se aparecer o ícone de imagem quebrada

O navegador procurou o arquivo e não achou. Para descobrir onde está a
diferença, digite o endereço direto no navegador:

`https://SEU-DOMINIO.com.br/assets/img/logo.png`

- **Apareceu a logomarca:** o arquivo está certo, o erro está no `src` do HTML.
- **Deu erro 404:** veja a tabela.

| Causa provável | Como conferir |
| --- | --- |
| Pasta errada | Precisa estar em `public_html/assets/img/`, não solto na raiz |
| Extensão diferente | Se o arquivo é `.png`, o HTML precisa dizer `.png` |
| Maiúscula e minúscula | No servidor, `Logo.png` e `logo.png` são arquivos diferentes. No seu computador, não. É o erro mais comum |
| Espaço ou acento no nome | `logo eletro.png` não é `logo.png`. Renomeie sem espaços e sem acentos |
