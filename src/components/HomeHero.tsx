
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const HomeHero = () => {
  return (
    <section className="relative bg-tech-blue text-white py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-tech-blue to-purple-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Next-Gen Tech <span className="text-tech-purple">For Everyone</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Discover the latest electronics from top brands at unbeatable prices. Shop now and upgrade your tech game.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-tech-purple hover:bg-purple-700">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <Link to="/deals">View Deals</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
