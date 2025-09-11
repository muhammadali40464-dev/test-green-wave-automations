import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  keywords?: string[];
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

const SEOHead = ({ 
  title = "TheChatFlow - WhatsApp Business API Pakistan | Chatbot Automation Services",
  description = "Leading WhatsApp Business API and chatbot automation services in Pakistan. Boost your business with automated messaging solutions. Get started today!",
  path = "",
  image = "/lovable-uploads/c2120760-061b-4488-8c9f-b2c1416e1a7e.png",
  type = "website",
  keywords = ["WhatsApp Business API", "Pakistan", "Chatbot", "Automation", "TheChatFlow"],
  author = "TheChatFlow",
  publishedDate,
  modifiedDate
}: SEOHeadProps) => {
  const canonicalUrl = `https://thechatflow.com${path}`;
  const fullTitle = path === "/" ? title : `${title} | TheChatFlow`;
  const imageUrl = `https://thechatflow.com${image}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="TheChatFlow" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@thechatflow" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#25D366" />
      
      {/* Article specific tags */}
      {type === "article" && publishedDate && (
        <>
          <meta property="article:published_time" content={publishedDate} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Technology" />
        </>
      )}
      
      {modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Helmet>
  );
};

export default SEOHead;