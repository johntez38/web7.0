import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export function PropertyMap({ properties, center }: any) {
  return (
    <MapContainer center={center} zoom={13} style={{ height: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {properties.map((p: any) => (
        <Marker key={p.id} position={[p.lat, p.lng]}>
          <Popup>
            <strong>{p.name}</strong><br />
            KES {p.price}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
