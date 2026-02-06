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

const industries = [
  "IT",
  "BFSI",
  "FinTech",
  "Healthcare",
  "Pharma",
  "Retail",
  "E-commerce",
  "Manufacturing",
  "Telecom",
  "EdTech",
  "Government",
  "Startup",
  "Other",
];

const companySizes = [
  "1–50",
  "51–200",
  "201–500",
  "501–1000",
  "1000–5000",
  "5000+",
];

const departments = [
  "L&D",
  "HR",
  "IT",
  "Sales",
  "Marketing",
  "Operations",
  "Compliance",
  "Finance",
  "Leadership",
];

const countries = [
  "India",
  "USA",
  "UK",
  "EU",
  "APAC",
  "Middle East",
  "Other",
];

const trainingTypes = [
  "Corporate",
  "Campus",
  "Bootcamp",
  "Certification Prep",
  "Leadership",
  "Custom Program",
];

const deliveryModes = ["ILT", "VILT", "Hybrid", "Self-paced"];

const audiences = [
  "Freshers",
  "Individual Contributors",
  "Managers",
  "Senior Managers",
  "Executives",
  "Mixed",
];

const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Mixed"];

const skillCategories = [
  "Salesforce",
  "Data & Analytics",
  "AI & GenAI",
  "Cloud & DevOps",
  "Digital Marketing",
  "Cybersecurity",
  "Product & Agile",
  "Leadership & Soft Skills",
  "Custom",
];

const budgetRanges = [
  "Under ₹1 Lakh",
  "₹1-5 Lakhs",
  "₹5-10 Lakhs",
  "₹10-25 Lakhs",
  "₹25-50 Lakhs",
  "Above ₹50 Lakhs",
  "To be discussed",
];

const TrainingRequest = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTrainingTypes, setSelectedTrainingTypes] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    organizationName: "",
    industry: "",
    companySize: "",
    requestorName: "",
    designation: "",
    department: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    deliveryMode: "",
    targetAudience: "",
    experienceLevel: "",
    participants: "",
    skillCategory: "",
    preferredStartDate: "",
    duration: "",
    budgetRange: "",
    certificationRequired: "",
    customizationRequired: "",
    additionalNotes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const toggleTrainingType = (type: string) => {
    setSelectedTrainingTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Training request submitted!",
      description: "Our team will contact you within 24-48 hours.",
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
                Request Submitted Successfully!
              </h1>
              <p className="text-body-large text-muted-foreground mb-8">
                Thank you for your interest in RYT Global's training services. 
                Our team will review your requirements and get back to you within 
                24-48 business hours.
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
              Training Request Form
            </h1>
            <p className="text-xl text-white/80">
              Tell us about your training requirements and we'll design a 
              customized solution for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-12">
            
            {/* Section 1: Organization Details */}
            <div className="form-section">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                Requestor & Organization Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Organization Name *</label>
                  <Input
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Industry *</label>
                  <Select onValueChange={(v) => handleSelectChange("industry", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {industries.map((ind) => (
                        <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">Company Size *</label>
                  <Select onValueChange={(v) => handleSelectChange("companySize", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {companySizes.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">Requestor Name *</label>
                  <Input
                    name="requestorName"
                    value={formData.requestorName}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Designation</label>
                  <Input
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Department</label>
                  <Select onValueChange={(v) => handleSelectChange("department", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">Official Email *</label>
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
                  <label className="form-label">Contact Number *</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Country *</label>
                  <Select onValueChange={(v) => handleSelectChange("country", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>{country}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">City</label>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Training Requirement */}
            <div className="form-section">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                Training Requirement
              </h2>
              
              <div className="mb-6">
                <label className="form-label">Training Type (Select all that apply) *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                  {trainingTypes.map((type) => (
                    <div 
                      key={type}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox 
                        id={type}
                        checked={selectedTrainingTypes.includes(type)}
                        onCheckedChange={() => toggleTrainingType(type)}
                      />
                      <label htmlFor={type} className="text-sm cursor-pointer">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Mode of Delivery *</label>
                  <Select onValueChange={(v) => handleSelectChange("deliveryMode", v)}>
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
                <div>
                  <label className="form-label">Target Audience *</label>
                  <Select onValueChange={(v) => handleSelectChange("targetAudience", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {audiences.map((aud) => (
                        <SelectItem key={aud} value={aud}>{aud}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">Experience Level</label>
                  <Select onValueChange={(v) => handleSelectChange("experienceLevel", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {experienceLevels.map((level) => (
                        <SelectItem key={level} value={level}>{level}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">Number of Participants</label>
                  <Input
                    name="participants"
                    type="number"
                    value={formData.participants}
                    onChange={handleChange}
                    placeholder="e.g., 25"
                    className="bg-background"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="form-label">Primary Skill Category *</label>
                  <Select onValueChange={(v) => handleSelectChange("skillCategory", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select skill category" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {skillCategories.map((skill) => (
                        <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Section 3: Logistics */}
            <div className="form-section">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                Logistics & Budget
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Preferred Start Date</label>
                  <Input
                    name="preferredStartDate"
                    type="date"
                    value={formData.preferredStartDate}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Duration</label>
                  <Input
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g., 5 days, 2 weeks"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="form-label">Budget Range</label>
                  <Select onValueChange={(v) => handleSelectChange("budgetRange", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {budgetRanges.map((budget) => (
                        <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="form-label">Certification Required?</label>
                  <Select onValueChange={(v) => handleSelectChange("certificationRequired", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="optional">Optional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <label className="form-label">Customization Required?</label>
                  <Select onValueChange={(v) => handleSelectChange("customizationRequired", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      <SelectItem value="yes">Yes - Full customization needed</SelectItem>
                      <SelectItem value="partial">Partial - Some customization</SelectItem>
                      <SelectItem value="no">No - Standard content is fine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <label className="form-label">Additional Notes</label>
                  <Textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Any specific requirements, topics to cover, or questions..."
                    rows={4}
                    className="bg-background"
                  />
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
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default TrainingRequest;
