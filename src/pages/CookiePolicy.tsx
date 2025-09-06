import { Helmet } from "react-helmet";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import { Cookie, Settings, Eye, BarChart, Shield, Globe } from "lucide-react";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - TheChatFlow</title>
        <meta name="description" content="Learn about how TheChatFlow uses cookies and tracking technologies to improve your experience with our WhatsApp automation platform." />
        <meta name="keywords" content="cookie policy, TheChatFlow cookies, tracking, web analytics, privacy" />
        <link rel="canonical" href="https://thechatflow.com/cookie-policy" />
      </Helmet>

      <MegaMenu />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-orange-500/5">
        <div className="container-width text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 px-6 py-3 rounded-full font-medium mb-6">
            <Cookie className="h-5 w-5" />
            Cookie Policy
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            How We Use
            <span className="block bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Cookies
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Last updated: January 2025. This policy explains how TheChatFlow uses cookies and similar technologies.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container-width max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            {/* What are Cookies */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-2xl">
                  <Cookie className="h-6 w-6 text-orange-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">What are Cookies?</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p>
                  Cookies allow us to recognize you when you return to our website, remember your preferences, and provide you with a personalized experience. They also help us understand how visitors use our website so we can improve it.
                </p>
              </div>
            </div>

            {/* Types of Cookies We Use */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-2xl">
                  <Settings className="h-6 w-6 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Types of Cookies We Use</h2>
              </div>
              
              <div className="space-y-8 text-muted-foreground">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
                  <p className="mb-3">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Authentication and login status</li>
                    <li>• Security and fraud prevention</li>
                    <li>• Load balancing and performance</li>
                    <li>• Cookie consent preferences</li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-green-800 font-medium text-sm">These cookies cannot be disabled as they are essential for website functionality.</p>
                  </div>
                </div>

                <div className="bg-whatsapp-green/5 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Functionality Cookies</h3>
                  <p className="mb-3">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Language and region preferences</li>
                    <li>• Dashboard customization settings</li>
                    <li>• Form auto-fill information</li>
                    <li>• Theme and display preferences</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Analytics Cookies</h3>
                  <p className="mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Page views and user journeys</li>
                    <li>• Time spent on pages</li>
                    <li>• Click tracking and navigation patterns</li>
                    <li>• Device and browser information</li>
                    <li>• Traffic sources and referrals</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Marketing Cookies</h3>
                  <p className="mb-3">
                    These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Advertising campaign tracking</li>
                    <li>• Social media integration</li>
                    <li>• Remarketing and retargeting</li>
                    <li>• Conversion tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-2xl">
                  <Globe className="h-6 w-6 text-purple-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Third-Party Cookies</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>We use third-party services that may place cookies on your device:</p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Google Analytics</h3>
                    <p>Helps us understand website usage and improve user experience. 
                    <a href="https://policies.google.com/privacy" className="text-whatsapp-green hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                      Google Privacy Policy
                    </a></p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Meta Pixel</h3>
                    <p>Tracks conversions from Facebook and Instagram ads. 
                    <a href="https://www.facebook.com/privacy/explanation" className="text-whatsapp-green hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                      Meta Privacy Policy
                    </a></p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Intercom</h3>
                    <p>Powers our customer support chat widget. 
                    <a href="https://www.intercom.com/legal/privacy" className="text-whatsapp-green hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                      Intercom Privacy Policy
                    </a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/10 rounded-2xl">
                  <Eye className="h-6 w-6 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Managing Your Cookie Preferences</h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Browser Settings</h3>
                  <p className="mb-3">You can control and manage cookies through your browser settings:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                    <li>• <strong>Firefox:</strong> Preferences → Privacy & Security → Cookies</li>
                    <li>• <strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                    <li>• <strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Cookie Consent Manager</h3>
                  <p className="mb-3">
                    When you first visit our website, you'll see a cookie banner allowing you to:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Accept all cookies</li>
                    <li>• Reject non-essential cookies</li>
                    <li>• Customize your cookie preferences</li>
                    <li>• Access this cookie policy</li>
                  </ul>
                  <p className="mt-4 font-medium">
                    You can change your preferences at any time by clicking the cookie settings icon in the bottom corner of our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Opt-Out Options</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• <a href="https://tools.google.com/dlpage/gaoptout" className="text-whatsapp-green hover:underline">Google Analytics Opt-out</a></li>
                    <li>• <a href="https://www.facebook.com/settings?tab=ads" className="text-whatsapp-green hover:underline">Facebook Ad Preferences</a></li>
                    <li>• <a href="http://optout.networkadvertising.org/" className="text-whatsapp-green hover:underline">Network Advertising Initiative</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact of Disabling Cookies */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-500/10 rounded-2xl">
                  <Shield className="h-6 w-6 text-red-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-0">Impact of Disabling Cookies</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  While you have the right to disable cookies, doing so may affect your experience on our website:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• You may need to re-enter information on each visit</li>
                  <li>• Some features may not work properly</li>
                  <li>• Personalized content and recommendations may not be available</li>
                  <li>• We won't be able to remember your preferences</li>
                  <li>• Login sessions may not persist</li>
                </ul>
                <p className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <strong>Note:</strong> Disabling essential cookies will prevent you from using our services altogether.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Cookie Data Retention</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Different types of cookies are stored for different periods:</p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Session Cookies</h3>
                    <p>Deleted when you close your browser</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Persistent Cookies</h3>
                    <p>Stored for up to 2 years or until manually deleted</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates to This Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Updates to This Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Cookie Policy periodically to reflect changes in our practices or legal requirements. 
                  We'll notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
                </p>
                <p>
                  We recommend checking this page periodically to stay informed about our use of cookies and related technologies.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-orange-500/5 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Questions About Cookies?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about our use of cookies or this Cookie Policy, please don't hesitate to contact us.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-orange-600 font-medium">hello@thechatflow.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-orange-600 font-medium">03404634191</p>
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

export default CookiePolicy;