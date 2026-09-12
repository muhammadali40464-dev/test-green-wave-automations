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
    title: "Custom Chatbot Development in Pakistan | TheChatFlow",
    description: "We build custom AI chatbots for Pakistani businesses — sales, support and booking agents across WhatsApp, Instagram, Messenger and web chat, connected to the systems you already run.",
    keywords: ["custom chatbot development Pakistan", "AI chatbot development services", "chatbot company Pakistan", "WhatsApp chatbot development", "business automation Pakistan"],
    type: "website"
  },
  "/services/custom-chatbot-development": {
    title: "Custom Chatbot Development Services in Pakistan",
    description: "Custom AI chatbot development for Pakistani businesses. We scope, build, train and maintain chatbots for sales, support, order tracking and bookings — with an engineering team behind them.",
    keywords: ["custom chatbot development", "chatbot development services in Pakistan", "AI chatbot services Pakistan", "chatbot developers Pakistan", "hire chatbot developer"],
    type: "website"
  },
  "/services/whatsapp-chatbot-development": {
    title: "WhatsApp Chatbot Development in Pakistan",
    description: "We design, build and maintain WhatsApp chatbots for Pakistani businesses on the WhatsApp Business API — lead qualification, order status, COD confirmation, bookings and support, with human handover. Rs. 49,999 fixed build price.",
    keywords: ["WhatsApp chatbot development", "WhatsApp chatbot development Pakistan", "WhatsApp automation services Pakistan", "WhatsApp Business API Pakistan", "WhatsApp chatbot price in Pakistan"],
    type: "website"
  },
  "/blog": {
    title: "Chatbot and Automation Insights for Pakistani Businesses",
    description: "Practical guides on custom chatbots, AI agents and business automation for companies in Pakistan — what to build, what it costs, and what actually works.",
    keywords: ["chatbot guides Pakistan", "AI automation blog", "custom chatbot insights", "business automation Pakistan"],
    type: "website"
  },
  "/contact": {
    title: "Talk to a Chatbot Developer in Pakistan",
    description: "Tell us what you want automated and we will tell you whether a custom chatbot is the right answer, what it would involve, and what it would cost. No obligation.",
    keywords: ["contact chatbot developer Pakistan", "chatbot consultation", "hire chatbot company Pakistan"],
    type: "website"
  },
  "/success-stories": {
    title: "Chatbot Examples: What a Custom Build Actually Does",
    description: "Four real build patterns for Pakistani businesses — solar, e-commerce, visa consultancy and clinics. What the chatbot handles alone, what it connects to, and where a person takes over.",
    keywords: ["chatbot examples", "ecommerce chatbot examples", "whatsapp automation examples", "whatsapp automation use cases", "lead generation chatbot example"],
    type: "website"
  },
  "/legal": {
    title: "Legal Information",
    description: "Company and legal information for TheChatFlow, including the operating entity and registered business details.",
    keywords: ["TheChatFlow legal", "company information"],
    type: "website"
  },
  "/privacy-policy": {
    title: "Privacy Policy and Data Protection",
    description: "How TheChatFlow collects, uses and protects personal information, in line with applicable data protection regulations.",
    keywords: ["Privacy Policy", "Data Protection", "TheChatFlow"],
    type: "website"
  },
  "/terms-of-service": {
    title: "Terms of Service",
    description: "Terms and conditions for using TheChatFlow chatbot development and automation services.",
    keywords: ["Terms of Service", "Legal Agreement", "TheChatFlow"],
    type: "website"
  },
  "/cookie-policy": {
    title: "Cookie Policy",
    description: "Information about cookies used on the TheChatFlow website and how to manage your cookie preferences.",
    keywords: ["Cookie Policy", "Website Cookies", "TheChatFlow"],
    type: "website"
  },

  "/services/ai-agent-development": {
    title: "AI Agent Development Company in Pakistan, With Prices",
    description: "We build AI agents that check stock, book slots and confirm orders inside your systems. Fixed price, scoped before you pay, and we say when a chatbot would do.",
    keywords: ["AI agent development Pakistan", "AI agent development company", "AI agent development services", "AI agent price in Pakistan", "custom AI agent build"],
    type: "website",
    author: "TheChatFlow"
  },
  "/services/ecommerce-chatbot-development": {
    title: "E-commerce Chatbot Development for Pakistani Stores",
    description: "Chatbots for Pakistani online stores: COD confirmation, live order status and cart follow-ups, connected to Shopify or WooCommerce. Meta fees explained.",
    keywords: ["ecommerce chatbot Pakistan", "WhatsApp chatbot for ecommerce", "Shopify chatbot Pakistan", "COD confirmation chatbot", "order status chatbot"],
    type: "website",
    author: "TheChatFlow"
  },
  "/services/instagram-messenger-automation": {
    title: "Instagram & Messenger Automation for Pakistani Brands",
    description: "Comment-to-DM and what comes after: shared inbox, Urdu replies, real handover, and the Meta windows that shape every build. We say when a free tool is enough.",
    keywords: ["Instagram automation Pakistan", "comment to DM automation", "Instagram DM automation", "Messenger chatbot Pakistan", "Instagram chatbot development"],
    type: "website",
    author: "TheChatFlow"
  },
  "/blog/ai-agent-vs-chatbot": {
    title: "AI Agent vs Chatbot: Which One Does Your Business Need?",
    description: "The difference in one question, which one a Pakistani business actually needs, what each costs to build, and why most firms asking for an agent need a chatbot.",
    keywords: ["AI agent vs chatbot", "difference between AI agent and chatbot", "rule based chatbot vs AI chatbot", "AI agent price in Pakistan", "AI chatbot for business Pakistan"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2026-09-10",
    modifiedDate: "2026-09-10"
  },
  "/blog/chatbot-price-pakistan": {
    title: "How Much Does a Chatbot Cost in Pakistan in 2026?",
    description: "Real rupee figures for a chatbot in Pakistan: subscription tools, freelancers and a built service compared, plus the Meta fees nobody quotes up front.",
    keywords: ["chatbot price in Pakistan", "chatbot cost Pakistan", "WhatsApp chatbot price in Pakistan", "AI chatbot price in Pakistan", "chatbot development cost"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2026-09-10",
    modifiedDate: "2026-09-10"
  },
  "/blog/choose-chatbot-development-company-pakistan": {
    title: "How to Choose a Chatbot Development Company in Pakistan",
    description: "The nine questions that separate a real build from resold platform access, the answers that should worry you, and when the honest advice is not yet.",
    keywords: ["chatbot development company in Pakistan", "chatbot company Pakistan", "hire chatbot developer Pakistan", "chatbot agency Pakistan", "questions to ask chatbot developer"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2026-09-12",
    modifiedDate: "2026-09-12"
  },
  "/blog/whatsapp-api-pricing-pakistan": {
    title: "WhatsApp API Pricing Pakistan: What Changes on 1 October",
    description: "Meta's published per-message rates for Pakistan, the volume tiers nobody quotes, and the four things that change when service messages stop being free.",
    keywords: ["WhatsApp API pricing Pakistan", "WhatsApp message cost Pakistan", "WhatsApp Business API charges", "WhatsApp template message price", "Meta WhatsApp pricing 2026"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2026-09-11",
    modifiedDate: "2026-09-11"
  },
  // Blog posts
  "/blog/chatbot-automation-guide-pakistan": {
    title: "Custom Chatbot Automation in Pakistan: A Practical Guide",
    description: "What a custom chatbot actually automates in a Pakistani business, how a build is scoped, where projects go wrong, and how to tell whether automation is worth it for you.",
    keywords: ["custom chatbot automation Pakistan", "chatbot implementation guide", "business automation Pakistan", "AI agent for business"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2025-01-09",
    modifiedDate: "2026-09-09"
  },
  "/blog/how-chatbots-work-small-businesses-pakistan": {
    title: "How a Custom Chatbot Works for a Small Business in Pakistan",
    description: "A plain explanation of how a custom chatbot handles enquiries for a small Pakistani business — what it can answer, when it hands over to a person, and what setting one up involves.",
    keywords: ["chatbot for small business Pakistan", "how chatbots work", "small business automation Pakistan"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2025-01-09",
    modifiedDate: "2026-09-09"
  },
  "/blog/whatsapp-business-api-pakistan-guide-2025": {
    title: "WhatsApp Business API in Pakistan: When You Actually Need It",
    description: "What the WhatsApp Business API is, what it costs, and the specific situations where a Pakistani business needs it — plus when the free Business app is genuinely enough.",
    keywords: ["WhatsApp Business API Pakistan", "WhatsApp API cost", "WhatsApp chatbot Pakistan", "when to use WhatsApp API"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2025-01-09",
    modifiedDate: "2026-09-09"
  },
  "/blog/whatsapp-api-vs-regular-whatsapp-business": {
    title: "WhatsApp Business App vs API: Which Does Your Business Need?",
    description: "A straight comparison of the free WhatsApp Business app and the WhatsApp Business API for Pakistani businesses — limits, costs, and which one fits the way you actually work.",
    keywords: ["WhatsApp Business app vs API", "WhatsApp API comparison Pakistan", "WhatsApp Business limits"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2025-01-09",
    modifiedDate: "2026-09-09"
  },
  "/blog/solar-companies-whatsapp-automation-pakistan": {
    title: "Custom Chatbots for Solar Companies in Pakistan",
    description: "How a custom chatbot qualifies solar enquiries — roof size, unit consumption, budget and city — books site surveys, and stops sales teams re-answering the same questions.",
    keywords: ["chatbot for solar companies Pakistan", "solar lead qualification", "solar sales automation Pakistan"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2025-01-12",
    modifiedDate: "2026-09-09"
  },
  "/blog/visa-consultancy-whatsapp-automation-urdu": {
    title: "Custom Chatbots for Visa Consultancies in Pakistan",
    description: "How visa and immigration consultancies use a custom chatbot to answer document and eligibility questions in Urdu and English, and route only serious applicants to a consultant.",
    keywords: ["chatbot for visa consultancy Pakistan", "immigration automation Urdu", "visa enquiry automation"],
    type: "article",
    author: "TheChatFlow Team",
    publishedDate: "2025-01-10",
    modifiedDate: "2026-09-09"
  }
};

export const getPageSEO = (path: string): SEOPageData => {
  return seoData[path] || seoData["/"];
};
