/* "use client";

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
    () => ({ lat: -9.128256099056829, lng: -78.52171561329502 }),
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
              zoom={19}
              center={center}
              mapContainerClassName="map-container"
            >
              <Marker position={center} onClick={handleMarkerClick} />
              {infoWindowOpen && ( // Renderiza el InfoWindow solo si infoWindowOpen es true
                <InfoWindow
                  position={center}
                  onCloseClick={handleInfoWindowClose}
                >
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </InfoWindow>
              )}
              <div className="h-screen"></div>
            </GoogleMap>
          </div>
          <div className="w-1/2  ">
            <div className="flex flex-col justify-center  pt-6  items-center">
              <div className="card w-96 bg-neutral text-neutral-content mb-3 ">
                <div className="card-body items-center text-center ">
                  <h2 className="card-title text-rose-500 font-extrabold">SIGUENOS</h2>
                  <p className="text-white">We are using cookies for no reason.</p>
                  
                </div>
              </div>
              <div className="card w-96 bg-neutral text-neutral-content mb-3 ">
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-rose-500 font-extrabold">DIRECCION</h2>
                  <p className="text-white">Av. Pacifico Mz C1 Lt 3A - URB Casuarinas II Etapa - 4to Piso</p>
                 
                </div>
                
              </div>
              <div className="card w-96 bg-neutral text-neutral-content mb-3 ">
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-rose-500 font-extrabold">EMAIL</h2>
                  <p className="text-white">sangers.corp@gmail.com</p>
                 
                </div>
                
              </div>
              <div className="card w-96 bg-neutral text-neutral-content mb-3 ">
                <div className="card-body items-center text-center font-extrabold">
                  <h2 className="card-title text-rose-500">LLÁMANOS</h2>
                  <p className="text-white">93423432</p>
              
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} */

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page