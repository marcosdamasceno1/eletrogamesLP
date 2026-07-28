# Como editar o site da Eletrogames

Guia para mudar textos, dados de contato e links sem depender de programação.
Cada item diz **o que muda**, **em qual arquivo** e **o que procurar dentro dele**.

Depois de qualquer alteração, rode `npm run publicar` e envie a pasta `dist/`
para o servidor. O passo a passo está em `docs/PUBLICAR.md`.

---

## 1. Dados da empresa: telefone, endereço, WhatsApp, loja

**Arquivo:** `src/lib/site.ts`

Esse é o arquivo mais importante. Tudo que aparece entre colchetes no site
(`[TELEFONE]`, `[ENDEREÇO]`, e assim por diante) sai daqui.

```ts
url: '[INSERIR URL DO SITE]',        // endereço final do site, ex: 'https://eletrogames.com.br'
storeUrl: '[INSERIR URL DA LOJA]',   // link da loja online
whatsappUrl: '[INSERIR WHATSAPP]',   // ex: 'https://wa.me/5511999999999'
whatsappDisplay: '[WHATSAPP]',       // o número como você quer que apareça escrito
phone: '[TELEFONE]',
instagram: '[INSTAGRAM]',            // ex: '@eletrogames'
instagramUrl: '[INSERIR URL DO INSTAGRAM]',
```

E logo abaixo:

```ts
address: {
  street: '[ENDEREÇO]',
  city: '[CIDADE]',
  state: '[ESTADO]',
  mapsUrl: '[GOOGLE MAPS]',
},
openingHours: '[HORÁRIO DE FUNCIONAMENTO]',
```

### Como montar o link do WhatsApp

Use o formato `https://wa.me/` seguido de 55, DDD e o número, tudo junto e sem
símbolos. Para o número (11) 99999-9999, o link fica:

```
https://wa.me/5511999999999
```

Você não precisa acrescentar a mensagem automática: o site já faz isso sozinho,
e a mensagem muda conforme o botão clicado (assistência, console, controle).

### O que acontece enquanto os dados não são preenchidos

O site não quebra. Enquanto um valor estiver escrito entre colchetes, os links
não levam a lugar nenhum em vez de dar erro, e as informações da empresa ficam
de fora do código que o Google lê. É proposital: nada falso é publicado.

---

## 2. As mensagens automáticas do WhatsApp

**Arquivo:** `src/lib/site.ts`, no bloco `whatsappMessages`

```ts
export const whatsappMessages = {
  general: 'Olá! Acessei o site da Eletrogames e gostaria de mais informações.',
  support: 'Olá! Acessei o site da Eletrogames e gostaria de informações sobre assistência técnica.',
  console: 'Olá! Acessei o site da Eletrogames e gostaria de informações sobre manutenção de console.',
  controller: 'Olá! Acessei o site da Eletrogames e gostaria de informações sobre manutenção de controle.',
};
```

É o texto que já vem escrito quando o cliente abre a conversa. Mude o que estiver
entre aspas, sem mexer no nome que vem antes dos dois pontos.

---

## 3. O menu do topo

**Arquivo:** `src/lib/site.ts`, no bloco `navigation`

```ts
{ label: 'Nossa História', short: 'História', href: '/sobre' },
```

- `label` é o nome completo, que aparece no menu do celular.
- `short` é a versão curta, que aparece no menu do computador (o espaço é menor).
- `href` é para onde o item leva.

---

## 4. Os depoimentos de clientes

**Arquivo:** `src/components/Testimonials.tsx`

Nenhum depoimento foi inventado. Os três cartões estão marcados assim:

```ts
const testimonials = [
  { quote: '[DEPOIMENTO REAL DO CLIENTE]', author: '[NOME DO CLIENTE]' },
];
```

Substitua pelos depoimentos reais, mantendo o formato:

```ts
const testimonials = [
  { quote: 'Levei meu console e voltou funcionando.', author: 'Ana Paula', context: 'Cliente desde 2019' },
];
```

O campo `context` é opcional. Pode adicionar ou remover cartões da lista, basta
manter as chaves `{ }` e a vírgula entre eles.

---

## 5. A linha do tempo e as fotos antigas

**Arquivo:** `src/components/History.tsx`

Procure por `[ANO]` e `[MARCO DA HISTÓRIA]`. São quatro blocos prontos para receber
os marcos reais da empresa. Escreva o ano e o acontecimento no lugar dos colchetes.

Logo acima existe uma área marcada como `[FOTOS ANTIGAS DA LOJA]`, reservada para a
galeria histórica. Para colocar uma foto ali, salve o arquivo em `public/` e peça a
quem cuida do site para trocar aquele bloco por uma imagem.

---

## 6. As perguntas frequentes

**Arquivo:** `src/components/FAQ.tsx`

São duas listas separadas:

- `homeFaq` são as perguntas da página inicial.
- `supportFaq` são as perguntas da página de assistência técnica.

Cada pergunta segue este formato:

```ts
{
  question: 'A Eletrogames faz manutenção de videogames?',
  answer: 'Sim. A assistência técnica é uma das especialidades da Eletrogames.',
},
```

**Um cuidado importante:** evite escrever prazos, valores ou garantias que a empresa
não confirmou. Uma resposta publicada vira compromisso.

---

## 7. Os textos das seções

Cada seção da página inicial mora em um arquivo próprio, dentro de `src/components/`:

| Seção do site | Arquivo |
| --- | --- |
| Primeira dobra (o título grande) | `Hero.tsx` |
| Faixa com os quatro fatos | `TrustBar.tsx` |
| Nossa história | `History.tsx` |
| Produtos | `Products.tsx` |
| Assistência técnica | `TechSupport.tsx` |
| Como funciona a assistência | `Steps.tsx` |
| Por que escolher a Eletrogames | `Benefits.tsx` |
| Depoimentos | `Testimonials.tsx` |
| Dúvidas frequentes | `FAQ.tsx` |
| Bloco final antes do rodapé | `CTA.tsx` |
| Rodapé | `Footer.tsx` |

Dentro de cada arquivo, o texto visível está entre aspas ou entre as marcas `>` e `<`.
Mude apenas o texto, sem apagar os símbolos em volta.

---

## 8. A política de privacidade

**Arquivo:** `src/app/politica-de-privacidade/page.tsx`

O texto é um **modelo base** e está marcado como tal no topo da página. Peça uma
revisão jurídica antes de publicar, principalmente na parte de cookies e medição,
que depende das ferramentas de anúncio que a empresa usar.

---

## 9. Regras que valem para qualquer edição

1. **Mexa só no que está entre aspas.** O resto é o que faz a página funcionar.
2. **Não apague vírgulas nem chaves.** Se o site parar de abrir depois de uma
   alteração, quase sempre é uma vírgula ou uma aspa que sumiu.
3. **Acento e cedilha podem ser usados normalmente.** O site está em UTF-8.
4. **Teste antes de publicar** com `npm run dev` e o navegador em
   `http://localhost:3000`.
5. **Aspas dentro de um texto** precisam ser diferentes das aspas de fora. Se o texto
   já está entre aspas simples, use aspas duplas por dentro:
   `'Ele disse "está pronto" na hora'`.

---

## 10. Onde ficam as cores e as fontes

- **Cores:** `tailwind.config.ts`. Explicação completa em `docs/LOGOMARCA.md`.
- **Fontes:** `src/app/layout.tsx`, no topo do arquivo.
- **Estilos gerais** (botões, cartões, espaçamentos): `src/app/globals.css`.
