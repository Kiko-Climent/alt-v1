"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logoAnimation = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  enter: {
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 3,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const Splash2 = () => {
  const body = useRef(null);
  const [loading, setLoading] = useState(true); // Estado de carga inicial
  const [displayElement, setDisplayElement] = useState(null);
  const [logoState, setLogoState] = useState("initial");

  useEffect(() => {
    // Simulamos carga (puedes cambiarlo por una comprobación real de imágenes, etc.)
    setTimeout(() => {
      setLoading(false); // Desactivar loader después de la carga simulada
    }, 2000); // 2 segundos de carga falsa

    // Controlar el flujo de animaciones
    const timer1 = setTimeout(() => {
      setDisplayElement("image");
    }, 2500); // Aparece la imagen después del loader

    const timer2 = setTimeout(() => {
      setDisplayElement("logo");
      setLogoState("enter");
    }, 2700); // Imagen visible solo 200ms

    const timer3 = setTimeout(() => setLogoState("exit"), 6000); // Salida del logo después de 3.5 segundos desde que entra

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section
      ref={body}
      className="h-screen w-screen flex justify-center items-center bg-black overflow-hidden px-4"
    >
      {/* Loader animado */}
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center bg-black z-50"
        >
          <div className="w-12 h-12 border-8 border-[#ed3833] border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
      )}

      {/* Mostrar la imagen (flash breve) */}
      {displayElement === "image" && !loading && (
        <div className="flex h-full w-full justify-center items-center">
          <Image
            src="/images/image00047.jpeg"
            alt="Splash Image"
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      {/* Mostrar el logo con animación */}
      {displayElement === "logo" && !loading && (
        <motion.div
          variants={logoAnimation}
          initial="initial"
          animate={logoState}
          className="flex h-7/12 md:h-full w-7/12 justify-center items-center"
        >
          <Image
            src="/images/ALT_Alta_Logo_blanco.png"
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Splash2;
