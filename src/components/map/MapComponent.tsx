
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default icon issues in Leaflet with webpack
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';

type MapLocation = {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  description?: string;
};

interface MapComponentProps {
  locations: MapLocation[];
}

// Fix default icon issue
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: iconRetinaUrl,
  shadowUrl: markerShadow
});

const MapComponent = ({ locations }: MapComponentProps) => {
  // Calculate center based on locations or use default
  const defaultCenter: [number, number] = [50.4291, 2.9225]; // [latitude, longitude] for area between Lens and Lille
  
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border">
      <MapContainer 
        center={defaultCenter}
        zoom={10} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {locations.map((location, index) => (
          <Marker 
            key={index}
            // Leaflet uses [lat, lng] order while our type uses [lng, lat]
            position={[location.coordinates[1], location.coordinates[0]]}
          >
            <Popup>
              <div>
                <h3 className="font-semibold">{location.name}</h3>
                {location.description && <p>{location.description}</p>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
