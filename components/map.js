import { MapContainer, TileLayer, Polygon } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const Map = ({ areas }) => {
  return (
    <MapContainer
      center={[38.6746, -121.5544]}
      zoom={12}
      scrollWheelZoom={false}
      className="block w-full"
      style={{ height: "600px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {areas.map((area, i) => (
        <Polygon key={i} pathOptions={{ color: "red" }} positions={area} />
      ))}
      {/* <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker> */}
    </MapContainer>
  );
};

export default Map;
