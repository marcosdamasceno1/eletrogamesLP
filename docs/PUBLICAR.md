# Como publicar o site no servidor

O site não precisa ser "gerado". Os arquivos que estão na pasta são exatamente os
que vão para o servidor.

---

## O que enviar

Envie para a pasta `public_html` (ou `www`, dependendo da hospedagem):

```
index.html
assistencia-tecnica.html
sobre.html
contato.html
politica-de-privacidade.html
404.html
robots.txt
sitemap.xml
assets/          (a pasta inteira, com css, js, fontes e img)
```

A pasta `docs/` não precisa ir. São estes guias, para uso interno.

---

## Pelo painel da hospedagem (cPanel, Hostinger, Locaweb)

1. Entre no Gerenciador de Arquivos.
2. Abra a pasta `public_html`.
3. Apague o conteúdo antigo, se estiver substituindo um site.
4. Envie os arquivos e a pasta `assets`.

Se preferir, compacte tudo em um `.zip`, envie o zip e use a opção **Extrair**
do painel. É bem mais rápido do que subir arquivo por arquivo.

O resultado tem que ficar assim:

```
public_html/
├─ index.html
├─ assistencia-tecnica.html
├─ ...
└─ assets/
```

Se aparecer uma pasta a mais entre `public_html` e o `index.html`, o site vai
abrir no endereço errado. Nesse caso, mova os arquivos um nível para cima.

---

## Configurar a página de erro

Para que o `404.html` apareça quando alguém digitar um endereço que não existe:

**Se a hospedagem usa Apache** (a maioria dos planos com cPanel), crie um arquivo
chamado `.htaccess` dentro de `public_html` com esta linha:

```
ErrorDocument 404 /404.html
```

**Se usa Netlify, Vercel ou Cloudflare Pages**, o arquivo `404.html` é usado
automaticamente. Não precisa fazer nada.

---

## Antes de publicar pela primeira vez

1. **Os dados da empresa foram preenchidos?** Veja `docs/EDITAR-O-SITE.md`.
   Publicar com `[TELEFONE]` aparecendo na tela passa a impressão errada.
2. **O domínio foi trocado?** Procure por `SEU-DOMINIO.com.br` nos arquivos.
   Ele aparece no `sitemap.xml`, no `robots.txt` e no topo de cada página.
3. **O certificado HTTPS está ativo?** Quase toda hospedagem oferece SSL grátis
   (Let's Encrypt) com um clique no painel.

---

## Depois de publicar

1. Abra o site no celular e no computador.
2. Clique nos botões de WhatsApp e da loja e confira se abrem no lugar certo.
3. Cadastre o site no **Google Search Console** e envie o endereço do sitemap:
   `https://seudominio.com.br/sitemap.xml`
4. Cadastre a loja no **Google Meu Negócio**, se ainda não estiver. Para loja
   física, é o que mais traz visita vinda de busca.

---

## Se algo aparecer errado depois de publicar

Quase todo problema de site estático vem de **arquivo desatualizado no
servidor**. O HTML novo procura por um estilo ou uma imagem que ainda não
subiram, e a página fica pela metade.

Como reconhecer:

| O que aparece na tela | O que provavelmente falta |
| --- | --- |
| Texto sem cor, sem fundo, tudo empilhado | `assets/css/estilo.css` não subiu |
| A moldura sumiu, mas o resto está certo | `estilo.css` subiu, mas é uma versão antiga |
| Ícone de imagem quebrada | falta o arquivo da imagem em `assets/img/` |
| As letras mudaram de formato | a pasta `assets/fontes/` não subiu |

**A regra que evita tudo isso:** ao atualizar o site, envie sempre o `index.html`
**e a pasta `assets` inteira**, juntos. Eles são um conjunto. Trocar só o HTML
deixa o site pedindo arquivos que não existem mais, ou usando versões velhas.

### Quando a aparência não muda depois de enviar

O navegador guarda o CSS e o JavaScript em cache por horas. Você envia o arquivo
novo, o servidor já está com ele, mas a tela continua mostrando o antigo.

Para conferir se é isso, recarregue sem cache: **Ctrl + F5** no Windows,
**Cmd + Shift + R** no Mac. Se a aparência corrigir, era cache.

Para corrigir para todo mundo, e não só para você, use o número de versão:

1. Abra `assets/css/estilo.css` e some 1 no `VERSAO 3` da terceira linha.
2. Em **cada** arquivo `.html`, procure por `estilo.css?v=3` e some 1 também.

O `?v=` não muda nada no arquivo: serve só para o navegador entender que é um
endereço novo e buscar do zero. É por isso que ele existe.

---

## Atualizar depois

Edite o arquivo, salve e envie de novo o arquivo alterado, substituindo o que
está no servidor.

Se a alteração mexeu no CSS ou em alguma imagem, envie a pasta `assets` inteira
junto com o HTML. Na dúvida, mande tudo: são poucos arquivos e evita o problema
descrito acima.

Se o navegador continuar mostrando a versão antiga, recarregue sem cache:
Ctrl + F5 no Windows, Cmd + Shift + R no Mac.
