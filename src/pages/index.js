"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Home() {

  const [hoveredElement, setHoveredElement] = useState(null);

  const images = {
    hermetica: "/images/IMG-20250115-WA0005.jpg",
    laia: "/images/IMG-20250115-WA0006.jpg",
    tak: "/images/IMG-20250115-WA0008.jpg",
    "not a headliner": "/images/IMG-20250115-WA0005.jpg",
    "piramidal decoder": "/images/IMG-20250115-WA0006.jpg",
    monster: "/images/IMG-20250115-WA0008.jpg",
    "unkle fon": "/images/IMG-20250115-WA0006.jpg",
    atonism: "/images/IMG-20250115-WA0008.jpg",
  }

  const imagePositions = {
    hermetica: { bottom: "20%", left: "50%", transform: "translateX(-50%)" },
    laia: { bottom: "10%", right: "5%" },
    tak: { top: "5%", right: "10%" },
    "not a headliner": { top: "10%", left: "5%" },
    "piramidal decoder": { top: "5%", right: "10%" },
    monster: { bottom: "45%", left: "15%" },
    "unkle fon": { top: "30%", right: "30%" },
    atonism: { bottom: "45%", left: "15%" },
  };

  const getTitleStyle = (element) => {
    if (hoveredElement && hoveredElement !== element) {
      return{opacity: 0.1};
    }
    return{};
  };



  return (
    <div className="h-screen overflow-hidden text-lg text-white tracking-wider flex justify-evenly items-center bg-[#000000] gap-16">
      <div className="flex flex-col uppercase font-bold gap-32 items-start h-1/2">
        <motion.h1 className="flex hover:text-[#811a17] transition-colors duration-300"
                    style={getTitleStyle('hermetica')}
                    onHoverStart={() => setHoveredElement("hermetica")}
                    onHoverEnd={() => setHoveredElement(null)}
        >
          hermetica
        </motion.h1>
        <motion.h1 className="flex hover:text-[#811a17] transition-colors duration-300"
                    style={getTitleStyle('laia')}
                    onHoverStart={() => setHoveredElement("laia")}
                    onHoverEnd={() => setHoveredElement(null)}
        >          
          laia
        </motion.h1>
        <motion.h1 className="flex hover:text-[#811a17] transition-colors duration-300"
                    style={getTitleStyle('tak')}
                    onHoverStart={() => setHoveredElement("tak")}
                    onHoverEnd={() => setHoveredElement(null)}
        >
          tak
        </motion.h1>
      </div>
      <div className="flex flex-col uppercase font-bold gap-32 items-start h-1/2">
        <motion.h1 className="flex hover:text-[#811a17] transition-colors duration-300"
                  style={getTitleStyle('not a headliner')}
                  onHoverStart={() => setHoveredElement("not a headliner")}
                  onHoverEnd={() => setHoveredElement(null)}
        >
          not a headliner
        </motion.h1>
        <motion.h1 className="flex hover:text-[#811a17] transition-colors duration-300"
                    style={getTitleStyle('piramidal decoder')}
                    onHoverStart={() => setHoveredElement("piramidal decoder")}
                    onHoverEnd={() => setHoveredElement(null)}
        >
          piramidal decoder
        </motion.h1>

      </div>
      <div className="flex flex-col uppercase font-bold gap-32 items-start h-1/2">
        <motion.h1 className="flex hover:text-[#811a17] transition-colors duration-300"
                    style={getTitleStyle('monster')}
                    onHoverStart={() => setHoveredElement("monster")}
                    onHoverEnd={() => setHoveredElement(null)}
        >
        monster
        </motion.h1>

        <motion.h1 className="flex hover:text-[#811a17] transition-colors duration-300"
                  style={getTitleStyle('unkle fon')}
                  onHoverStart={() => setHoveredElement("unkle fon")}
                  onHoverEnd={() => setHoveredElement(null)}
        >
        unkle fon
        </motion.h1>

        <motion.h1 className="flex hover:text-[#811a17] transition-colors duration-300"
                  style={getTitleStyle('atonism')}
                  onHoverStart={() => setHoveredElement("atonism")}
                  onHoverEnd={() => setHoveredElement(null)}
        >
        atonism
        </motion.h1>
      </div>
      {/* Imagen que aparece debajo de los títulos */}
      {hoveredElement && (
        <motion.div
        className="absolute"
        style={{
          width: "400px",
          height: "200px", // Cambia el tamaño si lo necesitas
          ...imagePositions[hoveredElement], // Posición única para cada imagen
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        <Image
          src={images[hoveredElement]}
          alt={hoveredElement}
          width={500}
          height={300}
          style={{
            objectFit: "cover",
          }}
        />
      </motion.div>
      
      )}
    </div>
  );
}
