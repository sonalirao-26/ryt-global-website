import { 
  Cloud, 
  Database, 
  Brain, 
  Code, 
  TrendingUp, 
  Shield,
  Package,
  Users
} from "lucide-react";

const technologies = [
  {
    icon: Cloud,
    name: "Salesforce",
    color: "text-blue-500",
  },
  {
    icon: Database,
    name: "Data & Analytics",
    color: "text-emerald-500",
  },
  {
    icon: Brain,
    name: "AI & GenAI",
    color: "text-purple-500",
  },
  {
    icon: Code,
    name: "Cloud & DevOps",
    color: "text-orange-500",
  },
  {
    icon: TrendingUp,
    name: "Digital Marketing",
    color: "text-pink-500",
  },
  {
    icon: Shield,
    name: "Cybersecurity",
    color: "text-red-500",
  },
  {
    icon: Package,
    name: "Product & Agile",
    color: "text-cyan-500",
  },
  {
    icon: Users,
    name: "Leadership & Soft Skills",
    color: "text-amber-500",
  },
];

const TechnologiesSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-headline text-white mb-4">
            Platforms & Technologies We Train On
          </h2>
          <p className="text-xl text-white/80">
            Comprehensive training coverage across leading enterprise technologies 
            and emerging platforms.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <tech.icon className={`h-7 w-7 ${tech.color}`} />
              </div>
              <h3 className="text-white font-medium text-sm">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-white/60 text-sm mt-8">
          Training programs available in multiple delivery formats: ILT, VILT, Hybrid, and Self-paced
        </p>
      </div>
    </section>
  );
};

export default TechnologiesSection;
