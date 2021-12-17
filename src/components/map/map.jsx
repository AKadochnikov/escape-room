import { useRef, useMemo, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { Icon, layerGroup, Marker } from 'leaflet';
import { LOCATION } from '../../const';

const customIcon = new Icon({
  iconUrl: '/img/pin-map.svg',
  iconSize: [40, 78],
  iconAnchor: [20, 78],
});

const Map = () => {
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  const layers = useMemo(() => layerGroup(), []);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: LOCATION.latitude,
        lng: LOCATION.longitude,
      });
      marker
        .setIcon(customIcon)
        .addTo(layers);
      map.addLayer(layers);
    }
  }, [map, layers])
  return <div style={{height: '336px', marginLeft: 'auto', marginRight: 'auto', width: '649px'}} ref={mapRef}/>;
}

export default Map;
