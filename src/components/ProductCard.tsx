import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";

export interface Product {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  category: string;
  inStock: boolean;
  description?: string;
  brand?: string;
  features?: string[];
  quantity?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product);
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);

    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${
        isWishlisted ? "removed from" : "added to"
      } your wishlist.`,
      duration: 3000,
    });
  };

  return (
    <Link to={`/products/${product._id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col product-card">
        {/* Product Image */}
        <div className="relative pt-[75%]">
          {" "}
          {/* 4:3 aspect ratio */}
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Discount Badge */}
          {discount && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </span>
          )}
          {/* Wishlist Button */}
          <button
            onClick={toggleWishlist}
            className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm"
          >
            <Heart
              className={`h-5 w-5 ${
                isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4 flex-grow flex flex-col">
          <div className="mb-2">
            <span className="text-xs text-gray-500">{product.category}</span>
          </div>

          <h3 className="font-medium text-foreground mb-1 line-clamp-2">
            {product.name}
          </h3>

          {/* Pricing */}
          <div className="flex items-baseline mb-2 mt-auto">
            <span className="text-lg font-bold text-tech-purple">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < product.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="w-full bg-tech-purple hover:bg-purple-700 add-to-cart transition-opacity flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
