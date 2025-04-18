import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

// Sample new arrivals data
const newArrivalsData = [
  {
    _id: "21",
    name: "Apple MacBook Air M2",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
    rating: 4.9,
    category: "Laptops",
    inStock: true,
    isNew: true,
  },
  {
    _id: "22",
    name: "Samsung Galaxy Watch 6",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1617043786394-f977fa21fce4",
    rating: 4.6,
    category: "Smartwatches",
    inStock: true,
    isNew: true,
  },
  {
    _id: "23",
    name: "Sony PlayStation 5 Slim",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
    rating: 4.8,
    category: "Gaming",
    inStock: true,
    isNew: true,
  },
  {
    _id: "24",
    name: "Apple AirPods Pro 2",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77",
    rating: 4.7,
    category: "Headphones",
    inStock: true,
    isNew: true,
  },
  {
    _id: "25",
    name: "Google Pixel 8 Pro",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1667886633856-8d2a5419d147",
    rating: 4.7,
    category: "Smartphones",
    inStock: true,
    isNew: true,
  },
  {
    _id: "26",
    name: 'LG OLED C3 65"',
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    rating: 4.9,
    category: "TVs",
    inStock: true,
    isNew: true,
  },
  {
    _id: "27",
    name: "Canon EOS R8",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
    rating: 4.8,
    category: "Cameras",
    inStock: true,
    isNew: true,
  },
  {
    _id: "28",
    name: "DJI Mavic 3 Pro",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60",
    rating: 4.7,
    category: "Drones",
    inStock: true,
    isNew: true,
  },
];

// Featured categories with new arrivals
const categories = [
  { name: "Smartphones", count: 3 },
  { name: "Laptops", count: 2 },
  { name: "Gaming", count: 4 },
  { name: "Headphones", count: 2 },
  { name: "TVs", count: 2 },
  { name: "Cameras", count: 1 },
  { name: "Smartwatches", count: 2 },
];

const NewArrivalsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-800 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Just Arrived
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Discover our latest products and stay ahead with cutting-edge
              technology.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>New Arrivals</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Category Filter Chips */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Browse by Category</h2>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-tech-purple text-white rounded-full text-sm font-medium">
                All New Products
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium flex items-center"
                >
                  {category.name}
                  <span className="ml-2 bg-gray-200 px-2 py-0.5 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Featured New Arrival */}
          <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1667886633856-8d2a5419d147"
                  alt="Google Pixel 8 Pro"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  Featured New Arrival
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Google Pixel 8 Pro
                </h2>
                <p className="text-gray-600 mb-6">
                  Experience the next generation of mobile photography with the
                  all-new Google Pixel 8 Pro. Featuring Google's most advanced
                  camera system yet, powered by AI, and a vibrant 6.7-inch Super
                  Actua display.
                </p>
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-bold text-tech-purple mr-3">
                    $899.99
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    In Stock
                  </span>
                </div>
                <button className="bg-tech-purple hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">All New Arrivals</h2>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivalsData.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16">
            <Separator className="my-8" />
            <h2 className="text-2xl font-semibold mb-6">Coming Soon</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-xl p-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1623126908029-58cb08a2b272)",
                  }}
                ></div>
                <div className="relative z-10">
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                    Coming Next Month
                  </span>
                  <h3 className="text-xl font-bold mt-4">iPhone 15 Pro Max</h3>
                  <p className="mt-2 text-white/70">
                    The most powerful iPhone yet with revolutionary camera
                    technology.
                  </p>
                  <button className="mt-6 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md text-sm">
                    Get Notified
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-b from-blue-900 to-blue-800 text-white rounded-xl p-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1631455337491-ee0e779e588f)",
                  }}
                ></div>
                <div className="relative z-10">
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                    Pre-order Soon
                  </span>
                  <h3 className="text-xl font-bold mt-4">
                    Samsung Galaxy Book 4
                  </h3>
                  <p className="mt-2 text-white/70">
                    Ultra-light laptop with AMOLED display and all-day battery
                    life.
                  </p>
                  <button className="mt-6 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md text-sm">
                    Get Notified
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-b from-purple-900 to-purple-800 text-white rounded-xl p-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1535016120720-40c646be5580)",
                  }}
                ></div>
                <div className="relative z-10">
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                    Coming Soon
                  </span>
                  <h3 className="text-xl font-bold mt-4">Meta Quest 3 Pro</h3>
                  <p className="mt-2 text-white/70">
                    Next-gen VR with ultra-high resolution displays and advanced
                    controllers.
                  </p>
                  <button className="mt-6 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md text-sm">
                    Get Notified
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivalsPage;
