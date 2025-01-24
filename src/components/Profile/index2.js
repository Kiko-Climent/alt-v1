"use client";

import { useRef } from "react";
import { useInView, motion } from "framer";

const DjProfile2 = () => {

  const body = useRef(null);
  const isInView = useInView(body, {once: true, margin: "75%"})

  const profileAnimation = {
    initial: {y: "100%", opacity: 0.1, filter: "blur(5px)"}, 
    enter: ({y: "0", opacity: 1, filter: "blur(0px)", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  const nameAnimation = {
    initial: { opacity: 0, scale: 0.8, filter: "blur(5px)" },
    enter: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
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
    <section 
    className="h-screen py-8 px-4 bg-black text-[#ed3833]">

      <div className="flex flex-col md:flex-row h-full gap-x-2 gap-y-2 md:gap-y-o">
        <motion.div variants={imageAnimation}
          initial="initial"
          animate={isInView ? "enter" : ""} className="flex-1 flex justify-start md:justify-end items-center gap-x-2">
          <img src="/images/IMG-20250115-WA0008.jpg"
              className="w-[65%] md:w-[75%] h-auto object-contain"
          />
          {/* Contenido adicional visible solo en móviles */}
          <div className="font-bold md:hidden flex flex-col text-[2.3vh] gap-2 ">
            <div className="leading-[1rem]">
              <div>↗ soundcloud</div>
              <div>↗ bandcamp</div>
              <div>↗ instagram</div>
            </div>
            <div>@booking</div>
          </div>
        </motion.div>
        

        <div ref={body} className="flex-1 flex flex-col justify-start md:justify-center h-full gap-2 md:gap-4">
          <div className="flex tracking-wider w-full md:w-[75%] text-base md:text-[1.5vw] leading-[1rem] md:leading-5">
            <motion.p custom={1} variants={profileAnimation} initial="initial" animate={isInView ? "enter" : ""} className="font-normal">
            <motion.span variants={nameAnimation} initial="initial" animate={isInView ? "enter" : ""} className="font-bold text-justify">
              Unkle Fon
            </motion.span>{" "}is one of the key figures in Madrid's techno scene, known for his raw, dark sound
             deeply influenced by old-school techno. With over 20 years of experience, he has performed at
             iconic clubs like Tresor, Fabrik and Mondo Disko, and co-founded Utopía Club Madrid, once
             ranked among Europe’s top 10 clubs by Berlin’s Club Commission. He also launched Ater
             Cosmo, a renowned vinyl store, and Utopía Society Records, a label showcasing innovative
             techno talent. Unkle Fon continues to shape the underground scene as a producer, DJ, and
             cultural pioneer.
            </motion.p>
          </div>
          <motion.div custom={1} variants={linksAnimation} initial="initial" animate={isInView ? "enter" : ""} className="hidden font-bold md:flex flex-col text-[3.5vh] md:text-4xl leading-[1.5rem] md:leading-[2rem]">
            <div>↗ soundcloud</div>
            <div>↗ bandcamp</div>
            <div>↗ instagram</div>
          </motion.div>
          <motion.div custom={1} variants={bookingAnimation} initial="initial" animate={isInView ? "enter" : ""} className=" font-bold hidden md:flex text-[3.5vh] md:text-4xl">@booking</motion.div>
        </div>
      </div>

    </section>
  )
}

export default DjProfile2;