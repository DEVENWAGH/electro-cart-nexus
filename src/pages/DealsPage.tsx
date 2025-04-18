import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample deals data
const dealsData = {
  featured: [
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
      _id: "8",
      name: "Bose QuietComfort Earbuds II",
      price: 249.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5e58c",
      rating: 4.6,
      category: "Headphones",
      inStock: true,
    },
  ],
  clearance: [
    {
      _id: "15",
      name: "Philips Hue Starter Kit",
      price: 199.99,
      originalPrice: 229.99,
      image: "https://images.unsplash.com/photo-1557318041-1ce374d55ebf",
      rating: 4.7,
      category: "Smart Home",
      inStock: true,
    },
    {
      _id: "16",
      name: "Samsung Galaxy Tab S8",
      price: 649.99,
      originalPrice: 699.99,
      image: "https://images.unsplash.com/photo-1589739900574-9ca90974ed2d",
      rating: 4.5,
      category: "Tablets",
      inStock: true,
    },
    {
      _id: "17",
      name: "Dyson V11 Absolute",
      price: 599.99,
      originalPrice: 699.99,
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001",
      rating: 4.8,
      category: "Home Appliances",
      inStock: true,
    },
  ],
  special: [
    {
      _id: "11",
      name: "ASUS ROG Zephyrus",
      price: 1799.99,
      originalPrice: 1999.99,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
      rating: 4.7,
      category: "Laptops",
      inStock: true,
    },
    {
      _id: "13",
      name: "Amazon Echo Dot (5th Gen)",
      price: 49.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1558203728-00f45181dd84",
      rating: 4.5,
      category: "Smart Home",
      inStock: true,
    },
    {
      _id: "18",
      name: "GoPro Hero 11 Black",
      price: 449.99,
      originalPrice: 499.99,
      image: "https://images.unsplash.com/photo-1542124292-60272943a355",
      rating: 4.6,
      category: "Cameras",
      inStock: true,
    },
  ],
  bundle: [
    {
      _id: "19",
      name: "PlayStation 5 + Extra Controller",
      price: 549.99,
      originalPrice: 619.99,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
      rating: 4.9,
      category: "Gaming",
      inStock: true,
    },
    {
      _id: "20",
      name: "MacBook Pro + AirPods Pro",
      price: 2599.99,
      originalPrice: 2799.99,
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
      rating: 4.8,
      category: "Laptops",
      inStock: true,
    },
  ],
};

const DealsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 to-tech-purple text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Special Deals & Discounts
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Explore our limited-time offers and save big on premium
              electronics.
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
                <BreadcrumbLink>Deals</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Deals Tabs */}
          <Tabs defaultValue="featured" className="space-y-8">
            <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="featured">Featured Deals</TabsTrigger>
              <TabsTrigger value="clearance">Clearance</TabsTrigger>
              <TabsTrigger value="special">Special Offers</TabsTrigger>
              <TabsTrigger value="bundle">Bundle Deals</TabsTrigger>
            </TabsList>

            <TabsContent value="featured">
              <h2 className="text-2xl font-semibold mb-6">Featured Deals</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {dealsData.featured.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="clearance">
              <h2 className="text-2xl font-semibold mb-6">Clearance Sale</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dealsData.clearance.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="special">
              <h2 className="text-2xl font-semibold mb-6">Special Offers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dealsData.special.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bundle">
              <h2 className="text-2xl font-semibold mb-6">Bundle Deals</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {dealsData.bundle.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Promotion Banner */}
          <div className="mt-16 bg-tech-blue text-white p-8 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-blue mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Subscribe for Exclusive Deals
              </h2>
              <p className="mb-6">
                Sign up for our newsletter and get access to subscriber-only
                deals and early access to sales.
              </p>
              <div className="flex flex-wrap gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md border border-white/30 bg-white/10 text-white flex-1 min-w-[200px] placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="bg-white text-tech-blue px-6 py-2 rounded-md font-medium hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DealsPage;
