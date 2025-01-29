import Link from "next/link";
import { useRef } from "react";
import { useInView, motion } from "framer";

const Header = () => {

  const body = useRef(null);
  const isInView = useInView(body, {once: true, margin: "75%"})

  const animation_header = {
    initial: {y: "-50%", opacity: 0}, 
    enter: {y: "0", opacity: 1, transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.5}}

  }

  const animation_header2 = {
    initial: {y: "-50%", opacity: 0}, 
    enter: {y: "0", opacity: 1, transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.9}}

  }

  return(
    // <div className="flex justify-between px-2 md:px-4 py-2 bg-white mix-blend-difference text-black text-sm md:text-base">
    
    <div ref={body} className="flex justify-between tracking-widest px-4 py-2 bg-black/10 mix-blend-difference text-white text-xs md:text-[13px] fixed w-full z-50 overflow-hidden">
    {/* <div className="flex justify-between tracking-widest px-4 py-2 bg-black text-white text-xs md:text-[13px] fixed w-full z-50 overflow-hidden"> */}
      <motion.div custom={1} variants={animation_header} initial="initial" animate={isInView ? "enter" : ""} 
      className="flex font-bold hover:text-[#ed3833]">
        <Link href="/home">against low trends</Link>
      </motion.div>
      <motion.div custom={1} variants={animation_header2} initial="initial" animate={isInView ? "enter" : ""} 
      className="flex font-bold gap-1">
        <Link href="/about" className="flex  hover:text-[#ed3833]">about,</Link>
        <Link href="/contact" className="flex  hover:text-[#ed3833]">contact,</Link>
        <Link href="/contact" className="flex  hover:text-[#ed3833]">IG </Link>
      </motion.div>
      {/* <div className="flex flex-col items-end font-bold leading-[0.9rem]">
        <Link href="/about" className="flex">about</Link>
        <Link href="/contact" className="flex">contact</Link>
        <Link href="/contact" className="flex">instagram</Link>
      </div> */}
    </div>
  )
};

export default Header;

// playground hover effect for links: hover:bg-white hover:text-black //