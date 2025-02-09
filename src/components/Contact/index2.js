"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView, motion } from "framer";

const ContactInfo = () => {
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
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center min-h-screen gap-0 md:gap-4">
        <div ref={body} className="flex flex-col gap-2 md:gap-2">
          <div className="flex text-base md:text-[1.5vw] tracking-[0.08em]">
            <motion.p custom={1} variants={animation2} initial="initial" animate={isInView ? "enter" : ""} 
            className="font-bold">contact:</motion.p>
          </div>
          <motion.div custom={1} variants={animation} initial="initial" animate={isInView ? "enter" : ""} 
          className="flex flex-col text-base md:text-[1.5vw] leading-[1rem] md:leading-[1.4rem] tracking-[0.08em]">
            <p>office address</p>
            <p>A.L.T. / Against Low Trends S.L.</p>
            <p>C/ Caunedo 36 Local 1</p>
            <p>28037 Madrid</p>
          </motion.div>
          <motion.div custom={1} variants={animation} initial="initial" animate={isInView ? "enter" : ""} 
          className="flex flex-col gap-2">
            <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-[0.7rem] md:leading-none">
              <p>phone</p>
              <a href="tel:+3491700987165" className="text-2xl md:text-4xl font-bold">+34 91700987165</a>
            </div>
            <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-[0.7rem] md:leading-none">
              <p>booking enquires</p>
              <a href="mailto:ernesto@againstlt.com" className="text-2xl md:text-4xl font-bold">ernesto@againstlt.com</a>
            </div>
            <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-[0.7rem] md:leading-none">
              <p>press enquires</p>
              <a href="mailto:ernesto@againstlt.com" className="text-2xl md:text-4xl font-bold">manu@againstlt.com</a>
            </div>
            <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-[0.7rem] md:leading-none">
              <p>all other inquires</p>
              <a href="mailto:ernesto@againstlt.com" className="text-2xl md:text-4xl font-bold">info@againstlt.com</a>
            </div>
            <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-[0.7rem] md:leading-none">
              <p>booking forms</p>
              <p className="text-2xl md:text-4xl font-bold">@booking</p>
            </div>
          </motion.div>
          {/* <motion.div custom={1} variants={animation} initial="initial" animate={isInView ? "enter" : ""} 
          className="flex flex-col text-base md:text-[1.5vw] leading-[1rem] md:leading-[1.4rem] tracking-[0.08em]">
            <p>office address</p>
            <p>A.L.T. / Against Low Trends S.L.</p>
            <p>C/ Caunedo 36 Local 1</p>
            <p>28037 Madrid</p>
          </motion.div> */}
        </div>
        <motion.div variants={animationImage}
          initial="initial"
          animate={isInView ? "enter" : ""} className="flex flex-col gap-2 w-auto">
          <div className="invisible flex md:hidden">placeholder</div>
          <Image src="/images/ALT_Blanco.png"
                alt="ALT logo"
                width={250}
                height={250}
                className="object-contain"/>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo;