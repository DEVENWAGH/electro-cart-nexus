
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Promotions = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Promo */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">New Arrival</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">The Ultimate Gaming Laptop</h3>
                <p className="text-gray-200 mb-6">Experience next-level gaming with the latest RTX GPUs and ultra-fast refresh rates.</p>
              </div>
              <Button asChild className="self-start bg-white text-blue-900 hover:bg-blue-50">
                <Link to="/products/category/gaming-laptops">Shop Now</Link>
              </Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1593640495253-23196b27a87f"
              alt="Gaming Laptop"
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
            />
          </div>

          {/* Second Promo */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">Limited Time</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Smart Home Devices</h3>
                <p className="text-gray-200 mb-6">Transform your living space with the latest smart home technology. Up to 30% off.</p>
              </div>
              <Button asChild className="self-start bg-white text-green-900 hover:bg-green-50">
                <Link to="/products/category/smart-home">View Offers</Link>
              </Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-900 z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1558002038-1055907df827"
              alt="Smart Home Devices"
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
