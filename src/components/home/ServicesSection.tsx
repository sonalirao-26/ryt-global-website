import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Monitor, 
  Shield, 
  Users, 
  Puzzle,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Corporate Training",
    description: "Customized training programs designed to enhance workforce skills and drive organizational performance.",
    href: "/services/corporate-training",
  },
  {
    icon: Monitor,
    title: "Technology Training",
    description: "Cutting-edge technical training across cloud, data, AI, and enterprise platforms.",
    href: "/services/technology-training",
  },
  {
    icon: Shield,
    title: "Compliance & Risk",
    description: "Regulatory compliance and risk management training to protect your organization.",
    href: "/services/compliance-training",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Executive coaching and leadership programs to build future-ready leaders.",
    href: "/services/leadership-training",
  },
  {
    icon: Puzzle,
    title: "Custom Programs",
    description: "Bespoke learning solutions tailored to your unique business challenges.",
    href: "/services/custom-programs",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-headline text-foreground mb-4">
            Comprehensive Training Solutions
          </h2>
          <p className="text-body-large text-muted-foreground">
            We deliver end-to-end learning and development services that transform 
            capabilities and accelerate business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
              key={service.title} 
              to={service.href}
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <service.icon className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center text-accent font-semibold hover:underline"
          >
            View All Services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
