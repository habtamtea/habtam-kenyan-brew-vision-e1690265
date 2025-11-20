import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, Leaf, Globe, Users, TrendingUp } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Standards & Certifications",
      description: "All our tea exports are backed by internationally recognized certifications including ISO 22000 for food safety management, Fair Trade certification ensuring ethical sourcing, and Rainforest Alliance certification promoting sustainable farming practices. We adhere to stringent quality protocols with comprehensive lab testing for every batch, ensuring compliance with EU, US, and international food safety regulations. Our commitment to quality excellence means you receive consistently superior tea that meets the highest global standards."
    },
    {
      icon: Leaf,
      title: "Direct Relationships with Tea Farmers",
      description: "As a Kenyan tea exporter with deep roots in the country's tea industry, we maintain direct partnerships with carefully selected tea estates and smallholder farmers across prime growing regions. These long-standing relationships enable us to ensure traceability from farm to export, support sustainable agricultural practices, and secure the best quality leaves at optimal harvest times. By eliminating unnecessary intermediaries, we guarantee freshness and authenticity while supporting local farming communities through fair pricing and ethical sourcing practices."
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing Model",
      description: "Our wholesale tea supplier model is built on efficiency and transparency. With direct sourcing from tea estates, streamlined logistics, and established export infrastructure, we offer highly competitive pricing without compromising on quality. We provide flexible pricing tiers based on order volume, transparent quotations with no hidden costs, and seasonal pricing opportunities. Whether you're a established tea distributor or a growing business, our pricing structure is designed to support your profitability while delivering premium Kenyan tea that commands market value."
    },
    {
      icon: Globe,
      title: "International Export Experience",
      description: "With extensive experience in global tea trade, Habtam Limited has successfully exported premium black tea, green tea, and specialty varieties to markets across four continents. We possess comprehensive knowledge of international shipping regulations, customs requirements, and documentation procedures for major markets including the European Union, Middle East, North America, and Asia. Our proven track record includes managing large-scale bulk tea orders, navigating complex export compliance requirements, and ensuring products arrive in optimal condition regardless of destination."
    },
    {
      icon: Users,
      title: "Customer Support & Reliability",
      description: "Our dedicated team provides personalized service throughout the entire procurement process—from initial inquiry and sample requests to order fulfillment and after-sales support. We offer flexible minimum order quantities to accommodate businesses of all sizes, detailed product specifications and tasting notes, customized packaging solutions, and responsive communication in multiple languages. Our reliability is demonstrated through consistent on-time deliveries, transparent tracking systems, and a commitment to resolving any concerns promptly and professionally."
    },
    {
      icon: CheckCircle2,
      title: "Comprehensive Tea Varieties",
      description: "We offer an extensive range of premium Kenyan tea to meet diverse market preferences. Our portfolio includes premium black tea in various grades (FOP, GFOP, PEKOE), specialty white teas including rare silver and golden tips, authentic Kenyan green tea, unique purple tea rich in anthocyanins, CTC teas for strong, robust brews, and orthodox teas for discerning palates. Each variety is carefully graded and processed to preserve its distinctive characteristics, flavor profiles, and health benefits, giving you the selection needed to serve your specific market demands."
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
            Why Choose Habtam Limited
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            As a leading wholesale tea supplier from Kenya, we combine quality excellence, ethical sourcing, 
            and reliable service to deliver premium tea that exceeds expectations. Our commitment to your 
            success goes beyond just supplying tea—we're your trusted partner in the global tea trade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground font-serif">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
