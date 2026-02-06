import { Link } from "react-router-dom";
import { Building2, Landmark, Heart, Briefcase, Factory, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "IT & Technology",
    description: "Digital transformation and technical excellence for tech companies.",
    href: "/industries/it-technology",
  },
  {
    icon: Landmark,
    title: "BFSI",
    description: "Banking, financial services, and insurance sector training solutions.",
    href: "/industries/bfsi",
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    description: "Regulatory and clinical training for healthcare organizations.",
    href: "/industries/healthcare",
  },
  {
    icon: Briefcase,
    title: "Consulting",
    description: "Upskilling programs for consulting firms and professional services.",
    href: "/industries/consulting",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Operational excellence and Industry 4.0 training programs.",
    href: "/industries/manufacturing",
  },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-headline text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-body-large text-muted-foreground">
            Deep domain expertise across key industry verticals enables us to 
            deliver contextually relevant training programs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              to={industry.href}
              className="group text-center p-6 bg-card rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors">
                <industry.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {industry.description}
              </p>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/industries"
            className="inline-flex items-center text-accent font-semibold hover:underline"
          >
            View All Industries <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
