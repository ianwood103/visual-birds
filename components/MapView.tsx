"use client";

import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { Coordinate } from "@/utils/types";
import "leaflet/dist/leaflet.css";

interface MapViewProps {
  coordinates: Coordinate[];
}

const MapView: React.FC<MapViewProps> = ({ coordinates }) => {
  return (
    <div className="w-full h-[38rem]">
      <MapContainer
        center={[33.791, -84.344]}
        zoom={12}
        style={{
          height: "100%",
          width: "100%",
        }}
        zoomControl={false}
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        boxZoom={false}
        keyboard={false}
        className="z-10"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
          className="grayscale"
        />
        {coordinates.map((coord, index) => (
          <Marker
            key={index}
            position={[coord.y, coord.x]}
            icon={
              new L.Icon({
                iconUrl: "/pin.png",
                iconSize: [12, 20],
                iconAnchor: [6, 20],
                popupAnchor: [0, -15],
                shadowSize: [20, 20],
              })
            }
          >
            <Popup>
              Bird collision at ({coord.x}, {coord.y})
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;