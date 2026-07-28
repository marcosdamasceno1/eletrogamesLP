# Como publicar o site no servidor

O site é gerado como um conjunto de arquivos estáticos: HTML, CSS, JavaScript e
imagens. Isso significa que ele roda em **qualquer hospedagem**, inclusive as mais
simples e baratas. O servidor não precisa ter Node.js, PHP nem banco de dados.

---

## Gerar os arquivos

Dentro da pasta do projeto, rode:

```bash
npm install     # só na primeira vez
npm run publicar
```

Ao terminar, aparece uma pasta nova chamada `dist/`. Ela contém o site inteiro.

---

## Enviar para o servidor

Envie **o conteúdo de dentro** da pasta `dist/`, e não a pasta em si.

### Hospedagem com cPanel, Hostinger, Locaweb e similares

1. Entre no Gerenciador de Arquivos do painel.
2. Abra a pasta `public_html`.
3. Apague o que estiver lá dentro, se for um site antigo sendo substituído.
4. Envie todos os arquivos de dentro de `dist/`.

Dica prática: compacte o conteúdo de `dist/` em um `.zip`, envie o zip para
`public_html` e use a opção "Extrair" do painel. É bem mais rápido do que subir
centenas de arquivos um a um.

O resultado precisa ficar assim:

```
public_html/
├─ index.html
├─ sobre/
├─ assistencia-tecnica/
├─ contato/
├─ politica-de-privacidade/
├─ _next/
├─ sitemap.xml
└─ robots.txt
```

Se aparecer uma pasta `dist` dentro de `public_html`, o site vai abrir no endereço
errado. Nesse caso, mova os arquivos um nível para cima.

### Netlify, Vercel ou Cloudflare Pages

Basta arrastar a pasta `dist/` para a área de upload do painel. Se você conectar o
repositório do GitHub, configure:

- Comando de build: `npm run build`
- Pasta de publicação: `out`

---

## Antes de publicar pela primeira vez

Confira estes três pontos:

1. **Os dados da empresa estão preenchidos?** Veja `docs/EDITAR-O-SITE.md`, item 1.
   Publicar com `[TELEFONE]` na tela passa a impressão errada.
2. **O endereço do site está definido?** Em `src/lib/site.ts`, o campo `url` precisa
   ter o domínio real. É ele que alimenta o `sitemap.xml` e o compartilhamento de link.
3. **O certificado HTTPS está ativo?** Quase toda hospedagem oferece SSL grátis
   (Let's Encrypt) com um clique no painel.

---

## Depois de publicar

1. Abra o site no celular e no computador.
2. Clique nos botões de WhatsApp e da loja para conferir se levam ao lugar certo.
3. Cadastre o site no **Google Search Console** e envie o endereço do sitemap:
   `https://seudominio.com.br/sitemap.xml`.
4. Cadastre a loja no **Google Meu Negócio**, se ainda não estiver. Para uma loja
   física, é o que mais traz visita de busca local.

---

## Atualizar o site depois

Sempre o mesmo ciclo:

```bash
npm run publicar
```

E envie de novo o conteúdo de `dist/` para o servidor, substituindo o anterior.

Se o navegador continuar mostrando a versão antiga, peça para recarregar sem cache
(Ctrl + F5 no Windows, Cmd + Shift + R no Mac).
