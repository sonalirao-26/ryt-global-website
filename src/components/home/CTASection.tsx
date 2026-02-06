import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-primary via-primary to-charcoal rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border border-accent/20 translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-headline text-white mb-4">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how RYT Global can help your organization build 
              sustainable capabilities and achieve business excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/training-request">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base">
                  Request Proposal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white bg-white text-primary hover:bg-white/80 hover:text-primary font-semibold px-8 py-6 text-base">
                  <Phone className="mr-2 h-5 w-5" />
                  Talk to Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
