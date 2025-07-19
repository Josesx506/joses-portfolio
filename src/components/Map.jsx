import { GeoscienceCard } from "@/components/cards/TooltipCard";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { GeoJSON, LayersControl, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import contUSAData from '../data/continental_us.json';
import nigerDeltaData from '../data/niger_delta.json';

export default function Map({position, zoom, scroll=false, view=true, details=false}) {
  const bounds = [
    [73.846579, -173.968158],
    [-35.891487, 52.262304],
  ]

  // Define custom icons. Omit icon to use default blue
  const xmnshtIcon = new L.Icon({
    iconUrl: "/comp_logos/xmoonshot.svg",
    iconSize: [45, 45]
  })

  const chevronIcon = new L.Icon({
    iconUrl: "/comp_logos/chevron.svg",
    iconSize: [45, 45]
  })

  const lanlIcon = new L.Icon({
    iconUrl: "/comp_logos/lanl.svg",
    iconSize: [30, 30]
  })

  const paiIcon = new L.Icon({
    iconUrl: "/comp_logos/pai_icon.png",
    iconSize: [30, 30]
  })

  const homeIcon = new L.Icon({
    iconUrl: "/comp_logos/house.svg",
    iconSize: [30, 30]
  })

  const geoJSONStyle = {
    color: '#3388ff',
    weight: 2,
    fillOpacity: 0.2,
    fillColor: '#3388ff'
  };
  
  // Function to bind tooltip to each feature
  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      const shorttooltip = GeoscienceCard(feature.properties,false)
      const longtootip = GeoscienceCard(feature.properties,true)
      const tooltipContent = details ? longtootip : shorttooltip;

      layer.bindTooltip(tooltipContent, {
        permanent: true,
        sticky: true,
        direction: 'auto'
      });
    }
  };
  
  return <MapContainer maxBounds={bounds} minZoom={3} style={{width:"100%", height:"100%"}} center={position} zoom={zoom} scrollWheelZoom={scroll}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    />
    
    {/* Map layers for Geo roles */}
    <LayersControl position="topright" key={`layers-${view}-${details}`}>
      <LayersControl.Overlay checked={view} name="Gulf of Guinea" zIndexOffset={0}>
        <GeoJSON
          key={details ? 'detailed' : 'simple'}
          data={nigerDeltaData}
          style={geoJSONStyle}
          onEachFeature={onEachFeature}
        />
      </LayersControl.Overlay>
      <LayersControl.Overlay checked={view} name="Continental US" zIndexOffset={0}>
        <GeoJSON
          key={details ? 'detailed' : 'simple'}
          data={contUSAData}
          style={geoJSONStyle}
          onEachFeature={onEachFeature}
        />
      </LayersControl.Overlay>
    </LayersControl>

    {/* Map markers for tech roles */}
    <Marker position={[37.407173, -122.105815]} icon={xmnshtIcon} >
      <Popup>
        <div style={{fontWeight:"bold",padding:0}}>
          <div>AI Resident <br />@<em>X (moonshot)</em></div>
        </div>
      </Popup>
    </Marker>
    <Marker position={[29.754597, -95.370675]} icon={chevronIcon} >
      <Popup>
        <div style={{fontWeight:"bold",padding:0}}>
          <div>AI Research Intern <br /> @<em>Chevron Tech. Center</em></div>
        </div>
      </Popup>
    </Marker>
    <Marker position={[35.877558, -106.319772]} icon={lanlIcon} >
      <Popup>
        <div style={{fontWeight:"bold",padding:0}}>
          <div>AI Research Intern <br /> @<em>Los Alamos Nat. Lab.</em></div>
        </div>
      </Popup>
    </Marker>
    <Marker position={[6.561321, 3.369208]} icon={paiIcon} >
      <Popup>
        <div style={{fontWeight:"bold",padding:0}}>
          <div>Remote Backend Dev. <br /> @<em>PowerLabs</em></div>
        </div>
      </Popup>
    </Marker>

    <Marker position={[32.126864, -81.201783]} icon={homeIcon}>
      <Popup>
        <div style={{fontWeight:"bold",padding:0}}>Home: GA, US.</div>
      </Popup>
    </Marker>
  </MapContainer>
}