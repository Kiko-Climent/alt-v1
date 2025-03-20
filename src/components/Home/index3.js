// with images from Firebase

import { useState, useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { getDocs, collection } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "@/utils/firebaseConfig";


const Home5 = () => {
  const [elements, setElements] = useState([]);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const body = useRef(null);
  const isInView = useInView(body);
  const router = useRouter();
  // HOVEREDARTIST AQUI MEJORA ELRENDIMIENTO?, ELIMINAR SI SE INTRODUCE MAS ABAJO
  const hoveredArtist = elements.find((el) => el.name === hoveredElement);


  const animation = {
    initial: { y: "100%", opacity: 0.1, filter: "blur(15px)" },
    enter: (i) => ({
      y: "0",
      filter: "blur(0.3px)",
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  // FIREBASE
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "roster"));
        const storage = getStorage();
  
        const imagePromises = querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          let imageUrl = null;
  
          if (data.profile_pic) {
            try {
              const imageRef = ref(storage, data.profile_pic);
              imageUrl = await getDownloadURL(imageRef);
            } catch (error) {
              console.error("Error obteniendo la URL de la imagen:", error);
            }
          }
  
          return {
            id: doc.id,
            name: data.artist_name,
            image: imageUrl,
            position: data.position || { top: "10%", right: "10%" },
            pic_object_position: data.pic_object_position || "center center",
          };
        });
  
        const resolvedElements = await Promise.all(imagePromises);
        setElements(resolvedElements); // Solo se actualiza una vez que todas las imágenes están listas
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };
  
    fetchArtists();
  }, []);
  

  useEffect(() => {
    if (router.pathname === "/") {
      setSelectedElement(null); // Restablecer al volver a Home
    }
  }, [router.pathname]);
  

  // Manejar redirección al perfil del artista
  const handleArtistClick = (id, name) => {
    setSelectedElement(name); // Guarda el artista seleccionado
    
    // Ocultar otros artistas con una pequeña animación antes de redirigir
    setTimeout(() => {
      router.push(
        {
          pathname: `/artist/${id}`,
          query: { fromHome4: "true" }, // Pasamos este flag para detectar en la página de destino
        },
        `/artist/${id}`
      );
    }, 700); // 700ms de retraso antes de la navegación
  };


  return (
    <section
      ref={body}
      className="flex items-center justify-center md:justify-start min-h-screen w-screen bg-black text-white text-[7.7vh] md:text-[min(10vw,10rem)] uppercase px-4 md:px-2 md:pt-8 relative md:whitespace-nowrap"
    >
      {/* Lista de títulos */}
      <motion.div
        custom={1}
        variants={animation}
        initial="initial"
        animate={isInView ? "enter" : ""}
        className="relative z-10 home flex flex-col text-center items-center md:items-start tracking-tight pb-4 md:pb-4 pt-0 md:pt-6 leading-[0.75] md:leading-[0.75] gap-[0.4rem] md:gap-0"
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
              translate="no"
              className="flex transition-colors duration-300 hover:font-bold cursor-pointer"
              style={{
                opacity:
                  selectedElement && selectedElement !== name // Si hay un seleccionado y no es este, desaparece
                    ? 0
                    : hoveredElement && hoveredElement !== name // Si hay hover en otro, baja la opacidad
                    ? 0.1
                    : 1, // Si no hay selección ni hover, es visible
                transition: "opacity 0.5s ease-in-out",
                color:
                  selectedElement === name
                    ? "#ed3833"
                    : hoveredElement === name
                    ? "#ed3833"
                    : "white",
              }}
              onHoverStart={() => setHoveredElement(name)}
              onHoverEnd={() => setHoveredElement(null)}
              onClick={() => handleArtistClick(id, name)}
            >
              {name}
            </motion.h1>



          </motion.div>
        ))}
      </motion.div>

      {/* Imagen dinámica al hacer hover */}
      
      {hoveredElement && (
        
        <motion.div
          key={hoveredElement}
          className="absolute z-0 hidden lg:block"
          style={{
            width: "400px",
            height: "300px",
            ...hoveredArtist?.position

          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={hoveredArtist.image}
            alt={hoveredElement}
            width={500}
            height={600} // Ajusta la altura a un valor que unifique el formato
            style={{ 
              objectFit: "cover", 
              aspectRatio: "4 / 5", // Relación personalizada
              objectPosition: hoveredArtist.pic_object_position,
            }}
            priority
            loading="eager"
          />

        </motion.div>
      )}
    </section>
  );
};

export default Home5;
