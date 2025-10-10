import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import teaBlack from "@/assets/tea-black.jpg";
import teaWhite from "@/assets/tea-white.jpg";
import teaSilver from "@/assets/tea-silver.jpg";
import teaGolden from "@/assets/tea-golden.jpg";
import teaDust from "@/assets/tea-dust.jpg";

const products = [
  {
    name: "Premium Black Tea",
    image: teaBlack,
    grade: "BP1",
    description: "Rich, full-bodied black tea with distinctive flavor and aroma",
    type: "Orthodox",
  },
  {
    name: "White Silver Tips",
    image: teaWhite,
    grade: "Silver Tips",
    description: "Delicate white tea with subtle sweetness and floral notes",
    type: "Specialty",
  },
  {
    name: "Silver Needle",
    image: teaSilver,
    grade: "Premium",
    description: "Finest quality silver needle tea with exceptional clarity",
    type: "White Tea",
  },
  {
    name: "Golden Tips",
    image: teaGolden,
    grade: "GFOP",
    description: "Premium golden tips offering smooth, mellow flavor",
    type: "Black Tea",
  },
  {
    name: "CTC Dust",
    image: teaDust,
    grade: "D1",
    description: "Strong, brisk tea perfect for tea bags and blends",
    type: "CTC",
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Premium Tea Selection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <CardTitle className="text-2xl text-foreground">{product.name}</CardTitle>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {product.type}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  Grade: {product.grade}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
