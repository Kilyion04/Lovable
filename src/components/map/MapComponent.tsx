
import React from "react";
import {
  MapContainer as LeafletMapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

export interface Location {
  name: string;
  coordinates: [number, number]; // [lat, lng]
  description: string;
}

interface MapComponentProps {
  locations: Location[];
  height?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  locations,
  height = "500px",
}) => {
  const calculateCenter = (): LatLngExpression => {
    if (locations.length === 0) return [48.8566, 2.3522];
    if (locations.length === 1) return locations[0].coordinates;
    const lats = locations.map((loc) => loc.coordinates[0]);
    const lngs = locations.map((loc) => loc.coordinates[1]);
    return [
      lats.reduce((a, b) => a + b, 0) / lats.length,
      lngs.reduce((a, b) => a + b, 0) / lngs.length,
    ];
  };

  const center: LatLngExpression = calculateCenter();

  return (
    <LeafletMapContainer
      center={center}
      zoom={10}
      scrollWheelZoom={false}
      style={{
        height,
        width: "100%",
        borderRadius: "0.5rem",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.coordinates as LatLngExpression}
        >
          <Popup>
            <div>
              <h3 className="font-medium">{location.name}</h3>
              <p>{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </LeafletMapContainer>
  );
};

export default MapComponent;
