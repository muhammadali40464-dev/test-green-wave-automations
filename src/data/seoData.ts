export interface SEOPageData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  type?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

export const seoData: Record<string, SEOPageData> = {
  "/": {
    title: "TheChatFlow - WhatsApp Business API Pakistan | #1 Chatbot Automation Services",
    description: "Leading WhatsApp Business API and chatbot automation services in Pakistan. Boost your business with automated messaging solutions, customer support bots, and marketing automation. Get started today!",
    keywords: ["WhatsApp Business API Pakistan", "Chatbot Automation", "WhatsApp Automation", "Business Messaging", "Customer Support Bot", "Marketing Automation", "TheChatFlow"],
    type: "website"
  },
  "/blog": {
    title: "WhatsApp Business Blog Pakistan | Automation & API Guides",
    description: "Latest insights on WhatsApp Business API, chatbot automation, and digital marketing strategies for Pakistani businesses. Expert guides, tutorials, and success stories.",
    keywords: ["WhatsApp Business Blog", "Automation Guides", "API Tutorials", "Digital Marketing Pakistan", "Business Growth"],
    type: "website"
  },
  "/contact": {
    title: "Contact TheChatFlow | WhatsApp Business API Consultation Pakistan",
    description: "Get in touch with TheChatFlow for WhatsApp Business API setup, chatbot development, and automation consultation in Pakistan. Free consultation available.",
    keywords: ["Contact TheChatFlow", "WhatsApp API Consultation", "Chatbot Development", "Pakistan", "Free Consultation"],
    type: "website"
  },
  "/success-stories": {
    title: "Success Stories | WhatsApp Automation Case Studies Pakistan",
    description: "Real success stories from Pakistani businesses using TheChatFlow's WhatsApp automation solutions. See how companies increased efficiency and revenue.",
    keywords: ["Success Stories", "Case Studies", "WhatsApp Automation Results", "Business Growth Pakistan", "ROI"],
    type: "website"
  },
  "/privacy-policy": {
    title: "Privacy Policy | TheChatFlow Data Protection",
    description: "TheChatFlow privacy policy outlining how we collect, use, and protect your personal information in compliance with data protection regulations.",
    keywords: ["Privacy Policy", "Data Protection", "TheChatFlow"],
    type: "website"
  },
  "/terms-of-service": {
    title: "Terms of Service | TheChatFlow Legal Agreement",
    description: "Terms and conditions for using TheChatFlow services including WhatsApp Business API and chatbot automation solutions.",
    keywords: ["Terms of Service", "Legal Agreement", "TheChatFlow"],
    type: "website"
  },
  "/cookie-policy": {
    title: "Cookie Policy | TheChatFlow Website Cookies",
    description: "Information about cookies used on TheChatFlow website and how to manage your cookie preferences.",
    keywords: ["Cookie Policy", "Website Cookies", "TheChatFlow"],
    type: "website"
  },
  // Blog Posts
  "/blog/whatsapp-business-api-pakistan-guide-2025": {
    title: "WhatsApp Business API Pakistan Complete Guide 2025 | Setup, Pricing & Features",
    description: "Complete guide to WhatsApp Business API in Pakistan. Learn setup process, pricing, features, and implementation for Pakistani businesses in 2025.",
    keywords: ["WhatsApp Business API Pakistan", "Setup Guide 2025", "Pricing", "Features", "Implementation"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2025-01-09"
  },
  "/blog/chatbot-automation-guide-pakistan": {
    title: "Chatbot Automation Guide Pakistan | Complete Implementation Strategy 2025",
    description: "Master chatbot automation in Pakistan with our comprehensive guide. Learn implementation strategies, best practices, and ROI optimization for Pakistani businesses.",
    keywords: ["Chatbot Automation Pakistan", "Implementation Guide", "Business Strategy", "ROI", "2025"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2025-01-09"
  },
  "/blog/solar-companies-whatsapp-automation-pakistan": {
    title: "Solar Companies WhatsApp Automation Pakistan | Industry-Specific Solutions",
    description: "Discover how solar companies in Pakistan can leverage WhatsApp automation for lead generation, customer support, and sales conversion.",
    keywords: ["Solar Companies Pakistan", "WhatsApp Automation", "Lead Generation", "Sales Automation", "Renewable Energy"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2025-01-09"
  },
  "/blog/visa-consultancy-whatsapp-automation-urdu": {
    title: "Visa Consultancy WhatsApp Automation | ویزا کنسلٹنسی آٹومیشن پاکستان",
    description: "Visa consultancy companies in Pakistan can streamline operations with WhatsApp automation. Learn implementation in Urdu for better client communication.",
    keywords: ["Visa Consultancy Pakistan", "WhatsApp Automation Urdu", "Immigration Services", "Client Communication"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2025-01-09"
  },
  "/blog/whatsapp-api-vs-regular-whatsapp-business": {
    title: "WhatsApp API vs Regular WhatsApp Business | Complete Comparison Pakistan",
    description: "Detailed comparison between WhatsApp Business API and regular WhatsApp Business for Pakistani companies. Features, pricing, and recommendations.",
    keywords: ["WhatsApp API vs WhatsApp Business", "Comparison", "Features", "Pricing Pakistan", "Business Communication"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2025-01-09"
  },
  "/blog/how-chatbots-work-small-businesses-pakistan": {
    title: "How Chatbots Work for Small Businesses Pakistan | Complete Guide 2025",
    description: "Learn how chatbots can transform small businesses in Pakistan. Implementation guide, benefits, and real-world examples for SMEs.",
    keywords: ["Chatbots Small Business Pakistan", "SME Automation", "Business Growth", "Customer Service", "2025"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2025-01-09"
  }
};

export const getPageSEO = (path: string): SEOPageData => {
  return seoData[path] || seoData["/"];
};