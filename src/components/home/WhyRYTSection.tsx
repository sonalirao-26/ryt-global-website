import { CheckCircle, Globe, Award, Headphones, Zap, Users } from "lucide-react";

const differentiators = [
  {
    icon: Globe,
    title: "Global Delivery Capability",
    description: "Seamless training delivery across geographies with local expertise and global standards.",
  },
  {
    icon: Award,
    title: "Industry-Certified Trainers",
    description: "Expert trainers with deep domain knowledge and recognized certifications.",
  },
  {
    icon: Zap,
    title: "Flexible Delivery Modes",
    description: "ILT, VILT, Hybrid, and Self-paced options to suit your organizational needs.",
  },
  {
    icon: Users,
    title: "Enterprise-Focused Approach",
    description: "Programs designed for scale with measurable business outcomes.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "End-to-end program management with a single point of contact.",
  },
  {
    icon: CheckCircle,
    title: "Customization Excellence",
    description: "Tailored content aligned with your industry, culture, and objectives.",
  },
];

const WhyRYTSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="accent-line mb-6" />
            <h2 className="text-headline text-foreground mb-6">
              Why Organizations Choose{" "}
              <span className="gold-accent">RYT Global</span>
            </h2>
            <p className="text-body-large text-muted-foreground mb-8">
              We partner with enterprises to build sustainable capabilities that 
              drive competitive advantage. Our commitment to excellence and 
              outcome-driven approach sets us apart.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Proven Track Record</h4>
                  <p className="text-muted-foreground">500+ successful training programs delivered globally</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Industry Expertise</h4>
                  <p className="text-muted-foreground">Specialized programs for BFSI, IT, Healthcare, and more</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Measurable Outcomes</h4>
                  <p className="text-muted-foreground">Data-driven approach to track learning impact</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div 
                key={item.title}
                className="bg-card p-6 rounded-lg border border-border hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRYTSection;
