# Como editar o site da Eletrogames

O site é feito de arquivos HTML, CSS e JavaScript comuns. Você abre qualquer um
deles em um editor de texto, altera, salva e envia para o servidor. Não existe
programa para instalar nem comando para rodar.

---

## Antes de tudo: preencher os dados da empresa

O site foi entregue com marcações no lugar das informações que ainda não foram
passadas. Todas elas aparecem escritas na tela, então é fácil ver o que falta.

Use **Localizar e Substituir** do editor (Ctrl + H no Windows, Cmd + H no Mac),
marcando a opção de substituir em **todos os arquivos**, e troque:

| Procure por | Substitua por | Exemplo |
| --- | --- | --- |
| `LINK_DA_LOJA` | o endereço da loja online | `https://loja.eletrogames.com.br` |
| `NUMERO_DO_WHATSAPP` | 55 + DDD + número, tudo junto | `5511999999999` |
| `SEU-DOMINIO.com.br` | o domínio do site | `eletrogames.com.br` |
| `[TELEFONE]` | o telefone da loja | `(11) 3333-4444` |
| `[ENDEREÇO]` | rua e número | `Rua das Palmeiras, 120` |
| `[CIDADE]` | a cidade | `São Paulo` |
| `[ESTADO]` | a sigla do estado | `SP` |
| `[WHATSAPP]` | o número como quer que apareça escrito | `(11) 99999-9999` |
| `[INSTAGRAM]` | o perfil | `@eletrogames` |
| `[HORÁRIO DE FUNCIONAMENTO]` | os horários | `Seg a sex, 9h às 18h` |
| `[PRAZO DA GARANTIA]` | o prazo, só o prazo | `90 dias` |

Fazendo isso uma vez, o site inteiro fica preenchido: os botões passam a abrir a
conversa certa e o Google passa a ler os dados corretos.

### Sobre o número do WhatsApp

Escreva sem espaço, traço ou parênteses. Para (11) 99999-9999, o número vira
`5511999999999`. As mensagens que já aparecem escritas na conversa mudam conforme
o botão clicado, e isso já está montado dentro de cada link.

---

## Trocar textos

Abra o arquivo da página, procure a frase e troque. Só isso.

| Página do site | Arquivo |
| --- | --- |
| Página inicial | `index.html` |
| Assistência técnica | `assistencia-tecnica.html` |
| Nossa história | `sobre.html` |
| Contato | `contato.html` |
| Política de privacidade | `politica-de-privacidade.html` |
| Página de erro | `404.html` |

Dentro do `index.html`, cada seção começa com um comentário grande em maiúsculas
dizendo o que é. Procure por `SEÇÃO 5` para chegar direto nos produtos, por
exemplo:

```html
<!-- ===================================================================
     SEÇÃO 5 - PRODUTOS
     =================================================================== -->
```

As seções do `index.html`, na ordem:

1. Primeira dobra (o título grande)
2. Fita rolante das categorias
3. Faixa de fatos
4. Nossa história
5. Produtos
6. Assistência técnica
7. Plataformas atendidas
8. Como funciona
9. Por que a Eletrogames
10. Depoimentos
11. Dúvidas frequentes
12. Chamada final

### Regras para não quebrar nada

1. Mexa apenas no texto que aparece **entre** as marcações `>` e `<`.
   Em `<h3 class="cartao__titulo">Consoles</h3>`, altere só a palavra `Consoles`.
2. Não apague os sinais `<` e `>`.
3. Acento e cedilha podem ser usados normalmente.
4. Toda marcação aberta precisa ser fechada. Se apagar `<p>`, apague o `</p>` também.
5. Salve o arquivo com codificação **UTF-8** (é o padrão da maioria dos editores).
   Se os acentos virarem símbolos estranhos, foi isso.

---

## Trocar as cores

Abra `assets/css/estilo.css`. Logo no começo do arquivo está o bloco de cores:

```css
:root {
  --fundo:          #08060F;   /* fundo principal, quase preto */
  --violeta:        #7526E0;   /* botões da loja */
  --magenta:        #FF3DCB;   /* brilhos e destaques */
  --ciano:          #22E3F0;   /* assistência técnica */
  --texto:          #F4F1FF;   /* títulos */
  ...
}
```

Trocar um valor aqui muda esse elemento no site inteiro, em todas as páginas.

**Um cuidado:** o violeta dos botões é escuro de propósito. O texto branco em
cima dele precisa de contraste para ser legível. Se clarear demais essa cor, o
texto dos botões fica difícil de ler.

---

## Trocar os depoimentos

No `index.html`, procure por `SEÇÃO 10 - DEPOIMENTOS`. Existem três blocos com
`[DEPOIMENTO REAL DO CLIENTE]` e `[NOME DO CLIENTE]`. Troque pelo texto real.

Nenhum depoimento foi escrito por nós. Publique apenas avaliações verdadeiras.

---

## Preencher a linha do tempo

No `index.html`, na seção 4, existem quatro blocos com `[ANO]` e
`[MARCO DA HISTÓRIA]`. Preencha com os marcos reais da empresa.

---

## Colocar o mapa da loja

1. Abra o Google Maps e procure o endereço da loja.
2. Clique em **Compartilhar** e depois em **Incorporar um mapa**.
3. Copie o código que aparece (começa com `<iframe`).
4. No `contato.html`, procure por `[GOOGLE MAPS]` e troque o bloco inteiro
   marcado com o comentário `MAPA:` pelo código copiado.

---

## Adicionar uma foto

1. Coloque o arquivo dentro de `assets/img/`.
2. No HTML, no lugar onde a foto deve aparecer, escreva:

```html
<img src="assets/img/nome-do-arquivo.jpg" alt="Descrição curta da foto">
```

O `alt` é obrigatório: é o texto que descreve a imagem para quem não enxerga e
para o Google. Descreva o que aparece na foto.

Antes de subir, reduza o tamanho do arquivo em um site como o Squoosh. Fotos
direto do celular costumam ter vários megabytes e deixam o site lento no 4G.

---

## Mudar o menu

O menu aparece em **todas** as páginas, então precisa ser alterado em todas elas.
Em cada arquivo `.html`, procure por:

```html
<nav class="menu" aria-label="Navegação principal">
```

O mesmo vale para o rodapé, que também se repete em todas as páginas. Procure por
`RODAPÉ` no arquivo.

Esse é o custo de um site em arquivos separados: alterações no cabeçalho e no
rodapé precisam ser repetidas. Em compensação, você não depende de programa
nenhum para editar o resto.

---

## Conferir antes de publicar

Dê dois cliques no arquivo `index.html` do seu computador. Ele abre no navegador
e funciona igual ao site publicado. Confira os textos, clique nos botões e veja
se o WhatsApp abre com a mensagem certa.

Depois é só enviar os arquivos para o servidor. O passo a passo está em
`docs/PUBLICAR.md`.
