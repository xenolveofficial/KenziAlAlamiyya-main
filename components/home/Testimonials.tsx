import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Kenzi Al Alamiyya has consistently delivered reliable manpower and technical services that keep our operations running smoothly and without disruption. Their team is professional, responsive, and fully aligned with our business priorities.",
    author: "Operations Director",
    company: "Leading Saudi Corporation",
  },
  {
    quote: "What sets Kenzi Al Alamiyya apart is their focus on solutions, not just services. They listen carefully, understand our objectives, and design practical, value-driven strategies that support our growth.",
    author: "CEO",
    company: "Regional Enterprise",
  },
  {
    quote: "Kenzi Al Alamiyya has shown exceptional commitment to quality and safety. Their specialists understand our industry requirements and always go the extra mile to meet tight timelines and regulatory standards.",
    author: "Facilities Manager",
    company: "Healthcare Institution",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative"
            >
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Quote text */}
              <blockquote className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <div className="font-display font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;