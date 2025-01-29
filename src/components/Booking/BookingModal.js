import { useState } from "react";
import { motion } from "framer-motion";

const BookingModal = ({ embedCode, isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-md text-[#ed3833] z-50">
      <div className="relative w-[90%] md:w-[60%] p-6 bg-black rounded-lg border-2 border-[#ed3833]">
        {/* Botón de cierre */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-3 text-xl hover:text-[#ed3833] transition duration-300"
        >
          ✕
        </button>

        {/* Contenedor del Embed */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">booking@againstlowtrends</h2>
          <div dangerouslySetInnerHTML={{ __html: embedCode }} />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
