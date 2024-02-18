import { BotonLogoProps } from "./props";



const BotonLogo: React.FC<BotonLogoProps> = ({ href, src, alt, className }) => {
    return (
      <>
        <a
          href={href}
          target="_blank"
          className={` ${className} w-16 transition ease-in-out delay-150   hover:scale-60 hover:opacity-60 duration-150`}
        >
          <div>
            <img
              className="flex items-center"
              src={`/images/iconos/${src}`}
              alt={alt}
            />
          </div>
        </a>
      </>
    );
  };