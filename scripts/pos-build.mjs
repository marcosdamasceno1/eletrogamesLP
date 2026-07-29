/**
 * Carimba cada HTML gerado com um aviso de que ele é arquivo de saída.
 *
 * Existe por um motivo prático: quem abre a pasta enviada para o servidor e
 * encontra HTML minificado tende a achar que o código está bagunçado e a
 * tentar editar ali. Qualquer alteração feita nesses arquivos some no build
 * seguinte. O aviso aponta para o lugar certo.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const AVISO = `<!--
  Eletrogames - site institucional
  ARQUIVO GERADO AUTOMATICAMENTE. Nao edite este arquivo.

  Ele e reescrito por inteiro a cada "npm run publicar", entao qualquer
  alteracao feita aqui e perdida no proximo envio.

  Para mudar textos, telefone, WhatsApp ou endereco:  docs/EDITAR-O-SITE.md
  Para subir a logomarca:                             docs/LOGOMARCA.md
  Para publicar de novo:                              docs/PUBLICAR.md
-->
`;

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith('.html')) yield full;
  }
}

let contador = 0;
for await (const file of htmlFiles('dist')) {
  const html = await readFile(file, 'utf8');
  if (html.startsWith('<!--\n  Eletrogames')) continue;
  await writeFile(file, AVISO + html);
  contador += 1;
}

console.log(`\nPronto: a pasta dist/ contem o site (${contador} paginas).`);
console.log('Envie o CONTEUDO de dist/ para a raiz do servidor.\n');
