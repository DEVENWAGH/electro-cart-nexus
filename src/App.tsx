import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import new pages
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/WishlistPage";
import AccountPage from "./pages/AccountPage";
import OrdersPage from "./pages/OrdersPage";
import DealsPage from "./pages/DealsPage";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Product Routes */}
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailPage />}
            />

            {/* Category Routes */}
            <Route path="/:categorySlug" element={<CategoryDetailPage />} />
            <Route path="/categories" element={<CategoriesPage />} />

            {/* Cart & Checkout Routes */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />

            {/* User Account Routes */}
            <Route path="/account" element={<AccountPage />} />
            <Route path="/orders" element={<OrdersPage />} />

            {/* Special Pages */}
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage />} />

            {/* Information Pages */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
