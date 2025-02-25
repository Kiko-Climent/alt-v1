"use client";

// with embeed

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import BookingModal from "../Booking/BookingModal";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/utils/firebaseConfig";



const ArtistProfile13 = ({data}) => {

  const [showInfo, setShowInfo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [profilePicUrl, setProfilePicUrl] = useState("");

  useEffect(() => {
    if (data?.profile_pic) {
      const imgRef = ref(storage, data.profile_pic);

      getDownloadURL(imgRef)
        .then((url) => {
          console.log("Firebase Image URL:", url);
          setProfilePicUrl(url);
        })
        .catch((error) => console.error("Error fetching image URL:", error));
    }
  }, [data?.profile_pic]);
  


  useEffect(() => {
    if (isModalOpen && data?.booking_embed) {
      const script = document.createElement("script");
      script.src = "https://connect.gigwell.com/roster/loader.js";
      script.type = "text/javascript";
      script.crossOrigin = "*";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); // Limpia el script al cerrar el modal
      };
    }
  }, [isModalOpen, data]);
  

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      className="min-h-screen w-screen px-2 short:px-2 md:px-4 gap-0 text-[#ed3833] bg-black flex flex-col justify-center lg:justify-center items-center">
      
      {/* AGAINST LOW TRENDS BACKGROUND */}
      <motion.p
        translate="no"
        initial={{ 
          clipPath: "inset(100% 0 0 0)", filter: "blur(10px)" }}
          animate={{ 
            clipPath: showInfo ? "inset(100% 0 0 0)" : "inset(0 0 0% 0)",
            filter: showInfo ? "blur(10px)" : "blur(0.7px)",
        }}
        transition={{ duration: 0.75 }}
        className="absolute top-1/2 -translate-y-1/2 w-full text-[9.0vw] font-bold text-center z-0 tracking-tight lg:tracking-normal">
        AGAINST LOW TRENDS
      </motion.p>

      {/* motion div IMAGE */}
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)", filter: "blur(10px)", }}
        animate={{ clipPath: "inset(0 0 0% 0)", filter: "blur(0px)", }}
        transition={{ duration: 0.75, delay: 0.5 }}
        className="relative flex justify-center">
        <div className="w-[90%] md:w-4/5 lg:w-1/3 min-h-[65vh] aspect-[4/5]">
          <motion.img
            src={profilePicUrl}
            className="w-full h-full object-cover lg:object-cover cursor-pointer"
            onClick={() => setShowInfo(!showInfo)}
            animate={{ opacity: showInfo ? 0 : 1 }}
            transition={{ duration: 0.3, delay: showInfo ? 0.5 : 0 }}
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
          className="absolute inset-0 bg-black lg:h-full overflow-y-hidden w-full lg:w-7/12 lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col justify-center lg:justify-center"
        >
          <div className="h-full w-full flex justify-center items-center">
            <motion.p 
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : 10, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: showInfo ? 0.3 : 0 }}
            className="cursor-pointer text-base short:text-xs md:text-xl lg:text-[1.40rem] 2xl:text-[1.7rem] leading-[1.15rem] lg:leading-6 tracking-normal md:tracking-normal font-bold text-justify">
              {data.artist_name} <span className="font-normal" onClick={() => setShowInfo(!showInfo)}>{data.artist_bio}</span>
            </motion.p>
          </div>

          <motion.div
            translate="no"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : 10 }}
            transition={{ duration: 0.5, delay: showInfo ? 0.5 : 0 }} 
            className="flex flex-row lg:flex-col justify-between lg:justify-center gap-0 text-2xl md:text-3xl lg:text-4xl font-bold mt-3 md:mt-4 leading-6 md:leading-7"
          >
            <div className="flex flex-col lg:flex-row justify-center gap-1 lg:gap-3">
            {data.social_links &&
            Object.entries(data.social_links).map(([platform, link]) =>
              link ? (
                <p key={platform} className="flex font-bold cursor-pointer">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    ↗ {platform}
                  </a>
                </p>
              ) : null
            )}
            </div>
            <div className="flex font-bold justify-start lg:justify-center"
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
      <BookingModal embedCode={data.booking_embed} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      {/* artist name div */}
      <div className="flex">
        <motion.div 
          initial={{ clipPath: "inset(0 0 0 100%)", filter: "blur(10px)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0 0 0)", filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center items-center gap-2 lg:gap-3"
        >
          <p 
          translate="no"
          className="text-[9.0vw] lg:text-7xl font-bold blur-[0.3px] pb-0 lg:pb-2">
            {data.artist_name}
          </p>
          <motion.p 
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.95, delay: 0.6 }}
            className="text-3xl lg:text-4xl font-bold cursor-pointer"
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

export default ArtistProfile13;

