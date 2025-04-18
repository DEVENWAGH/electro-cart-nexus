import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Sample product data
const sampleProducts = [
  {
    _id: "1",
    name: "iPhone 14 Pro",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1678652197831-2d180a162d89",
    rating: 4.5,
    category: "Smartphones",
    inStock: true,
  },
  {
    _id: "2",
    name: "Samsung Galaxy S23 Ultra",
    price: 1199.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1678911820864-e5f8472825c0",
    rating: 4.7,
    category: "Smartphones",
    inStock: true,
  },
  {
    _id: "3",
    name: "Sony WH-1000XM5",
    price: 349.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
    rating: 4.8,
    category: "Headphones",
    inStock: true,
  },
  {
    _id: "4",
    name: 'MacBook Pro 16"',
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf",
    rating: 4.9,
    category: "Laptops",
    inStock: true,
  },
  {
    _id: "5",
    name: "iPad Air",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    rating: 4.6,
    category: "Tablets",
    inStock: true,
  },
  {
    _id: "6",
    name: "Nintendo Switch OLED",
    price: 349.99,
    originalPrice: 379.99,
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
    rating: 4.7,
    category: "Gaming",
    inStock: true,
  },
  {
    _id: "7",
    name: "Dell XPS 13",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1593642702909-dec73df255d7",
    rating: 4.5,
    category: "Laptops",
    inStock: false,
  },
  {
    _id: "8",
    name: "Bose QuietComfort Earbuds II",
    price: 249.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5e58c",
    rating: 4.6,
    category: "Headphones",
    inStock: true,
  },
];

// Available categories
const categories = [
  "All Categories",
  "Smartphones",
  "Laptops",
  "Headphones",
  "Gaming",
  "Tablets",
  "Smart Home",
  "Wearables",
];

const ProductsPage = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [inStockOnly, setInStockOnly] = useState(false);

  // Get category from URL query parameters
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get("category");

    if (categoryParam) {
      // Find matching category in the categories array
      const matchingCategory = categories.find(
        (cat) => cat.toLowerCase() === categoryParam.toLowerCase()
      );

      if (matchingCategory) {
        setSelectedCategory(matchingCategory);
      }
    }
  }, [location]);

  // Filter products based on selections
  const filteredProducts = sampleProducts.filter((product) => {
    // Filter by price
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    // Filter by category
    if (
      selectedCategory !== "All Categories" &&
      product.category !== selectedCategory
    ) {
      return false;
    }

    // Filter by stock
    if (inStockOnly && !product.inStock) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-bold mb-8">All Products</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>

              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="radio"
                        id={category}
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2"
                      />
                      <label htmlFor={category}>{category}</label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Price Range</h3>
                <Slider
                  min={0}
                  max={3000}
                  step={50}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange([value[0], value[1]])}
                  className="mb-4"
                />
                <div className="flex justify-between">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">In Stock Only</span>
                <Switch
                  checked={inStockOnly}
                  onCheckedChange={setInStockOnly}
                />
              </div>

              <Button
                variant="outline"
                className="w-full mt-6"
                onClick={() => {
                  setPriceRange([0, 3000]);
                  setSelectedCategory("All Categories");
                  setInStockOnly(false);
                }}
              >
                Reset Filters
              </Button>
            </div>

            {/* Products Grid */}
            <div className="md:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-lg font-medium mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
