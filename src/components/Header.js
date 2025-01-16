import Link from "next/link";

const Header = () => {

  return(
    <div className="flex justify-between px-4 py-2 bg-white mix-blend-difference text-black text-sm md:text-base">
      {/* <div className="flex justify-between px-4 py-2 bg-black/10 mix-blend-difference text-white text-sm md:text-base fixed w-full z-50"> */}
      <div className="flex font-semibold">
        <div>against low trends</div>
      </div>
      <div className="flex font-semibold gap-1">
        <Link href="/about" className="flex">about,</Link>
        <Link href="/" className="flex">contact,</Link>
        <div className="flex">events</div>
      </div>
    </div>
  )
};

export default Header;
