"use client";

import React, { useEffect } from "react";
import { Blurhash } from "react-blurhash";

type BlurImageProps = {
  src: string;
  hash: string;
  imgClass?: string;
  alt?: string;
};

const BlurImage: React.FC<BlurImageProps> = ({
  src,
  hash,
  imgClass,
  alt,
}: BlurImageProps) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
  }, [src]);

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash={hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}

      {imageLoaded && (
        <img
          className={`w-full h-full object-cover  rounded-2xl ${imgClass}  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover:opacity-60 duration-300   `}
          src={src}
          alt={`${alt}`}
        />
      )}
    </>
  );
};

export default BlurImage;