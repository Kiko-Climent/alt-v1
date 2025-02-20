"use client";

import { useRef } from "react";
import { useInView, motion } from "framer";


const Statement2 = () => {
  const body = useRef(null);
  const isInView = useInView(body, {once: true, margin: "75%"})

  const animation = {
    initial: {y: "100%", opacity: 0.1, filter: "blur(5px)"}, 
    enter: (i) => ({y: "0", opacity: 1, filter: "blur(0px)", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})

  }

  const animation2 = {
    initial: {y: "-50%", opacity: 0}, 
    enter: {y: "0", opacity: 1, transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.7}}

  }

  const animationImage = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 1.4 },
    },
  };

  return(
    <section className="min-h-screen px-4 text-[#ed3833] bg-black">
      <div ref={body} className="flex flex-col min-h-screen justify-center items-center h-full gap-4">
        <div className="flex flex-col w-full md:w-7/12 font-bold text-justify text-base short:text-xs md:text-[1.5vw] tracking-[0.08em] leading-4 md:leading-5">
          <motion.p custom={1} variants={animation2} initial="initial" animate={isInView ? "enter" : ""}
          className="pt-8 lg:pt-0"
        >about</motion.p>
        <br/>
        <motion.p custom={1} variants={animation} initial="initial" animate={isInView ? "enter" : ""}>
        A.L.T. "Against Low Trends" is a boutique agency with an artistic focus within the electronic music scene.
        Our purpose is to break away from fleeting commercial trends and focus on what truly matters: art, innovation, 
        and a deep connection with the audience. We believe in quality over quantity.<br/><br/>
        We work exclusively with a small, select group of artists who share our vision and are committed to elevating their artistic profile to new heights.
        <br/><br/>
        Our mission is clear: to provide our artists with a solid platform to grow, create, and express themselves by generating opportunities in clubs and festivals that value the genuine essence of electronic music.
        <br/><br/>

        We partner with spaces and events that appreciate authenticity and artistic risk.
        A.L.T. is not just an agency; it’s a movement that celebrates diversity, originality, and boldness.
          </motion.p>

        </div>
        <motion.div variants={animationImage}
          initial="initial"
          animate={isInView ? "enter" : ""} className="flex w-full md:w-7/12 justify-end items-end ">
           <img src="/images/AgainstLT_Blanco.png"
               className="w-[50%] md:w-[30%] h-auto object-contain"
           />
        </motion.div>
      </div>
    </section>
  )
}

export default Statement2;