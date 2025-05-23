
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix pour les icônes Leaflet en React
// Assure que les marqueurs s'affichent correctement
// Note: Dans un projet réel, vous voudriez stocker ces icônes dans votre dossier public
// et les référencer avec des URLs relatives
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Définition du type pour une location
export interface Location {
  name: string;
  coordinates: [number, number]; // [lat, lng]
  description: string;
}

// Props pour le composant de carte
interface MapComponentProps {
  locations: Location[];
  height?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  locations,
  height = "500px",
}) => {
  // Calcul du centre de la carte basé sur les emplacements
  const calculateCenter = (): [number, number] => {
    if (locations.length === 0) return [48.8566, 2.3522]; // Paris par défaut
    if (locations.length === 1) return locations[0].coordinates;

    // Calcul du centre pour plusieurs points
    const lats = locations.map((loc) => loc.coordinates[0]);
    const lngs = locations.map((loc) => loc.coordinates[1]);
    const center: [number, number] = [
      lats.reduce((a, b) => a + b, 0) / lats.length,
      lngs.reduce((a, b) => a + b, 0) / lngs.length,
    ];
    return center;
  };

  const center = calculateCenter();

  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ height: height, width: "100%", borderRadius: "0.5rem" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.coordinates}>
          <Popup>
            <div>
              <h3 className="font-medium">{location.name}</h3>
              <p>{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
