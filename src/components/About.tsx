import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, TrendingUp } from "lucide-react";
import harvestingImage from "@/assets/tea-harvesting.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
              About Habtam Limited
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-sans">
              Habtam Limited is a premier Kenyan tea exporter specializing in sourcing and supplying premium quality 
              tea to international markets. As a specialized agricultural export company, we offer comprehensive 
              buyer, importer, and exporter services that meet and exceed global quality standards. Our commitment 
              to excellence has positioned us as a trusted partner for tea importers and distributors worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-6 font-sans">
              Founded by industry veterans Mr. Tefera Zerihun Mengesha and Ms. Sandra Kinya Murithi, Habtam Limited 
              was established with a vision to bridge the gap between Kenya's world-renowned tea estates and global 
              markets seeking authentic, high-quality African tea. Mr. Mengesha brings over 15 years of experience 
              in distribution and supply chain management, having worked extensively with leading tea producers across 
              East Africa. Ms. Murithi contributes her expertise in sales management and international customer relations, 
              cultivated through years of serving diverse clientele in the premium tea segment.
            </p>
            <p className="text-lg text-muted-foreground mb-6 font-sans">
              Our expertise in tea sourcing and export is rooted in deep relationships with certified tea estates 
              throughout Kenya's most productive tea-growing regions, including Kericho, Nandi Hills, and the slopes 
              of Mount Kenya. We specialize in both orthodox and CTC (Crush, Tear, Curl) processing methods, offering 
              premium black tea, specialty white and green teas, and unique purple tea varieties that showcase Kenya's 
              rich terroir and ideal growing conditions.
            </p>
            <p className="text-lg text-muted-foreground mb-6 font-sans">
              Quality assurance is paramount to our operations. Every batch of tea we export undergoes rigorous testing 
              and meets international standards including ISO 22000 food safety certification. We work exclusively with 
              estates that maintain Fair Trade and Rainforest Alliance certifications, ensuring ethical sourcing 
              practices and sustainable farming methods. Our quality control team conducts thorough inspections at 
              multiple stages—from leaf selection and processing to packaging and shipment—guaranteeing that only the 
              finest tea reaches our clients.
            </p>
            <p className="text-lg text-muted-foreground">
              At Habtam Limited, we believe in building lasting partnerships through transparency, reliability, and 
              exceptional service. Our company values center on integrity in business dealings, commitment to quality 
              excellence, sustainable agricultural practices, and customer satisfaction. We provide personalized support 
              to each client, offering flexible order quantities, competitive wholesale pricing, and efficient logistics 
              solutions that ensure timely delivery to destinations across Europe, Middle East, North America, and Asia. 
              Our mission is to be the preferred source for premium Kenyan tea in the global market, delivering not just 
              a product, but a complete service experience that reflects the rich heritage and superior quality of 
              Kenyan tea.
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
          <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
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
          
          <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
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
          
          <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the premier source of high-quality Kenyan tea in the global market, recognized for 
                excellence, reliability, and customer satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
