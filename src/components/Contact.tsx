import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-subtle" id="contact">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Ready to partner with Kenya's premium tea exporter? Contact us to discuss 
            your requirements and experience the Habtam difference.
          </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
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
          <div className="text-center">
            <a
              href="https://wa.me/254722670995"
              target="_blank"
              rel="noopener"
            >
              <Button size="lg" className="bg-gradient-accent border-0 text-accent-foreground hover:opacity-90">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
                                    </div>
                        <div className="flex items-center justify-center">
                                    <img src="/assets/tea-cup.jpg" alt="Premium Kenyan Tea" className="rounded-lg shadow-lg w-full h-auto" />
                                  </div>
                        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
