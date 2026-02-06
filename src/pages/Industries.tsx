import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Landmark, Heart, Briefcase, Factory, ArrowRight, CheckCircle } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "IT & Technology",
    slug: "it-technology",
    description: "Digital transformation and technical excellence training for technology companies, from startups to global enterprises.",
    challenges: [
      "Rapid technology evolution requiring continuous upskilling",
      "Talent retention in competitive markets",
      "Scaling technical teams efficiently",
      "Maintaining quality across distributed teams",
    ],
    solutions: [
      "Cloud & DevOps certification programs",
      "AI/ML and Data Science training",
      "Agile & Product Management",
      "Leadership development for tech managers",
    ],
  },
  {
    icon: Landmark,
    title: "BFSI",
    slug: "bfsi",
    description: "Comprehensive training solutions for banking, financial services, and insurance organizations navigating digital disruption.",
    challenges: [
      "Regulatory compliance requirements",
      "Digital banking transformation",
      "Risk management and fraud prevention",
      "Customer experience excellence",
    ],
    solutions: [
      "Regulatory compliance training",
      "FinTech and digital banking skills",
      "Risk and compliance certification",
      "Sales and relationship management",
    ],
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    slug: "healthcare",
    description: "Specialized training for healthcare providers, pharmaceutical companies, and life sciences organizations.",
    challenges: [
      "Regulatory compliance (FDA, HIPAA, GxP)",
      "Clinical research and quality standards",
      "Healthcare technology adoption",
      "Patient safety and care quality",
    ],
    solutions: [
      "GxP and regulatory compliance",
      "Clinical research training",
      "Healthcare IT and EHR systems",
      "Quality management systems",
    ],
  },
  {
    icon: Briefcase,
    title: "Consulting",
    slug: "consulting",
    description: "Upskilling programs for consulting firms and professional services organizations to maintain competitive edge.",
    challenges: [
      "Keeping pace with client expectations",
      "Building diverse skill portfolios",
      "Onboarding new consultants efficiently",
      "Thought leadership development",
    ],
    solutions: [
      "Technology consulting skills",
      "Industry-specific expertise",
      "Presentation and communication",
      "Strategic thinking and problem-solving",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    slug: "manufacturing",
    description: "Operational excellence and Industry 4.0 training programs for manufacturing and industrial organizations.",
    challenges: [
      "Industry 4.0 and smart manufacturing",
      "Operational efficiency and lean practices",
      "Safety and compliance requirements",
      "Workforce modernization",
    ],
    solutions: [
      "Lean Six Sigma and operational excellence",
      "IoT and automation training",
      "Safety and EHS compliance",
      "Supply chain management",
    ],
  },
];

const Industries = () => {
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
            <h1 className="text-display text-white mb-6">Industries We Serve</h1>
            <p className="text-xl text-white/80">
              Deep domain expertise across key industry verticals enables us to 
              deliver contextually relevant training programs that address your 
              specific challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Industries List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div 
                key={industry.slug}
                id={industry.slug}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                        <industry.icon className="h-7 w-7 text-accent" />
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                        {industry.title}
                      </h2>
                    </div>
                    <p className="text-body-large text-muted-foreground mb-8">
                      {industry.description}
                    </p>

                    {/* Challenges */}
                    <div className="mb-8">
                      <h3 className="font-semibold text-foreground mb-4">Key Challenges</h3>
                      <ul className="space-y-3">
                        {industry.challenges.map((challenge) => (
                          <li key={challenge} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full bg-charcoal mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/training-request">
                      <Button className="bg-accent hover:bg-accent/90 text-white">
                        Discuss Your Needs
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className={`bg-secondary rounded-2xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="font-semibold text-foreground mb-6">How RYT Global Helps</h3>
                    <div className="space-y-4">
                      {industry.solutions.map((solution) => (
                        <div key={solution} className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-foreground">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {index < industries.length - 1 && (
                  <div className="border-t border-border mt-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-headline text-white mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our expertise extends across many sectors. Contact us to discuss how 
            we can tailor our training solutions for your specific industry needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
