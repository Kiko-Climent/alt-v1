"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/Photo35_33A.webp",
  "/images/NOT A HEAD LINER.webp",
  "/images/MANU.webp",
  "/images/TAKT.webp",
  "/images/LUCIA.webp",
  "/images/MONTERO.webp",
  "/images/LAIA.webp",
];

const logo = "/images/ALT_Alta_Logo_blanco.png";

const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

const Splash4 = () => {
  const [mobile, setMobile] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setMobile(isMobile());

    // Simulación de carga de imágenes
    const preloadImages = (imageArray) => {
    return Promise.all(
      imageArray.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = src;
          img.onload = () => resolve(src);
          img.onerror = reject;
        });
      })
    );
  };

  preloadImages(images).then(() => setIsLoaded(true)).catch(console.error);
  }, []);

  useEffect(() => {
    if (isRevealed) {
      let index = 0;
      const interval = setInterval(() => {
        setCurrentImage(index);
        index++;
        if (index === images.length) {
          clearInterval(interval);
          setIsFinished(true); // Marcar como terminado cuando llegue a la última imagen
        }
    }, 150);

      

      return () => clearInterval(interval);
    }
  }, [isRevealed]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      className="h-screen w-screen flex flex-col justify-center items-center bg-black relative"
    >
      {/* Loader */}
      {!isLoaded && (
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center bg-black z-50"
        >
          <div className="w-12 h-12 border-8 border-[#ed3833] border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
      )}

      {/* Clip Path Rojo Inicial */}
      {isLoaded && (
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)"}}
          animate={{
            clipPath: isFinished ? "inset(100% 0 0 0)" : "inset(0 0 0% 0)",
          }}
          transition={{ duration: 0.75, delay: 0.5 }}
          onAnimationComplete={() => setIsRevealed(true)}
          className="absolute w-full h-full"
        />
      )}

      {/* Imagenes que rotan */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isFinished ? 0 : 1 }}
        transition={{ duration: 0.75, delay: 0.5 }}
        className="flex w-[90%] md:w-4/5 lg:w-1/3 max-h-screen"
      >
        {isLoaded && (
          <Image
            src={images[currentImage]}
            alt="roster"
            className="w-full max-h-screen aspect-[4/5] object-contain"
            width="500"
            height="500"
            loading="eager"
            priority={currentImage === 0}
          />
        )}
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)", filter: "blur(10px)" }}
        animate={{
          clipPath: isFinished ? "inset(100% 0 0 0)" : "inset(0 0 0% 0)",
          filter: isFinished ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.75, delay: 0.5 }}
        className="flex w-full items-center justify-center"
      >
        {isLoaded && (
          <Image
            src={logo}
            className="object-contain"
            alt="logo"
            width={mobile ? 250 : 350}
            height={mobile ? 100 : 200}
            priority
          />
        )}
      </motion.div>
    </motion.section>
  );
};

export default Splash4;
