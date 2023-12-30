"use client";

import { useEffect, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

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

 
  return (
    <GoogleMap zoom={18} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
