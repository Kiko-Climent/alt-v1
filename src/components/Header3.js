"use client"

import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";
import { useInView, motion } from "framer";

const Header3 = () => {

  const body = useRef(null);
  const isInView = useInView(body, {once: true, margin: "75%"})
  const router = useRouter();
  const pathname = router.pathname;

  const animation_header = {
    initial: {y: "-50%", opacity: 0}, 
    enter: {y: "0", opacity: 1, transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.5}}

  }

  const animation_header2 = {
    initial: {y: "-50%", opacity: 0}, 
    enter: {y: "0", opacity: 1, transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.9}}

  }

  return(
    <div ref={body} translate="no" 
    className="flex justify-between tracking-widest px-2 short:px-2 md:px-4 py-2 bg-black/10 mix-blend-difference text-white text-xs md:text-[13px] top-0 fixed w-full z-50">
    {/* <div className="flex justify-between tracking-widest px-4 py-2 bg-black text-white text-xs md:text-[13px] fixed w-full z-50 overflow-hidden"> */}
      <motion.div custom={1} variants={animation_header} initial="initial" animate={isInView ? "enter" : ""} 
      className="flex font-bold hover:text-black hover:bg-[#ed3833] transform transition-colors duration-200">
        <Link href="/home">Against Low Trends</Link>
      </motion.div>
      <motion.div custom={1} variants={animation_header2} initial="initial" animate={isInView ? "enter" : ""} 
      className="flex font-bold gap-1 transform transition-transform duration-300">
        <Link href="/about" className={`${pathname === "/about" ? "text-active" : ""} hover:text-black hover:bg-[#ed3833] transform transition-colors duration-200`}>about</Link>,
        <Link href="/contact" className={`${pathname === "/contact" ? "text-active" : ""} hover:text-black hover:bg-[#ed3833] transform transition-colors duration-200`}>contact</Link>,
        <a href="https://www.instagram.com/againstlowtrends/" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:bg-[#ed3833] transform transition-colors duration-200">ig</a>

      </motion.div>
    </div>
  )
};

export default Header3;

// playground hover effect for links: hover:bg-white hover:text-black //