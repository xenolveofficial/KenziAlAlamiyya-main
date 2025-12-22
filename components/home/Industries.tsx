import { 
  Building2, 
  HardHat, 
  Hotel, 
  Home, 
  Monitor, 
  Factory 
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Corporate & Commercial",
    description: "Buildings and office spaces",
  },
  {
    icon: HardHat,
    title: "Construction & Real Estate",
    description: "Project support and management",
  },
  {
    icon: Hotel,
    title: "Hospitality & Healthcare",
    description: "Facility operations and maintenance",
  },
  {
    icon: Home,
    title: "Residential & Retail",
    description: "Comprehensive property management",
  },
  {
    icon: Monitor,
    title: "IT & Technology",
    description: "Infrastructure and support services",
  },
  {
    icon: Factory,
    title: "Industrial & Manufacturing",
    description: "Specialized maintenance solutions",
  },
];

const Industries = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-dark-surface/50 to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Expertise Across <span className="text-gradient">Multiple Sectors</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide specialized solutions tailored to the unique requirements of diverse industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-sm font-display font-semibold text-foreground mb-1">
                {industry.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;