"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logo = "/images/ALT_Alta_Logo_blanco.webp";

const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

const Splash5 = () => {
  const [mobile, setMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [loaderMinTimePassed, setLoaderMinTimePassed] = useState(false);

  useEffect(() => {
    // Mantener el loader un mínimo de 2 segundos
    const minTime = setTimeout(() => setLoaderMinTimePassed(true), 2000);

    // Cargar la imagen
    const img = new window.Image();
    img.src = logo;
    img.onload = () => {
      setIsLoading(false); // Imagen cargada
    };

    return () => clearTimeout(minTime);
  }, []);

  useEffect(() => {
    setMobile(isMobile());
    // Mostrar el logo solo cuando el loader ha terminado su tiempo mínimo y la imagen está cargada
    if (!isLoading && loaderMinTimePassed) {
      setShowLogo(true);
      // Mantener el logo 2 segundos y luego ocultarlo abruptamente
      const logoTimer = setTimeout(() => setShowLogo(false), 2000);
      return () => clearTimeout(logoTimer);
    }
  }, [isLoading, loaderMinTimePassed]);

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: showLogo ? 1 : 0 }}
      transition={{ duration: showLogo ? 0 : 0.5 }} // El logo desaparece abruptamente, el loader se desvanece en 0.5s
      className="h-screen w-screen flex flex-col justify-center items-center bg-black fixed inset-0 z-50"
    >
      {/* Loader - Se desvanece en 0.5s cuando la imagen está lista y ha pasado el tiempo mínimo */}
      {isLoading || !loaderMinTimePassed ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center bg-black"
        >
          <div className="w-12 h-12 border-8 border-[#ed3833] border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
      ) : null}

      {/* Logo - Aparece abruptamente y se mantiene 2 segundos */}
      {showLogo && (
        <div className="flex items-center justify-center">
          <Image
            src={logo}
            className="object-contain"
            alt="logo"
            width={mobile ? 250 : 350}
            height={mobile ? 100 : 200}
            priority
          />
        </div>
      )}
    </motion.section>
  );
};

export default Splash5;
