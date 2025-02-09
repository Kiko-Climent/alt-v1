/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export', // Agregar esta línea para habilitar la exportación estática
  images: {
    unoptimized: true, // Desactivar la optimización de imágenes
  },
};

export default nextConfig;
