import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingCart, Package, Truck, Warehouse, Ship } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Identification",
    description: "We identify and partner with the finest tea estates across Kenya",
  },
  {
    icon: ShoppingCart,
    title: "Purchasing & Contracting",
    description: "Professional procurement services with transparent contracts",
  },
  {
    icon: Package,
    title: "Quality Assurance",
    description: "Rigorous quality control ensuring premium standards",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage facilities maintaining optimal conditions",
  },
  {
    icon: Ship,
    title: "Shipping",
    description: "Efficient international shipping to destinations worldwide",
  },
  {
    icon: Truck,
    title: "Delivery Scheduling",
    description: "Reliable delivery coordination to meet your timeline",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Complete Export Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From source to delivery, we handle every aspect of the tea export process 
            with professionalism and care
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
