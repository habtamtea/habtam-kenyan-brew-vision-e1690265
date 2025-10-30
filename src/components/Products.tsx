import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import teaBlack from "@/assets/tea-black.jpg";
import teaWhite from "@/assets/tea-white.jpg";
import teaSilver from "@/assets/tea-silver.jpg";
import teaGolden from "@/assets/tea-golden.jpg";
import teaDust from "@/assets/tea-dust.jpg";
import teaFannings from "@/assets/tea-fannings.jpg";
import teaPekoe from "@/assets/tea-pekoe.jpg";
import teaDustFine from "@/assets/tea-dust-fine.jpg";
import teaCTC from "@/assets/tea-ctc.jpg";
import teaPF1 from "@/assets/tea-pf1.jpg";
import teaPurple from "@/assets/tea-purple.jpg";
import teaOolong from "@/assets/tea-oolong.jpg";
import liquorBlack from "@/assets/liquor-black.jpg";
import liquorWhite from "@/assets/liquor-white.jpg";
import liquorSilver from "@/assets/liquor-silver.jpg";
import liquorGolden from "@/assets/liquor-golden.jpg";
import liquorCTC from "@/assets/liquor-ctc.jpg";
import liquorPF1 from "@/assets/liquor-pf1.jpg";
import liquorGreen from "@/assets/liquor-green.jpg";
import liquorPurple from "@/assets/liquor-purple.jpg";
import liquorOolong from "@/assets/liquor-oolong.jpg";

const products = [
  {
    name: "Premium Black Tea",
    image: teaBlack,
    liquorImage: liquorBlack,
    grade: "FOP (Flowery Orange Pekoe)",
    description: "Our flagship premium black tea with exceptional character and depth",
    type: "Orthodox Black",
    liquorColor: "Deep reddish-brown with amber highlights",
    taste: "Full-bodied with rich malty notes, subtle sweetness, and a smooth finish. Hints of caramel and dried fruit create a complex, well-balanced cup.",
    brewing: {
      temperature: "95-100°C (203-212°F)",
      time: "3-5 minutes",
      ratio: "2.5g per 200ml water",
      instructions: "Use freshly boiled water. Steep for 3-5 minutes depending on desired strength. Can be enjoyed with or without milk."
    }
  },
  {
    name: "White Silver Tips",
    image: teaWhite,
    liquorImage: liquorWhite,
    grade: "Silver Tips Premium",
    description: "Delicate hand-picked buds offering the finest white tea experience",
    type: "Specialty White",
    liquorColor: "Pale golden-yellow with crystalline clarity",
    taste: "Delicate and subtle with floral notes, hints of honey, and a naturally sweet aftertaste. Light, refreshing, with minimal astringency.",
    brewing: {
      temperature: "75-80°C (167-176°F)",
      time: "2-3 minutes",
      ratio: "2g per 200ml water",
      instructions: "Use cooler water to preserve delicate flavors. First infusion 2 minutes, can be re-steeped 2-3 times. Best enjoyed without additions."
    }
  },
  {
    name: "White Golden Tips",
    image: teaSilver,
    liquorImage: liquorSilver,
    grade: "Premium Golden Needle",
    description: "Finest quality silver needle tea with exceptional clarity and refinement",
    type: " Speciality White",
    liquorColor: "Silvery-white with golden undertones, brilliant clarity",
    taste: "Exceptionally smooth with sweet vegetal notes, hints of cucumber and melon. Clean finish with lingering sweetness and subtle grassiness.",
    brewing: {
      temperature: "70-75°C (158-167°F)",
      time: "2-4 minutes",
      ratio: "3g per 200ml water",
      instructions: "Use lower temperature water. Can be infused multiple times, increasing steeping time with each infusion. Serve in glass to appreciate the beautiful leaves."
    }
  },
  {
    name: "Premium Black Tea",
    image: teaGolden,
    liquorImage: liquorGolden,
    grade: "GFOP (Golden Flowery Orange Pekoe)",
    description: "Premium golden tips offering smooth, mellow sophistication",
    type: "Orthodox Black",
    liquorColor: "Bright golden-amber with copper highlights",
    taste: "Smooth and mellow with natural sweetness. Notes of honey, stone fruits, and subtle floral undertones. Minimal astringency with a clean, long finish.",
    brewing: {
      temperature: "90-95°C (194-203°F)",
      time: "3-4 minutes",
      ratio: "2.5g per 200ml water",
      instructions: "Slightly cooler water than standard black tea preserves the delicate golden tips. Perfect for afternoon tea. Can be enjoyed plain or with a touch of honey."
    }
  },
  {
    name: "Premium Black Tea",
    image: teaDust,
    liquorImage: liquorCTC,
    grade: "FNGS (Fannings Grade)",
    description: "Strong, brisk tea perfect for tea bags and robust blends",
    type: "CTC Black",
    liquorColor: "Dark coppery-red, intense and full-bodied",
    taste: "Bold and brisk with strong malty character. Robust astringency balanced with natural sweetness. Excellent for blending with milk and sugar.",
    brewing: {
      temperature: "100°C (212°F)",
      time: "2-3 minutes",
      ratio: "2g per 200ml water",
      instructions: "Use boiling water for full extraction. Quick infusion due to fine particle size. Ideal for strong breakfast tea. Excellent with milk."
    }
  },
  {
    name: "Premium Back Tea",
    image: teaFannings,
    liquorImage: liquorBlack,
    grade: "PF 1 (Pekoe Fannings 1)",
    description: "Premium fannings offering quick brewing and consistent strength",
    type: "CTC Black",
    liquorColor: "Rich reddish-brown with good brightness",
    taste: "Strong and full with brisk character. Well-balanced astringency and malty sweetness. Excellent for blending and commercial applications.",
    brewing: {
      temperature: "95-100°C (203-212°F)",
      time: "2-3 minutes",
      ratio: "2g per 200ml water",
      instructions: "Fast brewing due to small leaf size. Perfect for tea bags. Strong enough to stand up to milk. Consistent cup quality."
    }
  },
  {
    name: "Premium Black Tea",
    image: teaPekoe,
    liquorImage: liquorBlack,
    grade: "BP 1 (Broken Pekoe 1)",
    description: "Classic broken leaf grade with excellent balance and strength",
    type: "CTC Black",
    liquorColor: "Deep amber-brown with reddish tint",
    taste: "Well-rounded with good body. Balanced malty notes with moderate astringency. Clean finish with subtle fruit undertones.",
    brewing: {
      temperature: "95-100°C (203-212°F)",
      time: "3-4 minutes",
      ratio: "2.5g per 200ml water",
      instructions: "Standard black tea brewing. Versatile for any time of day. Works well both plain and with milk."
    }
  },
  {
    name: "Premium Black Tea",
    image: teaDustFine,
    liquorImage: liquorCTC,
    grade: "Dust 1 (Fine Dust Grade)",
    description: "Ultra-fine particles for maximum strength and color",
    type: "CTC Black",
    liquorColor: "Very dark brown-red, intense color",
    taste: "Extremely strong and astringent. Bold malty flavor with powerful tannins. Best suited for blending with other teas or for those who prefer very strong tea.",
    brewing: {
      temperature: "100°C (212°F)",
      time: "1-2 minutes",
      ratio: "1.5g per 200ml water",
      instructions: "Very short steeping time due to fine particles. Produces very strong liquor quickly. Ideal for masala chai and strong breakfast teas."
    }
  },
  {
    name: "CTC Premium Grade",
    image: teaCTC,
    liquorImage: liquorCTC,
    grade: "PDust 1 (Pekoe Dust 1)",
    description: "High-quality CTC processing for consistent, robust character",
    type: "CTC Black",
    liquorColor: "Dark coppery-brown with excellent brightness",
    taste: "Strong and malty with good briskness. Full-bodied with balanced astringency. Excellent color and strength for everyday drinking.",
    brewing: {
      temperature: "100°C (212°F)",
      time: "2-3 minutes",
      ratio: "2g per 200ml water",
      instructions: "Perfect for everyday brewing. Excellent with milk and sugar. Consistent quality in every cup. Ideal for chai and breakfast teas."
    }
  },
  {
    name: "Green Teas",
    image: teaPF1,
    liquorImage: liquorGreen,
    grade: "Premium Green",
    description: "Fresh, vibrant green tea with delicate character and natural sweetness",
    type: "Green Tea",
    liquorColor: "Light yellow-green with brilliant clarity and fresh appearance",
    taste: "Fresh and vegetal with grassy notes, hints of seaweed, and natural sweetness. Delicate umami character with a clean, refreshing finish and no astringency.",
    brewing: {
      temperature: "70-80°C (158-176°F)",
      time: "2-3 minutes",
      ratio: "2g per 200ml water",
      instructions: "Use cooler water to prevent bitterness. First infusion 2-3 minutes, can be re-steeped 2-3 times. Best enjoyed without milk or sugar to appreciate the delicate flavor."
    }
  },
  {
    name: "Purple Tea",
    image: teaPurple,
    liquorImage: liquorPurple,
    grade: "Upper Purple Tea",
    description: "Rare and exotic purple tea from Kenya's highland estates, rich in anthocyanins and antioxidants. This unique cultivar produces leaves with naturally purple hues, offering both health benefits and distinctive character.",
    type: "Specialty Purple",
    liquorColor: "Vibrant violet-purple with pinkish undertones, becoming deeper when steeped longer. The unique color changes to deep magenta with addition of lemon.",
    taste: "Smooth and mellow with minimal astringency. Naturally sweet with delicate floral notes and hints of woody earthiness. Subtle berry-like undertones with a clean, refreshing finish. Less caffeine than black tea but richer in polyphenols.",
    brewing: {
      temperature: "85-90°C (185-194°F)",
      time: "3-4 minutes",
      ratio: "2.5g per 200ml water",
      instructions: "Use slightly cooled boiling water to preserve the delicate purple color and antioxidants. First steep for 3-4 minutes to develop full flavor and color. Can be re-steeped once. Add a squeeze of lemon to enhance the purple hue. Best enjoyed without milk to appreciate the unique color transformation."
    }
  },
  {
    name: "Oolong Tea",
    image: teaOolong,
    liquorImage: liquorOolong,
    grade: "Oolong Tea",
    description: "Semi-oxidized specialty tea combining the characteristics of both green and black teas. Carefully crafted through a unique partial oxidation process, resulting in a distinctive flavor profile that bridges the freshness of green tea with the richness of black tea.",
    type: "Specialty Tea",
    liquorColor: "Golden amber with orange tones, clear and bright with a warm, inviting hue. The liquor displays excellent clarity with a slight golden shimmer.",
    taste: "Complex and nuanced flavor profile with a perfect balance between floral sweetness and subtle earthiness. Notes of orchid, honey, and toasted nuts blend harmoniously with hints of stone fruit and a gentle woody undertone. Smooth body with minimal astringency and a naturally sweet, lingering aftertaste. The semi-oxidation creates a unique character - lighter than black tea but fuller than green tea.",
    brewing: {
      temperature: "85-95°C (185-203°F)",
      time: "3-5 minutes",
      ratio: "3g per 200ml water",
      instructions: "Use water just below boiling to preserve the delicate floral notes while developing the full complexity. First infusion should be 3-5 minutes. Oolong tea can be re-steeped 3-5 times, increasing the steeping time by 30 seconds with each subsequent infusion. Best enjoyed without milk to appreciate the intricate flavor evolution. Serve in a small teapot or gaiwan for traditional preparation."
    }
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-subtle">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-serif">
          id="products"   Our Premium Tea Selection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Carefully sourced from Kenya's finest tea estates, each variety represents 
            the pinnacle of quality and craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl text-foreground font-serif">{product.name}</CardTitle>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {product.type}
                  </Badge>
                </div>
                <CardDescription className="text-base font-sans">
                  Grade: {product.grade}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="taste">Taste</TabsTrigger>
                    <TabsTrigger value="brewing">Brewing</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4 mt-4">
                    <p className="text-muted-foreground font-sans">{product.description}</p>
                    <div className="flex gap-2 items-start">
                      <img 
                        src={product.liquorImage} 
                        alt={`${product.name} liquor`}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-1">Liquor Color</h4>
                        <p className="text-sm text-muted-foreground font-sans">{product.liquorColor}</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="taste" className="space-y-2 mt-4">
                    <h4 className="font-semibold text-foreground">Flavor Profile</h4>
                    <p className="text-sm text-muted-foreground font-sans">{product.taste}</p>
                  </TabsContent>
                  <TabsContent value="brewing" className="space-y-3 mt-4">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">Temperature</h4>
                      <p className="text-sm text-muted-foreground font-sans">{product.brewing.temperature}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">Steeping Time</h4>
                      <p className="text-sm text-muted-foreground font-sans">{product.brewing.time}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">Tea-to-Water Ratio</h4>
                      <p className="text-sm text-muted-foreground font-sans">{product.brewing.ratio}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">Instructions</h4>
                      <p className="text-sm text-muted-foreground font-sans">{product.brewing.instructions}</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
