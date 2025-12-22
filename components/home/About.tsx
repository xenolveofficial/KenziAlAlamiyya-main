'use client';
import  Link  from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Users, Sparkles } from "lucide-react";
import buildingFacade from "../../public/assets/building-facade.jpg";

const stats = [
  { icon: Award, value: "30+", label: "Satisfied Clients" },
  { icon: Users, value: "6+", label: "Industries Served" },
  { icon: Sparkles, value: "100%", label: "Quality Focus" },
  { icon: Clock, value: "24/7", label: "Customer Support" },
];

const AboutSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
              
              <div className="relative rounded-2xl overflow-hidden border border-border/50">
                <Image
                  src={buildingFacade} 
                  alt="Kenzi Al-Alamiyya headquarters" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-3 max-w-xs">
                {stats.slice(0, 2).map((stat) => (
                  <div 
                    key={stat.label}
                    className="p-4 rounded-xl bg-card/95 backdrop-blur-sm border border-border/50 text-center"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-xl font-display font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Building <span className="text-gradient">Partnerships</span> That Last
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              KENZI Al-ALAMIYYA was established by a team of industry veterans with decades 
              of demonstrated mastery. Each member brings recognized authority and specialized 
              expertise in their domain.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Deeply aligned with the Kingdom's ambitious transformation initiatives under Vision 2030, 
              we are dedicated to catalyzing progress across multiple industries and sectors. We view 
              ourselves as a trusted strategic partner in Saudi Arabia's journey toward economic 
              diversification and operational excellence.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.slice(2).map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-display font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button variant="gold" size="lg" className="group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;