import { Card, CardContent } from "@/components/ui/card";
import shippingPort from "@/assets/shipping-port.jpg";
import warehouse from "@/assets/warehouse.jpg";

const Logistics = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-serif">
            Global Logistics Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            From our warehouses in Kenya to ports worldwide, we ensure your tea arrives 
            in perfect condition, on time, every time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden border-0 shadow-soft">
            <img 
              src={warehouse} 
              alt="Tea warehouse facility"
              className="w-full h-64 object-cover"
            />
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-foreground font-serif">
                Modern Warehousing
              </h3>
              <p className="text-muted-foreground font-sans mb-4">
                State-of-the-art climate-controlled facilities ensure optimal storage conditions 
                for all tea grades. Our warehouses maintain precise temperature and humidity levels 
                to preserve the quality and freshness of every batch.
              </p>
              <ul className="space-y-2 text-muted-foreground font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Climate-controlled storage at 20-25°C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Humidity maintained at 60-65%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>First-in, first-out inventory management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Regular quality inspections</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-0 shadow-soft">
            <img 
              src={shippingPort} 
              alt="International shipping port"
              className="w-full h-64 object-cover"
            />
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-foreground font-serif">
                Efficient Shipping
              </h3>
              <p className="text-muted-foreground font-sans mb-4">
                We partner with leading international shipping companies to deliver your tea 
                efficiently and safely. Our experienced logistics team handles all documentation 
                and customs requirements for seamless international trade.
              </p>
              <ul className="space-y-2 text-muted-foreground font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Direct container shipping from Mombasa port</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Full documentation and customs support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Real-time shipment tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Flexible delivery schedules</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-soft bg-gradient-accent">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3 text-accent-foreground font-serif">
              Our Commitment to Quality Logistics
            </h3>
            <p className="text-accent-foreground/90 max-w-3xl mx-auto font-sans">
              Every shipment is carefully monitored from our warehouse to your doorstep. 
              We maintain strict quality control protocols throughout the supply chain, 
              ensuring that the premium tea you ordered arrives in pristine condition, 
              ready to delight your customers.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Logistics;
