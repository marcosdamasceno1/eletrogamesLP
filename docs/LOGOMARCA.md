# Como subir a logomarca da Eletrogames

O site já funciona sem o logotipo: enquanto o arquivo oficial não chega, ele mostra
uma marca provisória em texto. Quando você tiver a arte, siga os três passos abaixo.

Não é preciso saber programar. São dois lugares para mexer: uma pasta e um arquivo.

---

## Passo 1. Prepare os arquivos

Peça ao designer (ou procure na pasta da marca) os arquivos nestes formatos:

| Arquivo | Para que serve | Formato ideal |
| --- | --- | --- |
| `logo.svg` | Logotipo completo, para o **cabeçalho** (fundo branco) | SVG |
| `logo-branco.svg` | Mesmo logotipo em **branco**, para o rodapé (fundo azul) | SVG |
| `simbolo.svg` | Só o símbolo, sem o nome escrito (quadrado) | SVG |
| `favicon.ico` | Ícone da aba do navegador | ICO, 48×48 |
| `apple-icon.png` | Ícone ao salvar o site na tela do celular | PNG, 180×180 |

### Se você só tem o logo em JPG ou PNG

Funciona, mas com cuidados:

- Use **PNG com fundo transparente**, nunca JPG (o JPG cria um retângulo branco em volta).
- Envie em **alta resolução**: pelo menos 3 vezes o tamanho final. Para um logo que
  aparece com 190 pixels de largura, mande um PNG de 570 pixels ou mais.
- Se possível, converta para WebP antes de subir (fica mais leve e o site carrega mais
  rápido). Sites como o Squoosh fazem isso de graça.

Prefira sempre SVG: é um formato vetorial, ou seja, fica nítido em qualquer tamanho de
tela e costuma pesar poucos KB.

---

## Passo 2. Coloque os arquivos na pasta certa

Copie os arquivos para dentro de:

```
public/brand/
```

Ficaria assim:

```
public/
└─ brand/
   ├─ logo.svg
   ├─ logo-branco.svg
   └─ simbolo.svg
```

Os ícones do navegador vão em outro lugar, direto em `src/app/`:

```
src/app/
├─ favicon.ico
└─ apple-icon.png
```

O Next.js reconhece esses dois nomes sozinho. Basta colocar os arquivos ali,
sem mexer em mais nada.

---

## Passo 3. Ligue o logotipo no site

Abra o arquivo:

```
src/lib/brand.ts
```

Você vai encontrar isto:

```ts
logo: {
  src: null,
  width: 190,
  height: 40,
  alt: 'Eletrogames',
},
```

Troque `null` pelo caminho do arquivo, entre aspas simples, e ajuste a largura e a
altura reais da sua arte:

```ts
logo: {
  src: '/brand/logo.svg',
  width: 190,
  height: 40,
  alt: 'Eletrogames',
},
```

Repita para as outras duas versões:

```ts
logoInverse: {
  src: '/brand/logo-branco.svg',   // versão branca, usada no rodapé azul
  width: 190,
  height: 40,
  alt: 'Eletrogames',
},

symbol: {
  src: '/brand/simbolo.svg',
  width: 40,
  height: 40,
  alt: 'Eletrogames',
},
```

**Atenção ao caminho:** ele começa com `/brand/`, sem o `public`. O `public` some no
endereço final. Arquivo em `public/brand/logo.svg` vira `/brand/logo.svg`.

**Sobre `width` e `height`:** coloque as proporções reais do arquivo. Se o seu logo tem
600 por 120 pixels, pode escrever `width: 600, height: 120`. O site ajusta o tamanho na
tela sozinho; esses números só servem para ele reservar o espaço certo e não "pular"
enquanto carrega.

Se você tiver apenas uma versão do logotipo, deixe `logoInverse` com `src: null`. O
rodapé continua usando a marca provisória em branco, sem quebrar nada.

---

## Passo 4 (opcional). Ajuste as cores da marca

O site inteiro é gerado a partir de dois azuis. Trocar esses dois valores repinta
cabeçalho, botões, ícones, links e todas as seções de uma vez.

Abra:

```
tailwind.config.ts
```

Procure por:

```ts
blue: {
  DEFAULT: '#1560E0',   // azul principal: botões, links, ícones
  deep:    '#0E49B0',   // azul escuro: botão pressionado / hover
  soft:    '#4C8AF0',   // azul claro: detalhes sobre fundo escuro
},
navy: {
  DEFAULT: '#072B4F',   // azul profundo: textos e seções escuras
  deep:    '#04203D',   // usado no bloco final da página
  soft:    '#12446F',   // bordas dentro das seções escuras
},
```

Troque os códigos pelas cores oficiais da Eletrogames. Peça ao designer os valores em
hexadecimal (o formato `#RRGGBB`).

**Um cuidado com acessibilidade:** o azul principal precisa ter contraste suficiente
com o branco, senão o texto dos botões fica difícil de ler. Se a cor oficial da marca
for um azul muito claro, use-a nos detalhes e mantenha um azul mais escuro nos botões.
Você pode conferir o contraste em ferramentas gratuitas como o WebAIM Contrast Checker;
o valor precisa ficar acima de 4,5.

---

## Passo 5. Veja o resultado

No terminal, dentro da pasta do projeto:

```bash
npm run dev
```

Abra `http://localhost:3000` no navegador. O logotipo deve aparecer no canto superior
esquerdo e no rodapé.

Se não aparecer, confira nesta ordem:

1. O nome do arquivo está **exatamente** igual ao que você escreveu em `brand.ts`?
   Maiúsculas e minúsculas importam: `Logo.svg` é diferente de `logo.svg`.
2. O arquivo está mesmo dentro de `public/brand/`?
3. O caminho em `brand.ts` começa com `/brand/` e está entre aspas?

---

## Imagem de compartilhamento (quando alguém manda o link no WhatsApp)

O arquivo `public/og-image.svg` é a imagem que aparece quando o link do site é
compartilhado. Ele foi desenhado provisoriamente com a marca em texto.

Para substituir por uma arte definitiva:

1. Crie uma imagem de **1200 × 630 pixels** com o logotipo, o nome e uma frase curta.
2. Salve como `og-image.png` dentro de `public/`.
3. Em `src/app/layout.tsx`, procure por `/og-image.svg` e troque por `/og-image.png`
   (aparece em dois lugares, no `openGraph` e no `twitter`).
