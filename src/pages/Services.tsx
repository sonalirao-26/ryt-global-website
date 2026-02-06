import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Monitor, 
  Shield, 
  Users, 
  Puzzle,
  ArrowRight,
  CheckCircle,
  Building,
  Video,
  Laptop
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Corporate Training",
    description: "Customized training programs designed to enhance workforce skills, boost productivity, and drive organizational performance across all levels.",
    features: ["Onboarding & Induction Programs", "Skill Development Workshops", "Process Training", "Product Knowledge Training"],
    deliveryModes: ["ILT", "VILT", "Hybrid"],
    audience: "All employee levels",
    href: "/services/corporate-training",
  },
  {
    icon: Monitor,
    title: "Technology Training",
    description: "Cutting-edge technical training across cloud platforms, data technologies, AI/ML, and enterprise systems to keep your teams ahead of the curve.",
    features: ["Cloud Platforms (AWS, Azure, GCP)", "Data Science & Analytics", "AI & Machine Learning", "Enterprise Applications"],
    deliveryModes: ["ILT", "VILT", "Hybrid", "Self-paced"],
    audience: "Technical & IT professionals",
    href: "/services/technology-training",
  },
  {
    icon: Shield,
    title: "Compliance & Risk Training",
    description: "Comprehensive regulatory compliance and risk management training to protect your organization and ensure adherence to industry standards.",
    features: ["Regulatory Compliance", "Risk Management", "Data Privacy & Security", "Industry-specific Compliance"],
    deliveryModes: ["ILT", "VILT", "Self-paced"],
    audience: "All employees, specialized for compliance teams",
    href: "/services/compliance-training",
  },
  {
    icon: Users,
    title: "Leadership & Capability Building",
    description: "Executive coaching and leadership development programs to build future-ready leaders who can navigate complexity and drive results.",
    features: ["Executive Leadership Programs", "Management Development", "Coaching & Mentoring", "Strategic Thinking"],
    deliveryModes: ["ILT", "VILT", "Hybrid"],
    audience: "Managers, senior leaders, executives",
    href: "/services/leadership-training",
  },
  {
    icon: Puzzle,
    title: "Custom / Bespoke Programs",
    description: "Tailored learning solutions designed from the ground up to address your unique business challenges, culture, and strategic objectives.",
    features: ["Needs Assessment", "Custom Content Development", "Blended Learning Design", "Program Evaluation"],
    deliveryModes: ["All formats available"],
    audience: "Organization-specific",
    href: "/services/custom-programs",
  },
];

const deliveryModes = [
  {
    icon: Building,
    title: "Instructor-Led Training (ILT)",
    description: "In-person classroom training with expert facilitators for maximum engagement and hands-on learning.",
  },
  {
    icon: Video,
    title: "Virtual Instructor-Led (VILT)",
    description: "Live online training sessions with interactive features, breakout rooms, and real-time Q&A.",
  },
  {
    icon: Laptop,
    title: "Hybrid & Self-Paced",
    description: "Flexible blended learning combining live sessions with on-demand content for maximum convenience.",
  },
];

const Services = () => {
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      setTimeout(() => {
        const el = document.getElementById(slug);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [slug]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="accent-line mb-6" />
            <h1 className="text-display text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/80">
              Comprehensive training and capability-building solutions designed to 
              transform your workforce and accelerate business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                id={service.href.split("/").pop()}
                className={`scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-body-large text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-4 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Delivery: </span>
                      <span className="font-medium text-foreground">{service.deliveryModes.join(", ")}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Audience: </span>
                      <span className="font-medium text-foreground">{service.audience}</span>
                    </div>
                  </div>
                  <Link to="/training-request">
                    <Button className="bg-accent hover:bg-accent/90 text-white">
                      Request Program Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className={`bg-secondary rounded-2xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-accent/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Modes */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-headline text-foreground mb-4">
              Flexible Delivery Options
            </h2>
            <p className="text-body-large text-muted-foreground">
              Choose the delivery mode that best suits your organizational needs and learner preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliveryModes.map((mode) => (
              <div key={mode.title} className="bg-card p-8 rounded-xl border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <mode.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {mode.title}
                </h3>
                <p className="text-muted-foreground">
                  {mode.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-headline text-white mb-4">
            Ready to Elevate Your Training Programs?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how RYT Global can help design and deliver impactful 
            learning experiences for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/training-request">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                Request Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
