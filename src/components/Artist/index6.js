"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import { db } from "@/utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import BookingModal from "../Booking/BookingModal";

const ArtistProfile6 = () => {

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
      className="relative h-screen bg-black text-[#ed3833] text-[3.5vw] flex flex-col gap-1 items-center justify-center pb-[7vh] md:pb-[10vh] overflow-hidden">
      
      <motion.p
        initial={{ 
          clipPath: "inset(100% 0 0 0)", filter: "blur(10px)" }}
        animate={{ 
          clipPath: showInfo ? "inset(100% 0 0 0)" : "inset(0 0 0% 0)",
          filter: showInfo ? "blur(10px)" : "blur(0.7px)" 
          
        }}
        transition={{ duration: 0.75 }}
        className="absolute top-1/2 -translate-y-1/2 w-full text-[9.3vw] font-bold text-center z-0">
      {/* <p className="absolute top-1/2 -translate-y-1/2 w-full text-[9.3vw] text-[#2e2e2e] font-bold text-center opacity-60 z-0"> */}
        AGAINST LOW TRENDS
      </motion.p>
      {/* Contenedor de la imagen */}
      <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", filter: "blur(10px)" }}
            animate={{ clipPath: "inset(0 0 0% 0)", filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="relative flex items-center justify-center h-screen w-full pt-0 md:pt-24"
            
        >
        <img
            src="/images/IMG-20250115-WA0008.jpg"
            className="w-3/4 md:w-1/2 lg:w-1/3 object-contain md:object-cover"
            onClick={() => setShowInfo(!showInfo)}
            
        />

        <motion.div 
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ 
            opacity: showInfo ? 1 : 0, 
            clipPath: showInfo ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" 
          }}
          transition={{ duration: 0.7, opacity: { duration: 0.5, delay: 0.2 } }} 
          className="absolute inset-0 bg-black flex flex-col items-center justify-evenly text-center px-4 md:px-2"
        >
          <motion.p 
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : 10, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: showInfo ? 0.3 : 0 }}
          className="w-full md:w-1/2 text-base md:text-[1.5vw] font-bold tracking-[0.08em] leading-4 md:leading-5">
            {artist.artist_name} <span className="font-normal" onClick={() => setShowInfo(!showInfo)}>{artist.artist_bio}</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : 10 }}
            transition={{ duration: 0.5, delay: showInfo ? 0.5 : 0 }} 
            className="flex-col text-2xl md:text-4xl leading-7 md:leading-9 justify-end group"
          >
            <p
              className="font-bold cursor-pointer text-justify flex items-center gap-2"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="transform transition-transform duration-300 group-hover:rotate-45">↗</span>
              booking
            </p>
            {artist.social_links &&
              Object.entries(artist.social_links).map(([platform, link]) =>
                link ? (
                  <p key={platform} className="font-bold cursor-pointer text-justify">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      ↗ {platform}
                    </a>
                  </p>
                ) : null
              )}
          </motion.div>
        </motion.div>

        {/* <motion.div 
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          
          transition={{ duration: 0.95, delay: 0.6 }}
          className="absolute bottom-0 md:bottom-0 right-4 md:right-1 text-xl md:text-[1.5vw] flex flex-col items-end blur-[0.5px]">
          <motion.div 
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ 
              filter: showInfo ? "blur(10px)" : "blur(0px)", 
              opacity: showInfo ? 0 : 1 
            }}
            transition={{ duration: 0.95, delay: 0.5 }}
          >
            <p className="font-bold cursor-pointer"
              onClick={() => setShowInfo(!showInfo)}>+</p>
              
          </motion.div>
                 
        </motion.div> */}
        

      </motion.div>
        <BookingModal embedCode={artist.booking_embed} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        <motion.div 
          initial={{ clipPath: "inset(0 0 0 100%)", filter: "blur(10px)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0 0 0)", filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-3"
        >
          <p className="text-[2.5rem] md:text-7xl font-bold blur-[0.5px] pb-1 md:pb-2">
            {artist.artist_name}
          </p>
          
          <motion.p 
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.95, delay: 0.6 }}
            className="text-3xl md:text-4xl font-bold cursor-pointer"
            onClick={() => setShowInfo(!showInfo)}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <motion.span
              initial={{ rotate: 0 }} 
              animate={{ rotate: showInfo ? 45 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-block' }}
            >
              +
            </motion.span>
          </motion.p>

        </motion.div>

    </motion.section>
  );
};

export default ArtistProfile6;

