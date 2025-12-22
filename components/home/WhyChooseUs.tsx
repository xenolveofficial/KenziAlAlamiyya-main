import { Award, Headphones, Settings, Shield, Users, Zap } from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Award,
    title: "Industry Expertise",
    description: "Years of proven excellence with certified, skilled workforce that you can trust for quality delivery.",
  },
  {
    number: "02",
    icon: Headphones,
    title: "24/7 Support",
    description: "Our team ensures efficient and reliable response times, facilitating seamless and uninterrupted operations.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Customized Solutions",
    description: "Strategies meticulously tailored to align with your unique goals, requirements, and challenges.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Competitive Advantages",
    description: "Comprehensive service ecosystem, market-leading quality standards, and best-in-class pricing.",
  },
  {
    number: "05",
    icon: Shield,
    title: "Our Differentiators",
    description: "Integrity, innovation, customer focus, and ethical & socially responsible practices.",
  },
  {
    number: "06",
    icon: Users,
    title: "Client-Focused Excellence",
    description: "Solution-oriented approach with dedicated account managers, experienced engineers, and certified specialists.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-dark-surface">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient">Kenzi Al-Alamiyya</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Partner with us for exceptional service delivery that exceeds expectations 
            and drives real business results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden"
            >
              {/* Number badge */}
              <span className="absolute top-6 right-6 text-6xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {reason.number}
              </span>
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative z-10">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 relative z-10">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;