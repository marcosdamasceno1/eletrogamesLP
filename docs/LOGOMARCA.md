# Como colocar a logomarca da Eletrogames

O site está usando uma marca provisória em texto: "Eletro" em branco e "games"
em gradiente, com um símbolo de liga/desliga ao lado. Quando o arquivo oficial
chegar, siga os passos abaixo.

---

> **Sobre a marca real:** na fachada da loja, o logotipo é o mascote azul com
> as letras "WG" ao lado de "ELETRO GAMES" em branco, sobre azul forte. O site
> está usando o azul da loja, que é uma expressão
> diferente da mesma marca. Vale decidir qual das duas o site deve seguir. Se a
> escolha for o azul da fachada, é uma troca de três valores no CSS.

## Passo 1. Prepare o arquivo

Peça ao designer o logotipo em **SVG**, com fundo transparente. É o melhor
formato: fica nítido em qualquer tela e costuma pesar poucos KB.

Se só existir em PNG, funciona, mas com cuidados:

- Use PNG com **fundo transparente**, nunca JPG (o JPG cria um retângulo branco
  em volta).
- Envie em alta resolução: pelo menos 3 vezes o tamanho final. Para um logotipo
  que aparece com 190 pixels de largura, mande um arquivo de 570 pixels ou mais.

Como o site tem fundo escuro, a versão do logotipo precisa ser a **clara**
(branca ou colorida sobre transparente). Uma versão escura sumiria no fundo.

---

## Passo 2. Coloque o arquivo na pasta

Copie para dentro de `assets/img/`, com o nome `logo.svg`.

---

## Passo 3. Troque no HTML

Em **cada** arquivo `.html`, procure por `class="logo"`. Ele aparece **duas
vezes por página**: uma no cabeçalho e outra no rodapé.

Você vai encontrar isto:

```html
<a class="logo" href="index.html" aria-label="Eletrogames, ir para a página inicial">
  <span class="logo__simbolo" aria-hidden="true">
    <svg width="19" height="19" ...>
      ...
    </svg>
  </span>
  <span>
    <span class="logo__nome">Eletro<span>games</span></span>
    <span class="logo__assinatura">28 anos · videogames</span>
  </span>
</a>
```

Troque **tudo que está entre `<a class="logo" ...>` e `</a>`** por uma linha:

```html
<a class="logo" href="index.html" aria-label="Eletrogames, ir para a página inicial">
  <img class="logo__imagem" src="assets/img/logo.svg" alt="Eletrogames">
</a>
```

> **Apague também o `logo__simbolo`.** Ele é o quadradinho azul com o símbolo
> de liga/desliga. Se você trocar só o texto e deixar o quadradinho, a marca
> nova aparece com um símbolo antigo grudado do lado.

A classe `logo__imagem` já cuida do tamanho: 40 pixels de altura no cabeçalho,
44 no rodapé, encolhendo sozinha quando a página rola. Não coloque altura na
mão, senão a marca pode esticar.

---

## Se aparecer o ícone de imagem quebrada

Quer dizer que o navegador procurou o arquivo e não achou. O endereço no HTML
e o arquivo no servidor não estão batendo.

**Para descobrir onde está a diferença**, digite o endereço do arquivo direto
no navegador:

`https://SEU-DOMINIO.com.br/assets/img/logo.svg`

- **Apareceu a logomarca:** o arquivo está certo. O erro está no `src` do HTML.
- **Deu erro 404:** o arquivo não está nesse lugar com esse nome. Veja a tabela.

| Causa provável | Como conferir |
| --- | --- |
| O arquivo foi enviado para a pasta errada | Ele precisa estar em `public_html/assets/img/`, não solto na raiz |
| O nome tem outra extensão | Se o arquivo é `logo.png`, o HTML precisa dizer `logo.png`, não `logo.svg` |
| Maiúscula e minúscula | No servidor, `Logo.svg` e `logo.svg` são arquivos diferentes. No seu computador, não. É o erro mais comum |
| Espaço ou acento no nome | `logo eletro.svg` ou `logomarca.svg` não são `logo.svg`. Renomeie sem espaços e sem acentos |

## Passo 4. Troque o ícone da aba

O arquivo `assets/img/favicon.svg` é o quadradinho que aparece na aba do
navegador. Substitua por uma versão simplificada da marca, com apenas o símbolo
(sem o nome escrito), em um quadrado.

---

## Passo 5 (opcional). Ajuste as cores da marca

Todo o site sai de três cores, definidas no começo de `assets/css/estilo.css`:

```css
--azul:        #1E5BFF;   /* botões da loja, ícones */
--azul-escuro: #0B2A8C;   /* painéis sólidos */
--gelo:        #FFFFFF;   /* assistência técnica */
```

Peça ao designer os códigos das cores oficiais em hexadecimal (o formato
`#RRGGBB`) e troque.

**Um cuidado com legibilidade:** o `--azul` é a cor de fundo dos botões, que
têm texto branco em cima. Ele precisa ser escuro o suficiente para o texto ser
lido com facilidade. Se a cor oficial da marca for um azul claro, use-a em
`--azul escuro` (nos brilhos) e mantenha um tom mais escuro nos botões.

---

## Passo 6. Imagem de compartilhamento

`assets/img/og-image.svg` é o que aparece quando alguém manda o link do site no
WhatsApp. Para trocar por uma arte definitiva, crie uma imagem de
**1200 × 630 pixels**, salve como `og-image.png` em `assets/img/` e, em cada
arquivo `.html`, troque `og-image.svg` por `og-image.png`.
