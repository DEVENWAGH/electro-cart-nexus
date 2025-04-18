import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const AccountPage = () => {
  const { toast } = useToast();
  const [profileData, setProfileData] = useState({
    name: "Jane Doe",
    email: "janedoe@example.com",
    phone: "(555) 123-4567",
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
      duration: 3000,
    });
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Password updated",
      description: "Your password has been changed successfully.",
      duration: 3000,
    });
  };

  // Sample order data
  const orders = [
    {
      id: "ORD-12345",
      date: "2023-07-15",
      total: 1349.98,
      status: "Delivered",
      items: 2,
    },
    {
      id: "ORD-12344",
      date: "2023-06-28",
      total: 599.99,
      status: "Processing",
      items: 1,
    },
    {
      id: "ORD-12343",
      date: "2023-06-10",
      total: 2499.99,
      status: "Delivered",
      items: 3,
    },
  ];

  // Sample address data
  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "Jane Doe",
      address: "123 Tech Street",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      country: "United States",
      default: true,
    },
    {
      id: 2,
      type: "Work",
      name: "Jane Doe",
      address: "456 Office Avenue",
      city: "San Francisco",
      state: "CA",
      zip: "94108",
      country: "United States",
      default: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>

          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    View and update your profile details.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleProfileUpdate}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={profileData.name}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type="submit"
                      className="bg-tech-purple hover:bg-purple-700"
                    >
                      Save Changes
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>
                    View your recent orders and their status.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 font-medium border-b bg-muted/50 p-4">
                      <div>Order #</div>
                      <div>Date</div>
                      <div>Total</div>
                      <div>Status</div>
                      <div className="text-right">Action</div>
                    </div>

                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="grid grid-cols-5 items-center p-4 border-b last:border-0"
                      >
                        <div>{order.id}</div>
                        <div>{order.date}</div>
                        <div>${order.total.toFixed(2)}</div>
                        <div>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <a href="/orders">View All Orders</a>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Addresses Tab */}
            <TabsContent value="addresses">
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Addresses</CardTitle>
                  <CardDescription>
                    Manage your shipping addresses.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {addresses.map((address) => (
                      <div key={address.id} className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <h3 className="font-medium">{address.type}</h3>
                            {address.default && (
                              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Default
                              </span>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            {!address.default && (
                              <Button variant="ghost" size="sm">
                                Delete
                              </Button>
                            )}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>{address.name}</p>
                          <p>{address.address}</p>
                          <p>
                            {address.city}, {address.state} {address.zip}
                          </p>
                          <p>{address.country}</p>
                        </div>
                      </div>
                    ))}

                    {/* Add new address card */}
                    <div className="border rounded-md p-4 border-dashed flex flex-col items-center justify-center text-center h-40">
                      <h3 className="font-medium mb-2">Add New Address</h3>
                      <Button variant="outline">+ Add Address</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Update your password and security preferences.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handlePasswordUpdate}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">
                        Confirm New Password
                      </Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type="submit"
                      className="bg-tech-purple hover:bg-purple-700"
                    >
                      Update Password
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccountPage;
