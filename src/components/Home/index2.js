// "use client";

// import Image from "next/image";

// const Home2 = () => {
//   return (
//     <section className="h-screen bg-black text-[#811a17] text-[16vw] uppercase pt-4">
//       <div className="home relative flex flex-col items-start justify-center tracking-tight leading-[0.8] blur-[1px]">
//         {/* Grupo superior (por encima de la imagen) */}
//         <h1 className="relative z-10">hermetica</h1>

//         {/* Imagen (entre "hermetica" y los demás) */}
//         <div className="absolute top-24 right-36 z-5 opacity-80">
//           <Image
//             src="/images/IMG-20250115-WA0008.jpg"
//             width={400}
//             height={500}
//             style={{ objectFit: "cover" }}
//             className="object-cover"
//           />
//         </div>

//         {/* Grupo inferior (por debajo de la imagen) */}
//         <h1 className="relative z-20">laia</h1>
//         <h1 className="relative z-20">unkle ton</h1>
//         <h1 className="relative z-20">monster</h1>
//       </div>
//     </section>
//   );
// };

// export default Home2;


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const elements = [
  { name: "hermetica", image: "/images/IMG-20250115-WA0005.jpg", position: { top: "10%", right: "10%" } },
  { name: "laia", image: "/images/IMG-20250115-WA0006.jpg", position: { top: "20%", right: "20%" } },
  { name: "unkle fon", image: "/images/IMG-20250115-WA0005.jpg", position: { top: "15%", right: "40%" } },
  { name: "monster", image: "/images/IMG-20250115-WA0008.jpg", position: { top: "35%", right: "10%" } },
  { name: "piramidal decoder", image: "/images/IMG-20250115-WA0008.jpg", position: { top: "10%", right: "10%" } },
  { name: "tak", image: "/images/IMG-20250115-WA0006.jpg", position: { top: "10%", right: "35%" } },
  { name: "not a headliner", image: "/images/IMG-20250115-WA0005.jpg", position: { bottom: "50%", right: "10%" } },
  { name: "atonism", image: "/images/IMG-20250115-WA0008.jpg", position: { bottom: "50%", right: "15%" } },
];

const Title = ({ name, isHovered, onHoverStart, onHoverEnd }) => {
  const style = isHovered ? { opacity: 0.2 } : {};
  return (
    <motion.h1
      className="flex  transition-colors duration-300 hover:font-bold  cursor-pointer"
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

  return (
    <section className="flex items-center h-screen w-screen bg-black text-white text-[9vh] md:text-[8.3vw] uppercase px-2 relative overflow-hidden">
      {/* Nombres */}
      <div className="relative z-10 home flex flex-col items-start justify-start tracking-tight leading-[0.75] blur-[0.7px]">
        {elements.map(({ name }) => (
          <Title
            key={name}
            name={name}
            isHovered={hoveredElement && hoveredElement !== name}
            onHoverStart={setHoveredElement}
            onHoverEnd={setHoveredElement}
          />
        ))}
      </div>
      <div className="absolute flex justify-around top-24 left-64 opacity-40 hover:opacity-100">
        <Image src="/images/ALT_Blanco.png"
                                  width={300}
                                  height={300}
                                  style={{ objectFit: "cover" }}     
                            />
      </div>

      {/* Imagen al hacer hover */}
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