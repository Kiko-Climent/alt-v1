"use client";

import { useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";


const elements = [
  { name: "hermetica", image: "/images/IMG-20250115-WA0005.jpg", position: { top: "10%", right: "10%" } },
  { name: "laia", image: "/images/IMG-20250115-WA0006.jpg", position: { top: "20%", right: "20%" } },
  { name: "unkle fon", image: "/images/IMG-20250115-WA0005.jpg", position: { top: "15%", right: "40%" } },
  { name: "montero", image: "/images/IMG-20250115-WA0008.jpg", position: { top: "35%", right: "10%" } },
  { name: "pyramidal decode", image: "/images/IMG-20250115-WA0008.jpg", position: { top: "10%", right: "10%" } },
  { name: "takt", image: "/images/IMG-20250115-WA0006.jpg", position: { top: "10%", right: "35%" } },
  { name: "not a headliner", image: "/images/IMG-20250115-WA0005.jpg", position: { bottom: "50%", right: "10%" } },
  { name: "atonism", image: "/images/IMG-20250115-WA0008.jpg", position: { bottom: "50%", right: "15%" } },
];

const Title = ({ name, isHovered, onHoverStart, onHoverEnd, isActive }) => {

  const style = isHovered
    ? { opacity: 0.2 }
    : isActive
    ? { color: "#ed3833" }
    : {};
  
  return (
    <motion.h1
      className="flex  transition-colors duration-300 hover:font-bold cursor-pointer"
      style={style}
      onHoverStart={() => onHoverStart(name)}
      onHoverEnd={() => onHoverEnd(null)}
    >
      {name}
    </motion.h1>
  );
};

const Home3 = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "75%" });

  const animation = {
    initial: { y: "100%", opacity: 0.1 },
    enter: (i) => ({
      y: "0",
      opacity: 1, 
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <section
      ref={body}
      className="flex items-center h-screen w-screen bg-black text-white text-[9vh] md:text-[8.3vw] uppercase px-2 relative overflow-hidden"
    >
      {/* Lista de títulos */}
      <motion.div
        custom={1}
        variants={animation}
        initial="initial"
        animate={isInView ? "enter" : ""}
        className="relative z-10 home flex flex-col items-start justify-start tracking-tight leading-[0.75] blur-[0.7px]"
      >
        {elements.map(({ name }, index) => (
          <motion.div
            key={name}
            custom={index}
            variants={animation}
            initial="initial"
            animate={isInView ? "enter" : ""}
          >
            <Title
              name={name}
              isHovered={hoveredElement && hoveredElement !== name}
              isActive={hoveredElement === name}
              onHoverStart={setHoveredElement}
              onHoverEnd={setHoveredElement}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Imagen dinámica al hacer hover */}
      {hoveredElement && (
        <motion.div
          className="absolute z-0"
          style={{
            width: "400px",
            height: "300px",
            ...elements.find((el) => el.name === hoveredElement).position,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={elements.find((el) => el.name === hoveredElement).image}
            alt={hoveredElement}
            width={400}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Home3;

