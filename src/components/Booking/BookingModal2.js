import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const BookingModal2 = ({ embedCode, isOpen, artistId }) => {
  const embedRef = useRef(null);
  const router = useRouter()

  useEffect(() => {
    if (!isOpen) return;

    // Limpieza: quitar scripts anteriores
    const existingScript = document.querySelector('script[src="https://connect.gigwell.com/roster/loader.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Forzar re-ejecución del script al tener ya el HTML
    const script = document.createElement("script");
    script.src = "https://connect.gigwell.com/roster/loader.js";
    script.async = true;
    script.crossOrigin = "*";
    document.body.appendChild(script);

    // Limpieza opcional
    return () => {
      script.remove();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-md text-[#ed3833] z-50">
      <div className="relative w-[90%] md:w-[60%] p-6 bg-black rounded-lg border-2 border-[#ed3833]">
        <div className="flex flex-col items-center">
          <a href="mailto:ernesto@againstlt.com" className="text-lg font-bold mb-4">
            ernesto@againstlt.com
          </a>
          <div ref={embedRef} dangerouslySetInnerHTML={{ __html: embedCode }} />
          <div onClick={() => router.push(`/artist/${artistId}`)}
            className="font-bold short:text-xl text-2xl md:text-3xl lg:text-4xl group hover:bg-[#ed3833] hover:text-black transform transition-colors duration-200 cursor-pointer px-1"
          >
            <span className="mr-2 transform transition-transform duration-300 group-hover:-rotate-45 inline-block">↖</span>
            back to profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal2;
