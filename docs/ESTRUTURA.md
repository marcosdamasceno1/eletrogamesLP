# Como o projeto está organizado

O site é feito de arquivos comuns: HTML, CSS, JavaScript e imagens. Não existe
build, não existe pasta de saída, não existe programa para instalar. O que você
vê na pasta é exatamente o que vai para o servidor.

---

## A pasta por dentro

```
index.html                    Página inicial
assistencia-tecnica.html      Assistência técnica (feita para receber anúncios)
sobre.html                    Nossa história
contato.html                  Contato e localização
politica-de-privacidade.html  Documento legal
404.html                      Página de erro

robots.txt                    Instruções para os buscadores
sitemap.xml                   Lista de páginas para o Google

assets/
├─ css/estilo.css             Toda a aparência do site
├─ js/script.js               Tudo que se mexe
├─ fontes/                    As fontes, hospedadas junto com o site
└─ img/                       Imagens, logotipo e ícone da aba

docs/                         Estes guias (não precisam ir para o servidor)
```

---

## Como cada arquivo se conecta

Toda página HTML começa carregando dois arquivos:

```html
<link rel="stylesheet" href="assets/fontes/fontes.css">
<link rel="stylesheet" href="assets/css/estilo.css">
```

e termina carregando um:

```html
<script src="assets/js/script.js" defer></script>
```

É só isso. Uma folha de estilo e um script para o site inteiro.

---

## O arquivo de estilo

`assets/css/estilo.css` tem um índice numerado logo no começo:

```
01. Tokens (cores, fontes, medidas)   <- mexa aqui para trocar as cores
02. Base e tipografia
03. Utilitários de layout
04. Cabeçalho e menu
05. Botões
...
```

Cada bloco começa com um comentário do mesmo tipo. Para achar o estilo dos
botões, procure por `05. BOTOES` no arquivo.

As classes têm nome em português e seguem um padrão simples:

| Nome | O que é |
| --- | --- |
| `.cartao` | o bloco em si |
| `.cartao__titulo` | uma parte de dentro dele (dois sublinhados) |
| `.cartao--neon` | uma variação dele (dois traços) |

Sabendo disso, dá para ler qualquer trecho do HTML sem precisar procurar no CSS.

---

## O arquivo de comportamento

`assets/js/script.js` também tem índice no começo. Ele cuida do menu do celular,
da sombra do cabeçalho, da barra de progresso, da revelação dos blocos ao rolar,
do contador do número 28 e dos efeitos de mouse.

Ele é **opcional**. Se o arquivo for apagado ou falhar, o site continua abrindo,
os textos continuam aparecendo e todos os links continuam funcionando. Nada de
importante depende dele.

---

## A biblioteca de ícones

No fim de cada página existe um bloco `<svg>` invisível guardando os desenhos dos
ícones. No meio da página, cada ícone é chamado assim:

```html
<svg width="20" height="20"><use href="#icone-controle"></use></svg>
```

Isso evita repetir o desenho inteiro toda vez que um ícone aparece. Para trocar
um ícone, altere o desenho uma vez lá no fim do arquivo.

---

## O que se repete entre as páginas

O cabeçalho, o rodapé e a biblioteca de ícones são iguais nas seis páginas. Se
mudar um deles, repita a mudança nas outras.

É o preço de não ter um programa montando as páginas. Em troca, qualquer pessoa
que saiba HTML consegue dar manutenção, hoje ou daqui a cinco anos, sem instalar
nada e sem depender de quem escreveu o site.
