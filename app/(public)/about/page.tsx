// import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import  Link  from "next/link";
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Heart, 
  Sparkles,
  Users,
  Award,
  CheckCircle,
  Lightbulb
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "Highest ethical standards in everything we do, building trust through transparent practices.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Technology-driven solutions that push boundaries and set new industry benchmarks.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We design solutions aligned with your business goals.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Uncompromising commitment to excellence in every service we deliver.",
  },
  {
    icon: Sparkles,
    title: "Expertise",
    description: "Decades of demonstrated mastery with specialized knowledge across industries.",
  },
];

const executiveSummary = [
  {
    title: "Service Scope",
    points: ["Comprehensive solutions provider", "Expertise across service verticals", "Enterprise, industrial, commercial sectors"],
  },
  {
    title: "Excellence Across Industries",
    points: ["Years of proven track record", "Operating across multiple sectors", "Certified and skilled workforce"],
  },
  {
    title: "Customer Focused Approach",
    points: ["24/7 customer support", "Rapid response times", "Customized solutions"],
  },
  {
    title: "Commitment to Excellence",
    points: ["Uninterrupted business continuity", "Operational excellence", "Industry-leading quality standards"],
  },
  {
    title: "Innovative Practices",
    points: ["Technology-driven solutions", "Socially responsible practices", "Regulatory compliance"],
  },
  {
    title: "Quality and Service",
    points: ["High quality standards", "30+ satisfied clients", "Business efficiency optimization"],
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block animate-fade-up">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Our <span className="text-gradient">Foundation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              KENZI Al-ALAMIYYA was established by a team of industry veterans with decades of demonstrated mastery. 
              Each member brings recognized authority and specialized expertise in their domain, creating a convergence 
              of exceptional knowledge, unwavering reliability, and exceptional service excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Vision 2030 Section */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto p-8 lg:p-12 rounded-3xl bg-card border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
                Aligned with Vision 2030
              </span>
              <p className="text-lg text-foreground leading-relaxed">
                Deeply aligned with the Kingdom's ambitious transformation initiatives under Vision 2030, 
                we are dedicated to catalyzing progress across multiple industries and sectors. We view 
                ourselves as a trusted strategic partner in Saudi Arabia's journey toward economic 
                diversification and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-dark-surface to-background" />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Executive Summary
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveSummary.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Mission, Vision & <span className="text-gradient">Core Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Mission */}
            <div className="p-8 lg:p-10 rounded-3xl bg-card border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Mission Statement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To become a leading multi-service solutions provider in the Kingdom of Saudi Arabia, 
                delivering world-class services that elevate operational efficiency, reliability, 
                and industry-leading quality standards.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 lg:p-10 rounded-3xl bg-card border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Vision for the Future
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To consistently deliver high-quality, customer-centric services through innovation, 
                professional excellence & integrity to set new industry benchmarks, while contributing 
                to the Kingdom's Vision 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-dark-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              The Principles That <span className="text-gradient">Guide Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to <span className="text-gradient">Partner</span> with Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Experience the difference that professional service excellence can make for your business.
            </p>
            <Link href="/contact">
              <Button variant="gold" size="xl" className="group">
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;