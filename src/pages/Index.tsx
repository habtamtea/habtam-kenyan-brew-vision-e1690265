import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Logistics from "@/components/Logistics";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Logistics />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
