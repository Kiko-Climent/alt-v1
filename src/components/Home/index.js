// import { useState, useEffect, useRef } from "react";
// import { useInView, motion } from "framer-motion";
// import Image from "next/image";
// import { useRouter } from "next/router"; // Importa el router
// import { getDocs, collection } from "firebase/firestore"; // Ajusta según tu configuración de Firebase
// import { db } from "@/utils/firebaseConfig"; // Asegúrate de que apuntas a tu configuración de Firebase

// const Home4 = () => {
//   const [elements, setElements] = useState([]); // Array dinámico para artistas
//   const [hoveredElement, setHoveredElement] = useState(null);
//   const body = useRef(null);
//   const isInView = useInView(body, { once: true, margin: "75%" });
//   const router = useRouter(); // Instancia del router

//   // Animación con Framer Motion
//   const animation = {
//     initial: { y: "100%", opacity: 0.1 },
//     enter: (i) => ({
//       y: "0",
//       opacity: 1,
//       transition: {
//         duration: 0.75,
//         ease: [0.33, 1, 0.68, 1],
//         delay: 0.075 * i,
//       },
//     }),
//   };

//   // Cargar datos de Firebase
//   useEffect(() => {
//     const fetchArtists = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "roster"));
//         const fetchedElements = [];
//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           fetchedElements.push({
//             id: doc.id, // El ID único de Firebase
//             name: data.artist_name,
//             image: data.artist_img || "/images/IMG-20250115-WA0008.jpg", // Fallback si no hay imagen
//             position: { top: "10%", right: "10%" }, // Actualiza según tus necesidades
//           });
//         });
//         setElements(fetchedElements);
//       } catch (error) {
//         console.error("Error fetching data from Firebase:", error);
//       }
//     };

//     fetchArtists();
//   }, []);

//   // Manejar redirección al perfil del artista
//   const handleArtistClick = (id) => {
//     router.push(`/artist/${id}`); // Redirige a la página dinámica del artista
//   };

//   return (
//     <section
//       ref={body}
//       className="flex items-center h-screen w-screen bg-black text-white text-[7.7vh] md:text-[8.3vw] uppercase px-4 md:px-2 relative overflow-hidden"
//     >
//       {/* Lista de títulos */}
//       <motion.div
//         custom={1}
//         variants={animation}
//         initial="initial"
//         animate={isInView ? "enter" : ""}
//         className="relative z-10 home flex flex-col items-start justify-start tracking-tight leading-[0.75] md:leading-[0.75] blur-[0.7px] gap-[0.4rem] md:gap-0"
//       >
//         {elements.map(({ id, name }, index) => (
//           <motion.div
//             key={id}
//             custom={index}
//             variants={animation}
//             initial="initial"
//             animate={isInView ? "enter" : ""}
//           >
//             <motion.h1
//               className="flex transition-colors duration-300 hover:font-bold cursor-pointer"
//               onHoverStart={() => setHoveredElement(name)}
//               onHoverEnd={() => setHoveredElement(null)}
//               onClick={() => handleArtistClick(id)} // Llamada al clic
//             >
//               {name}
//             </motion.h1>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Imagen dinámica al hacer hover */}
//       {hoveredElement && (
//         <motion.div
//           className="absolute z-0"
//           style={{
//             width: "400px",
//             height: "300px",
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
//             width={400}
//             height={300}
//             style={{ objectFit: "cover" }}
//           />
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default Home4;


import { useState, useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router"; // Importa el router
import { getDocs, collection } from "firebase/firestore"; // Ajusta según tu configuración de Firebase
import { db } from "@/utils/firebaseConfig"; // Asegúrate de que apuntas a tu configuración de Firebase



const Home4 = () => {
  const [elements, setElements] = useState([]); // Array dinámico para artistas
  const [hoveredElement, setHoveredElement] = useState(null);
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "75%" });
  const router = useRouter(); // Instancia del router

  // Animación con Framer Motion
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

  // Cargar datos de Firebase
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "roster"));
        const fetchedElements = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedElements.push({
            id: doc.id, // El ID único de Firebase
            name: data.artist_name,
            image: data.artist_img || "/images/IMG-20250115-WA0008.jpg", // Fallback si no hay imagen
            position: { top: "10%", right: "10%" }, // Actualiza según tus necesidades
          });
        });
        setElements(fetchedElements);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchArtists();
  }, []);

  // Manejar redirección al perfil del artista
  const handleArtistClick = (id) => {
    router.push(`/artist/${id}`); // Redirige a la página dinámica del artista
  };

  return (
    <section
      ref={body}
      className="flex items-center h-screen w-screen bg-black text-white text-[7.7vh] md:text-[8.3vw] uppercase px-4 md:px-2 relative overflow-hidden"
    >
      {/* Lista de títulos */}
      <motion.div
        custom={1}
        variants={animation}
        initial="initial"
        animate={isInView ? "enter" : ""}
        className="relative z-10 home flex flex-col items-start justify-start tracking-tight leading-[0.75] md:leading-[0.75] blur-[0.7px] gap-[0.4rem] md:gap-0"
      >
        {elements.map(({ id, name }, index) => (
          <motion.div
            key={id}
            custom={index}
            variants={animation}
            initial="initial"
            animate={isInView ? "enter" : ""}
          >
            <motion.h1
              className="flex transition-colors duration-300 hover:font-bold cursor-pointer"
              style={{
                opacity: hoveredElement && hoveredElement !== name ? 0.2 : 1, // Opacidad para los artistas no seleccionados
                color: hoveredElement === name ? "#ed3833" : "white", // Cambia el color a rojo para el artista seleccionado
              }}
              onHoverStart={() => setHoveredElement(name)}
              onHoverEnd={() => setHoveredElement(null)}
              onClick={() => handleArtistClick(id)} // Llamada al clic
            >
              {name}
            </motion.h1>
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

export default Home4;
