"use client";


const Statement = () => {
  return(
    <section className="h-screen py-36 md:py-8 px-4 text-[#ed3833] bg-black">
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <div className="flex flex-col w-full md:w-7/12 font-bold text-justify text-base md:text-[1.5vw] tracking-[0.08em] leading-4 md:leading-5">
        <p>about us</p>
        <br/>
        <p>
        A.L.T. "Against Low Trends" es una agencia boutique con un enfoque artístico dentro de la música electrónica.
        Nuestro propósito es romper con las tendencias comerciales pasajeras y centrarnos en lo que realmente importa: el arte, la innovación y la conexión profunda con el público.
        Creemos en la calidad sobre la cantidad.<br/><br/>
        Trabajamos exclusivamente con un grupo selecto y reducido de artistas que comparten nuestra visión y están comprometidos con elevar su perfil artístico a nuevos niveles.
        <br/><br/>
        Nuestra misión es clara: proporcionar a nuestros artistas una plataforma sólida para crecer, crear y expresarse generando oportunidades en clubes y/o festivales  que valoren la esencia genuina de la música electrónica.
        <br/><br/>

        Nos aliamos con espacios y eventos que aprecian la autenticidad y el riesgo artístico, asegurándonos de que cada presentación sea una experiencia memorable.
        A.L.T. no es solo una agencia; es un movimiento que celebra la diversidad, la originalidad y la audacia.
          </p>

        </div>
        <div className="flex w-full md:w-7/12 justify-end items-end ">
           <img src="/images/AgainstLT_Blanco.png"
               className="w-[50%] md:w-[30%] h-auto object-contain"
           />
        </div>
      </div>
    </section>
  )
}

export default Statement;