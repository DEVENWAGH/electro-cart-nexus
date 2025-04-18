import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission delay
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will respond shortly.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
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
                <BreadcrumbLink>Contact Us</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Have questions or need assistance? Fill out the form below and
                our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="order">Order Question</SelectItem>
                        <SelectItem value="return">Return/Refund</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your question or issue in detail..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-tech-purple hover:bg-purple-700"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-6">
                You can reach out to us through the contact form or via the
                following methods:
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-tech-purple/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-tech-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-gray-600 mt-1">
                      123 Tech Street
                      <br />
                      Digital City, 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-tech-purple/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-tech-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="mailto:info@electronexus.com"
                        className="hover:text-tech-purple"
                      >
                        info@electronexus.com
                      </a>
                      <br />
                      <a
                        href="mailto:support@electronexus.com"
                        className="hover:text-tech-purple"
                      >
                        support@electronexus.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-tech-purple/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-tech-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="tel:+1234567890"
                        className="hover:text-tech-purple"
                      >
                        (123) 456-7890
                      </a>
                      <br />
                      <span className="text-sm">
                        Mon-Fri, 9:00 AM - 6:00 PM EST
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-tech-purple/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-tech-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map or similar location indicator could be added here */}
              <div className="mt-8 h-64 bg-gray-200 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <p>
                    Map placeholder - Insert your Google Maps iframe or mapping
                    component here
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">
                  What is your return policy?
                </h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy on most products. Items must
                  be returned in original packaging and condition.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">
                  How long does shipping take?
                </h3>
                <p className="text-gray-600">
                  Standard shipping typically takes 3-5 business days. Express
                  shipping options are available at checkout.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">
                  Do you ship internationally?
                </h3>
                <p className="text-gray-600">
                  Yes, we ship to most international destinations. Shipping
                  costs and delivery times vary by location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">How can I track my order?</h3>
                <p className="text-gray-600">
                  Once your order ships, you'll receive a tracking number via
                  email that you can use to monitor delivery status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
