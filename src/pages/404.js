import Link from "next/link";

export default function Custom404 () {
  return(
    <section className="h-screen px-4 text-[#ed3833] bg-black">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex">
          <h1 className="font-bold text-[7.7vh] md:text-[8.3vw]">404</h1>
        </div>
        <div className="flex">
          <p className="text-base md:text-[1.5vw] tracking-[0.08em]">this page does not exist</p>
        </div>
        <div className="flex text-[3.5vh] md:text-4xl font-bold tracking-[0.08em]">
          <Link href="/home">↗ home</Link>
        </div>
      </div>
    </section>
  )
}