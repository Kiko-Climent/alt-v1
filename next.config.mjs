/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true, // Desactivar la optimización de imágenes
  },
};

export default nextConfig;
