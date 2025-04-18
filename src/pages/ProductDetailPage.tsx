import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, ShoppingCart, Check, Star, ThumbsUp } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Sample product data - in a real app this would come from an API
const sampleProduct = {
  _id: "1",
  name: "iPhone 14 Pro",
  price: 999.99,
  description:
    "The iPhone 14 Pro is Apple's latest flagship smartphone featuring the A16 Bionic chip, Dynamic Island display, and a 48MP main camera. It comes with iOS 16 and is available in various storage configurations.",
  longDescription:
    "Experience the ultimate iPhone with the all-new iPhone 14 Pro. Featuring the innovative Dynamic Island, a new way to interact with your iPhone. Powered by the A16 Bionic chip, the fastest chip ever in a smartphone. Capture stunning photos with the new 48MP Main camera and incredible detail with the Telephoto and Ultra Wide cameras. Introducing Emergency SOS via satellite and crash detection, potentially lifesaving safety features. With all-day battery life and a beautiful Super Retina XDR display with ProMotion, the iPhone 14 Pro redefines what a smartphone can be.",
  specifications: {
    processor: "A16 Bionic chip",
    display: '6.1" Super Retina XDR display with ProMotion',
    camera: "48MP main, 12MP ultra wide, 12MP telephoto",
    battery: "Up to 23 hours of video playback",
    storage: "128GB, 256GB, 512GB, 1TB",
    connectivity: "5G, Wi-Fi 6, Bluetooth 5.3",
    os: "iOS 16",
  },
  image: "https://images.unsplash.com/photo-1678652197831-2d180a162d89",
  gallery: [
    "https://images.unsplash.com/photo-1678652197831-2d180a162d89",
    "https://images.unsplash.com/photo-1678916913464-9db295aeb397",
    "https://images.unsplash.com/photo-1632661674596-df8be070a5c5",
    "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
  ],
  rating: 4.8,
  reviews: 253,
  category: "Smartphones",
  inStock: true,
  colors: ["Midnight", "Silver", "Gold", "Deep Purple"],
  storage: ["128GB", "256GB", "512GB", "1TB"],
};

// Sample reviews data
const sampleReviews = [
  {
    id: "r1",
    author: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    date: "2023-09-15",
    title: "Excellent phone, worth every penny!",
    comment:
      "I absolutely love this phone. The camera is outstanding and the battery life is impressive. The screen is incredibly sharp and responsive. Highly recommended!",
    helpful: 24,
    verified: true,
  },
  {
    id: "r2",
    author: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    date: "2023-09-10",
    title: "Great device with minor issues",
    comment:
      "Overall a fantastic phone. The only downside is that it gets a bit warm during heavy gaming sessions. The camera system is top-notch and the build quality is premium.",
    helpful: 16,
    verified: true,
  },
  {
    id: "r3",
    author: "Emily Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    rating: 5,
    date: "2023-08-28",
    title: "Best smartphone I've owned",
    comment:
      "This phone exceeded my expectations in every way. The screen is gorgeous, performance is blazing fast, and the cameras are incredible. Battery life easily gets me through a full day of heavy use.",
    helpful: 31,
    verified: true,
  },
  {
    id: "r4",
    author: "David Kim",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 3,
    date: "2023-08-20",
    title: "Good but overpriced",
    comment:
      "It's a good phone but I don't think it justifies the high price tag. There are competitors offering similar features for less. That said, the ecosystem integration is seamless if you have other products from the same brand.",
    helpful: 8,
    verified: false,
  },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { toast } = useToast();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(sampleProduct.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(
    sampleProduct.storage[0]
  );
  const [selectedImage, setSelectedImage] = useState(sampleProduct.image);
  const [quantity, setQuantity] = useState(1);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewFormData, setReviewFormData] = useState({
    rating: 5,
    title: "",
    comment: "",
  });
  const [reviews, setReviews] = useState(sampleReviews);
  const [filteredReviews, setFilteredReviews] = useState(sampleReviews);
  const [reviewFilter, setReviewFilter] = useState("all");

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${sampleProduct.name} (${selectedColor}, ${selectedStorage}) has been added to your cart.`,
      duration: 3000,
    });
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${sampleProduct.name} has been ${
        isWishlisted ? "removed from" : "added to"
      } your wishlist.`,
      duration: 3000,
    });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newReview = {
      id: `r${reviews.length + 1}`,
      author: "You",
      avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
      rating: reviewFormData.rating,
      date: new Date().toISOString().split("T")[0],
      title: reviewFormData.title,
      comment: reviewFormData.comment,
      helpful: 0,
      verified: true,
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    setFilteredReviews(updatedReviews);
    setShowReviewForm(false);

    toast({
      title: "Review Submitted",
      description: "Thank you for your review!",
      duration: 3000,
    });

    setReviewFormData({
      rating: 5,
      title: "",
      comment: "",
    });
  };

  const filterReviews = (filter: string) => {
    setReviewFilter(filter);

    if (filter === "all") {
      setFilteredReviews(reviews);
    } else {
      const rating = parseInt(filter);
      setFilteredReviews(reviews.filter((review) => review.rating === rating));
    }
  };

  const markHelpful = (reviewId: string) => {
    setReviews(
      reviews.map((review) =>
        review.id === reviewId
          ? { ...review, helpful: review.helpful + 1 }
          : review
      )
    );

    setFilteredReviews(
      filteredReviews.map((review) =>
        review.id === reviewId
          ? { ...review, helpful: review.helpful + 1 }
          : review
      )
    );

    toast({
      title: "Feedback Recorded",
      description: "Thank you for your feedback on this review.",
      duration: 2000,
    });
  };

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
                <BreadcrumbLink
                  href={`/${sampleProduct.category.toLowerCase()}`}
                >
                  {sampleProduct.category}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{sampleProduct.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Images */}
            <div>
              <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                <img
                  src={selectedImage}
                  alt={sampleProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {sampleProduct.gallery.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-square overflow-hidden rounded-md cursor-pointer border-2 ${
                      selectedImage === image
                        ? "border-tech-purple"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${sampleProduct.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold">{sampleProduct.name}</h1>
              {/* Rating */}
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.round(sampleProduct.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  {sampleProduct.rating} ({sampleProduct.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-6">
                <span className="text-3xl font-bold text-tech-purple">
                  ${sampleProduct.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-gray-600">{sampleProduct.description}</p>

              {/* Color Selection */}
              <div className="mt-8">
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {sampleProduct.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedColor === color
                          ? "border-tech-purple bg-purple-50 text-tech-purple"
                          : "border-gray-300 text-gray-800"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Storage Selection */}
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Storage</h3>
                <div className="flex flex-wrap gap-2">
                  {sampleProduct.storage.map((storage) => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedStorage === storage
                          ? "border-tech-purple bg-purple-50 text-tech-purple"
                          : "border-gray-300 text-gray-800"
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Quantity</h3>
                <div className="flex w-32 items-center border rounded-md">
                  <button
                    className="w-10 h-10 flex items-center justify-center border-r text-lg"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-full h-10 text-center"
                  />
                  <button
                    className="w-10 h-10 flex items-center justify-center border-l text-lg"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Stock Status */}
              <div className="mt-6 flex items-center">
                {sampleProduct.inStock ? (
                  <>
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-green-500 ml-1">In Stock</span>
                  </>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </div>

              {/* Add to Cart & Wishlist */}
              <div className="mt-8 flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-tech-purple hover:bg-purple-700"
                  disabled={!sampleProduct.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  onClick={toggleWishlist}
                  variant="outline"
                  className={`${
                    isWishlisted ? "text-red-500 border-red-500" : ""
                  }`}
                >
                  <Heart
                    className={`h-5 w-5 ${isWishlisted ? "fill-red-500" : ""}`}
                  />
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs for additional info */}
          <div className="mt-16">
            <Tabs defaultValue="details">
              <TabsList className="w-full border-b">
                <TabsTrigger value="details" className="flex-1">
                  Product Details
                </TabsTrigger>
                <TabsTrigger value="specs" className="flex-1">
                  Specifications
                </TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="py-6">
                <h3 className="text-xl font-semibold mb-4">
                  About the {sampleProduct.name}
                </h3>
                <p className="text-gray-700">{sampleProduct.longDescription}</p>
              </TabsContent>

              <TabsContent value="specs" className="py-6">
                <h3 className="text-xl font-semibold mb-4">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(sampleProduct.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="border-b pb-2">
                        <span className="font-medium capitalize">{key}: </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="py-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">Customer Reviews</h3>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.round(sampleProduct.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {sampleProduct.rating} out of 5 ({reviews.length}{" "}
                        reviews)
                      </span>
                    </div>
                  </div>

                  <div>
                    {!showReviewForm && (
                      <Button
                        onClick={() => setShowReviewForm(true)}
                        className="bg-tech-purple hover:bg-purple-700"
                      >
                        Write a Review
                      </Button>
                    )}
                  </div>
                </div>

                {showReviewForm && (
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h4 className="font-medium mb-4">Write Your Review</h4>
                    <form onSubmit={handleReviewSubmit}>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="rating">Rating</Label>
                          <div className="flex space-x-2 mt-1">
                            {[5, 4, 3, 2, 1].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() =>
                                  setReviewFormData({
                                    ...reviewFormData,
                                    rating: star,
                                  })
                                }
                                className="focus:outline-none"
                              >
                                <Star
                                  className={`h-8 w-8 ${
                                    star <= reviewFormData.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="title">Review Title</Label>
                          <Input
                            id="title"
                            value={reviewFormData.title}
                            onChange={(e) =>
                              setReviewFormData({
                                ...reviewFormData,
                                title: e.target.value,
                              })
                            }
                            placeholder="Summarize your experience"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="comment">Your Review</Label>
                          <Textarea
                            id="comment"
                            value={reviewFormData.comment}
                            onChange={(e) =>
                              setReviewFormData({
                                ...reviewFormData,
                                comment: e.target.value,
                              })
                            }
                            placeholder="What did you like or dislike about this product?"
                            rows={4}
                            required
                          />
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            type="submit"
                            className="bg-tech-purple hover:bg-purple-700"
                          >
                            Submit Review
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setShowReviewForm(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}

                {/* Filter Reviews */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-gray-600">Filter:</span>
                    <Button
                      variant={reviewFilter === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => filterReviews("all")}
                      className={
                        reviewFilter === "all"
                          ? "bg-tech-purple hover:bg-purple-700"
                          : ""
                      }
                    >
                      All Ratings
                    </Button>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <Button
                        key={rating}
                        variant={
                          reviewFilter === String(rating)
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() => filterReviews(String(rating))}
                        className={
                          reviewFilter === String(rating)
                            ? "bg-tech-purple hover:bg-purple-700"
                            : ""
                        }
                      >
                        {rating} Star{rating !== 1 ? "s" : ""}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Reviews List */}
                {filteredReviews.length > 0 ? (
                  <div className="space-y-6">
                    {filteredReviews.map((review) => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex items-center mb-3">
                          <img
                            src={review.avatar}
                            alt={review.author}
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                          />
                          <div>
                            <h4 className="font-medium">{review.author}</h4>
                            <div className="flex items-center text-sm text-gray-500">
                              <span>{review.date}</span>
                              {review.verified && (
                                <span className="ml-2 bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
                                  Verified Purchase
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>

                        <h5 className="font-medium mb-2">{review.title}</h5>
                        <p className="text-gray-600 mb-4">{review.comment}</p>

                        <div className="flex items-center text-sm">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markHelpful(review.id)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful ({review.helpful})
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      No reviews match your filter. Try selecting a different
                      rating filter.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
