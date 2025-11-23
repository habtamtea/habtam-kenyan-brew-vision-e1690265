export default function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Habtam Limited</h1>
        <p>Premium Kenyan Tea Exporter</p>
      </div>
      
      <section className="about-content">
        <h2>Our Story</h2>
        <p>
          Habtam Limited is a premium Kenyan tea exporter specializing in sourcing the finest quality tea
          from Kenya's renowned highlands. We have been dedicated to delivering excellence to importers
          and consumers worldwide since our establishment.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>Quality Excellence - Only the finest teas make it to our selection</li>
          <li>Sustainable Practices - Ethical sourcing from certified farms</li>
          <li>Direct Relationships - We work directly with tea farmers</li>
          <li>Customer Service - Dedicated support for all our partners</li>
        </ul>
      </section>

      <section className="about-tea">
        <h2>Our Tea Products</h2>
        <p>
          We offer a diverse range of Kenyan tea products including Black Tea, Green Tea, and Specialty Blends.
          Each batch is carefully selected and processed to maintain its exceptional flavor and aroma.
        </p>
      </section>
    </div>
  );
}
