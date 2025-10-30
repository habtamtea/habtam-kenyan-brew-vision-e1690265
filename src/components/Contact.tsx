import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import brewingImage from "@/assets/tea-brewing.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to partner with Kenya's premium tea exporter? Contact us to discuss 
              your requirements and experience the Habtam difference.
            </p>

            <div className="space-y-6 mb-8">
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info@habtamltd.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+254 722 670995</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Oriental Building, 1st Floor, Nkurumah Road, Mombasa Kenya</p>
                  </div>
                </CardContent>
              </Card>
            </div>

           <a
  href={
    "https://wa.me/254722670995?text=" +
    encodeURIComponent(
      "Greetings from Habtam Limited! 🍃🍵 We’re passionate about Kenyan tea and committed to your business success. Let us know your tea sourcing or shipping needs—we’re experts in premium Kenyan exports and ready to support your growth. 🍃"
    )
  }
  target="_blank"
  rel="noopener"
>
  <Button size="lg" className="bg-gradient-accent border-0 text-accent-foreground hover:opacity-90">
    Send Message
    <Send className="ml-2 h-5 w-5" />
  </Button>
</a>

          </div>

          <div className="relative">
            <img
              src={brewingImage}
              alt="Premium tea brewing"
              className="rounded-2xl shadow-elegant w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
