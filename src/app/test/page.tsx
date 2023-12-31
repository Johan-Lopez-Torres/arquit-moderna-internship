"use client";

import { useState, useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBbg7ZVAq8M4h4Yi_BJIrchSNRTTi0m3e8",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}

export function Map() {
  const center = useMemo(
    () => ({ lat: -9.108726697343528, lng: -78.53060495045908 }),
    []
  );

  const [infoWindowOpen, setInfoWindowOpen] = useState(true); // Estado para controlar la apertura/cierre del InfoWindow

  const handleMarkerClick = () => {
    setInfoWindowOpen(!infoWindowOpen); // Invierte el estado al hacer clic en el Marker
  };

  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false); // Cierra el InfoWindow al hacer clic en el botón de cierre
  };

  return (
    <>
      <div className="h-screen m-12">
        <div className="flex flex-row">
          <div className="w-1/2">
            <GoogleMap
              zoom={18}
              center={center}
              mapContainerClassName="map-container"
            >
              <Marker position={center} onClick={handleMarkerClick} />
              {infoWindowOpen && ( // Renderiza el InfoWindow solo si infoWindowOpen es true
                <InfoWindow  position={center} onCloseClick={handleInfoWindowClose}>
                  <div className="flex flex-row justify-center max-w-xs  ">
                    <div className="mb-2">
                      <img
                        className="w-24 h-24 mx-auto border-4 border-violet-400 rounded-lg"
                        src="https://www.ebhosworks.com.ng/wp-content/uploads/2022/04/Modern-hotel-exterior-design-architecture.jpg"
                        alt=""
                      />
                    </div>
                    <div className="p-3">
                      <h1 className="text-center text-teal-600 font-extrabold">
                        OFICINAS DE ARQUIT MODERNA
                      </h1>
                      <p className="text-slate-500 font-bold">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </InfoWindow>
              )}
              <div className="h-screen"></div>
            </GoogleMap>
          </div>
          <div className="w-1/2 p-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              vel, harum quasi quibusdam debitis reiciendis voluptate,
              reprehenderit possimus cumque autem a quaerat ipsum impedit
              doloribus numquam eveniet quia voluptatum assumenda!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
