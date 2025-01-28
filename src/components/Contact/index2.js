"use client";

const ContactInfo = () => {
  return(
    <section className="h-screen px-4 text-[#ed3833] bg-black">
      <div className="flex flex-col md:flex-row-reverse justify-center items-center h-full gap-0 md:gap-4">
        <div className="flex flex-col gap-2 md:gap-2">
          <div className="flex text-base md:text-[1.5vw] tracking-[0.08em]">
            <p className="font-bold">contact:</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] leading-[1rem] md:leading-[1.4rem] tracking-[0.08em]">
            <p>office address</p>
            <p>A.L.T. / Against Low Trends S.L.</p>
            <p>C/ Caunedo 36 Local 1</p>
            <p>28037 Madrid</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-[0.7rem] md:leading-none">
            <p>phone</p>
            <p className="text-2xl md:text-4xl font-bold">+34 91700987165</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-[0.7rem] md:leading-none">
            <p>booking enquires</p>
            <p className="text-2xl md:text-4xl font-bold">ernesto@againstlt.com</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-[0.7rem] md:leading-none">
            <p>press enquires</p>
            <p className="text-2xl md:text-4xl font-bold">manu@againstlt.com</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-[0.7rem] md:leading-none">
            <p>all other inquires</p>
            <p className="text-2xl md:text-4xl font-bold">info@againstlt.com</p>
          </div>
          {/* <div className="flex flex-col text-base md:text-[1.5vw] leading-[1.2rem] tracking-[0.08em]">
            <p>general manager</p>
            <p>alberto gonzalez</p>
            <p>mail: alberto@alt.com</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] leading-[1.2rem] tracking-[0.08em]">
            <p>general manager</p>
            <p>alberto gonzalez</p>
            <p>mail: alberto@alt.com</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] leading-[1.2rem] tracking-[0.08em]">
            <p>general manager</p>
            <p>alberto gonzalez</p>
            <p>mail: alberto@alt.com</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] leading-[1.2rem] tracking-[0.08em]">
            <p>general manager</p>
            <p>alberto gonzalez</p>
            <p>mail: alberto@alt.com</p>
          </div> */}
          {/* <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em]">
            <p>general inquire</p>
            <p className="text-2xl md:text-4xl font-bold">againstlt@gmail.com</p>
            <p className="text-2xl md:text-4xl font-bold">+34 91700987165</p>
          </div> */}
          <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-[0.7rem] md:leading-none">
            <p>booking forms</p>
            <p className="text-2xl md:text-4xl font-bold">@booking</p>
          </div>
          {/* <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-[1.2rem]">
            <p>office address</p>
            <p>A.L.T. / Against Low Trends S.L.</p>
            <p>C/ Caunedo 36 Local 1</p>
            <p>28037 Madrid</p>
          </div> */}
        </div>
        <div className="flex flex-col gap-2">
          <div className="invisible flex md:hidden">placeholder</div>
          <img src="images/ALT_Blanco.png"
                width={250}
                height={250}
                className="object-contain"/>
                {/* <img src="images/ALT_Blanco.png"
                width={250}
                height={250}
                className="object-contain"/>
                <img src="images/ALT_Blanco.png"
                width={250}
                height={250}
                className="object-contain"/>
                <img src="images/ALT_Blanco.png"
                width={250}
                height={250}
                className="object-contain"/>
                <img src="images/ALT_Alta_Logo_blanco.png"
                width={250}
                height={250}
                className="object-contain"/> */}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo;

// "use client";

// const Contact4 = () => {
//   return(
//     <section className="h-screen px-4 text-[#ed3833] bg-black">

//     </section>
//   )
// }

// export default Contact4;