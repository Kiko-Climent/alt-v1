"use client";

import { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [selectedAsunto, setSelectedAsunto] = useState("");

  const handleAsuntoChange = (e) => {
    setSelectedAsunto(e.target.value);
  };

  return (
    <section className="h-screen text-black bg-white px-4 md:px-0">
      <div className="h-full flex flex-col-reverse md:flex-row items-center justify-center gap-y-4">
        <div className="flex self-start pt-8 md:pt-24">
          <Image
            src="/images/AgainstLT_transparente.png"
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center md:w-5/12 space-y-2 font-bold tracking-widest text-xs md:text-[13px]">
          <h1 className="flex self-start font-sm">Contact:</h1>
          <div className="flex-col w-full">
            <div className="flex flex-col">
              <div className="flex">
                <label htmlFor="nombre" className="block font-bold font-sm">
                  Nombre
                </label>
              </div>
              <div className="flex text-xs md:text-[13px]">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full border-b border-black focus:ring-gray-500"
                />
              </div>
            </div>
          </div>
          <div className="flex-col w-full">
            <div className="flex text-xs md:text-[13px]">
              <label htmlFor="apellido" className="block font-bold text-black">
                Apellidos
              </label>
            </div>
            <div className="flex text-xs md:text-[13px]">
              <input
                type="text"
                id="apellido"
                name="apellido"
                className="w-full border-b border-black focus:ring-gray-500"
              />
            </div>
          </div>
          <div className="flex-col w-full">
            <div className="flex text-xs md:text-[13px]">
              <label htmlFor="email" className="block font-bold text-black">
                Email (*)
              </label>
            </div>
            <div className="flex text-xs md:text-[13px]">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-b border-black focus:ring-gray-500"
              />
            </div>
          </div>
          <div className="flex-col w-full">
            <div className="flex text-xs md:text-[13px]">
              <label htmlFor="asunto" className="block font-bold text-black">
                Asunto (*)
              </label>
            </div>
            <div className="flex text-xs md:text-[13px]">
              <select
                id="asunto"
                name="asunto"
                className="w-full border-b border-black focus:ring-gray-500"
                value={selectedAsunto}
                onChange={handleAsuntoChange}
              >
                <option value="general">GENERAL</option>
                <option value="dj-booking">DJ BOOKING</option>
              </select>
            </div>
          </div>

          {/* Menú desplegable para DJs, visible solo si se selecciona "DJ BOOKING" */}
          {selectedAsunto === "dj-booking" && (
            <div className="flex-col w-full">
              <div className="flex text-xs md:text-[13px]">
                <label htmlFor="dj" className="block font-bold text-black">
                  DJ (*)
                </label>
              </div>
              <div className="flex text-xs md:text-[13px]">
                <select
                  id="dj"
                  name="dj"
                  className="w-full border-b border-black focus:ring-gray-500"
                >
                  <option value="hermetica">Hermética</option>
                  <option value="laia">Laia</option>
                  <option value="unkle-fon">Unkle Fon</option>
                  <option value="monster">Monster</option>
                  <option value="piramidal-decoder">Piramidal Decoder</option>
                  <option value="tak">Tak</option>
                  <option value="not-a-headliner">Not a Headliner</option>
                  <option value="atonism">Atonism</option>
                </select>
              </div>
            </div>
          )}

          <div className="flex-col w-full">
            <div className="flex text-xs md:text-[13px]">
              <label htmlFor="mensaje" className="block font-bold text-black">
                Mensaje (*)
              </label>
            </div>
            <div className="flex text-xs md:text-[13px]">
              <textarea
                id="mensaje"
                name="mensaje"
                className="w-full mt-6 border-b border-black focus:ring-gray-500"
              />
            </div>
            <div className="flex pt-5 w-full">
              <button className="flex justify-center border border-black rounded-2xl px-2 py-2 w-2/12">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
