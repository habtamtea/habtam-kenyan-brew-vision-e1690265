export default function Products() {
  const products = [
    { id: 1, name: 'Black Tea', description: 'Premium Kenyan black tea with rich flavor', origin: 'Kericho Region' },
    { id: 2, name: 'Green Tea', description: 'Fresh green tea from Kenya highlands', origin: 'Kisii County' },
    { id: 3, name: 'Specialty Blends', description: 'Curated blends for unique taste profiles', origin: 'Mixed Regions' },
  ];

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Premium Kenyan Tea Selections</p>
      </div>

      <section className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <p className="origin">Origin: {product.origin}</p>
            <button className="inquiry-btn">Inquire Now</button>
          </div>
        ))}
      </section>

      <section className="bulk-orders">
        <h2>Bulk Orders</h2>
        <p>
          For wholesale and bulk tea orders, please contact our sales team.
          We offer competitive pricing and flexible shipping options worldwide.
        </p>
      </section>
    </div>
  );
}
