const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">HABTAM LIMITED</h3>
            <p className="text-primary-foreground/80">
              Premium Kenyan tea exports delivering excellence to the world
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>About Us</li>
              <li>Our Products</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Mombasa, Kenya</li>
              <li>info@habtamltd.com</li>
              <li>+254 722 670 995</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Habtam Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
