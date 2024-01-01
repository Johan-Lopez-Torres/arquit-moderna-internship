import React, { useEffect } from "react";

const Map = () => {
  const mapRef = React.useRef(null);
  useEffect(() => {
    const initMap = async () => {
      console.log("initMap");
    };
    initMap();
  }, []);

  return (
    <>
      <h1>MAPA DE GOOGLE</h1>
    </>
  );
};

export default Map;
