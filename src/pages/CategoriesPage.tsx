import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Enhanced category data with more accurate product counts
const categories = [
  {
    title: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9",
    count: 12,
    slug: "smartphones",
    description: "Latest smartphones from Apple, Samsung, Google and more.",
  },
  {
    title: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    count: 10,
    slug: "laptops",
    description: "Powerful laptops for work, gaming and everything in between.",
  },
  {
    title: "Headphones",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    count: 8,
    slug: "headphones",
    description: "Premium sound with noise cancellation and wireless freedom.",
  },
  {
    title: "Gaming",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
    count: 7,
    slug: "gaming",
    description:
      "Level up your gaming experience with consoles and accessories.",
  },
  {
    title: "Tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    count: 5,
    slug: "tablets",
    description: "Versatile tablets for work and entertainment on the go.",
  },
  {
    title: "Smartwatches",
    image: "https://images.unsplash.com/photo-1617043786394-f977fa21fce4",
    count: 6,
    slug: "smartwatches",
    description:
      "Track your fitness and stay connected with the latest smartwatches.",
  },
  {
    title: "Smart Home",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827",
    count: 8,
    slug: "smart-home",
    description: "Transform your home with connected devices and automation.",
  },
  {
    title: "Cameras",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
    count: 4,
    slug: "cameras",
    description:
      "Capture memories with high-quality digital cameras and accessories.",
  },
  {
    title: "Audio",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d",
    count: 6,
    slug: "audio",
    description: "Premium speakers and audio equipment for enthusiasts.",
  },
  {
    title: "Wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    count: 5,
    slug: "wearables",
    description: "Fitness trackers, smart glasses, and wearable tech.",
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf",
    count: 11,
    slug: "accessories",
    description: "Essential additions to enhance your tech experience.",
  },
  {
    title: "TVs & Displays",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    count: 5,
    slug: "tvs",
    description: "Stunning visuals with the latest display technology.",
  },
];

const CategoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter categories based on search term
  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter categories based on active filter
  const displayCategories =
    activeCategory === "all"
      ? filteredCategories
      : filteredCategories.filter((cat) => cat.slug === activeCategory);

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
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">
              Product Categories
            </h1>
            {/* Search input */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search categories..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          {/* Category Filter Chips */}
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex space-x-2 min-w-max">
              {categories.slice(0, 5).map((category) => (
                <Button
                  key={category.slug}
                  variant={
                    activeCategory === category.slug ? "default" : "outline"
                  }
                  className={
                    activeCategory === category.slug
                      ? "bg-tech-purple hover:bg-purple-700"
                      : ""
                  }
                  onClick={() => setActiveCategory(category.slug)}
                >
                  {category.title}
                  <span className="ml-2 bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {displayCategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayCategories.map((category, index) => (
                <Link
                  to={`/${category.slug}`}
                  key={index}
                  className="group flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-md"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="font-semibold text-xl">
                        {category.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {category.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {category.count} products
                      </span>
                      <span className="flex items-center text-tech-purple font-medium text-sm">
                        Browse
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium">No categories found</h2>
              <p className="mt-2 text-gray-600">
                Try adjusting your search term to find categories.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
