import Link from "next/link";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between tracking-widest px-4 py-2 bg-black text-white text-xs md:text-[13px] fixed w-full z-50">
      {/* Logo */}
      <div className="flex font-bold hover:text-[#ed3833]">
        <Link href="/home">against low trends</Link>
      </div>

      {/* Contenedor Menú */}
      <div className="relative flex items-center">
        {/* Flecha (siempre visible) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-white hover:text-[#ed3833] transition-transform duration-300 ${
            menuOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowBack size={15} />
        </button>

        {/* Links que se desplazan */}
        <div className={`font-bold flex gap-2 bg-black px-4 py-2 transition-all duration-300 overflow-hidden absolute top-0 h-full items-center ${
          menuOpen ? "right-8 opacity-100" : "right-[-200px] opacity-0"
        }`}>
          <Link href="/about" className="hover:text-[#ed3833]">about,</Link>
          <Link href="/contact" className="hover:text-[#ed3833]">contact,</Link>
          <Link href="/contact" className="hover:text-[#ed3833]">IG</Link>
        </div>
      </div>
    </div>
  );
};

export default Header2;
