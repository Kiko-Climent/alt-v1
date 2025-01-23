"use client";

import { useRef } from "react";
import { useInView, motion } from "framer";


const Statement2 = () => {
  const body = useRef(null);
  const isInView = useInView(body, {once: true, margin: "75%"})

  const animation = {
    initial: {y: "100%", opacity: 0}, 
    enter: (i) => ({y: "0", opacity: 1, transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})

  }

  const animation2 = {
    initial: {y: "-50%", opacity: 0}, 
    enter: {y: "0", opacity: 1, transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.7}}

  }

  const animationImage = {
    initial: { scale: 0.9, opacity: 0 },
    enter: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 1.4 },
    },
  };

  return(
    <section className="h-screen py-36 md:py-8 px-4 text-[#ed3833] bg-black">
      <div ref={body} className="flex flex-col justify-center items-center h-full gap-4">
        <div className="flex flex-col w-full md:w-7/12 font-bold text-justify text-base md:text-[1.5vw] tracking-[0.08em] leading-4 md:leading-5">
        <motion.p custom={1} variants={animation2} initial="initial" animate={isInView ? "enter" : ""}>about us</motion.p>
        <br/>
        <motion.p custom={1} variants={animation} initial="initial" animate={isInView ? "enter" : ""}>
        A.L.T. "Against Low Trends" es una agencia boutique con un enfoque artístico dentro de la música electrónica.
        Nuestro propósito es romper con las tendencias comerciales pasajeras y centrarnos en lo que realmente importa: el arte, la innovación y la conexión profunda con el público.
        Creemos en la calidad sobre la cantidad.<br/><br/>
        Trabajamos exclusivamente con un grupo selecto y reducido de artistas que comparten nuestra visión y están comprometidos con elevar su perfil artístico a nuevos niveles.
        <br/><br/>
        Nuestra misión es clara: proporcionar a nuestros artistas una plataforma sólida para crecer, crear y expresarse generando oportunidades en clubes y/o festivales  que valoren la esencia genuina de la música electrónica.
        <br/><br/>

        Nos aliamos con espacios y eventos que aprecian la autenticidad y el riesgo artístico, asegurándonos de que cada presentación sea una experiencia memorable.
        A.L.T. no es solo una agencia; es un movimiento que celebra la diversidad, la originalidad y la audacia.
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