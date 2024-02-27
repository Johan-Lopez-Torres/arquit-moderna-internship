export const Hero2 = () => {
  return (
    <div className="min-h-screen  ">
      <div className="bg-negro mb-16  relative flex flex-col-reverse  lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="  absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="#19191A"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="\images\proyectos\proyecto_ecuador\ecuador (2).jpeg"
            alt=""
          />
        </div>
        <div className=" relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-20 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl  tracking-tight text-white sm:text-5xl sm:leading-none font-medium">
              Somos un equipo de profesionales
              <br className="hidden md:block" />
              en diseño de
              <span className="inline-block text-rojo font-bold">
                proyectos arquitectónicos
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-300 md:text-lg">
              Nuestro equipo de arquitectos combina visión y experiencia para
              crear soluciones únicas y funcionales.
            </p>
            <div className="flex items-center">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rojo hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Solicitar
              </a>
              <a
                href="/servicios"
                aria-label=""
                className="inline-flex items-center font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Leer más
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
