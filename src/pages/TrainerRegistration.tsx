import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const deliveryModes = ["ILT", "VILT", "Hybrid", "Any"];

const industryExperience = [
  "IT & Technology",
  "BFSI",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Consulting",
  "Education",
  "Government",
  "Other",
];

const skillCategories = [
  "Salesforce",
  "Data & Analytics",
  "AI & GenAI",
  "Cloud & DevOps",
  "Digital Marketing",
  "Cybersecurity",
  "Product & Agile",
  "Leadership & Soft Skills",
];

const certifications = [
  { category: "Salesforce", certs: ["Administrator", "Developer", "Architect", "Consultant", "Marketing Cloud"] },
  { category: "AWS", certs: ["Solutions Architect", "Developer", "SysOps", "DevOps", "Specialty"] },
  { category: "Azure", certs: ["Administrator", "Developer", "Architect", "Data Engineer", "AI Engineer"] },
  { category: "Google Cloud", certs: ["Associate", "Professional", "Data Engineer", "ML Engineer"] },
  { category: "Scrum / SAFe", certs: ["CSM", "CSPO", "SAFe Agilist", "SAFe Practitioner", "PSM", "PSPO"] },
  { category: "Data / AI", certs: ["Data Science", "Machine Learning", "Deep Learning", "NLP", "Computer Vision"] },
];

const experienceRanges = [
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10-15 years",
  "15+ years",
];

const trainingExperienceRanges = [
  "Less than 1 year",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years",
];

const audienceSizes = [
  "1-10",
  "10-25",
  "25-50",
  "50-100",
  "100+",
];

const TrainerRegistration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    location: "",
    willingToTravel: "",
    preferredDeliveryMode: "",
    currentRole: "",
    totalExperience: "",
    trainingExperience: "",
    trainerType: "",
    audienceSize: "",
    contentOwnership: "",
    customizationCapability: "",
    languages: "",
    expectedDailyRate: "",
    availability: "",
    linkedinUrl: "",
    demoVideoUrl: "",
    ndaAgreement: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry]
    );
  };

  const toggleCertification = (cert: string) => {
    setSelectedCertifications((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.ndaAgreement) {
      toast({
        title: "Agreement required",
        description: "Please agree to the NDA terms to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Registration submitted!",
      description: "Our team will review your profile and get back to you.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding bg-background min-h-[70vh] flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-12 w-12 text-accent" />
              </div>
              <h1 className="text-headline text-foreground mb-4">
                Registration Submitted!
              </h1>
              <p className="text-body-large text-muted-foreground mb-8">
                Thank you for your interest in joining RYT Global's trainer network. 
                Our team will review your profile and contact you within 5-7 business days.
              </p>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="accent-line mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trainer Registration
            </h1>
            <p className="text-xl text-white/80">
              Join our network of expert trainers and deliver impactful learning 
              experiences to leading organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-12">
            
            {/* Section 1: Personal Details */}
            <div className="form-section">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                Personal Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Full Name *</label>
                  <Input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Mobile Number *</label>
                  <Input
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Location (City, Country) *</label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Bengaluru, India"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Willing to Travel? *</label>
                  <Select onValueChange={(v) => handleSelectChange("willingToTravel", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      <SelectItem value="yes">Yes - Willing to travel</SelectItem>
                      <SelectItem value="limited">Limited - Within region</SelectItem>
                      <SelectItem value="no">No - Virtual only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">Preferred Delivery Mode *</label>
                  <Select onValueChange={(v) => handleSelectChange("preferredDeliveryMode", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {deliveryModes.map((mode) => (
                        <SelectItem key={mode} value={mode}>{mode}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Section 2: Professional Profile */}
            <div className="form-section">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                Professional Profile
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Current Role *</label>
                  <Input
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Senior Technical Trainer"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Total Experience *</label>
                  <Select onValueChange={(v) => handleSelectChange("totalExperience", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {experienceRanges.map((range) => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">Training Experience *</label>
                  <Select onValueChange={(v) => handleSelectChange("trainingExperience", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {trainingExperienceRanges.map((range) => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">Trainer Type *</label>
                  <Select onValueChange={(v) => handleSelectChange("trainerType", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      <SelectItem value="corporate">Corporate (Full-time)</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6">
                <label className="form-label">Industry Experience (Select all that apply)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                  {industryExperience.map((industry) => (
                    <div key={industry} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`ind-${industry}`}
                        checked={selectedIndustries.includes(industry)}
                        onCheckedChange={() => toggleIndustry(industry)}
                      />
                      <label htmlFor={`ind-${industry}`} className="text-sm cursor-pointer">
                        {industry}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Technology Expertise */}
            <div className="form-section">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                Technology Expertise
              </h2>
              
              <div className="mb-6">
                <label className="form-label">Primary Skill Areas (Select all that apply) *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                  {skillCategories.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`skill-${skill}`}
                        checked={selectedSkills.includes(skill)}
                        onCheckedChange={() => toggleSkill(skill)}
                      />
                      <label htmlFor={`skill-${skill}`} className="text-sm cursor-pointer">
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="form-label">Certifications Held (Select all that apply)</label>
                <div className="space-y-4 mt-2">
                  {certifications.map((group) => (
                    <div key={group.category}>
                      <p className="text-sm font-medium text-foreground mb-2">{group.category}</p>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                        {group.certs.map((cert) => (
                          <div key={cert} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`cert-${cert}`}
                              checked={selectedCertifications.includes(`${group.category}-${cert}`)}
                              onCheckedChange={() => toggleCertification(`${group.category}-${cert}`)}
                            />
                            <label htmlFor={`cert-${cert}`} className="text-xs cursor-pointer">
                              {cert}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 4: Training Capability */}
            <div className="form-section">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                Training Capability
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Audience Size You Can Handle</label>
                  <Select onValueChange={(v) => handleSelectChange("audienceSize", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {audienceSizes.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">Content Ownership</label>
                  <Select onValueChange={(v) => handleSelectChange("contentOwnership", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      <SelectItem value="own">Own content available</SelectItem>
                      <SelectItem value="can-create">Can create custom content</SelectItem>
                      <SelectItem value="client-provided">Prefer client-provided content</SelectItem>
                      <SelectItem value="any">Any of the above</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">Customization Capability</label>
                  <Select onValueChange={(v) => handleSelectChange("customizationCapability", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      <SelectItem value="full">Full customization</SelectItem>
                      <SelectItem value="partial">Partial customization</SelectItem>
                      <SelectItem value="standard">Standard content only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">Languages</label>
                  <Input
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    placeholder="e.g., English, Hindi, Kannada"
                    className="bg-background"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Commercials */}
            <div className="form-section">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                Commercials & Availability
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Expected Daily Rate (INR)</label>
                  <Input
                    name="expectedDailyRate"
                    value={formData.expectedDailyRate}
                    onChange={handleChange}
                    placeholder="e.g., 25000"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Availability</label>
                  <Input
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    placeholder="e.g., 10 days/month, Weekends only"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">LinkedIn Profile URL</label>
                  <Input
                    name="linkedinUrl"
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/..."
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Demo Video Link (optional)</label>
                  <Input
                    name="demoVideoUrl"
                    type="url"
                    value={formData.demoVideoUrl}
                    onChange={handleChange}
                    placeholder="YouTube or Vimeo link"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="mt-8 p-4 bg-secondary rounded-lg">
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="nda"
                    checked={formData.ndaAgreement}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, ndaAgreement: checked as boolean })
                    }
                  />
                  <label htmlFor="nda" className="text-sm text-muted-foreground cursor-pointer">
                    I agree to maintain confidentiality regarding all client information, 
                    training materials, and business details shared by RYT Global. I understand 
                    that this registration is subject to verification and does not guarantee 
                    immediate engagement. *
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                type="submit" 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default TrainerRegistration;
