export function PropertyCard({ property }: any) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      width: "200px"
    }}>
      <h3>{property.name}</h3>
      <p>{property.location}</p>
      <p>KES {property.price}</p>
    </div>
  );
}
