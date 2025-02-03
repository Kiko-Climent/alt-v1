"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import { db } from "@/utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import BookingModal from "../Booking/BookingModal";

const ArtistProfile3 = () => {
  const router = useRouter();
  const [artist, setArtist] = useState(null);
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
  }, [id]); // Eliminé `router.isReady` porque no es necesario aquí

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
      className="h-screen py-8 px-4 bg-black text-[#ed3833]"
    >
      <div className="flex flex-col md:flex-row h-full gap-x-2 gap-y-2 md:gap-y-o">
        <div className="flex-1 flex justify-start md:justify-end items-center gap-x-2">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", filter: "blur(10px)" }}
            animate={{ clipPath:"inset(0 0 0% 0)", filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="w-[65%] md:w-[75%] h-auto relative"
          >
            <Image
              src="/images/IMG-20250115-WA0008.jpg"
              className="h-auto object-contain"
              alt="artist image"
              width={600}
              height={600}
              priority
            />
          </motion.div>
          <div className="font-bold md:hidden flex flex-col h-full justify-center text-[2.5vh] gap-4">
            <motion.div 
              initial={{ clipPath: "inset(100% 0 0 0)", filter: "blur(10px)", opacity: 0, }}
              animate={{clipPath: "inset(0 0 0 0)", filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.4 }} className="">
              <h1 className="leading-[20px]">PYRAMIDAL DECODE</h1>
              <div>↗ soundcloud</div>
              <div>↗ bandcamp</div>
              <div>↗ instagram</div>
            <motion.div
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.95, delay: 0.6 }}
            onClick={() => setIsModalOpen(true)}
          >
            @booking
          </motion.div>
          <BookingModal embedCode={artist.booking_embed} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            </motion.div>
          </div>
        </div>

        <div
        className="flex-1 flex flex-col justify-start md:justify-center h-full gap-2 md:gap-4">
          <motion.div
          initial={{ clipPath: "inset(0 0 0 100%)", filter: "blur(10px)", opacity: 0, }}
          animate={{ clipPath: "inset(0 0 0 0)", filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8 }}
            className="flex tracking-wider w-full md:w-[75%] text-base md:text-[1.5vw] leading-[1rem] md:leading-5">
            <p className="font-normal text-justify">
              <span className="font-bold text-justify">
                {artist.artist_name}
              </span>{" "}
              {artist.artist_bio}
            </p>
          </motion.div>
          <motion.div 
          initial={{ clipPath: "inset(100% 0 0 0)", filter: "blur(10px)", opacity: 0, }}
          animate={{clipPath: "inset(0 0 0 0)", filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.4 }}
          className="hidden font-bold md:flex flex-col text-4xl leading-[2.3rem]">
            <div>↗ soundcloud</div>
            <div>↗ bandcamp</div>
            <div>↗ instagram</div>
          </motion.div>
          <motion.div
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.95, delay: 0.6 }}
            className="font-bold hidden md:flex text-[3.5vh] md:text-4xl cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            @booking
          </motion.div>

          <BookingModal embedCode={artist.booking_embed} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>
      </div>
      
    </motion.section>
  );
};

export default ArtistProfile3;
