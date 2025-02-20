"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const imagesSet1 = [
  "/images/LAIA.jpg",
  "/images/LUCIA.JPG",
  "/images/NOT A HEAD LINER.jpg",
  "/images/TAKT.jpg",
  "/images/MONTERO.jpg",
  "/images/MANU.JPG",
];

const imagesSet2 = [...imagesSet1, "/images/ALT_Alta_Logo_blanco.png"];
const sequence = [...imagesSet1, ...imagesSet2];

const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

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

const Splash3 = ({ onFinish = () => {} }) => {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
    preloadImages(sequence).then(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!loading) {
      if (currentIndex < sequence.length - 1) {
        const delay = mobile ? 330 : 100;
        const timer = setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
        }, delay);
        return () => clearTimeout(timer);
      } else {
        setShowLogo(true);
        setTimeout(() => {
          onFinish?.();
        }, mobile ? 2000 : 3000);
      }
    }
  }, [currentIndex, loading, mobile]);

  return (
    <section className="min-h-screen w-screen flex justify-center items-center bg-black overflow-hidden px-4 relative">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center bg-black z-50"
        >
          <div className="w-12 h-12 border-8 border-[#ed3833] border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
      )}

      {!loading && !showLogo && (
        <motion.div
          key={currentIndex}
          className={`flex ${mobile ? "h-full w-full" : "h-8/12 w-8/12"} justify-center items-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeOut" }} // Transición rápida
        >
          <Image
            src={sequence[currentIndex]}
            width={mobile ? 350 : 500}
            height={mobile ? 200 : 300}
            style={{ objectFit: "cover" }}
            alt={`Splash image ${currentIndex}`}
            priority={true}
          />
        </motion.div>
      )}

      {showLogo && (
        <motion.div
          className="absolute flex justify-center items-center h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/ALT_Alta_Logo_blanco.png"
            width={mobile ? 350 : 500}
            height={mobile ? 200 : 300}
            style={{ objectFit: "contain" }}
            alt="Logo Final"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Splash3;
