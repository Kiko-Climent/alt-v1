// FIRST COMPONENT ANIMATION DIDNT WORK

"use client";

import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";

const ArtistProfile2 = () => {

  const router = useRouter();
  const { id } = router.query; // Obtener el ID dinámico desde la URL
  const [artist, setArtist] = useState(null);

  const bodyRef = useRef(null);
  const isInView = useInView(bodyRef, { once: true, margin: "75%" });


  useEffect(() => {
  if (!router.isReady || !id) {
    return; // Esperar hasta que el enrutador esté listo y el ID esté disponible
  }

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
}, [router.isReady, id]); // Ejecutar el efecto cuando cualquiera de estas dos variables cambie


  useEffect(() => {
    console.log("Router is ready:", router.isReady);
    console.log("ID from query:", id);
  }, [id, router.isReady]);
  
  

  if (!artist) {
    return <p>Loading...</p>;
  }

  const profileAnimation = {
    initial: {y: "100%", opacity: 0.1, filter: "blur(5px)"}, 
    enter: ({y: "0", opacity: 1, filter: "blur(0px)", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],
      },
    }),
  };


  const nameAnimation = {
    initial: { clipPath: "inset(0 100% 0 0)" },
    enter: {
      clipPath: "inset(0 0 0% 0)",
      
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.3,
      },
    },
  };

  const imageAnimation = {
    initial: { clipPath: "inset(0 0 100% 0)", filter: "blur(10px)" },
    enter: {
      clipPath: "inset(0 0 0% 0)",
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.6,
      },
    },
  };

  const linksAnimation = {
    initial: { opacity: 0, filter: "blur(5px)" },
    enter: {
      opacity: 1,
      
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.9,
      },
    },

  };

  const bookingAnimation = {
    initial: { clipPath: "inset(0 100% 0 0)" },
    enter: {
      clipPath: "inset(0 0 0% 0)",
      
      transition: {
        duration: 5,
        ease: [0.33, 1, 0.68, 1],
        delay: 1.2,
      },
    },
  };
  
  return(
    <motion.section 
    className="h-screen py-8 px-4 bg-black text-[#ed3833]">

      <div className="flex flex-col md:flex-row h-full gap-x-2 gap-y-2 md:gap-y-o">
        <motion.div variants={imageAnimation}
          initial="initial"
          animate={isInView ? "enter" : "initial"} className="flex-1 flex justify-start md:justify-end items-center gap-x-2">
          <img src="/images/IMG-20250115-WA0008.jpg"
              className="w-[65%] md:w-[75%] h-auto object-contain"
          />
          {/* Contenido adicional visible solo en móviles */}
          <div className="font-bold md:hidden flex flex-col text-[2.3vh] gap-2 ">
            <motion.div custom={1} variants={linksAnimation} initial="initial" animate={isInView ? "enter" : "initial"} 
                        className="leading-[1.1rem]">
              <div>↗ soundcloud</div>
              <div>↗ bandcamp</div>
              <div>↗ instagram</div>
            </motion.div>
            <motion.div custom={1} variants={bookingAnimation} initial="initial" animate={isInView ? "enter" : "initial"}
                        className="">
              @booking</motion.div>
          </div>
        </motion.div>
        

        <div ref={bodyRef} className="flex-1 flex flex-col justify-start md:justify-center h-full gap-2 md:gap-4">
          <div className="flex tracking-wider w-full md:w-[75%] text-base md:text-[1.5vw] leading-[1rem] md:leading-5">
            <motion.p custom={1} variants={profileAnimation}
              initial="initial"
              animate={isInView ? "enter" : "initial"}
              className="font-normal"
            >
            <motion.span variants={nameAnimation} initial="initial" animate={isInView ? "enter" : "initial"} className="font-bold text-justify">
              {artist.artist_name}
            </motion.span>{" "}{artist.artist_bio}</motion.p>
          </div>
          <motion.div custom={1} variants={linksAnimation} initial="initial" animate={isInView ? "enter" : "initial"} 
          className="hidden font-bold md:flex flex-col text-[3.5vh] md:text-4xl leading-[1.5rem] md:leading-[2rem]">
            <div>↗ soundcloud</div>
            <div>↗ bandcamp</div>
            <div>↗ instagram</div>
          </motion.div>
          <motion.div custom={1} variants={bookingAnimation} initial="initial" animate={isInView ? "enter" : "initial"} className=" font-bold hidden md:flex text-[3.5vh] md:text-4xl">@booking</motion.div>
        </div>
      </div>

    </motion.section>
  )
}

export default ArtistProfile2;