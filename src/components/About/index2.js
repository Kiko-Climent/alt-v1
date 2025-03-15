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

  // const animation2 = {
  //   initial: {y: "-50%", opacity: 0}, 
  //   enter: {y: "0", opacity: 1, transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.7}}

  // }

  const animationImage = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 1.4 },
    },
  };

  return(
    <section className="min-h-screen px-2 md:px-4 text-[#ed3833] bg-black">
      <div ref={body} className="flex flex-col min-h-screen justify-center items-center h-full gap-4 pt-0 short:pt-7 lg:pt-0">
        <div className="flex flex-col w-full md:w-7/12 font-bold text-justify text-base short:text-xs md:text-xl lg:text-[1.40rem] 2xl:text-[1.7rem] tracking-[0.08rem] leading-4 md:leading-5 lg:leading-6 2xl:leading-7">
          {/* <motion.p custom={1} variants={animation2} initial="initial" animate={isInView ? "enter" : ""}
          className="pt-8 lg:pt-0"
        >about</motion.p>
        <br/> */}
        <motion.p custom={1} variants={animation} initial="initial" animate={isInView ? "enter" : ""}>
        <span className="text-black bg-[#ed3833]">Against Low Trends</span> is an agency focused on curating and developing electronic music projects, bringing artists and promoters together on common ground.
        <br/><br/>
        Our goal is to provide a framework in which artists can develop their work with autonomy and intention. <span className="text-black bg-[#ed3833]">We connect artists with the right spaces,</span> prioritizing depth over mass appeal.
        <br/><br/>
        We collaborate with a carefully selected group of artists, offering them the space and support they need to create freely. Rather than mere representation, we focus on ensuring that every artistic connection is meaningful and purposeful.
        </motion.p>

        </div>
        <motion.div variants={animationImage}
          initial="initial"
          animate={isInView ? "enter" : ""} className="flex w-full md:w-7/12 justify-end items-end ">
           <img src="/images/ALT_Alta_Logo_blanco.png"
               className="w-[50%] md:w-[30%] h-auto object-contain"
           />
        </motion.div>
      </div>
    </section>
  )
}

export default Statement2;