import { Award, Users, Globe } from "lucide-react";

const TrainerExpertiseSection = () => {
  return (
    <section className="section-padding-sm bg-background border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          <div className="lg:col-span-1">
            <div className="accent-line mb-4" />
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Expert Trainers
            </h3>
            <p className="text-muted-foreground mt-2">
              Industry-certified professionals with extensive corporate training experience.
            </p>
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Certified Trainers</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">50,000+</div>
                  <div className="text-sm text-muted-foreground">Professionals Trained</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Years Avg. Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerExpertiseSection;
