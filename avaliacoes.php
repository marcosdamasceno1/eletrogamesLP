<?php
/* ===========================================================================
   AVALIACOES DO GOOGLE

   Este arquivo busca as avaliacoes da Eletrogames no Google, guarda o
   resultado e devolve para a pagina. O site chama ele sozinho.

   POR QUE ELE EXISTE
   A chave da API nao pode ficar dentro do HTML: qualquer visitante veria o
   codigo-fonte da pagina e poderia usar a chave por conta. Aqui ela fica no
   servidor, onde ninguem enxerga.

   O QUE PREENCHER (as duas linhas logo abaixo)
   1. CHAVE_DA_API  - a chave criada no Google Cloud
   2. ID_DO_LUGAR   - o Place ID da loja

   O passo a passo para conseguir os dois esta em
   docs/AVALIACOES-DO-GOOGLE.md

   COM QUE FREQUENCIA ATUALIZA
   De 12 em 12 horas. Entre uma busca e outra, o site le o arquivo
   assets/dados/avaliacoes.json, que este programa mesmo escreve. Isso
   segura o custo da API em centavos por mes e mantem a pagina rapida.
   =========================================================================== */


/* --- PREENCHA AQUI ------------------------------------------------------ */

$CHAVE_DA_API = 'CHAVE_DA_API';
$ID_DO_LUGAR  = 'ID_DO_LUGAR';

/* --- Ajustes opcionais -------------------------------------------------- */

$QUANTAS_MOSTRAR = 3;    /* quantas avaliacoes aparecem na pagina */
$NOTA_MINIMA     = 4;    /* ignora avaliacoes abaixo desta nota   */
$HORAS_DE_CACHE  = 12;   /* de quanto em quanto tempo rebusca     */

/* --- Daqui para baixo nao precisa mexer --------------------------------- */


$arquivo = __DIR__ . '/assets/dados/avaliacoes.json';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=3600');

/* 1. Se o arquivo guardado ainda esta novo, devolve ele e encerra.
      E o caminho da maioria absoluta das visitas. */
if (is_file($arquivo) && (time() - filemtime($arquivo)) < $HORAS_DE_CACHE * 3600) {
    readfile($arquivo);
    exit;
}

/* 2. Ainda nao configurado: devolve vazio, sem erro.
      A pagina continua mostrando as avaliacoes que estao escritas no HTML. */
if ($CHAVE_DA_API === 'CHAVE_DA_API' || $ID_DO_LUGAR === 'ID_DO_LUGAR') {
    echo json_encode(['avaliacoes' => [], 'aviso' => 'ainda nao configurado']);
    exit;
}

/* 3. Busca no Google.
      Places API (New). A versao antiga da API nao aceita projetos novos
      desde marco de 2025, entao e esta que deve ser ativada no Google Cloud. */
$url = 'https://places.googleapis.com/v1/places/' . rawurlencode($ID_DO_LUGAR)
     . '?languageCode=pt-BR'
     . '&fields=' . rawurlencode('rating,userRatingCount,googleMapsUri,reviews');

$cabecalhos = [
    'X-Goog-Api-Key: ' . $CHAVE_DA_API,
    'Accept: application/json',
];

$resposta = null;

if (function_exists('curl_init')) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER     => $cabecalhos,
        CURLOPT_TIMEOUT        => 8,
    ]);
    $corpo   = curl_exec($ch);
    $codigo  = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($corpo !== false && $codigo === 200) {
        $resposta = $corpo;
    }
} else {
    /* Hospedagem sem cURL: tenta pelo caminho simples */
    $contexto = stream_context_create([
        'http' => ['header' => implode("\r\n", $cabecalhos), 'timeout' => 8],
    ]);
    $corpo = @file_get_contents($url, false, $contexto);
    if ($corpo !== false) {
        $resposta = $corpo;
    }
}

/* 4. Deu errado a busca: devolve o arquivo antigo, mesmo vencido.
      Uma falha momentanea do Google nao pode apagar as avaliacoes do site. */
if ($resposta === null) {
    if (is_file($arquivo)) {
        readfile($arquivo);
    } else {
        echo json_encode(['avaliacoes' => [], 'aviso' => 'nao foi possivel consultar o Google']);
    }
    exit;
}

$dados = json_decode($resposta, true);

/* 5. Limpa o retorno, guardando so o que a pagina usa. */
$avaliacoes = [];

if (!empty($dados['reviews'])) {
    foreach ($dados['reviews'] as $r) {
        $texto = isset($r['text']['text']) ? trim($r['text']['text']) : '';
        $nota  = isset($r['rating']) ? (int) $r['rating'] : 0;

        /* Sem texto nao vale: um cartao vazio nao convence ninguem */
        if ($texto === '' || $nota < $NOTA_MINIMA) {
            continue;
        }

        $avaliacoes[] = [
            'autor'  => $r['authorAttribution']['displayName'] ?? 'Cliente',
            'foto'   => $r['authorAttribution']['photoUri']    ?? '',
            'perfil' => $r['authorAttribution']['uri']         ?? '',
            'nota'   => $nota,
            'texto'  => $texto,
            'quando' => $r['relativePublishTimeDescription']   ?? '',
        ];

        if (count($avaliacoes) >= $QUANTAS_MOSTRAR) {
            break;
        }
    }
}

$saida = json_encode([
    'avaliacoes'   => $avaliacoes,
    'nota'         => $dados['rating']          ?? null,
    'total'        => $dados['userRatingCount'] ?? null,
    'link'         => $dados['googleMapsUri']   ?? '',
    'atualizado'   => date('c'),
], JSON_UNESCAPED_UNICODE);

/* 6. Guarda para as proximas visitas. Se a pasta nao existir, cria. */
if (!is_dir(dirname($arquivo))) {
    @mkdir(dirname($arquivo), 0755, true);
}
@file_put_contents($arquivo, $saida);

echo $saida;
