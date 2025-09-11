import { Helmet } from 'react-helmet';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Article' | 'BlogPosting' | 'FAQPage' | 'Service';
  data: Record<string, any>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };

    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          name: "TheChatFlow",
          url: "https://thechatflow.com",
          logo: "https://thechatflow.com/lovable-uploads/c2120760-061b-4488-8c9f-b2c1416e1a7e.png",
          description: "Leading WhatsApp Business API and chatbot automation services in Pakistan",
          address: {
            "@type": "PostalAddress",
            addressCountry: "Pakistan"
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            availableLanguage: ["English", "Urdu"]
          },
          sameAs: [
            "https://www.linkedin.com/company/thechatflow",
            "https://twitter.com/thechatflow"
          ],
          ...data
        };
        
      case 'WebSite':
        return {
          ...baseData,
          name: "TheChatFlow",
          url: "https://thechatflow.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://thechatflow.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          ...data
        };
        
      case 'Article':
      case 'BlogPosting':
        return {
          ...baseData,
          publisher: {
            "@type": "Organization",
            name: "TheChatFlow",
            logo: {
              "@type": "ImageObject",
              url: "https://thechatflow.com/lovable-uploads/c2120760-061b-4488-8c9f-b2c1416e1a7e.png"
            }
          },
          author: {
            "@type": "Person",
            name: data.author || "TheChatFlow Team"
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url || "https://thechatflow.com"
          },
          ...data
        };
        
      case 'FAQPage':
        return {
          ...baseData,
          mainEntity: data.questions?.map((q: any) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer
            }
          })) || [],
          ...data
        };
        
      case 'Service':
        return {
          ...baseData,
          provider: {
            "@type": "Organization",
            name: "TheChatFlow"
          },
          areaServed: {
            "@type": "Country",
            name: "Pakistan"
          },
          ...data
        };
        
      default:
        return baseData;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;