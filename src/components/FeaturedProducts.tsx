
import { ArrowRight } from 'lucide-react';
import ProductCard, { Product } from './ProductCard';

// Sample products data
const featuredProducts: Product[] = [
  {
    _id: "1",
    name: "Samsung Galaxy S22 Ultra - 128GB",
    price: 999.99,
    originalPrice: 1199.99,
    image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3",
    rating: 4.7,
    category: "Smartphones",
    inStock: true
  },
  {
    _id: "2",
    name: "MacBook Pro 14\" M2 Pro - 16GB RAM - 512GB",
    price: 1799.99,
    originalPrice: 1999.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    rating: 4.9,
    category: "Laptops",
    inStock: true
  },
  {
    _id: "3",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    price: 349.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
    rating: 4.8,
    category: "Headphones",
    inStock: true
  },
  {
    _id: "4",
    name: "iPad Air 10.9\" M1 - WiFi - 64GB",
    price: 549.99,
    originalPrice: 599.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    rating: 4.6,
    category: "Tablets",
    inStock: true
  },
  {
    _id: "5",
    name: "PlayStation 5 Digital Edition",
    price: 399.99,
    originalPrice: 449.99,
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e",
    rating: 4.8,
    category: "Gaming",
    inStock: false
  },
  {
    _id: "6",
    name: "Apple Watch Series 8 - 45mm",
    price: 399.99,
    originalPrice: 429.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    rating: 4.7,
    category: "Wearables",
    inStock: true
  },
  {
    _id: "7",
    name: "DJI Mini 3 Pro Drone with Remote Controller",
    price: 759.99,
    originalPrice: 849.99,
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384",
    rating: 4.5,
    category: "Drones",
    inStock: true
  },
  {
    _id: "8",
    name: "Bose QuietComfort Earbuds II",
    price: 249.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5e58c",
    rating: 4.6,
    category: "Headphones",
    inStock: true
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <a href="/products" className="flex items-center text-tech-purple hover:underline">
            <span>View All</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
