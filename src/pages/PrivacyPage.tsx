import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const PrivacyPage = () => {
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
                <BreadcrumbLink>Privacy Policy</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p>Last Updated: August 15, 2023</p>

              <h2>Introduction</h2>
              <p>
                ElectroNexus ("we", "our", or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or make a purchase.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree
                with the terms of this privacy policy, please do not access the
                site.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The
                information we may collect includes:
              </p>

              <h3>Personal Data</h3>
              <p>
                When you register an account, place an order, or subscribe to
                our newsletter, we may collect personally identifiable
                information, such as your:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Postal address</li>
                <li>Phone number</li>
                <li>Payment information</li>
              </ul>

              <h3>Derivative Data</h3>
              <p>
                Information our servers automatically collect when you access
                our site, such as your IP address, browser type, operating
                system, access times, and the pages you have viewed directly
                before and after accessing the site.
              </p>

              <h3>Financial Data</h3>
              <p>
                Financial information, such as data related to your payment
                method (e.g., valid credit card number, card brand, expiration
                date) that we may collect when you purchase, order, return,
                exchange, or request information about our services from the
                site.
              </p>

              <h2>Use of Your Information</h2>
              <p>
                We may use information collected about you for the following
                purposes:
              </p>
              <ul>
                <li>To process and complete transactions</li>
                <li>
                  To send you administrative information, including order
                  confirmations and updates
                </li>
                <li>
                  To send you marketing communications if you have opted in
                </li>
                <li>To respond to your comments, questions, and requests</li>
                <li>To improve our website, products, and customer service</li>
                <li>
                  To protect, investigate, and deter against fraudulent,
                  unauthorized, or illegal activity
                </li>
              </ul>

              <h2>Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain
                situations. Your information may be disclosed as follows:
              </p>

              <h3>By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary
                to respond to legal process, to investigate or remedy potential
                violations of our policies, or to protect the rights, property,
                and safety of others, we may share your information as permitted
                or required by any applicable law, rule, or regulation.
              </p>

              <h3>Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform
                services for us or on our behalf, including payment processing,
                data analysis, email delivery, hosting services, customer
                service, and marketing assistance.
              </p>

              <h3>Marketing Communications</h3>
              <p>
                With your consent, or with an opportunity for you to withdraw
                consent, we may share your information with third parties for
                marketing purposes.
              </p>

              <h2>Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that no security measures are perfect or
                impenetrable, and no method of data transmission can be
                guaranteed against any interception or other type of misuse.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@electronexus.com
                <br />
                <strong>Phone:</strong> (123) 456-7890
                <br />
                <strong>Address:</strong> 123 Tech Street, Digital City, 10001
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
