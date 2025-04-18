import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Trash2, ShoppingCart, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Sample wishlist data
const initialWishlistItems = [
  {
    id: "2",
    name: "Samsung Galaxy S23 Ultra",
    price: 1199.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1678911820864-e5f8472825c0",
    rating: 4.7,
    category: "Smartphones",
    inStock: true,
  },
  {
    id: "4",
    name: 'MacBook Pro 16"',
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf",
    rating: 4.9,
    category: "Laptops",
    inStock: true,
  },
  {
    id: "8",
    name: "Bose QuietComfort Earbuds II",
    price: 249.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5e58c",
    rating: 4.6,
    category: "Headphones",
    inStock: true,
  },
];

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  const { toast } = useToast();

  const removeFromWishlist = (id: string) => {
    const itemToRemove = wishlistItems.find((item) => item.id === id);
    if (itemToRemove) {
      setWishlistItems(wishlistItems.filter((item) => item.id !== id));
      toast({
        title: "Item removed",
        description: `${itemToRemove.name} has been removed from your wishlist.`,
        duration: 3000,
      });
    }
  };

  const addToCart = (id: string) => {
    const item = wishlistItems.find((item) => item.id === id);
    if (item) {
      toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart.`,
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow overflow-hidden flex flex-col"
                >
                  <Link to={`/products/${item.id}`} className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    {/* Discount Badge */}
                    {item.originalPrice && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {Math.round(
                          (1 - item.price / item.originalPrice) * 100
                        )}
                        % OFF
                      </span>
                    )}
                  </Link>

                  <div className="p-4 flex-grow">
                    <div className="mb-2">
                      <span className="text-xs text-gray-500">
                        {item.category}
                      </span>
                    </div>

                    <Link to={`/products/${item.id}`}>
                      <h3 className="font-medium text-foreground mb-1 hover:text-tech-purple transition-colors">
                        {item.name}
                      </h3>
                    </Link>

                    {/* Pricing */}
                    <div className="flex items-baseline mb-2">
                      <span className="text-lg font-bold text-tech-purple">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.originalPrice && (
                        <span className="ml-2 text-sm text-gray-400 line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-4 pt-0 flex gap-3">
                    <Button
                      onClick={() => addToCart(item.id)}
                      className="flex-1 bg-tech-purple hover:bg-purple-700"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-gray-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <div className="flex justify-center">
                <Heart className="h-16 w-16 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mt-4">
                Your wishlist is empty
              </h2>
              <p className="text-gray-600 mt-2">
                Looks like you haven't added any products to your wishlist yet.
              </p>
              <Button
                asChild
                className="mt-6 bg-tech-purple hover:bg-purple-700"
              >
                <Link to="/products" className="flex items-center">
                  Discover Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WishlistPage;
