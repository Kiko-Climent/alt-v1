import Link from "next/link";

const Header = () => {

  return(
    <div className="flex justify-between px-4 py-2 text-white bg-[#000000] text-sm md:text-base">
      <div className="flex font-semibold">
        {/* <h1>A.L.T</h1> */}
      </div>
      <div className="flex font-semibold gap-1">
        <Link href="/about" className="flex">about,</Link>
        <Link href="/contact" className="flex">contact,</Link>
        <div className="flex">events</div>
      </div>
    </div>
  )
};

export default Header;
