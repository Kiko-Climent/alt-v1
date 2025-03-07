"use client";

// with embeed
// Con enlaces, falta conectar a Firebase

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import BookingModal from "../Booking/BookingModal";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/utils/firebaseConfig";


const ArtistProfile16 = ({data}) => {

  const [isAnimationComplete, setAnimationComplete] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
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
      className="min-h-screen w-screen pt-8 px-2 short:px-2 md:px-4 text-[#ed3833] bg-black flex flex-col justify-center lg:justify-center items-center">
      
      {/* AGAINST LOW TRENDS BACKGROUND */}
      <motion.p
        translate="no"
        initial={{ 
          clipPath: "inset(100% 0 0 0)", filter: "blur(10px)", opacity: "inherit"}}
          animate={{ 
            clipPath: showInfo ? "inset(100% 0 0 0)" : "inset(0 0 0% 0)",
            filter: showInfo ? "blur(10px)" : "blur(0.7px)",
            opacity: isAnimationComplete ? 0.3 : 1
        }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        onAnimationComplete={() => setAnimationComplete(true)}
        className="absolute top-1/2 -translate-y-1/2 w-full text-[9.0vw] font-bold text-center z-0 tracking-tight lg:tracking-normal whitespace-nowrap">
        AGAINST LOW TRENDS
      </motion.p>

      {/* motion div IMAGE */}
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)", filter: "blur(10px)", }}
        animate={{ clipPath: "inset(0 0 0% 0)", filter: "blur(0px)", }}
        transition={{ duration: 0.75, delay: 0.5 }}
        className="relative flex justify-center">
        <div className="w-[90%] md:w-4/5 lg:w-1/3">
          <motion.img
            src={profilePicUrl}
            style={{

              objectPosition: data.pic_object_position,
            }}
            className="w-full min-h-[65vh] aspect-[4/5] object-cover cursor-pointer"
            
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
          className={`absolute inset-0 bg-black lg:h-full overflow-y-auto w-full lg:w-8/12 lg:left-1/2 lg:top-1/2 
            lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col 
            ${selectedSection === "bio" ? "justify-start" : "justify-center"} 
            lg:justify-evenly`}
        >
          {/* fondo rojo emergente */}
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 1 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full absolute bg-[#ed3833]"
          />
          {/* Texto emergiendo después del fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showInfo ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:block relative w-full text-center text-xl md:text-3xl lg:text-4xl font-bold text-black"
          >
            {selectedSection && <p>| {selectedSection} |</p>}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : 10, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative px-1 font-bold text-center text-xs md:text-xl lg:text-[1.40rem] bg-[#ed3833] text-black"
          >
            {selectedSection === "bio" && (
              <div>
                {Array.isArray(data.artist_bio) ? (
                  data.artist_bio.map((paragraph, index) => (
                    <p key={index} className="mb-2">{paragraph}</p> // "mb-4" para dar espacio entre párrafos
                  ))
                ) : (
                  <p>{data.artist_bio}</p> // Si por alguna razón viene como string, lo mostramos normal
                )}
                <span className="italic">"{data.artist_and_alt}"</span>
              </div>
            )}
            {selectedSection === "in detail" && (
              <div>
                {Array.isArray(data.artist_detail) ? (
                  data.artist_detail.map((paragraph, index) => (
                    <p key={index} className="mb-2">{paragraph}</p> // "mb-4" para dar espacio entre párrafos
                  ))
                ) : (
                  <p>{data.artist_detail}</p> // Si por alguna razón viene como string, lo mostramos normal
                )}
              </div>
            )}
            {selectedSection === 'works' && <p>WORKS LIST</p>}
            {selectedSection === 'social media' && (
              <div className="flex flex-col items-center">
                {data.social_links && Object.entries(data.social_links).map(([platform, link]) => link && (
                  <p key={platform} className="flex font-bold text-2xl md:text-3xl lg:text-4xl">
                    <a href={link} target="_blank" rel="noopener noreferrer">{platform}</a>
                  </p>
                ))}
              </div>
            )}
            {selectedSection === 'wroks' && <p>{data.works}</p>}
          </motion.p>
          {/* Botón de cierre */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.8 }} 
            className="relative flex flex-row lg:flex-col justify-between text-xl md:text-3xl lg:text-4xl font-bold"
          >
            {showInfo && (
              <button 
                onClick={() => setShowInfo(false)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)} 
                className="bg-[#ed3833] text-black text-xl md:text-4xl text-center w-full"
              >
                {hovered ? "close" : "x"}
              </button>
            )}
          </motion.div>
          
        </motion.div>
      </motion.div>
      {/* artist name div */}
      <div className="flex flex-col pt-0 md:pt-2">
        <motion.div 
          initial={{ clipPath: "inset(0 0 0 100%)", filter: "blur(10px)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0 0 0)", filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center items-center gap-2 lg:gap-3"
        >
          <p 
            translate="no"
            className="text-[9.0vw] lg:text-7xl font-bold blur-[0.3px] pb-0 uppercase"
            // className="text-[min(8.0vw,120px)] font-bold blur-[0.3px] pb-0 uppercase"
          >
            {data.artist_name}
          </p>
          
          <motion.p 
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.95, delay: 0.6 }}
            className="text-4xl lg:text-5xl font-bold cursor-pointer"
            onClick={() => setShowLinks(!showLinks)}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <motion.span
              initial={{ rotate: 0 }} 
              animate={{ rotate: showLinks ? 45 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-block' }}
            >
              +
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Contenedor para que los textos no cambien el layout */}
        <div className="relative h-[1.8rem] md:h-[2.5rem] lg:h-[3rem]  flex justify-center items-center whitespace-nowrap">
          <motion.p
            initial={{ opacity: 0, rotateX: 0 }}
            animate={{ opacity: showLinks ? 0 : 1, rotateX: showLinks ? -90 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute text-white font-bold text-lg lg:text-2xl italic text-center"
          >
            “{data.artist_quote}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: showLinks ? 1 : 0, rotateX: showLinks ? 0 : 90 }}
            transition={{ duration: 0.8 }}
            className="absolute font-bold justify-center text-2xl md:text-3xl lg:text-4xl"
          >
            <span onClick={() => { setShowInfo(true); setSelectedSection('bio'); }} className="cursor-pointer hover:text-white">bio</span> |  
            <span onClick={() => { setShowInfo(true); setSelectedSection('in detail'); }} className="cursor-pointer hover:text-white"> in detail</span> | 
            <span onClick={() => { setShowInfo(true); setSelectedSection('works'); }} className="cursor-pointer hover:text-white"> works</span> |
            <span onClick={() => { setShowInfo(true); setSelectedSection('social media'); }} className="cursor-pointer hover:text-white"> sm</span> 
          </motion.p>
        </div>

        <div className="flex font-bold justify-center text-2xl md:text-3xl lg:text-4xl cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <p
            className="font-bold group"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="mr-2 transform transition-transform duration-300 group-hover:rotate-45 inline-block">↗</span>
             booking
          </p>
        </div>
          <BookingModal embedCode={data.booking_embed} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>


            

    </motion.section>
  );
};

export default ArtistProfile16;

