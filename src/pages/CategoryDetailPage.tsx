import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Product } from "@/components/ProductCard";
import ProductCard from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Sample products by category with additional details for checkout functionality
const productsByCategory: { [key: string]: Product[] } = {
  smartphones: [
    {
      _id: "sm1",
      name: "iPhone 15 Pro - 256GB",
      price: 1099.99,
      originalPrice: 1199.99,
      image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
      rating: 4.8,
      category: "Smartphones",
      inStock: true,
      description:
        "The latest iPhone with A17 Pro chip, titanium design and 48MP camera system.",
      brand: "Apple",
      features: [
        "A17 Pro chip",
        "48MP camera",
        "Titanium design",
        "Action button",
      ],
      quantity: 1,
    },
    {
      _id: "sm2",
      name: "Samsung Galaxy S23 Ultra",
      price: 999.99,
      originalPrice: 1199.99,
      image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3",
      rating: 4.7,
      category: "Smartphones",
      inStock: true,
    },
    {
      _id: "sm3",
      name: "Google Pixel 7 Pro",
      price: 899.99,
      originalPrice: 999.99,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
      rating: 4.6,
      category: "Smartphones",
      inStock: true,
    },
  ],
  laptops: [
    {
      _id: "lp1",
      name: 'MacBook Pro 14" M2 Pro',
      price: 1799.99,
      originalPrice: 1999.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      rating: 4.9,
      category: "Laptops",
      inStock: true,
    },
    {
      _id: "lp2",
      name: "Dell XPS 15",
      price: 1599.99,
      originalPrice: 1799.99,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      rating: 4.7,
      category: "Laptops",
      inStock: true,
    },
  ],
  headphones: [
    {
      _id: "hp1",
      name: "Sony WH-1000XM5",
      price: 349.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
      rating: 4.8,
      category: "Headphones",
      inStock: true,
    },
    {
      _id: "hp2",
      name: "Bose QuietComfort Earbuds II",
      price: 249.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5e58c",
      rating: 4.6,
      category: "Headphones",
      inStock: true,
    },
  ],
  // Add more categories as needed
};

// Category mapping for title display
const categoryMapping: { [key: string]: string } = {
  smartphones: "Smartphones",
  laptops: "Laptops",
  headphones: "Headphones",
  gaming: "Gaming",
  tablets: "Tablets",
  smartwatches: "Smartwatches",
  "smart-home": "Smart Home",
  cameras: "Cameras",
  audio: "Audio",
  wearables: "Wearables",
  accessories: "Accessories",
  tvs: "TVs & Displays",
};

const CategoryDetailPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("featured");
  const [filterBrands, setFilterBrands] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const categoryTitle = categoryMapping[categorySlug || ""] || "Products";

  useEffect(() => {
    // Get products for the current category
    const categoryProducts = productsByCategory[categorySlug || ""] || [];

    // If we have products for this category, use them
    if (categoryProducts.length > 0) {
      setProducts(categoryProducts);
    } else {
      // Fallback to some default products to prevent empty state
      setProducts([
        {
          _id: `${categorySlug}-1`,
          name: `${categoryTitle} Product 1`,
          price: 499.99,
          originalPrice: 599.99,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
          rating: 4.5,
          category: categoryTitle,
          inStock: true,
        },
        {
          _id: `${categorySlug}-2`,
          name: `${categoryTitle} Product 2`,
          price: 399.99,
          originalPrice: 449.99,
          image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be",
          rating: 4.3,
          category: categoryTitle,
          inStock: true,
        },
      ]);
    }
  }, [categorySlug, categoryTitle]);

  // Filter products by price range
  const filteredProducts = products.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // Default: featured
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
                <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{categoryTitle}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-bold mb-8">{categoryTitle}</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full lg:w-64 space-y-8">
              {/* Price Range Filter */}
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Price Range</h3>
                <Slider
                  defaultValue={[0, 2000]}
                  max={2000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-6"
                />
                <div className="flex items-center justify-between">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Brand Filter */}
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Brand</h3>
                <div className="space-y-2">
                  {["Apple", "Samsung", "Sony", "Dell", "LG"].map((brand) => (
                    <div className="flex items-center space-x-2" key={brand}>
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={filterBrands.includes(brand)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFilterBrands([...filterBrands, brand]);
                          } else {
                            setFilterBrands(
                              filterBrands.filter((b) => b !== brand)
                            );
                          }
                        }}
                      />
                      <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Sort dropdown */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {sortedProducts.length} products
                </p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-asc">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-desc">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border rounded-lg">
                  <h3 className="text-xl font-medium mb-2">
                    No products found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or browse other categories.
                  </p>
                  <h4 className="font-medium mb-4">Browse Categories</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {Object.entries(categoryMapping)
                      .slice(0, 6)
                      .map(([slug, name]) => (
                        <a
                          key={slug}
                          href={`/${slug}`}
                          className="px-4 py-2 bg-muted rounded-md hover:bg-muted/80"
                        >
                          {name}
                        </a>
                      ))}
                  </div>
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

export default CategoryDetailPage;
