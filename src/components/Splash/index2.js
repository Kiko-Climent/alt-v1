"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer";
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
  exit: {
    clipPath: "inset(0 100% 0 0)",
    transition: {
      duration: 3,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const Splash2 = () => {
  const body = useRef(null);
  const [displayElement, setDisplayElement] = useState(null); // Inicialmente vacío
  const [logoState, setLogoState] = useState("initial"); // Estado de animación del logo

  useEffect(() => {
    // Controlar el flujo de animaciones
    const timer1 = setTimeout(() => {
      setDisplayElement("image"); // Mostrar la imagen (flash)
    }, 300); // Retraso inicial antes del chispazo (300ms)

    const timer2 = setTimeout(() => {
      setDisplayElement("logo"); // Pasar al logo tras el chispazo
      setLogoState("enter"); // Iniciar animación del logo
    }, 500); // Imagen visible solo durante 200ms

    const timer3 = setTimeout(() => setLogoState("exit"), 4000); // Salida del logo después de 3.5 segundos desde que entra

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
      {/* Mostrar la imagen (flash breve) */}
      {displayElement === "image" && (
        <div className="flex h-full w-full justify-center items-center">
          <Image
            src="/images/image00047.jpeg"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* Mostrar el logo con animación */}
      {displayElement === "logo" && (
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
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Splash2;
