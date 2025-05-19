
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet marker icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

type Location = {
  name: string;
  coordinates: [number, number]; // [lat, lng] - typed as tuple
  description: string;
};

type MapComponentProps = {
  locations: Location[];
};

const MapComponent: React.FC<MapComponentProps> = ({ locations }) => {
  // Calculate center based on average of all locations
  const calculateCenter = (): [number, number] => {
    if (locations.length === 0) return [50.6329700, 3.0618200]; // Default center (Lille)
    
    const sumLat = locations.reduce((sum, loc) => sum + loc.coordinates[0], 0);
    const sumLng = locations.reduce((sum, loc) => sum + loc.coordinates[1], 0);
    
    return [sumLat / locations.length, sumLng / locations.length];
  };

  return (
    <MapContainer 
      center={calculateCenter()}
      zoom={10} 
      style={{ height: '500px', width: '100%', borderRadius: '0.5rem' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {locations.map((location, index) => (
        <Marker 
          key={index} 
          position={location.coordinates}
        >
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
