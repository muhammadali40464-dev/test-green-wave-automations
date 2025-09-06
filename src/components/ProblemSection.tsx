import { AlertCircle, Clock, TrendingDown, MessageSquareX } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: MessageSquareX,
      title: "Manual replies cost you sales every hour",
      description: "Customers expect instant responses, but manual handling leads to delayed replies and lost opportunities."
    },
    {
      icon: Clock,
      title: "Customers expect instant 24/7 support",
      description: "Your business doesn't sleep, but your team does. Missing after-hours inquiries means missing revenue."
    },
    {
      icon: TrendingDown,
      title: "Your team can't handle growing message volume",
      description: "As your business grows, manual chat management becomes overwhelming and inefficient."
    },
    {
      icon: AlertCircle,
      title: "Missing leads from Instagram & Facebook comments",
      description: "Social media leads slip through the cracks when there's no automated system to capture and follow up."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-h1 text-foreground">
                Still Losing Customers to
                <span className="block text-red-600">
                  Slow Response Times?
                </span>
              </h2>
              
              <p className="font-body-lg text-muted-foreground">
                Every minute of delay costs you potential customers. Here's what's hurting your business right now:
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <problem.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-h3 text-foreground">
                      {problem.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white shadow-card rounded-2xl p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <TrendingDown className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-h3 text-red-600">Customer Loss Rate</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-medium">Response Time &gt; 1 hour</span>
                  <span className="font-bold text-red-600">-40% conversion</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-medium">No after-hours support</span>
                  <span className="font-bold text-red-600">-60% night leads</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-medium">Manual social media</span>
                  <span className="font-bold text-red-600">-80% social leads</span>
                </div>
              </div>
              
              <div className="pt-4 border-t text-center">
                <p className="font-small text-muted-foreground">
                  Average business loses 
                  <span className="font-bold text-red-600"> 2-3 customers daily</span> 
                  due to slow responses
                </p>
              </div>
            </div>
            
            {/* Decorative warning elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;