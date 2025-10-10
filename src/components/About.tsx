import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, TrendingUp } from "lucide-react";
import harvestingImage from "@/assets/tea-harvesting.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
              About Habtam Limited
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-sans">
              Habtam Ltd is a specialized agricultural export company dealing in premium quality tea from Kenya. 
              We perform complete buyer, importer, and exporter services, ensuring the highest standards of quality 
              and service.
            </p>
            <p className="text-lg text-muted-foreground">
              Founded by Mr. Tefera Zerihun Mengesha and Ms. Sandra Kinya Murithi, our combined expertise in 
              distribution, sales management, and customer service ensures exceptional quality and reliability 
              for our international partners.
            </p>
          </div>
          <div className="relative">
            <img
              src={harvestingImage}
              alt="Tea harvesting in Kenya"
              className="rounded-2xl shadow-elegant w-full"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-soft hover:shadow-elegant transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To serve tea importers worldwide by exceeding quality standards and providing the highest 
                quality product at competitive prices through outstanding service and efficient delivery.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft hover:shadow-elegant transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Our Values</h3>
              <p className="text-muted-foreground">
                We value relationships with our customers through guaranteed product quality, personal service, 
                and honest, responsible business practices that reflect our commitment to excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft hover:shadow-elegant transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Our Objectives</h3>
              <p className="text-muted-foreground">
                Establish strategic relationships with premium tea importers globally, increase sales substantially, 
                and improve profit margins through the use of advanced technology and efficient operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
