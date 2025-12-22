'use client';
import  Link  from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Monitor, 
  Building2, 
  Plane,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "manpower",
    icon: Users,
    title: "Manpower Supply",
    description: "Skilled professionals with expertise across diverse industries and roles. Providing high-quality personnel to fulfill staffing requirements with flexible deployment options.",
    features: ["Skilled Professionals", "Flexible Staffing", "Certified Personnel"],
  },
  {
    id: "it-services",
    icon: Monitor,
    title: "Information Technology",
    description: "Comprehensive IT solutions including 24/7 monitoring, security protection, smart city solutions, and annual maintenance contracts for business continuity.",
    features: ["24/7 Monitoring", "Cybersecurity", "Smart Solutions"],
  },
  {
    id: "facilities",
    icon: Building2,
    title: "Facilities & Building Management",
    description: "End-to-end facility operations and comprehensive upkeep solutions. Building maintenance, civil services, and electrotechnical services.",
    features: ["Facility Management", "Maintenance", "Compliance"],
  },
  {
    id: "travel",
    icon: Plane,
    title: "Travel & Tourism Services",
    description: "Extensive travel planning, tourism management, and customer experience solutions. Corporate travel, hotel bookings, and visa assistance services.",
    features: ["Corporate Travel", "Hotel Booking", "Visa Services"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -left-40 top-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Service Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Comprehensive <span className="text-gradient">Business Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From manpower supply to IT services, we provide integrated solutions 
            that drive operational excellence and sustainable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className={cn(
                "group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500",
                "hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              )}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/services">
            <Button variant="gold-outline" size="lg" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;