import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, FileText, Mail, MapPin, Phone, Scale, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Legal = () => {
  const lastUpdated = "30 April 2026";

  return (
    <>
      <SEOHead
        title="Legal Information | Chatflow"
        description="Legal information for Chatflow, a product operated by Amazing Developers Pty Ltd. Learn about our legal entity, company information, and contact details."
        path="/legal"
        keywords="Chatflow legal, Amazing Developers Pty Ltd, legal entity, company information"
        type="website"
      />
      <MegaMenu />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background via-background to-whatsapp-green/5">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-5 py-2 rounded-full text-sm font-semibold">
              <Scale className="h-4 w-4" />
              Legal Information
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Legal Information
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Important information about Chatflow and the company that operates it.
            </p>
            <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto space-y-6">

            {/* Legal Entity */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-whatsapp-green/10 rounded-xl">
                    <Building2 className="h-5 w-5 text-whatsapp-green" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Legal Entity</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Chatflow is a product and service operated by <strong>Amazing Developers Pty Ltd</strong>, a company
                  registered in Australia. Amazing Developers Pty Ltd is the legal entity behind Chatflow.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Throughout this website and in any related communications, the terms <strong>"Chatflow"</strong>,
                  <strong> "we"</strong>, <strong>"us"</strong> and <strong>"our"</strong> refer to Amazing Developers
                  Pty Ltd. <strong>Chatflow is a brand and product name, not a separate legal entity.</strong>
                </p>
              </CardContent>
            </Card>

            {/* About Chatflow */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-whatsapp-green/10 rounded-xl">
                    <FileText className="h-5 w-5 text-whatsapp-green" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">About Chatflow</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Chatflow is a WhatsApp automation and AI-powered customer communication platform. It provides
                  businesses with tools to automate customer conversations, manage WhatsApp Business interactions,
                  and improve response times.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The Chatflow product, brand, website (thechatflow.com) and all related services are owned and
                  operated by Amazing Developers Pty Ltd.
                </p>
              </CardContent>
            </Card>

            {/* Company Information */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-whatsapp-green/10 rounded-xl">
                    <Building2 className="h-5 w-5 text-whatsapp-green" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Company Information</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-foreground mb-1">Company Name</p>
                    <p className="text-muted-foreground">Amazing Developers Pty Ltd</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-foreground mb-1">Brand / Product</p>
                    <p className="text-muted-foreground">Chatflow (thechatflow.com)</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-foreground mb-1">Country of Registration</p>
                    <p className="text-muted-foreground">Australia</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-foreground mb-1">Office</p>
                    <p className="text-muted-foreground">Australian Office</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 sm:col-span-2">
                    <p className="font-semibold text-foreground mb-1">Registered Address</p>
                    <p className="text-muted-foreground">8 Juneberry Dr, Keysborough VIC 3173, Australia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-whatsapp-green/10 rounded-xl">
                    <Mail className="h-5 w-5 text-whatsapp-green" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Contact Information</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  For any legal, privacy, or general business enquiries, please contact us using the details below.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-whatsapp-green flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Australian Office</p>
                      <p className="text-sm text-muted-foreground">8 Juneberry Dr, Keysborough VIC 3173, Australia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                    <a href="tel:0430454071" className="text-sm text-whatsapp-dark hover:underline">0430 454 071</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                    <a href="mailto:hello@thechatflow.com" className="text-sm text-whatsapp-dark hover:underline">hello@thechatflow.com</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms Reference */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-whatsapp-green/10 rounded-xl">
                    <FileText className="h-5 w-5 text-whatsapp-green" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Terms Reference</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of Chatflow is governed by our Terms of Service. By accessing or using the Chatflow
                  website or services, you agree to those terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Read the full <Link to="/terms-of-service" className="text-whatsapp-dark font-medium hover:underline">Terms of Service</Link>.
                </p>
              </CardContent>
            </Card>

            {/* Privacy Reference */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-whatsapp-green/10 rounded-xl">
                    <Shield className="h-5 w-5 text-whatsapp-green" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Privacy Reference</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Amazing Developers Pty Ltd handles personal information in line with applicable Australian privacy
                  laws. Details about how we collect, use, store and protect your information are explained in our
                  Privacy Policy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Read the full <Link to="/privacy-policy" className="text-whatsapp-dark font-medium hover:underline">Privacy Policy</Link>
                  &nbsp;and our <Link to="/cookie-policy" className="text-whatsapp-dark font-medium hover:underline">Cookie Policy</Link>.
                </p>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Last Updated</h2>
                <p className="text-muted-foreground">This Legal Information page was last updated on <strong>{lastUpdated}</strong>.</p>
                <p className="text-sm text-muted-foreground mt-2">
                  We may update this page from time to time to reflect changes in our company information or legal
                  obligations. Please check this page periodically for the latest information.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Legal;
