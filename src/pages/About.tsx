import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Target, Eye, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="accent-line mb-6" />
            <h1 className="text-display text-white mb-6">About RYT Global</h1>
            <p className="text-xl text-white/80">
              A trusted corporate training and capability-building partner, 
              empowering enterprises to achieve sustainable growth through 
              transformative learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="accent-line mb-6" />
              <h2 className="text-headline text-foreground mb-6">
                Reframe Your Thinking
              </h2>
              <p className="text-body-large text-muted-foreground mb-6">
                RYT Global LLP stands for "Reframe Your Thinking" – a philosophy 
                that drives everything we do. We believe that meaningful change 
                begins with a shift in perspective, and our training programs are 
                designed to catalyze that transformation.
              </p>
              <p className="text-muted-foreground mb-6">
                As a global corporate training partner, we work with leading 
                enterprises across India and internationally to build sustainable 
                capabilities that drive competitive advantage. Our approach combines 
                deep industry expertise with innovative learning methodologies to 
                deliver measurable business outcomes.
              </p>
              <p className="text-muted-foreground">
                From technology upskilling to leadership development, compliance 
                training to custom programs, we offer comprehensive solutions 
                tailored to your organization's unique needs.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Programs Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Professionals Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-xl p-8 md:p-10 border border-border">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations and their people with the knowledge, skills, 
                and mindset needed to thrive in an ever-evolving business landscape. 
                We are committed to delivering world-class training experiences that 
                create lasting impact and drive sustainable growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-xl p-8 md:p-10 border border-border">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted global partner for corporate learning and 
                capability development, recognized for our innovation, expertise, 
                and unwavering commitment to excellence. We envision a world where 
                continuous learning is the cornerstone of organizational success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-headline text-foreground mb-4">
              What Makes RYT Global Different
            </h2>
            <p className="text-body-large text-muted-foreground">
              Our unique approach combines industry expertise, global reach, 
              and a relentless focus on outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6">
              <CheckCircle className="h-8 w-8 text-accent mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Outcome-Driven Approach</h4>
              <p className="text-muted-foreground text-sm">
                Every program is designed with clear, measurable objectives aligned 
                to your business goals.
              </p>
            </div>
            <div className="p-6">
              <CheckCircle className="h-8 w-8 text-accent mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Industry-Certified Experts</h4>
              <p className="text-muted-foreground text-sm">
                Our trainers bring real-world experience and recognized certifications 
                across domains.
              </p>
            </div>
            <div className="p-6">
              <CheckCircle className="h-8 w-8 text-accent mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Flexible Delivery Models</h4>
              <p className="text-muted-foreground text-sm">
                Choose from ILT, VILT, Hybrid, or Self-paced options to suit your 
                organizational needs.
              </p>
            </div>
            <div className="p-6">
              <CheckCircle className="h-8 w-8 text-accent mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Customization Excellence</h4>
              <p className="text-muted-foreground text-sm">
                Tailored content that reflects your industry, culture, and specific 
                learning objectives.
              </p>
            </div>
            <div className="p-6">
              <CheckCircle className="h-8 w-8 text-accent mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Enterprise Scale</h4>
              <p className="text-muted-foreground text-sm">
                Proven capability to deliver large-scale programs across multiple 
                locations and time zones.
              </p>
            </div>
            <div className="p-6">
              <CheckCircle className="h-8 w-8 text-accent mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Dedicated Support</h4>
              <p className="text-muted-foreground text-sm">
                End-to-end program management with a single point of contact for 
                seamless coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Delivery */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="accent-line mb-6" />
              <h2 className="text-headline text-white mb-6">
                Global Delivery Capability
              </h2>
              <p className="text-xl text-white/80 mb-6">
                With operations spanning India and key international markets, we deliver 
                seamless training experiences across geographies while maintaining 
                consistent quality and local relevance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-white/80">
                  <Globe className="h-5 w-5 text-accent mr-3" />
                  Training delivery in 15+ countries
                </li>
                <li className="flex items-center text-white/80">
                  <Globe className="h-5 w-5 text-accent mr-3" />
                  Multi-timezone coordination expertise
                </li>
                <li className="flex items-center text-white/80">
                  <Globe className="h-5 w-5 text-accent mr-3" />
                  Culturally adapted content and delivery
                </li>
                <li className="flex items-center text-white/80">
                  <Globe className="h-5 w-5 text-accent mr-3" />
                  Regional language support available
                </li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <div className="text-6xl font-bold text-accent mb-4">15+</div>
                <div className="text-white text-lg">Countries Served</div>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {["India", "USA", "UK", "UAE", "Singapore", "Australia", "Germany"].map((country) => (
                    <span key={country} className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-headline text-foreground mb-4">
            Partner With RYT Global
          </h2>
          <p className="text-body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your organization build the capabilities 
            needed for sustainable success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/training-request">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                Request Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="font-semibold px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
