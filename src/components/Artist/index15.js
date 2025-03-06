"use client";

// with embeed
// Con enlaces, falta conectar a Firebase

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import BookingModal from "../Booking/BookingModal";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/utils/firebaseConfig";

const bio = "NOT A HEADLINER rejects the ego-driven culture of electronic music, focusing instead on the dancefloor as a space for collective energy and shared experiences. Sets transcend genres, blending house, electro, techno, and their derivatives into fluid and dynamic journeys. Releases reflect the same ethos: adaptable, imaginative, and always grounded in a clear artistic vision. With a foundation in Global Offensive Corporation, the project questions the commodification of club culture through a direct and uncompromising approach."
const projects = "GLOBOFFCORP (Global Offensive Corporation) is a creative space where the artist explores music freely without constraints. With its own identity and a strong conceptual foundation, this project is a natural extension of his artistic vision."
const alt = "Being part of ALT reinforces my critical stance towards the electronic music scene. Against Low Trends is not just an agency. It is a platform where artistic projects are nurtured rather than exploited. It stands against the extreme commodification of electronic music and prioritizes authenticity over mass appeal."

const ArtistProfile15 = ({data}) => {

  const [showInfo, setShowInfo] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
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
      className="min-h-screen w-screen px-2 short:px-2 md:px-4 text-[#ed3833] bg-black flex flex-col justify-center lg:justify-center items-center">
      
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
          className="absolute inset-0 bg-black lg:h-full overflow-y-auto w-full lg:w-8/12 lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col justify-center lg:justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : -10 }}
            transition={{ duration: 0.5 }}
            className="w-full text-center text-xl md:text-3xl lg:text-4xl font-bold bg-[#ed3833] text-black mb-1 md:mb-3"
          >
            {selectedSection && (
              <p>{selectedSection}</p>
            )}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : 10, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: showInfo ? 0.3 : 0 }}
            className="font-bold flex flex-col cursor-pointer text-sm short:text-xs md:text-xl lg:text-[1.40rem] 2xl:text-[1.7rem] leading-[1.15rem] lg:leading-6 tracking-normal md:tracking-normal text-center bg-[#ed3833] text-black ">
              {selectedSection === 'bio' && <p className="">{bio}<br></br><br></br><span className="italic">"{alt}"</span></p>}

              {selectedSection === 'works' && <p className="">WORKS LIST</p>}
              
              {selectedSection === 'social media' && 
              <div className="flex flex-col items-center justify-center">
                {data.social_links &&
                  Object.entries(data.social_links).map(([platform, link]) =>
                    link ? (
                      <p key={platform} className="flex font-bold cursor-pointer text-2xl md:text-3xl lg:text-4xl">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                          ↗ {platform}
                        </a>
                      </p>
                    ) : null
                )}
              </div>}
              
              {selectedSection === 'projects' && <p className="">{projects}</p>}

          </motion.p>
          

          <motion.div
            translate="no"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : 10 }}
            transition={{ duration: 0.5, delay: showInfo ? 0.5 : 0 }} 
            className="flex flex-row lg:flex-col justify-between lg:justify-center gap-0 text-xl md:text-3xl lg:text-4xl font-bold mt-1 md:mt-3 leading-6 md:leading-7"
          >
            {showInfo && (
              <button 
                onClick={() => setShowInfo(false)} 
                className="bg-[#ed3833] text-black text-xl md:text-4xl text-center w-full"
              >
                close
              </button>
            )}

          </motion.div>
          
        </motion.div>
      </motion.div>
      {/* artist name div */}
      <div className="flex flex-col pt-2">
        <motion.div 
          initial={{ clipPath: "inset(0 0 0 100%)", filter: "blur(10px)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0 0 0)", filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center items-center gap-2 lg:gap-3"
        >
          <p 
            translate="no"
            className="text-[9.0vw] lg:text-7xl font-bold blur-[0.3px] pb-0 uppercase"
          >
            {data.artist_name}
          </p>
          
          <motion.p 
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.95, delay: 0.6 }}
            className="text-3xl lg:text-4xl font-bold cursor-pointer"
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
        <div className="relative h-[2.5rem] lg:h-[3rem] flex justify-center items-center whitespace-nowrap">
          <motion.p
            initial={{ opacity: 0, rotateX: 0 }}
            animate={{ opacity: showLinks ? 0 : 1, rotateX: showLinks ? -90 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute text-lg lg:text-2xl italic text-center"
          >
            “Question the scene, don’t fit into it."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: showLinks ? 1 : 0, rotateX: showLinks ? 0 : 90 }}
            transition={{ duration: 0.8 }}
            className="absolute font-bold justify-center text-2xl md:text-3xl lg:text-4xl"
          >
            <span onClick={() => { setShowInfo(true); setSelectedSection('bio'); }} className="cursor-pointer">bio</span> |  
            <span onClick={() => { setShowInfo(true); setSelectedSection('works'); }} className="cursor-pointer"> works</span> | 
            <span onClick={() => { setShowInfo(true); setSelectedSection('projects'); }} className="cursor-pointer"> projects</span> |
            <span onClick={() => { setShowInfo(true); setSelectedSection('social media'); }} className="cursor-pointer"> sm</span> 
          </motion.p>
        </div>

        <div className="flex font-bold justify-center text-2xl md:text-3xl lg:text-4xl cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <p
            className="font-bold gap-2 group"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="transform transition-transform duration-300 group-hover:rotate-45">↗ </span>
            booking
          </p>
        </div>
          <BookingModal embedCode={data.booking_embed} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>


            

    </motion.section>
  );
};

export default ArtistProfile15;

