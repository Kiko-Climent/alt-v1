"use client"
import { useNavigate } from "framer";
import Image from "next/image";

const LandingText = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };
  return(
    <section className="h-screen w-screen flex justify-center items-center bg-black overflow-hidden"
             onClick={handleNavigation} 
             onTouchStart={handleNavigation}>
      <div className="flex h-full w-full justify-center items-center opacity-50">
        <Image src="/images/ALT_Alta_Logo_blanco.png"
        width={400}
        height={400}
        style={{ objectFit: "cover" }}/>
      </div>
    </section>
  )
}

export default LandingText;