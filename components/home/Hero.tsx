'use client';
import  Link  from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Monitor, Building2, Plane } from "lucide-react";
import heroTeam from "../../public/assets/hero-team.jpg";

const Hero = () => {
  const services = [
    { icon: Users, label: "Manpower Supply" },
    { icon: Monitor, label: "IT Services" },
    { icon: Building2, label: "Facilities Management" },
    { icon: Plane, label: "Travel & Tourism" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">
                Aligned with Vision 2030
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 animate-fade-up delay-100">
              <span className="text-foreground">Your Trusted Partner for</span>
              <br />
              <span className="text-gradient">Business Operations</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-up delay-200 leading-relaxed">
              Manpower Solutions Across Industries. Delivering world-class services that elevate 
              operational efficiency, reliability, and industry-leading quality standards.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-fade-up delay-300">
              <Link  href="/contact">
                <Button variant="gold" size="xl" className="group">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="hero-secondary" size="xl">
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Service Icons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 animate-fade-up delay-400">
              {services.map((service, index) => (
                <div
                  key={service.label}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <service.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{service.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-up delay-300 hidden lg:block">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl animate-pulse-slow" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <Image 
                  src={heroTeam} 
                  alt="Professional team at Kenzi Al-Alamiyya" 
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating stats card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 animate-float">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <p className="text-2xl font-display font-bold text-primary">30+</p>
                      <p className="text-xs text-muted-foreground">Satisfied Clients</p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div className="text-center">
                      <p className="text-2xl font-display font-bold text-primary">6+</p>
                      <p className="text-xs text-muted-foreground">Industries</p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div className="text-center">
                      <p className="text-2xl font-display font-bold text-primary">24/7</p>
                      <p className="text-xs text-muted-foreground">Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
