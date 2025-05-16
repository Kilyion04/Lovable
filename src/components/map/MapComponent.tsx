
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

type MapLocation = {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  description?: string;
};

interface MapComponentProps {
  locations: MapLocation[];
  mapboxToken?: string;
}

const MapComponent = ({ locations, mapboxToken }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState<string>(mapboxToken || '');

  useEffect(() => {
    if (!mapContainer.current || !token) return;

    // Initialize map
    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.9225, 50.4291], // Centered between Lens and Lille
      zoom: 10
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add markers for each location
    locations.forEach((location) => {
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3>${location.name}</h3>
                 ${location.description ? `<p>${location.description}</p>` : ''}`);

      new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [locations, token]);

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  return (
    <div className="relative w-full">
      {!token && (
        <div className="mb-4">
          <label htmlFor="mapbox-token" className="block text-sm font-medium mb-2">
            Entrez votre token Mapbox public
          </label>
          <input
            id="mapbox-token"
            type="text"
            value={token}
            onChange={handleTokenChange}
            className="w-full p-2 border rounded"
            placeholder="pk.eyJ1IjoieW91..."
          />
          <p className="text-xs text-muted-foreground mt-1">
            Créez un compte sur <a href="https://mapbox.com" className="text-primary" target="_blank" rel="noopener noreferrer">Mapbox</a> et utilisez votre token public.
          </p>
        </div>
      )}
      <div 
        ref={mapContainer} 
        className={`w-full h-[500px] rounded-lg ${!token ? 'bg-muted flex items-center justify-center' : ''}`}
      >
        {!token && <p className="text-muted-foreground">Entrez votre token Mapbox pour afficher la carte</p>}
      </div>
    </div>
  );
};

export default MapComponent;
