"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import { db } from "@/utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import BookingModal from "../Booking/BookingModal";

const ArtistProfile8 = () => {

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
      className="min-h-screen w-screen px-4 gap-2 text-[#ed3833] bg-black flex flex-col justify-center lg:justify-center items-center">
      
      {/* AGAINST LOW TRENDS BACKGROUND */}
      <motion.p
        initial={{ 
          clipPath: "inset(100% 0 0 0)", filter: "blur(10px)" }}
        animate={{ 
          clipPath: showInfo ? "inset(100% 0 0 0)" : "inset(0 0 0% 0)",
          filter: showInfo ? "blur(10px)" : "blur(0.7px)" 
          
        }}
        transition={{ duration: 0.75 }}
        className="absolute top-1/2 -translate-y-1/2 w-full text-[9.0vw] font-bold text-center z-0">
        AGAINST LOW TRENDS
      </motion.p>

          {/* motion div IMAGE */}
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", filter: "blur(10px)" }}
            animate={{ clipPath: "inset(0 0 0% 0)", filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="relative flex justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 ">  
              <img
                src="/images/IMG-20250115-WA0008.jpg"
                className="w-full object-cover lg:object-cover"
                onClick={() => setShowInfo(!showInfo)}
                
              />
            </div>

            {/* motion div INFO */}
            <motion.div 
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={{ 
                opacity: showInfo ? 1 : 0, 
                clipPath: showInfo ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" 
              }}
              transition={{ duration: 0.7, opacity: { duration: 0.5, delay: 0.2 } }} 
              className="absolute inset-0 bg-black  w-full h-auto lg:h-full lg:w-7/12 lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col justify-center"
            >
              <motion.p 
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : 10, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: showInfo ? 0.3 : 0 }}
              className="text-base md:text-[1.5vw] leading-[1.15rem] lg:leading-5 font-bold text-justify">
                {artist.artist_name} <span className="font-normal" onClick={() => setShowInfo(!showInfo)}>{artist.artist_bio}</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : 10 }}
                transition={{ duration: 0.5, delay: showInfo ? 0.5 : 0 }} 
                className="flex justify-between text-2xl md:text-4xl font-bold mt-4 leading-7"
              >
                <div className="flex-col">
                {artist.social_links &&
                Object.entries(artist.social_links).map(([platform, link]) =>
                  link ? (
                    <p key={platform} className="flex font-bold cursor-pointer">
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        ↗ {platform}
                      </a>
                    </p>
                  ) : null
                )}
                </div>
                <div className="flex font-bold"
                  onClick={() => setIsModalOpen(true)}
                >
                  <p
                    className="font-bold cursor-pointer gap-2"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span className="transform transition-transform duration-300 group-hover:rotate-45">↗ </span>
                    booking
                  </p>
                </div>
              </motion.div>
              
                
            </motion.div>
          </motion.div>
          <BookingModal embedCode={artist.booking_embed} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          {/* artist name div */}
          <div className="flex">
          <motion.div 
            initial={{ clipPath: "inset(0 0 0 100%)", filter: "blur(10px)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0 0)", filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-3"
          >
            <p className="text-[9.0vw] md:text-7xl font-bold blur-[0.3px]">
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
          </div>

            

    </motion.section>
  );
};

export default ArtistProfile8;

