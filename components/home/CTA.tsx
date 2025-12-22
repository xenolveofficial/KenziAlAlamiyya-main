'use client';
import  Link  from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Let's Elevate Your Business
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Ready to <span className="text-gradient">Transform</span> Your Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Reach out to KENZI Al-ALAMIYYA and transform your operations effectively 
              and efficiently. Partner with us for exceptional service delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="gold" size="xl" className="group">
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="hero-secondary" size="xl">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="p-8 rounded-3xl bg-card border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
            
            <h3 className="text-xl font-display font-semibold text-foreground mb-6 relative z-10">
              Connect With Us
            </h3>
            
            <div className="space-y-6 relative z-10">
              <a 
                href="tel:+966540969669" 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    +966 540 969 669
                  </div>
                </div>
              </a>

              <a 
                href="mailto:info@kenzialamiyya.com" 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    info@kenzialamiyya.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-foreground font-medium">
                    Askan Buildings, Al-Olaya, Riyadh, KSA
                  </div>
                </div>
              </div>
            </div>

            {/* Website link */}
            <div className="mt-8 pt-6 border-t border-border relative z-10">
              <a 
                href="https://www.kenzialamiyya.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                www.kenzialamiyya.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;