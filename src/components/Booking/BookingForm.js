"use client";

import { useEffect } from "react";

const BookingFormModal = ({ embedCode, isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      const scriptId = "gigwell-booking-script";

      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://connect.gigwell.com/booknow/booknow.js";
        script.async = true;
        script.crossOrigin = "*";
        document.body.appendChild(script);
      }

      return () => {
        const script = document.getElementById(scriptId);
        if (script) document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-start bg-black bg-opacity-80 backdrop-blur-md text-[#ed3833] z-50">
      <div className="relative w-[90%] md:w-[90%] bg-black rounded-lg border-2 border-[#ed3833] overflow-y-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-3 text-xl hover:text-[#ed3833] transition duration-300"
        >
          ✕
        </button>

        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">booking@againstlowtrends</h2>
          {/* Aquí se inyecta el código del formulario */}
          <div dangerouslySetInnerHTML={{ __html: embedCode }} />
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;
