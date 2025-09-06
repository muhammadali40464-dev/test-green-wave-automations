import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      business: "Karachi Electronics",
      location: "Karachi",
      rating: 5,
      text: "Increased our sales by 300% in the first month. The AI responses are so natural that customers think they're talking to a real person. Best investment we've made!",
      result: "300% sales increase"
    },
    {
      name: "Fatima Khan", 
      business: "Lahore Fashion House",
      location: "Lahore",
      rating: 5,
      text: "24/7 support without hiring anyone new. Our customers love getting instant responses, and we're closing more deals than ever before. Highly recommended!",
      result: "24/7 automated support"
    },
    {
      name: "Hassan Ali",
      business: "Islamabad Services",
      location: "Islamabad", 
      rating: 5,
      text: "The setup was incredibly smooth and the team guided us through everything. Now we handle 10x more customer inquiries without any additional staff.",
      result: "10x more inquiries handled"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-h1 text-foreground">
            Join 500+ Growing Businesses
          </h2>
          
          <p className="font-body-lg text-muted-foreground max-w-2xl mx-auto">
            See how Pakistani businesses are transforming their customer communication
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card shadow-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="h-6 w-6 text-whatsapp-green/30 absolute -top-2 -left-2" />
                <p className="font-body text-foreground leading-relaxed pl-4">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Result Badge */}
              <div className="inline-block bg-whatsapp-green/10 text-whatsapp-green px-4 py-2 rounded-full font-medium text-sm mb-4">
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="space-y-1">
                <h4 className="font-medium text-foreground">
                  {testimonial.name}
                </h4>
                <p className="font-small text-muted-foreground">
                  {testimonial.business}
                </p>
                <p className="font-small text-whatsapp-green">
                  📍 {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories CTA */}
        <div className="bg-gradient-to-r from-whatsapp-green to-whatsapp-dark rounded-2xl p-8 text-center text-white">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-h2 text-white">
                Ready to Join These Success Stories?
              </h3>
              <p className="font-body-lg text-white/90">
                Read more detailed case studies and see exactly how these businesses achieved their results
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-white text-whatsapp-green hover:bg-white/90">
                Read Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-whatsapp-green">
                Book Demo Call
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                ✓ Average ROI: 400%
              </div>
              <div className="flex items-center gap-2">
                ✓ Setup in 24-48 hours
              </div>
              <div className="flex items-center gap-2">
                ✓ 30-day money back
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;