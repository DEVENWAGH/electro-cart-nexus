import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = () => {
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      navigate("/checkout");
      setIsLoading(false);
    }, 800);
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 9.99 : 0;
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/cart">Shopping Cart</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="flex-grow">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6">
                    <div className="hidden lg:grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium">
                      <div className="col-span-6">Product</div>
                      <div className="col-span-2 text-center">Price</div>
                      <div className="col-span-2 text-center">Quantity</div>
                      <div className="col-span-2 text-center">Total</div>
                    </div>

                    {cartItems.map((item) => (
                      <div
                        key={item._id}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-6 border-b"
                      >
                        <div className="col-span-6 flex gap-4">
                          <div className="w-20 h-20 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg mb-1">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                              {item.category}
                            </p>
                            <button
                              onClick={() => removeFromCart(item._id)}
                              className="inline-flex items-center text-sm text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="col-span-2 flex items-center justify-center">
                          <span className="text-tech-purple font-medium">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                        <div className="col-span-2 flex items-center justify-center">
                          <div className="flex items-center border rounded-md">
                            <button
                              className="p-2"
                              onClick={() =>
                                updateQuantity(item._id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              className="p-2"
                              onClick={() =>
                                updateQuantity(item._id, item.quantity + 1)
                              }
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="col-span-2 flex items-center justify-center">
                          <span className="font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}

                    <div className="flex justify-between items-center mt-6">
                      <Button
                        variant="outline"
                        onClick={clearCart}
                        className="text-sm"
                      >
                        Clear Cart
                      </Button>
                      <Button asChild variant="outline">
                        <Link
                          to="/products"
                          className="text-sm flex items-center gap-2"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Continue Shopping
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:w-80">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="font-bold text-lg mb-4">Order Summary</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Subtotal ({cartItems.length} items)
                      </span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (7%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handleCheckout}
                    className="w-full mt-6 bg-tech-purple hover:bg-purple-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Processing..."
                    ) : (
                      <>
                        Proceed to Checkout
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow">
              <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button asChild className="bg-tech-purple hover:bg-purple-700">
                <Link to="/products">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
