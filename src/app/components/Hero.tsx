import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2016-01/100x100_prefab_01.jpg?VersionId=VgFgdH9RaNMSpVeURWjI_99.EVkLUDre&itok=F2QL2XJZ)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold text-teal-400">
              Hello there
            </h1>
            <p className="mb-5 text-white font-bold">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
