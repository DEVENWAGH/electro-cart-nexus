import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Sample order data
const orders = [
  {
    id: "ORD-12345",
    date: "2023-07-15",
    total: 1349.98,
    status: "Delivered",
    items: [
      {
        id: "1",
        name: "iPhone 14 Pro",
        price: 999.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1678652197831-2d180a162d89",
      },
      {
        id: "3",
        name: "Sony WH-1000XM5",
        price: 349.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
      },
    ],
  },
  {
    id: "ORD-12344",
    date: "2023-06-28",
    total: 599.99,
    status: "Processing",
    items: [
      {
        id: "5",
        name: "iPad Air",
        price: 599.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      },
    ],
  },
  {
    id: "ORD-12343",
    date: "2023-06-10",
    total: 2499.99,
    status: "Delivered",
    items: [
      {
        id: "4",
        name: 'MacBook Pro 16"',
        price: 2499.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf",
      },
    ],
  },
  {
    id: "ORD-12342",
    date: "2023-05-22",
    total: 699.98,
    status: "Delivered",
    items: [
      {
        id: "6",
        name: "Nintendo Switch OLED",
        price: 349.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
      },
    ],
  },
];

const OrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter orders based on search term and status filter
  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.id
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      order.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

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
                <BreadcrumbLink href="/account">My Account</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Order History</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-bold mb-8">Order History</h1>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Input
              placeholder="Search by order number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-xs"
            />

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Orders List */}
          <div className="space-y-6">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  {/* Order Header */}
                  <div className="bg-muted/30 p-4 border-b">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Order #</p>
                        <p className="font-semibold">{order.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Date</p>
                        <p>{order.date}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total</p>
                        <p className="font-semibold">
                          ${order.total.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <p>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Processing"
                                ? "bg-blue-100 text-blue-800"
                                : order.status === "Shipped"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="p-4">
                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">
                              ${item.price.toFixed(2)} × {item.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Button className="bg-tech-purple hover:bg-purple-700 text-white">
                        View Order Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <h2 className="text-xl font-medium mb-2">No orders found</h2>
                <p className="text-gray-500">
                  We couldn't find any orders matching your criteria.
                </p>
                <Button
                  asChild
                  className="mt-6 bg-tech-purple hover:bg-purple-700"
                >
                  <a href="/products">Browse Products</a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrdersPage;
