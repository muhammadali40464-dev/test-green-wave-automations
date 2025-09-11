import { Helmet } from "react-helmet";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { getPageSEO } from "@/data/seoData";
import { FileText, Handshake, AlertCircle, Users, Zap, Shield } from "lucide-react";

const TermsOfService = () => {
  const seoData = getPageSEO("/terms-of-service");
  
  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        path="/terms-of-service"
        keywords={seoData.keywords}
        type="website"
      />

      <MegaMenu />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-blue-500/5">
        <div className="container-width text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-6 py-3 rounded-full font-medium mb-6">
            <FileText className="h-5 w-5" />
            Terms of Service
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Service Agreement
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              & Terms
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Last updated: January 2025. These terms govern your use of TheChatFlow's WhatsApp automation services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container-width max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            {/* Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-2xl">
                  <Handshake className="h-6 w-6 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Acceptance of Terms</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing or using TheChatFlow's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
                <p>
                  These terms constitute a legally binding agreement between you and TheChatFlow Pakistan. We reserve the right to modify these terms at any time, with changes taking effect immediately upon posting.
                </p>
              </div>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-whatsapp-green/10 rounded-2xl">
                  <Zap className="h-6 w-6 text-whatsapp-green" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Service Description</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>TheChatFlow provides WhatsApp automation services including:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Automated chat responses and conversation flows</li>
                  <li>• AI-powered customer service automation</li>
                  <li>• Integration with WhatsApp Business API</li>
                  <li>• Multi-platform social media automation (Instagram, Facebook)</li>
                  <li>• Analytics and reporting tools</li>
                  <li>• Customer support and training services</li>
                </ul>
                <p>
                  Our services are designed for businesses operating in Pakistan and comply with local regulations and WhatsApp's terms of service.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-2xl">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">User Responsibilities</h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Account Security</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Maintain the confidentiality of your account credentials</li>
                    <li>• Notify us immediately of any unauthorized access</li>
                    <li>• Use strong passwords and enable two-factor authentication</li>
                    <li>• Take responsibility for all activities under your account</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Acceptable Use</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Use services only for lawful business purposes</li>
                    <li>• Comply with WhatsApp's Business Policy and Terms</li>
                    <li>• Respect customer privacy and obtain necessary consents</li>
                    <li>• Avoid spamming or sending unsolicited messages</li>
                    <li>• Maintain professional and respectful communication</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Prohibited Activities</h3>
                  <p>You agree not to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Send illegal, harmful, or inappropriate content</li>
                    <li>• Engage in harassment, fraud, or deceptive practices</li>
                    <li>• Attempt to reverse engineer or hack our systems</li>
                    <li>• Share your account access with unauthorized users</li>
                    <li>• Use our services to compete directly with TheChatFlow</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation and Billing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/10 rounded-2xl">
                  <FileText className="h-6 w-6 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Implementation & Billing</h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Implementation Charges</h3>
                  <p className="font-medium text-red-700">
                    All implementation/setup fees are non-refundable.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Annual Plan Refund Policy</h3>
                  <ul className="space-y-3 ml-4">
                    <li>• <strong>Cancel within 1 month:</strong> 50% of total plan amount charged, remaining 50% refunded</li>
                    <li>• <strong>Cancel after 1 month:</strong> 50% of total plan amount charged as standard, plus Rs. 10,000 per month for each month of service used. Remaining balance refunded</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Post-Live Changes</h3>
                  <p>
                    Once the bot is live and changes have been implemented as per the agreed scope, any additional modifications will incur separate charges.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Subscription Fee Adjustments</h3>
                  <p>
                    For monthly subscription plans, TheChatFlow reserves the right to revise subscription fees with a minimum notice period of 30 days.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Out-of-Scope Requests</h3>
                  <p>
                    Any requirements or requests outside the originally agreed scope of work will be billed separately.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-semibold text-foreground mb-3">6. Terms Modification</h3>
                  <p className="font-medium text-yellow-800">
                    Terms & Conditions can be changed without notice.
                  </p>
                </div>

                <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                  <h3 className="text-xl font-semibold text-foreground mb-3">7. Account Blocking Disclaimer</h3>
                  <p className="mb-3">
                    In the event that your WhatsApp, Instagram, or Facebook account is blocked or restricted by Meta for any reason, TheChatFlow shall not be held responsible.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Annual plan subscribers:</strong> 50% of the total plan amount will be refunded</li>
                    <li>• <strong>Monthly package users:</strong> Setup charges are non-refundable</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Level Agreement */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-2xl">
                  <Shield className="h-6 w-6 text-orange-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Service Level Agreement</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Uptime Guarantee</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• 99.5% uptime guarantee for core services</li>
                    <li>• Planned maintenance with advance notification</li>
                    <li>• 24/7 monitoring and incident response</li>
                    <li>• Service credits for extended downtime</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Support Response Times</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Critical issues: Within 2 hours</li>
                    <li>• General inquiries: Within 24 hours</li>
                    <li>• Setup and training: Within 48 hours</li>
                    <li>• Emergency support: Available 24/7</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitations and Disclaimers */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-500/10 rounded-2xl">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Limitations & Disclaimers</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Service Limitations</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Services depend on third-party platforms (WhatsApp, Meta)</li>
                    <li>• Message delivery subject to platform policies and limitations</li>
                    <li>• AI responses may not always be 100% accurate</li>
                    <li>• Some features may require additional integrations or permissions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Liability Disclaimer</h3>
                  <p>
                    TheChatFlow provides services "as is" without warranties. We are not liable for indirect, incidental, or consequential damages. Our total liability is limited to the fees paid in the preceding 12 months.
                  </p>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Termination</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Either party may terminate this agreement with 30 days written notice. We may suspend or terminate your account immediately for:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Violation of these terms</li>
                  <li>• Non-payment of fees</li>
                  <li>• Fraudulent or illegal activity</li>
                  <li>• Breach of WhatsApp's policies</li>
                </ul>
                <p>Upon termination, you will lose access to all services and data. We recommend exporting your data before termination.</p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Governing Law</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These terms are governed by the laws of Pakistan. Any disputes will be resolved through arbitration in Lahore, Pakistan, or in courts of competent jurisdiction in Pakistan.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-blue-500/5 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Questions About These Terms?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Service, please contact our legal team.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-blue-600 font-medium">hello@thechatflow.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-blue-600 font-medium">03404634191</p>
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

export default TermsOfService;