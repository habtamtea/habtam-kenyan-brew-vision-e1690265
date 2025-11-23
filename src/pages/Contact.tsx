export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with Habtam Limited</p>
      </div>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear from you. Whether you have questions about our tea products,
            need wholesale information, or want to discuss a partnership opportunity,
            please reach out to us.
          </p>

          <div className="info-items">
            <div className="info-item">
              <h3>Email</h3>
              <p><a href="mailto:info@habtamltd.com">info@habtamltd.com</a></p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p><a href="tel:+254722670995">+254 (0) 700 000 000</a></p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Mombasa, Kenya</p>
            </div>
            <div className="info-item">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM EAT</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
