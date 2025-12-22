'use client';
import { useState } from "react";
// import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Building2,
  MessageCircle,
  Globe
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+966 540 969 669",
    link: "tel:+966540969669",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@kenzialamiyya.com",
    link: "mailto:info@kenzialamiyya.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Askan Buildings, Al-Olaya, Riyadh, KSA",
    link: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Sun - Thu: 8AM - 6PM",
    link: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block animate-fade-up">
              Let's Elevate Your Business
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Contact <span className="text-gradient">Us Today</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              Reach out to KENZI Al-ALAMIYYA and transform your operations effectively 
              and efficiently. We're here to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Connect With Us
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Have questions about our services? We're here to help. 
                  Reach out through any of the channels below or fill out 
                  the contact form.
                </p>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-foreground">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Website */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Website
                    </h3>
                    <a
                      href="https://www.kenzialamiyya.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      www.kenzialamiyya.com
                    </a>
                  </div>
                </div>

                {/* Quick Response Badge */}
                <div className="p-4 rounded-xl bg-card border border-border/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">24/7 Support Available</h4>
                    <p className="text-xs text-muted-foreground">
                      Rapid response times guaranteed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 lg:p-10 rounded-3xl bg-card border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+966 XX XXX XXXX"
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-foreground">
                      Service of Interest
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-11 px-4 rounded-lg bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="" className="bg-card">Select a service</option>
                      <option value="manpower" className="bg-card">Manpower Supply</option>
                      <option value="it-services" className="bg-card">Information Technology</option>
                      <option value="facilities" className="bg-card">Facilities & Building Management</option>
                      <option value="travel" className="bg-card">Travel & Tourism Services</option>
                      <option value="other" className="bg-card">Other / Multiple Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      className="bg-secondary border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 lg:py-28 bg-dark-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Location <span className="text-gradient">Spotlight</span>
            </h2>
            <p className="text-muted-foreground">
              KENZI Al-ALAMIYYA Headquarters
            </p>
          </div>

          <div className="aspect-[21/9] rounded-3xl bg-card border border-border/50 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-radial opacity-50" />
            <div className="text-center relative p-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Kenzi Al-Alamiyya Headquarters
              </h3>
              <p className="text-muted-foreground mb-2">
                Askan Buildings, Al-Olaya
              </p>
              <p className="text-muted-foreground">
                Riyadh, Kingdom of Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;