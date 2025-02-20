import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRoster } from "../Features/Roster/rosterActions";
import { useInView, motion } from "framer-motion";
import { useRouter } from "next/router";
import UrlFirebase from "@/utils/urlFirebase";

const Home6 = () => {
  const dispatch = useDispatch();
  const { items: elements, loading, error } = useSelector((state) => state.roster);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const body = useRef(null);
  const isInView = useInView(body);
  const router = useRouter();

  const fetchRosterExecuted = useRef(false); // Usamos useRef para evitar ejecuciones múltiples

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

  // REDUX
  useEffect(() => {
    if (elements.length === 0 && !loading && !fetchRosterExecuted.current) {
      console.log("Ejecutando fetchRoster porque no hay elementos y no está cargando");
      dispatch(fetchRoster());
      fetchRosterExecuted.current = true; // Marcar que se ha ejecutado
    }
  }, [dispatch, elements.length, loading, error]); // Dependencias ajustadas

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const hoveredArtist = elements.find((el) => el.artist_name === hoveredElement);

  const handleArtistClick = (id, name) => {
    setSelectedElement(name);
    setTimeout(() => {
      router.push(`/artist/${id}`);
    }, 700);
  };

  return (
    <section
      ref={body}
      className="flex items-center justify-center md:justify-start min-h-screen w-screen bg-black text-white text-[7.7vh] md:text-[8.3vw] uppercase px-4 md:px-2 pt-4 relative"
    >
      {/* Lista de títulos */}
      <motion.div
        custom={1}
        variants={animation}
        initial="initial"
        animate={isInView ? "enter" : ""}
        className="relative z-10 home flex flex-col text-center items-center md:items-start tracking-tight pb-4 leading-[0.75] md:leading-[0.75] gap-[0.4rem] md:gap-0"
      >
        {elements.length > 0 ? (
          elements.map(({ id, artist_name }, index) => (
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
                  opacity:
                    selectedElement && selectedElement !== artist_name // Si hay un seleccionado y no es este, desaparece
                      ? 0
                      : hoveredElement && hoveredElement !== artist_name // Si hay hover en otro, baja la opacidad
                      ? 0.1
                      : 1, // Si no hay selección ni hover, es visible
                  transition: "opacity 0.5s ease-in-out",
                  color:
                    selectedElement === artist_name
                      ? "#ed3833"
                      : hoveredElement === artist_name
                      ? "#ed3833"
                      : "white",
                }}
                onHoverStart={() => setHoveredElement(artist_name)}
                onHoverEnd={() => setHoveredElement(null)}
                onClick={() => handleArtistClick(id, artist_name)}
              >
                {artist_name}
              </motion.h1>
            </motion.div>
          ))
        ) : (
          <p>No artists found.</p> // Si no hay elementos, muestra este mensaje
        )}
      </motion.div>

      {/* Imagen dinámica al hacer hover */}
      {hoveredElement && hoveredArtist?.profile_pic && (
        <motion.div
          className="absolute hidden lg:block"
          style={{ width: "400px", height: "300px", ...hoveredArtist.position }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <UrlFirebase url={hoveredArtist.profile_pic} />
        </motion.div>
      )}
    </section>
  );
};

export default Home6;
