import Link from "next/link";

const Header = () => {

  return(
    // <div className="flex justify-between px-2 md:px-4 py-2 bg-white mix-blend-difference text-black text-sm md:text-base">
    
    <div className="flex justify-between tracking-widest px-4 py-2 bg-black/10 mix-blend-difference text-white text-xs md:text-[13px] fixed w-full z-50 overflow-hidden">
      <div className="flex font-bold">
        <Link href="/">against low trends</Link>
      </div>
      <div className="flex font-bold gap-1">
        <Link href="/about" className="flex">about,</Link>
        <Link href="/contact" className="flex">contact,</Link>
        <div className="flex">events</div>
      </div>
    </div>
  )
};

export default Header;
