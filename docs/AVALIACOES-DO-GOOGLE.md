# Puxar as avaliações do Google

O site pode buscar sozinho as avaliações da Eletrogames no Google e mostrar na
página inicial. Enquanto isso não estiver configurado, ficam no ar as três
avaliações escritas à mão dentro do `index.html` — a seção nunca fica vazia.

São 15 minutos de configuração, feita uma vez só.

---

## Antes de começar

**A conta do Google Cloud não precisa ser a mesma que responde as avaliações.**
Ler avaliações é consulta a dado público: qualquer projeto consulta qualquer
loja. Você não precisa ser dono do perfil da Eletrogames.

Mesmo assim, **crie o projeto na conta do cliente**, não na sua. Se um dia a
parceria mudar, as avaliações do site não param junto.

Precisa de um cartão cadastrado no Google Cloud. Com uma consulta a cada 12
horas, o gasto fica em centavos por mês — e o Google ainda dá um crédito
mensal de uso gratuito que costuma cobrir tudo.

---

## Passo 1 — Pegar o Place ID da loja

O Place ID é o código que identifica a loja dentro do Google.

1. Abra <https://developers.google.com/maps/documentation/places/web-service/place-id>
2. No mapa da página, procure por **Eletrogames Ipatinga**
3. Clique na loja. O código aparece numa caixinha, começando com `ChIJ`
4. Copie ele inteiro

---

## Passo 2 — Criar a chave da API

1. Entre em <https://console.cloud.google.com/>
2. Crie um projeto novo. Pode chamar de `eletrogames-site`
3. No menu, vá em **APIs e serviços › Biblioteca**
4. Procure por **Places API (New)** e clique em **Ativar**

   > Tem que ser a **(New)**. A versão antiga não aceita projetos novos
   > desde março de 2025.

5. Vá em **APIs e serviços › Credenciais › Criar credenciais › Chave de API**
6. Copie a chave

### Proteger a chave (não pule este passo)

Ainda na tela da chave, clique em **Editar chave da API**:

- Em **Restrições de aplicativo**, escolha **Endereços IP** e informe o IP do
  servidor onde o site está hospedado. Se não souber qual é, o suporte da
  hospedagem informa.

  > Não escolha "Sites (referenciadores HTTP)". Quem chama o Google aqui é o
  > servidor, não o navegador do visitante, então essa opção bloquearia a
  > consulta.

- Em **Restrições de API**, marque **Restringir chave** e deixe só a
  **Places API (New)** selecionada.

Sem essas duas restrições, uma chave vazada pode gerar cobrança na conta do
cliente.

---

## Passo 3 — Preencher no site

Abra o arquivo `avaliacoes.php`, que fica na mesma pasta do `index.html`.
Logo no começo tem duas linhas:

```php
$CHAVE_DA_API = 'CHAVE_DA_API';
$ID_DO_LUGAR  = 'ID_DO_LUGAR';
```

Troque o que está entre aspas pela chave e pelo Place ID. Mantendo as aspas:

```php
$CHAVE_DA_API = 'AIzaSy...';
$ID_DO_LUGAR  = 'ChIJ...';
```

Salve e envie o arquivo para o servidor. Pronto.

---

## Conferir se funcionou

Abra no navegador: `https://SEU-DOMINIO.com.br/avaliacoes.php`

| O que aparece | O que significa |
| --- | --- |
| Um monte de texto com nomes e comentários | Funcionando |
| `{"avaliacoes":[],"aviso":"ainda nao configurado"}` | A chave ou o Place ID não foram preenchidos |
| `{"avaliacoes":[],"aviso":"nao foi possivel consultar o Google"}` | A chave foi recusada. Confira a restrição de IP e se a Places API (New) está ativada |
| O código do arquivo, começando com `<?php` | A hospedagem não está executando PHP. Fale com o suporte |
| Erro 404 | O arquivo não foi enviado para o servidor |

Depois disso, recarregue a página inicial. As avaliações do Google aparecem no
lugar das escritas à mão, com as estrelas e a data de cada uma.

---

## Ajustes possíveis

Ainda no começo do `avaliacoes.php`:

```php
$QUANTAS_MOSTRAR = 3;    // quantas avaliações aparecem
$NOTA_MINIMA     = 4;    // ignora avaliações abaixo desta nota
$HORAS_DE_CACHE  = 12;   // de quanto em quanto tempo rebusca
```

Se aumentar `$QUANTAS_MOSTRAR` para mais de 3, troque também a classe
`grade--3` por `grade--4` na seção de depoimentos do `index.html`, senão os
cartões ficam apertados.

---

## Coisas que valem saber

**O Google devolve no máximo 5 avaliações.** Não é limitação do site: a API
não entrega mais que isso, e não dá para escolher quais. Ela envia as que
considera mais relevantes.

**Avaliações sem texto são descartadas.** Quem só deu as estrelas, sem
escrever nada, não vira cartão — um cartão vazio não convence ninguém.

**O site guarda o resultado por 12 horas.** Uma avaliação nova pode levar até
esse tempo para aparecer. Para ver na hora, apague o arquivo
`assets/dados/avaliacoes.json` no servidor; ele se refaz sozinho na próxima
visita.

**Se o Google ficar fora do ar**, o site mostra o último resultado guardado,
mesmo vencido. E se nem isso existir, voltam as avaliações escritas no HTML.
A seção não fica vazia em nenhuma hipótese.

**As regras do Google exigem o crédito visível.** É a linha "Avaliações
publicadas no Google" embaixo dos cartões. Não remova.

**Não marque essas avaliações como nota da empresa no Schema.org.** As regras
do Google não permitem que um site publique como sua a avaliação coletada em
outro serviço. Por isso a ficha do site não inclui esse campo.
