import { Helmet } from "react-helmet";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { getPageSEO } from "@/data/seoData";
import { Shield, Lock, Eye, Users, Database, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  const seoData = getPageSEO("/privacy-policy");
  
  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        path="/privacy-policy"
        keywords={seoData.keywords}
        type="website"
      />

      <MegaMenu />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-whatsapp-green/5">
        <div className="container-width text-center">
          <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-6 py-3 rounded-full font-medium mb-6">
            <Shield className="h-5 w-5" />
            Privacy Policy
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Your Privacy Matters
            <span className="block bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent">
              To Us
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Last updated: January 2025. This policy explains how TheChatFlow collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container-width max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-whatsapp-green/10 rounded-2xl">
                  <Database className="h-6 w-6 text-whatsapp-green" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Information We Collect</h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Name, email address, and phone number when you create an account</li>
                    <li>• Business information including company name and industry</li>
                    <li>• Payment information processed securely through our payment partners</li>
                    <li>• Communication preferences and marketing consents</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Usage Information</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• WhatsApp conversation data to provide automation services</li>
                    <li>• Platform usage analytics and feature usage statistics</li>
                    <li>• Technical information including IP addresses and device information</li>
                    <li>• Customer support interactions and feedback</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-2xl">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Service Provision</h3>
                  <p>We use your information to provide WhatsApp automation services, process your messages, and deliver the features you've subscribed to. This includes AI processing of conversations to provide intelligent responses.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Improvement and Analytics</h3>
                  <p>We analyze usage patterns to improve our services, develop new features, and ensure optimal performance. This data is aggregated and anonymized whenever possible.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Communication</h3>
                  <p>We may contact you regarding your account, service updates, security notifications, and promotional materials (with your consent).</p>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-2xl">
                  <Lock className="h-6 w-6 text-purple-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Data Protection & Security</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>We implement industry-standard security measures to protect your information:</p>
                <ul className="space-y-2 ml-4">
                  <li>• End-to-end encryption for all WhatsApp communications</li>
                  <li>• Secure data centers with 24/7 monitoring</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Employee access controls and data minimization policies</li>
                  <li>• Compliance with international data protection standards</li>
                </ul>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-2xl">
                  <Globe className="h-6 w-6 text-orange-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Data Sharing & Third Parties</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>We do not sell your personal information. We may share data only in these specific circumstances:</p>
                <ul className="space-y-2 ml-4">
                  <li>• With WhatsApp/Meta as required to provide messaging services</li>
                  <li>• With payment processors for billing purposes</li>
                  <li>• With cloud service providers who assist in service delivery</li>
                  <li>• When required by law or to protect our rights</li>
                  <li>• With your explicit consent for specific integrations</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/10 rounded-2xl">
                  <Eye className="h-6 w-6 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Your Privacy Rights</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Access:</strong> Request a copy of your personal data</li>
                  <li>• <strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li>• <strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li>• <strong>Portability:</strong> Export your data in a structured format</li>
                  <li>• <strong>Objection:</strong> Object to processing for marketing purposes</li>
                  <li>• <strong>Withdrawal:</strong> Withdraw consent for data processing</li>
                </ul>
                
                <p className="mt-4">
                  To exercise these rights, contact us at <strong>hello@thechatflow.com</strong> or call <strong>03171634191</strong>.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Cookies & Tracking</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We use cookies and similar technologies to:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Remember your preferences and settings</li>
                  <li>• Provide personalized content and features</li>
                  <li>• Analyze site performance and user behavior</li>
                  <li>• Prevent fraud and enhance security</li>
                </ul>
                <p>You can control cookies through your browser settings. See our <a href="/cookie-policy" className="text-whatsapp-green hover:underline">Cookie Policy</a> for more details.</p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-whatsapp-green/5 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Questions About Privacy?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to contact us.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-whatsapp-green font-medium">hello@thechatflow.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-whatsapp-green font-medium">03171634191</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;