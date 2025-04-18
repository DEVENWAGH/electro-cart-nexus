import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const TermsPage = () => {
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
                <BreadcrumbLink>Terms of Service</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

            <div className="prose prose-lg max-w-none">
              <p>Last Updated: August 15, 2023</p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using ElectroNexus (the "Site"), you accept and
                agree to be bound by the terms and provision of this agreement.
                Additionally, when using this site's particular services, you
                shall be subject to any posted guidelines or rules applicable to
                such services, which may be posted from time to time. All such
                guidelines or rules are hereby incorporated by reference into
                these Terms of Service.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                ElectroNexus provides users with access to a collection of
                resources, including various electronics products,
                communications tools, forums, and personalized content through
                its website (the "Service"). Unless explicitly stated otherwise,
                any new features that augment or enhance the current Service
                shall be subject to these Terms of Service.
              </p>

              <h2>3. Account Registration and Security</h2>
              <p>
                To access certain features of the Service, you may be required
                to create an account. You agree to provide accurate, current,
                and complete information during the registration process and to
                update such information to keep it accurate, current, and
                complete. You are responsible for safeguarding the password that
                you use to access the Service and for any activities or actions
                under your password.
              </p>

              <h2>4. User Content</h2>
              <p>
                Some features of the Service may allow you to submit content,
                such as reviews, comments, and images ("User Content"). By
                submitting User Content, you grant ElectroNexus a worldwide,
                non-exclusive, royalty-free license to use, reproduce, modify,
                adapt, publish, translate, distribute, and display such content
                in any media formats.
              </p>
              <p>
                You represent and warrant that you own or have the necessary
                rights to use and authorize ElectroNexus to use all intellectual
                property rights in and to any User Content you submit.
              </p>

              <h2>5. Purchase and Payment</h2>
              <p>
                If you wish to purchase any product or service made available
                through the Service ("Purchase"), you may be asked to supply
                certain information relevant to your Purchase including, without
                limitation, your credit card number, the expiration date of your
                credit card, your billing address, and your shipping
                information.
              </p>
              <p>
                You represent and warrant that: (i) you have the legal right to
                use any credit card(s) or other payment method(s) in connection
                with any Purchase; and that (ii) the information you supply to
                us is true, correct, and complete.
              </p>

              <h2>6. Shipping and Returns</h2>
              <p>
                ElectroNexus ships products to the delivery address provided by
                the customer. Standard shipping typically takes 3-5 business
                days. For more information on shipping options and rates, please
                refer to our Shipping Policy.
              </p>
              <p>
                If you are not satisfied with your purchase, you may return most
                items within 30 days of delivery for a full refund. Please refer
                to our Return Policy for specific information on returns,
                refunds, and exchanges.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                In no event shall ElectroNexus, its officers, directors,
                employees, or agents, be liable to you for any direct, indirect,
                incidental, special, punitive, or consequential damages
                whatsoever resulting from any (i) errors, mistakes, or
                inaccuracies of content; (ii) personal injury or property
                damage, of any nature whatsoever, resulting from your access to
                and use of our service; (iii) any unauthorized access to or use
                of our secure servers and/or any and all personal information
                and/or financial information stored therein.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of the State of California, United States, without
                regard to its conflict of law provisions.
              </p>

              <h2>9. Changes to Terms</h2>
              <p>
                ElectroNexus reserves the right, at our sole discretion, to
                modify or replace these Terms at any time. If a revision is
                material, we will try to provide at least 30 days' notice prior
                to any new terms taking effect. What constitutes a material
                change will be determined at our sole discretion.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p>
                <strong>Email:</strong> terms@electronexus.com
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

export default TermsPage;
