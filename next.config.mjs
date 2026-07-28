/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  /**
   * Exportação estática: `npm run build` gera HTML, CSS e JS prontos para
   * qualquer hospedagem comum (Hostinger, cPanel, Apache, nginx, Netlify,
   * Vercel). Não precisa de Node no servidor.
   */
  output: 'export',

  /**
   * Cada rota vira uma pasta com index.html (/sobre/index.html), que é o
   * formato que servidor compartilhado entende sem regra de reescrita.
   */
  trailingSlash: true,

  /**
   * Sem servidor Next, não há otimização de imagem sob demanda. Otimize os
   * arquivos antes de colocar em /public (WebP ou AVIF, veja docs/LOGOMARCA.md).
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
