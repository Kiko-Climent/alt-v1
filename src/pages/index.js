// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// // Datos centralizados con títulos, imágenes y posiciones
// const elements = [
//   { name: "hermetica", image: "/images/IMG-20250115-WA0005.jpg", position: { bottom: "20%", left: "50%", transform: "translateX(-50%)" } },
//   { name: "laia", image: "/images/IMG-20250115-WA0006.jpg", position: { bottom: "10%", right: "5%" } },
//   { name: "tak", image: "/images/IMG-20250115-WA0008.jpg", position: { top: "5%", right: "10%" } },
//   { name: "not a headliner", image: "/images/IMG-20250115-WA0005.jpg", position: { top: "10%", left: "5%" } },
//   { name: "piramidal decoder", image: "/images/IMG-20250115-WA0006.jpg", position: { top: "5%", right: "10%" } },
//   { name: "monster", image: "/images/IMG-20250115-WA0008.jpg", position: { bottom: "45%", left: "15%" } },
//   { name: "unkle fon", image: "/images/IMG-20250115-WA0006.jpg", position: { top: "30%", right: "30%" } },
//   { name: "atonism", image: "/images/IMG-20250115-WA0008.jpg", position: { bottom: "45%", left: "15%" } },
// ];

// const Title = ({ name, isHovered, onHoverStart, onHoverEnd }) => {
//   const style = isHovered ? { opacity: 0.1 } : {};
//   return (
//     <motion.h1
//       className="flex hover:text-[#811a17] transition-colors duration-300 hover:font-bold"
//       style={style}
//       onHoverStart={() => onHoverStart(name)}
//       onHoverEnd={() => onHoverEnd(null)}
//     >
//       {name}
//     </motion.h1>
//   );
// };

// export default function Home() {
//   const [hoveredElement, setHoveredElement] = useState(null);

//   return (
//     <div className="h-screen overflow-hidden text-lg  text-white tracking-wider flex justify-evenly items-center bg-[#000000]">
//       {/* Column 1 */}
//       <div className="flex flex-col uppercase gap-32 items-start h-1/2">
//         {elements.slice(0, 3).map(({ name }) => (
//           <Title
//             key={name}
//             name={name}
//             isHovered={hoveredElement && hoveredElement !== name}
//             onHoverStart={setHoveredElement}
//             onHoverEnd={setHoveredElement}
//           />
//         ))}
//       </div>

//       {/* Column 2 */}
//       <div className="flex flex-col uppercase gap-32 items-start h-1/2">
//         {elements.slice(3, 5).map(({ name }) => (
//           <Title
//             key={name}
//             name={name}
//             isHovered={hoveredElement && hoveredElement !== name}
//             onHoverStart={setHoveredElement}
//             onHoverEnd={setHoveredElement}
//           />
//         ))}
//       </div>

//       {/* Column 3 */}
//       <div className="flex flex-col uppercase gap-32 items-start h-1/2">
//         {elements.slice(5, 8).map(({ name }) => (
//           <Title
//             key={name}
//             name={name}
//             isHovered={hoveredElement && hoveredElement !== name}
//             onHoverStart={setHoveredElement}
//             onHoverEnd={setHoveredElement}
//           />
//         ))}
//       </div>

//       {hoveredElement && (
//         <motion.div
//           className="absolute"
//           style={{
//             width: "400px",
//             height: "200px",
//             ...elements.find((el) => el.name === hoveredElement).position,
//           }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Image
//             src={elements.find((el) => el.name === hoveredElement).image}
//             alt={hoveredElement}
//             width={500}
//             height={300}
//             style={{ objectFit: "cover" }}
//           />
//         </motion.div>
//       )}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Datos centralizados con títulos, imágenes y posiciones
const elements = [
  { name: "hermetica", image: "/images/IMG-20250115-WA0005.jpg", position: { bottom: "20%", left: "50%", transform: "translateX(-50%)" } },
  { name: "laia", image: "/images/IMG-20250115-WA0006.jpg", position: { bottom: "10%", right: "5%" } },
  { name: "tak", image: "/images/IMG-20250115-WA0008.jpg", position: { top: "5%", right: "10%" } },
  { name: "not a headliner", image: "/images/IMG-20250115-WA0005.jpg", position: { top: "10%", left: "5%" } },
  { name: "piramidal decoder", image: "/images/IMG-20250115-WA0006.jpg", position: { top: "5%", right: "10%" } },
  { name: "monster", image: "/images/IMG-20250115-WA0008.jpg", position: { bottom: "45%", left: "15%" } },
  { name: "unkle fon", image: "/images/IMG-20250115-WA0006.jpg", position: { top: "30%", right: "30%" } },
  { name: "atonism", image: "/images/IMG-20250115-WA0008.jpg", position: { bottom: "45%", left: "15%" } },
];

const Title = ({ name, isHovered, onHoverStart, onHoverEnd }) => {
  const style = isHovered ? { opacity: 0.1 } : {};
  return (
    <motion.h1
      className="flex hover:text-[#811a17] transition-colors duration-300 hover:font-bold hover:scale-y-150"
      style={style}
      onHoverStart={() => onHoverStart(name)}
      onHoverEnd={() => onHoverEnd(null)}
    >
      {name}
    </motion.h1>
  );
};

export default function Home() {
  const [hoveredElement, setHoveredElement] = useState(null);

  return (
    <div className="h-screen overflow-hidden bg-[#000000] flex-col">
      <div className="flex">
        <Image src="/images/ALT_Alta_Logo_blanco.png"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}     
        />
      </div>
      
      <div className="text-lg text-white tracking-wider flex justify-evenly items-center">    
      {/* Column 1 */}
      <div className="flex flex-col uppercase gap-32 items-start h-1/2">
        {elements.slice(0, 3).map(({ name }) => (
          <Title
            key={name}
            name={name}
            isHovered={hoveredElement && hoveredElement !== name}
            onHoverStart={setHoveredElement}
            onHoverEnd={setHoveredElement}
          />
        ))}
      </div>

      {/* Column 2 */}
      <div className="flex flex-col uppercase gap-32 items-start h-1/2">
        {elements.slice(3, 5).map(({ name }) => (
          <Title
            key={name}
            name={name}
            isHovered={hoveredElement && hoveredElement !== name}
            onHoverStart={setHoveredElement}
            onHoverEnd={setHoveredElement}
          />
        ))}
        <div className="invisible">Placeholder</div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col uppercase gap-32 items-start h-1/2">
        {elements.slice(5, 8).map(({ name }) => (
          <Title
            key={name}
            name={name}
            isHovered={hoveredElement && hoveredElement !== name}
            onHoverStart={setHoveredElement}
            onHoverEnd={setHoveredElement}
          />
        ))}
      </div>

      {hoveredElement && (
        <motion.div
          className="absolute"
          style={{
            width: "400px",
            height: "200px",
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
            width={500}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      )}
      </div>
    </div>
  );
}
