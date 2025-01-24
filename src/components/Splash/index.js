"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer";
import LocalTime from "../Features/LocalTime";

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

const Splash = () => {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "75%" });
  const [displayElement, setDisplayElement] = useState("madrid"); // Control del flujo
  const [logoState, setLogoState] = useState("initial"); // Estado de animación del logo

  useEffect(() => {
    if (isInView) {
      // Mostrar los elementos secuencialmente
      const timer1 = setTimeout(() => setDisplayElement("time"), 1000); // Madrid -> Hora
      const timer2 = setTimeout(() => setDisplayElement("image"), 3000); // Hora -> Imagen
      const timer3 = setTimeout(() => {
        setDisplayElement("logo");
        setLogoState("enter");
      }, 3300);
      const timer4 = setTimeout(() => setLogoState("exit"), 6500); // Salida del logo después de 3.5 segundos

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [isInView]);

  return (
    <section
      ref={body}
      className="h-screen w-screen flex justify-center items-center bg-black overflow-hidden"
    >
      {/* Mostrar MADRID */}
      {displayElement === "madrid" && (
        <div className="flex text-center text-white font-bold text-xl tracking-wider">MADRID</div>
      )}

      {/* Mostrar la hora */}
      {displayElement === "time" && (
        <div className="flex text-center text-white font-bold text-xl mono tracking-tight">
          <LocalTime />
        </div>
      )}

      {/* Mostrar la imagen (flash) */}
      {displayElement === "image" && (
        <div className="flex h-full w-full justify-center items-center">
          <img
            src="/images/image00047.jpeg"
            width={400}
            height={400}
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
          className="flex h-full w-full justify-center items-center"
        >
          <img
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

export default Splash;
