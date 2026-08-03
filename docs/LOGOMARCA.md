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

Em **cada** arquivo `.html`, procure por este bloco (ele aparece duas vezes por
página: uma no cabeçalho e outra no rodapé):

```html
<span class="logo__simbolo" aria-hidden="true">
  <svg width="19" height="19" ...>
    ...
  </svg>
</span>
<span>
  <span class="logo__nome">Eletro<span>games</span></span>
  <span class="logo__assinatura">28 anos · videogames</span>
</span>
```

Troque tudo isso por uma linha só:

```html
<img src="assets/img/logo.svg" alt="Eletrogames" style="height:40px; width:auto">
```

Ajuste o `40px` até o tamanho ficar bom. O `alt` precisa continuar lá: é o que
leitores de tela e o Google leem no lugar da imagem.

---

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
