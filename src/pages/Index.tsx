import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Logistics from "@/components/Logistics";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Habtam Limited",
    "url": "https://www.habtamltd.com",
    "logo": "https://www.habtamltd.com/android-chrome-512x512.png",
    "description": "Premium Kenyan tea exporter specializing in high-quality black, green, white, and specialty teas sourced from Kenya's finest estates. Serving global markets with excellence.",
    "telephone": "+254-700-000-000",
    "email": "info@habtamltd.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tea House Building",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "addressCountry": "KE"
    },
    "sameAs": [
      "https://www.facebook.com/habtamltd",
      "https://www.twitter.com/habtamltd",
      "https://www.linkedin.com/company/habtamltd",
      "https://www.instagram.com/habtamltd"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Habtam Limited",
    "image": "https://www.habtamltd.com/android-chrome-512x512.png",
    "description": "Premium Kenyan tea exporter offering wholesale and bulk tea supplies to international markets. Specializing in orthodox and CTC teas from certified estates.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tea House Building",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "postalCode": "00100",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.286389,
      "longitude": 36.817223
    },
    "telephone": "+254-700-000-000",
    "email": "info@habtamltd.com",
    "url": "https://www.habtamltd.com",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Kenya",
        "identifier": "KE"
      },
      {
        "@type": "Country",
        "name": "Uganda",
        "identifier": "UG"
      },
      {
        "@type": "Country",
        "name": "Tanzania",
        "identifier": "TZ"
      },
      {
        "@type": "Country",
        "name": "Rwanda",
        "identifier": "RW"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Habtam Limited - Premium Kenyan Tea Exporter | Wholesale Black, Green & Specialty Teas</title>
        <meta name="title" content="Habtam Limited - Premium Kenyan Tea Exporter | Wholesale Black, Green & Specialty Teas" />
        <meta 
          name="description" 
          content="Leading Kenyan tea exporter offering premium black tea, green tea, white tea, and specialty teas. Wholesale bulk supplies from Kenya's finest estates to global markets." 
        />
        <meta 
          name="keywords" 
          content="Kenyan tea export, premium black tea, tea exporter Kenya, wholesale tea Kenya, bulk tea supplier, Kenyan green tea, CTC tea, orthodox tea, African tea, tea estates Kenya, premium tea supplier, international tea export" 
        />
        <link rel="canonical" href="https://www.habtamltd.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.habtamltd.com" />
        <meta property="og:title" content="Habtam Limited - Premium Kenyan Tea Exporter" />
        <meta 
          property="og:description" 
          content="Premium Kenyan tea exporter specializing in high-quality black, green, white, and specialty teas. Sourced from Kenya's finest estates for global markets." 
        />
        <meta property="og:image" content="https://www.habtamltd.com/android-chrome-512x512.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Habtam Limited" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.habtamltd.com" />
        <meta name="twitter:title" content="Habtam Limited - Premium Kenyan Tea Exporter" />
        <meta 
          name="twitter:description" 
          content="Premium Kenyan tea exporter offering wholesale black, green, white, and specialty teas from Kenya's finest estates." 
        />
        <meta name="twitter:image" content="https://www.habtamltd.com/android-chrome-512x512.png" />
        <meta name="twitter:creator" content="@habtamltd" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Habtam Limited" />
        <meta name="geo.region" content="KE-110" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.286389;36.817223" />
        <meta name="ICBM" content="-1.286389, 36.817223" />

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Hero />
        <About />
        <Products />
        <Logistics />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
