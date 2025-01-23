"use client"
import { useNavigate } from "framer";
import Image from "next/image";

const LandingText = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };
  return(
    <section className="relative h-screen w-full flex justify-center items-center overflow-hidden bg-black"
             onClick={handleNavigation} 
             onTouchStart={handleNavigation}>
      <div className="relative flex w-9/12 lg:w-3/12 px-4 py-2">
        {/* <h1 className="font-bold text-[#811a17] text-3xl md:text-[1.5vw] text-justify text-highlight !leading-7 md:!leading-5 blur-[0.5px] ">
        nuestro
        propósito es romper con las tendencias comerciales pasajeras y
        centrarnos en lo que realmente importa: el arte, la innovación y la
        conexión profunda con el público.
        </h1> */}
      </div>
      <div className="flex absolute flex justify-center items-center h-full w-full opacity-50">
        <Image src="/images/ALT_Alta_Logo_blanco.png"
        width={400}
        height={400}
        style={{ objectFit: "cover" }}/>
      </div>
    </section>
  )
}

export default LandingText;