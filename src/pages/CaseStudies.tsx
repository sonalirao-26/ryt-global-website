import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Settings, Users, CheckCircle, BarChart } from "lucide-react";

const engagementModels = [
  {
    title: "Project-Based",
    description: "One-time training engagements with defined scope, timeline, and deliverables.",
    features: ["Fixed scope and duration", "Clear milestones", "Defined outcomes", "Post-training assessment"],
  },
  {
    title: "Retainer Model",
    description: "Ongoing partnership with dedicated training resources and priority access.",
    features: ["Dedicated trainer pool", "Priority scheduling", "Volume discounts", "Quarterly reviews"],
  },
  {
    title: "Training-as-a-Service",
    description: "Comprehensive L&D partnership covering all training needs under a managed service.",
    features: ["End-to-end management", "Learning platform access", "Custom content library", "Analytics & reporting"],
  },
];

const lifecycle = [
  {
    step: 1,
    title: "Discovery & Needs Assessment",
    description: "Understanding your organization, challenges, learning objectives, and success metrics.",
  },
  {
    step: 2,
    title: "Solution Design",
    description: "Crafting a customized training solution including content, delivery format, and timeline.",
  },
  {
    step: 3,
    title: "Content Development",
    description: "Creating or customizing training materials aligned with your brand and requirements.",
  },
  {
    step: 4,
    title: "Delivery & Facilitation",
    description: "Expert-led training delivery with engaging methodologies and practical exercises.",
  },
  {
    step: 5,
    title: "Assessment & Feedback",
    description: "Measuring learning outcomes through assessments, surveys, and feedback analysis.",
  },
  {
    step: 6,
    title: "Reporting & Optimization",
    description: "Comprehensive reporting on program impact with recommendations for improvement.",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="accent-line mb-6" />
            <h1 className="text-display text-white mb-6">Engagement Models</h1>
            <p className="text-xl text-white/80">
              Flexible partnership models and a proven delivery approach ensure 
              successful outcomes for every training initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-headline text-foreground mb-4">
              How We Engage
            </h2>
            <p className="text-body-large text-muted-foreground">
              Choose the engagement model that best fits your organizational 
              needs and training requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <div 
                key={model.title}
                className="bg-card rounded-xl p-8 border border-border hover:border-accent/30 transition-colors"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {model.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {model.description}
                </p>
                <ul className="space-y-3">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Lifecycle */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-headline text-foreground mb-4">
              Program Lifecycle
            </h2>
            <p className="text-body-large text-muted-foreground">
              Our proven methodology ensures quality and consistency at every 
              stage of the training journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycle.map((phase) => (
              <div 
                key={phase.step}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold mb-4">
                  {phase.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {phase.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="accent-line mb-6" />
              <h2 className="text-headline text-foreground mb-6">
                Our Delivery Approach
              </h2>
              <p className="text-body-large text-muted-foreground mb-8">
                We combine proven methodologies with innovative techniques to 
                deliver impactful learning experiences that drive real change.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Learner-Centric</h4>
                    <p className="text-muted-foreground text-sm">
                      Programs designed around learner needs, preferences, and real-world application.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Settings className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Practical Application</h4>
                    <p className="text-muted-foreground text-sm">
                      Hands-on exercises, case studies, and simulations that mirror real scenarios.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <BarChart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Measurable Outcomes</h4>
                    <p className="text-muted-foreground text-sm">
                      Clear metrics and assessments to track learning impact and ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <div className="text-center mb-8">
                <FileText className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Case Studies Coming Soon
                </h3>
                <p className="text-muted-foreground">
                  We're documenting our successful engagements. Check back soon 
                  for detailed case studies showcasing our impact.
                </p>
              </div>
              <div className="border-t border-border pt-8">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Want to learn more about our past work?
                </p>
                <Link to="/contact" className="block">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                    Schedule a Discussion
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-headline text-white mb-4">
            Ready to Start Your Training Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how RYT Global can design and deliver impactful 
            training programs for your organization.
          </p>
          <Link to="/training-request">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
              Request Proposal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
