
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HomeHero from '@/components/HomeHero';
import FeaturedCategories from '@/components/FeaturedCategories';
import FeaturedProducts from '@/components/FeaturedProducts';
import Promotions from '@/components/Promotions';
import Newsletter from '@/components/Newsletter';
import Testimonials from '@/components/Testimonials';
import LogoCloud from '@/components/LogoCloud';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HomeHero />
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
