"use client";

import { useState, useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

export default function Home() {
  const center = useMemo(
    () => ({ lat: -9.128256099056829, lng: -78.52171561329502 }),
    []
  );

  const [infoWindowOpen, setInfoWindowOpen] = useState(true);

  const handleMarkerClick = () => {
    setInfoWindowOpen(!infoWindowOpen);
  };

  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBbg7ZVAq8M4h4Yi_BJIrchSNRTTi0m3e8", // Reemplaza "YOUR_API_KEY_HERE" con tu propia clave de API de Google Maps
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <div className="min-h-screen m-12">
        <div className="flex   flex-col md:flex-row">
          <div className="md:w-1/2 w-full border-8 border-purple">
            <GoogleMap
              zoom={19}
              center={center}
              mapContainerClassName="map-container"
            >
              <Marker position={center} onClick={handleMarkerClick} />
              {infoWindowOpen && (
                <InfoWindow
                  position={center}
                  onCloseClick={handleInfoWindowClose}
                >
                  <div className="flex flex-row justify-center max-w-xs">
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
          <div className="md:w-1/2 w-full">
            <div className="flex flex-col justify-center pt-6 items-center gap-6">
              <div className="card w-96 bg-[#242526] text-neutral-content mb-3">
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-rose-500 font-extrabold">
                    SIGUENOS
                  </h2>
                  <p className="text-white">
                    We are using cookies for no reason.
                  </p>
                </div>
              </div>
              <div className="card w-96 bg-[#242526] text-neutral-content mb-3">
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-rose-500 font-extrabold">
                    DIRECCION
                  </h2>
                  <p className="text-white">
                    Av. Pacifico Mz C1 Lt 3A - URB Casuarinas II Etapa - 4to
                    Piso
                  </p>
                </div>
              </div>
              <div className="card w-96 bg-[#242526] text-neutral-content mb-3">
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-rose-500 font-extrabold">
                    EMAIL
                  </h2>
                  <p className="text-white">arquit.moderna@gmail.com</p>
                </div>
              </div>
              <div className="card w-96 bg-[#242526] text-neutral-content mb-3">
                <div className="card-body items-center text-center font-extrabold">
                  <h2 className="card-title text-rose-500">LLÁMANOS</h2>
                  <p className="text-white">998871436</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
