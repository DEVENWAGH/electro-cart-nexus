import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CreditCard,
  Check,
  ChevronsRight,
  ShoppingBag,
  MapPin,
  Truck,
  ArrowLeft,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type CheckoutStep = "shipping" | "payment" | "review" | "confirmation";

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("shipping");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Form states
  const [shippingForm, setShippingForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "US",
  });

  const [paymentForm, setPaymentForm] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paymentMethod: "card",
  });

  // Handle form changes
  const handleShippingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setShippingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle step navigation
  const goToNextStep = () => {
    if (currentStep === "shipping") setCurrentStep("payment");
    else if (currentStep === "payment") setCurrentStep("review");
    else if (currentStep === "review") handlePlaceOrder();
  };

  const goToPreviousStep = () => {
    if (currentStep === "payment") setCurrentStep("shipping");
    else if (currentStep === "review") setCurrentStep("payment");
  };

  // Validation helpers
  const isShippingValid = () => {
    // Basic validation
    return (
      shippingForm.firstName &&
      shippingForm.lastName &&
      shippingForm.email &&
      shippingForm.phone &&
      shippingForm.address &&
      shippingForm.city &&
      shippingForm.state &&
      shippingForm.postalCode
    );
  };

  const isPaymentValid = () => {
    if (paymentForm.paymentMethod === "card") {
      return (
        paymentForm.cardName &&
        paymentForm.cardNumber &&
        paymentForm.expiryDate &&
        paymentForm.cvv
      );
    }
    return true;
  };

  // Handle order submission
  const handlePlaceOrder = () => {
    setIsSubmitting(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // Order successful
      setCurrentStep("confirmation");
      clearCart();
      setIsSubmitting(false);

      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase.",
      });
    }, 2000);
  };

  // Calculate order summary
  const subtotal = getCartTotal();
  const shipping = 9.99;
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {currentStep !== "confirmation" ? (
            <>
              <h1 className="text-3xl font-bold mb-2">Checkout</h1>
              <div className="flex items-center space-x-2 mb-8">
                <div
                  className={`flex items-center ${
                    currentStep === "shipping"
                      ? "text-tech-purple"
                      : "text-gray-500"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep === "shipping"
                        ? "bg-tech-purple text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    1
                  </div>
                  <span className="ml-2">Shipping</span>
                </div>
                <ChevronsRight className="h-4 w-4 text-gray-400" />
                <div
                  className={`flex items-center ${
                    currentStep === "payment"
                      ? "text-tech-purple"
                      : "text-gray-500"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep === "payment"
                        ? "bg-tech-purple text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    2
                  </div>
                  <span className="ml-2">Payment</span>
                </div>
                <ChevronsRight className="h-4 w-4 text-gray-400" />
                <div
                  className={`flex items-center ${
                    currentStep === "review"
                      ? "text-tech-purple"
                      : "text-gray-500"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep === "review"
                        ? "bg-tech-purple text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    3
                  </div>
                  <span className="ml-2">Review</span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main content */}
                <div className="flex-grow">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {currentStep === "shipping" && (
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-5 w-5" />
                            Shipping Information
                          </div>
                        )}
                        {currentStep === "payment" && (
                          <div className="flex items-center">
                            <CreditCard className="mr-2 h-5 w-5" />
                            Payment Method
                          </div>
                        )}
                        {currentStep === "review" && (
                          <div className="flex items-center">
                            <ShoppingBag className="mr-2 h-5 w-5" />
                            Review Your Order
                          </div>
                        )}
                      </CardTitle>
                      {currentStep === "shipping" && (
                        <CardDescription>
                          Enter your shipping information
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      {currentStep === "shipping" && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="firstName">First Name</Label>
                              <Input
                                id="firstName"
                                name="firstName"
                                value={shippingForm.firstName}
                                onChange={handleShippingChange}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input
                                id="lastName"
                                name="lastName"
                                value={shippingForm.lastName}
                                onChange={handleShippingChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={shippingForm.email}
                                onChange={handleShippingChange}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone</Label>
                              <Input
                                id="phone"
                                name="phone"
                                value={shippingForm.phone}
                                onChange={handleShippingChange}
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="address">Address</Label>
                            <Textarea
                              id="address"
                              name="address"
                              value={shippingForm.address}
                              onChange={handleShippingChange}
                              required
                            />
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="col-span-2">
                              <Label htmlFor="city">City</Label>
                              <Input
                                id="city"
                                name="city"
                                value={shippingForm.city}
                                onChange={handleShippingChange}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="state">State</Label>
                              <Input
                                id="state"
                                name="state"
                                value={shippingForm.state}
                                onChange={handleShippingChange}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="postalCode">Postal Code</Label>
                              <Input
                                id="postalCode"
                                name="postalCode"
                                value={shippingForm.postalCode}
                                onChange={handleShippingChange}
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="country">Country</Label>
                            <Select
                              name="country"
                              value={shippingForm.country}
                              onValueChange={(value) =>
                                setShippingForm((prev) => ({
                                  ...prev,
                                  country: value,
                                }))
                              }
                            >
                              <SelectTrigger id="country">
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="US">
                                  United States
                                </SelectItem>
                                <SelectItem value="CA">Canada</SelectItem>
                                <SelectItem value="UK">
                                  United Kingdom
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      )}

                      {currentStep === "payment" && (
                        <div className="space-y-6">
                          <RadioGroup
                            value={paymentForm.paymentMethod}
                            onValueChange={(value) =>
                              setPaymentForm((prev) => ({
                                ...prev,
                                paymentMethod: value,
                              }))
                            }
                          >
                            <div className="flex items-center space-x-2 mb-4">
                              <RadioGroupItem value="card" id="card" />
                              <Label
                                htmlFor="card"
                                className="flex items-center"
                              >
                                <CreditCard className="w-5 h-5 mr-2" />
                                Credit / Debit Card
                              </Label>
                            </div>
                          </RadioGroup>

                          {paymentForm.paymentMethod === "card" && (
                            <div className="space-y-4 pl-7">
                              <div>
                                <Label htmlFor="cardName">Name on Card</Label>
                                <Input
                                  id="cardName"
                                  name="cardName"
                                  value={paymentForm.cardName}
                                  onChange={handlePaymentChange}
                                />
                              </div>

                              <div>
                                <Label htmlFor="cardNumber">Card Number</Label>
                                <Input
                                  id="cardNumber"
                                  name="cardNumber"
                                  placeholder="xxxx xxxx xxxx xxxx"
                                  value={paymentForm.cardNumber}
                                  onChange={handlePaymentChange}
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="expiryDate">
                                    Expiry Date
                                  </Label>
                                  <Input
                                    id="expiryDate"
                                    name="expiryDate"
                                    placeholder="MM/YY"
                                    value={paymentForm.expiryDate}
                                    onChange={handlePaymentChange}
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="cvv">CVV</Label>
                                  <Input
                                    id="cvv"
                                    name="cvv"
                                    placeholder="xxx"
                                    value={paymentForm.cvv}
                                    onChange={handlePaymentChange}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {currentStep === "review" && (
                        <div className="space-y-6">
                          {/* Order items */}
                          <div>
                            <h3 className="font-medium mb-4">Items</h3>
                            <div className="space-y-4">
                              {cartItems.map((item) => (
                                <div key={item._id} className="flex gap-4">
                                  <div className="w-16 h-16">
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="w-full h-full object-cover rounded"
                                    />
                                  </div>
                                  <div className="flex-grow">
                                    <h4 className="font-medium">{item.name}</h4>
                                    <p className="text-sm text-gray-500">
                                      Qty: {item.quantity}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium">
                                      ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="border-t pt-4">
                            <h3 className="font-medium mb-4">
                              Shipping Information
                            </h3>
                            <p className="text-sm">
                              {shippingForm.firstName} {shippingForm.lastName}
                              <br />
                              {shippingForm.address}
                              <br />
                              {shippingForm.city}, {shippingForm.state}{" "}
                              {shippingForm.postalCode}
                              <br />
                              <span className="text-gray-500">Email:</span>{" "}
                              {shippingForm.email}
                              <br />
                              <span className="text-gray-500">Phone:</span>{" "}
                              {shippingForm.phone}
                            </p>
                          </div>

                          <div className="border-t pt-4">
                            <h3 className="font-medium mb-4">Payment Method</h3>
                            <p className="text-sm flex items-center">
                              <CreditCard className="w-4 h-4 mr-2" />
                              {paymentForm.paymentMethod === "card"
                                ? `Card ending in ${paymentForm.cardNumber.slice(
                                    -4
                                  )}`
                                : "PayPal"}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      {currentStep !== "shipping" ? (
                        <Button
                          variant="outline"
                          onClick={goToPreviousStep}
                          disabled={isSubmitting}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          onClick={() => navigate("/cart")}
                          disabled={isSubmitting}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back to Cart
                        </Button>
                      )}

                      <Button
                        onClick={goToNextStep}
                        disabled={
                          (currentStep === "shipping" && !isShippingValid()) ||
                          (currentStep === "payment" && !isPaymentValid()) ||
                          isSubmitting
                        }
                        className="bg-tech-purple hover:bg-purple-700"
                      >
                        {isSubmitting ? (
                          "Processing..."
                        ) : currentStep === "review" ? (
                          <>Place Order</>
                        ) : (
                          <>Continue</>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* Order summary */}
                <div className="lg:w-80">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
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
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white p-8 rounded-lg shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
                <p className="text-gray-600 mb-8">
                  Thank you for your purchase! Your order has been received and
                  is now being processed.
                </p>

                <div className="border border-gray-200 rounded p-4 text-left mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">Order Number</p>
                      <p className="font-medium">
                        {Math.floor(Math.random() * 9000000) + 1000000}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Date</p>
                      <p className="font-medium">
                        {new Date().toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Total Amount</p>
                      <p className="font-medium">${total.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Payment Method</p>
                      <p className="font-medium">
                        {paymentForm.paymentMethod === "card"
                          ? "Credit Card"
                          : "PayPal"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button variant="outline" onClick={() => navigate("/orders")}>
                    View Order
                  </Button>
                  <Button
                    onClick={() => navigate("/products")}
                    className="bg-tech-purple hover:bg-purple-700"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
