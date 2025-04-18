import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const categories = [
    {
      title: "Electronics",
      slug: "electronics",
      description: "Latest gadgets and devices",
    },
    {
      title: "Fashion",
      slug: "fashion",
      description: "Trendy clothing and accessories",
    },
    {
      title: "Home Appliances",
      slug: "home-appliances",
      description: "Essentials for your home",
    },
    {
      title: "Books",
      slug: "books",
      description: "Wide range of books and novels",
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-tech-blue">
              Electro<span className="text-tech-purple">Nexus</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/products"
              className="text-foreground hover:text-tech-purple transition-colors"
            >
              All Products
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-tech-purple transition-colors">
                Categories
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {categories.map((category) => (
                    <li key={category.title}>
                      <Link
                        to={`/${category.slug}`}
                        className="block p-2 hover:bg-gray-100 rounded-md"
                      >
                        <div className="font-bold">{category.title}</div>
                        <div className="text-sm text-gray-500">
                          {category.description}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              to="/deals"
              className="text-foreground hover:text-tech-purple transition-colors"
            >
              Deals
            </Link>
          </nav>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-9 pr-4 py-2 rounded-full border border-input focus:outline-none focus:ring-2 focus:ring-tech-purple focus:border-tech-purple text-sm w-40 lg:w-60"
              />
            </div>

            <Link to="/wishlist" className="relative">
              <Heart className="h-6 w-6 text-foreground hover:text-tech-purple transition-colors" />
            </Link>

            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-foreground hover:text-tech-purple transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-tech-purple flex items-center justify-center text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/account">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-16">
          <div className="container mx-auto px-4 py-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-9 pr-4 py-2 rounded-full border border-input w-full"
              />
            </div>

            <nav className="flex flex-col space-y-4">
              <Link
                to="/products"
                className="py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.title}
                  to={`/${category.slug}`}
                  className="py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.title}
                </Link>
              ))}
              <Link
                to="/deals"
                className="py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </Link>

              <div className="h-px bg-border my-2"></div>

              <Link
                to="/wishlist"
                className="py-2 text-lg flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="mr-3 h-5 w-5" /> Wishlist
              </Link>
              <Link
                to="/cart"
                className="py-2 text-lg flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="mr-3 h-5 w-5" /> Cart
                {cartCount > 0 && (
                  <span className="ml-2 h-5 w-5 rounded-full bg-tech-purple flex items-center justify-center text-xs font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link
                to="/account"
                className="py-2 text-lg flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="mr-3 h-5 w-5" /> Account
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
