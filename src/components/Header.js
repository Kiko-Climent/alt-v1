import Link from "next/link";

const Header = () => {

  return(
    // <div className="flex justify-between px-2 md:px-4 py-2 bg-white mix-blend-difference text-black text-sm md:text-base">
    
    <div className="flex justify-between tracking-widest px-4 py-2 bg-black/10 mix-blend-difference text-white text-xs md:text-[13px] fixed w-full z-50 overflow-hidden">
    {/* <div className="flex justify-between tracking-widest px-4 py-2 bg-black text-white text-xs md:text-[13px] fixed w-full z-50 overflow-hidden"> */}
      <div className="flex font-bold hover:text-[#ed3833]">
        <Link href="/home">against low trends</Link>
      </div>
      <div className="flex font-bold gap-1">
        <Link href="/about" className="flex  hover:text-[#ed3833]">about,</Link>
        <Link href="/contact" className="flex  hover:text-[#ed3833]">contact</Link>
      </div>
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