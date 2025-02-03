"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import { db } from "@/utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import BookingModal from "../Booking/BookingModal";

const ArtistProfile4 = () => {

  const router = useRouter();
  const [artist, setArtist] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const id = router.query.id;

  useEffect(() => {
    if (!id) return; // Evito continuar si el ID no está listo

    const fetchArtist = async () => {
      try {
        const docRef = doc(db, "roster", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArtist(docSnap.data());
        } else {
          console.error("No such artist!");
        }
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtist();
  }, [id]);

  useEffect(() => {
    if (isModalOpen && artist?.booking_embed) {
      const script = document.createElement("script");
      script.src = "https://connect.gigwell.com/roster/loader.js";
      script.type = "text/javascript";
      script.crossOrigin = "*";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); // Limpia el script al cerrar el modal
      };
    }
  }, [isModalOpen, artist]);

  // Mientras se cargan los datos, muestra un estado de carga
  if (!artist) {
    return <p>Loading...</p>;
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      className="relative h-screen bg-black text-[#ed3833] text-[3.5vw] flex flex-col gap-1 items-center justify-center pb-[10vh] overflow-hidden">
      
      <motion.p
        initial={{ 
          clipPath: "inset(100% 0 0 0)", filter: "blur(10px)" }}
        animate={{ 
          clipPath: showInfo ? "inset(100% 0 0 0)" : "inset(0 0 0% 0)",
          filter: showInfo ? "blur(10px)" : "blur(0px)" 
          
        }}
        transition={{ duration: 0.75 }}
        className="absolute top-1/2 -translate-y-1/2 w-full text-[9.3vw] font-bold text-center z-0">
      {/* <p className="absolute top-1/2 -translate-y-1/2 w-full text-[9.3vw] text-[#2e2e2e] font-bold text-center opacity-60 z-0"> */}
        AGAINST LOW TRENDS
      </motion.p>
      {/* Contenedor de la imagen */}
      <motion.div 
        initial={{ clipPath: "inset(0 0 100% 0)", filter: "blur(10px)" }}
        animate={{ clipPath:"inset(0 0 0% 0)", filter: "blur(0px)" }}
        transition={{ duration: 0.75, delay: 0.5 }}
        className="relative flex flex-col items-center justify-center">
        <img
          src="/images/IMG-20250115-WA0008.jpg"
          className="flex object-cover md:object-cover h-screen"
        />

        <motion.div 
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: showInfo ? 1 : 0, clipPath: showInfo ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 bg-black flex flex-col items-center justify-center text-justify px-2 py-2 gap-4"
        >
        <p className="text-[1.5vw] font-bold tracking-[0.08em] leading-4 md:leading-5">
          {artist.artist_name} <span className="font-normal">{artist.artist_bio}</span></p>
        {/* <div className="flex text-4xl">
          <div className="cursor-pointer">soundcloud, </div>
          <div className="cursor-pointer">bandcamp, </div>
          <div className="cursor-pointer">instagram</div>
        </div>  */}
        </motion.div>

        <motion.div 
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          
          transition={{ duration: 0.95, delay: 0.6 }}
          className="absolute bottom-1 right-1 text-[1.5vw] flex flex-col items-end blur-[0.5px]">
          <motion.div 
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.95, delay: 1.2 }}
          >
            <p className="font-bold cursor-pointer"
              onClick={() => setIsModalOpen(true)}>↗ booking</p>
            <p className="font-bold -mt-3 cursor-pointer"
              onClick={() => setShowInfo(!showInfo)}>+ info</p>
              
          </motion.div>
                 
        </motion.div>
        
        {showInfo && (
          <motion.div 
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            exit={{ filter: "blur(10px)", opacity: 0 }}
            transition={{ duration: 0.95, delay: 0.3 }}
            className="absolute bottom-1 left-1 text-[1.5vw] flex flex-col items-end"
          >
            <motion.div 
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.6 }}
            >
              <p className="font-bold cursor-pointer">↗ soundcloud</p>
              <p className="font-bold -mt-3 cursor-pointer">↗ bandcamp</p>
              <p className="font-bold -mt-3 cursor-pointer">↗ instagram</p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
        <BookingModal embedCode={artist.booking_embed} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <motion.div 
          initial={{ clipPath: "inset(0 0 0 100%)", filter: "blur(10px)", opacity: 0, }}
          animate={{ clipPath: "inset(0 0 0 0)", filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}>
      <p className="text-5xl md:text-6xl font-bold blur-[0.5px]">
        {artist.artist_name}
      </p>
      </motion.div>

    </motion.section>
  );
};

export default ArtistProfile4;

