
import { Grid } from 'lucide-react';
import CategoryCard from './CategoryCard';

interface Category {
  title: string;
  image: string;
  count: number;
  slug: string;
}

const categories: Category[] = [
  {
    title: "Smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    count: 42,
    slug: "smartphones"
  },
  {
    title: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    count: 38,
    slug: "laptops"
  },
  {
    title: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    count: 25,
    slug: "headphones"
  },
  {
    title: "Gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    count: 29,
    slug: "gaming"
  },
  {
    title: "Wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    count: 21,
    slug: "wearables"
  },
  {
    title: "Cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    count: 16,
    slug: "cameras"
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 bg-tech-gray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
          <a href="/categories" className="flex items-center text-tech-purple hover:underline">
            <span>View All</span>
            <Grid className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, idx) => (
            <CategoryCard
              key={idx}
              title={category.title}
              image={category.image}
              count={category.count}
              slug={category.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
