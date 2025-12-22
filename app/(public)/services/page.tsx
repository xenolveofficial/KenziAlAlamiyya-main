
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, 
  Users, 
  Monitor, 
  Building2, 
  Plane,
  Zap,
  Wrench,
  CheckCircle,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    id: "manpower",
    icon: Users,
    title: "Manpower Supply",
    subtitle: "Delivering Skilled Professionals",
    description: "Providing high-quality professionals to fulfill staffing requirements with tailored recruitment strategies and flexible deployment of personnel to meet dynamic business needs.",
    features: [
      "High-quality professionals across diverse industries",
      "Tailored recruitment strategies",
      "Short-term and long-term placements",
      "Flexible deployment of personnel",
      "Wide range of trained professionals",
      "Specialized knowledge and technical expertise",
      "Carefully vetted and certified personnel",
      "Quality assurance through standards compliance",
    ],
    benefits: [
      "Access to skilled workforce",
      "Reduced hiring time",
      "Flexible staffing options",
      "Industry-specific expertise",
    ],
  },
  {
    id: "it-services",
    icon: Monitor,
    title: "IT Managed Services",
    subtitle: "Robust IT Expertise",
    description: "Comprehensive IT solutions including 24/7 monitoring, security protection, and smart city solutions designed to ensure business continuity and technological advancement.",
    features: [
      "24/7 system monitoring and alerts",
      "Performance optimization services",
      "Security and data protection",
      "Rapid incident response",
      "Comprehensive annual coverage",
      "Low current security solutions",
      "Smart city & IoT solutions",
      "Artificial Intelligence integration",
    ],
    benefits: [
      "Business continuity assured",
      "Enhanced security posture",
      "Proactive maintenance",
      "Future-ready solutions",
    ],
  },
  {
    id: "electrotechnical",
    icon: Zap,
    title: "Electrotechnical Services",
    subtitle: "Complete Electrical Solutions",
    description: "Complete electrical construction services from initial design through detailed planning, professional installation, and ongoing maintenance for industrial and commercial needs.",
    features: [
      "Design & planning services",
      "Detailed specifications for all projects",
      "Professional installation by certified electricians",
      "Industrial and commercial solutions",
      "Strict adherence to safety codes",
      "Reliable maintenance programs",
      "Downtime minimization",
      "Long-term system performance",
    ],
    benefits: [
      "Expert design & planning",
      "Code-compliant installation",
      "Reduced downtime",
      "Enhanced efficiency",
    ],
  },
  {
    id: "facilities",
    icon: Building2,
    title: "Facilities Management Excellence",
    subtitle: "Comprehensive Facility Management",
    description: "Ensuring smooth operations, maintenance, and safety of your premises with end-to-end management services optimized for efficiency and cost-effectiveness.",
    features: [
      "Complete facility and property management",
      "Smooth operations and maintenance",
      "Safety & regulatory compliance",
      "Proactive strategic planning",
      "Resource allocation optimization",
      "Cost-effective solutions",
      "Industry requirement adherence",
      "Performance optimization",
    ],
    benefits: [
      "Operational efficiency",
      "Cost optimization",
      "Safety compliance",
      "Strategic planning",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Building Maintenance & Civil Services",
    subtitle: "Comprehensive Maintenance Solutions",
    description: "Commercial and residential building maintenance including preventive programs, emergency repairs, aesthetic enhancements, and surface management with a focus on safety compliance.",
    features: [
      "Commercial & residential solutions",
      "Preventive maintenance programs",
      "Emergency repair services",
      "Interior & exterior painting",
      "Industrial coating applications",
      "Surface preparation & finishing",
      "Infrastructure upgrades",
      "Safety inspections and compliance",
    ],
    benefits: [
      "Reduced unexpected breakdowns",
      "Extended asset lifespan",
      "Aesthetic improvements",
      "Regulatory compliance",
    ],
  },
  {
    id: "travel",
    icon: Plane,
    title: "Travel & Tourism Services",
    subtitle: "Comprehensive Travel Solutions",
    description: "Seamless integrated travel solutions for corporate and individual clients worldwide, including corporate travel management, hotel bookings, and visa assistance.",
    features: [
      "Corporate travel management",
      "Professional air ticketing solutions",
      "Private charter arrangements",
      "Cost-effective travel solutions",
      "Personalized hotel booking",
      "Competitive accommodation rates",
      "Comprehensive visa assistance",
      "End-to-end travel documentation",
    ],
    benefits: [
      "Seamless travel experience",
      "Cost-effective solutions",
      "Wide accommodation selection",
      "Complete documentation support",
    ],
  },
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block animate-fade-up">
              Our Service Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Comprehensive <span className="text-gradient">Solutions</span> for Your Business
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              From manpower supply to IT services, we provide integrated solutions 
              that drive operational excellence and sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-20 lg:space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-primary font-medium">
                          {service.subtitle}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                        Key Benefits
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                            <span className="text-sm text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button variant="gold" size="lg" className="group">
                        Request This Service
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Features Card */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="p-8 rounded-3xl bg-card border border-border/50 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                      
                      <h3 className="text-lg font-display font-semibold text-foreground mb-6">
                        What's Included
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 group"
                          >
                            <ArrowUpRight className="w-4 h-4 text-primary mt-1 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-20 lg:mt-32" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-dark-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Need a <span className="text-gradient">Custom Solution</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We understand that every business is unique. Let's discuss how we can 
              tailor our services to meet your specific requirements.
            </p>
            <Link href="/contact">
              <Button variant="gold" size="xl" className="group">
                Get a Custom Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;