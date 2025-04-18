import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Promotions from "@/components/Promotions";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import LogoCloud from "@/components/LogoCloud";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HomeHero />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
          {/* Hero Banner - Left side (spans 3 columns) */}
          <div className="lg:col-span-3 bg-gradient-to-br from-purple-900 to-tech-purple rounded-xl overflow-hidden">
            <div className="relative h-full">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center mix-blend-soft-light opacity-20"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f')",
                }}
              ></div>
            </div>
          </div>

        </div>
        <FeaturedCategories />
        <FeaturedProducts />
        <Promotions />
        <LogoCloud />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
