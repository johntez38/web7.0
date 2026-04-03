import { Header } from "../components/Header";
import { PropertyMap } from "../components/PropertyMap";
import { PropertyCard } from "../components/PropertyCard";
import { properties } from "../data/mockData";

export function HomePage() {
  return (
    <div>
      <Header />

      <h1 style={{ textAlign: "center" }}>Find Homes Near You</h1>

      <div style={{ height: "400px" }}>
        <PropertyMap properties={properties} center={[-1.2921, 36.8219]} />
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
}
