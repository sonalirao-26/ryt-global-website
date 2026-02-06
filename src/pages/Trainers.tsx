import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Globe, 
  Users, 
  CheckCircle,
  ArrowRight,
  Cloud,
  Database,
  Brain,
  Code,
  TrendingUp,
  Shield,
  Package
} from "lucide-react";

const domains = [
  { icon: Cloud, name: "Salesforce", count: "50+ trainers" },
  { icon: Database, name: "Data & Analytics", count: "40+ trainers" },
  { icon: Brain, name: "AI & GenAI", count: "30+ trainers" },
  { icon: Code, name: "Cloud & DevOps", count: "45+ trainers" },
  { icon: TrendingUp, name: "Digital Marketing", count: "25+ trainers" },
  { icon: Shield, name: "Cybersecurity", count: "20+ trainers" },
  { icon: Package, name: "Product & Agile", count: "35+ trainers" },
  { icon: Users, name: "Leadership", count: "30+ trainers" },
];

const certifications = [
  "Salesforce Certified",
  "AWS Certified",
  "Azure Certified",
  "Google Cloud Certified",
  "Scrum Alliance",
  "SAFe Certified",
  "PMP / PMI-ACP",
  "Six Sigma",
  "CISSP / CISM",
  "Data Science Credentials",
];

const Trainers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="accent-line mb-6" />
            <h1 className="text-display text-white mb-6">Trainer Expertise</h1>
            <p className="text-xl text-white/80">
              Our network of industry-certified trainers brings deep domain knowledge, 
              real-world experience, and exceptional facilitation skills to every program.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding-sm bg-background border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Certified Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Years Avg. Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50K+</div>
              <div className="text-muted-foreground">Professionals Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Expertise */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-headline text-foreground mb-4">
              Domains Covered
            </h2>
            <p className="text-body-large text-muted-foreground">
              Our trainers specialize across key technology and business domains, 
              ensuring expert delivery regardless of your training needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {domains.map((domain) => (
              <div 
                key={domain.name}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent/30 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <domain.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{domain.name}</h3>
                <p className="text-sm text-muted-foreground">{domain.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Profile */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="accent-line mb-6" />
              <h2 className="text-headline text-foreground mb-6">
                What Sets Our Trainers Apart
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Industry Certifications</h4>
                    <p className="text-muted-foreground">
                      All trainers hold recognized certifications from leading technology 
                      vendors and professional bodies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Global Delivery Experience</h4>
                    <p className="text-muted-foreground">
                      Experienced in delivering training across geographies, cultures, 
                      and time zones with consistent quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Corporate Background</h4>
                    <p className="text-muted-foreground">
                      Real-world experience in leading organizations, bringing 
                      practical insights to every session.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Certifications Held
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span 
                    key={cert}
                    className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground border border-border"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join as Trainer CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary to-charcoal rounded-2xl p-12 text-center">
            <h2 className="text-headline text-white mb-4">
              Are You a Trainer?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join our network of expert trainers and deliver impactful learning 
              experiences to leading organizations worldwide.
            </p>
            <Link to="/trainer-registration">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                Register as Trainer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainers;
