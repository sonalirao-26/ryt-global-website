import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-deep-navy to-royal-blue text-white overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal/30 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-sky-blue/20 blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-custom section-padding-sm relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/lovable-uploads/265b3f15-9a09-4fb0-ba81-33a366a01744.jpg" alt="RYT Global" className="h-16 w-auto bg-white rounded p-2" />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              RYT Global LLP is a trusted corporate training and capability-building partner 
              serving enterprise clients across India and internationally.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal hover:shadow-lg flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal hover:shadow-lg flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-teal transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-teal transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-white/80 hover:text-teal transition-colors text-sm">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="text-white/80 hover:text-teal transition-colors text-sm">
                  Trainer Expertise
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/80 hover:text-teal transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-teal transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/corporate-training" className="text-white/80 hover:text-teal transition-colors text-sm">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link to="/services/technology-training" className="text-white/80 hover:text-teal transition-colors text-sm">
                  Technology Training
                </Link>
              </li>
              <li>
                <Link to="/services/compliance-training" className="text-white/80 hover:text-teal transition-colors text-sm">
                  Compliance & Risk
                </Link>
              </li>
              <li>
                <Link to="/services/leadership-training" className="text-white/80 hover:text-teal transition-colors text-sm">
                  Leadership Development
                </Link>
              </li>
              <li>
                <Link to="/services/custom-programs" className="text-white/80 hover:text-teal transition-colors text-sm">
                  Custom Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  RYT Global LLP<br />
                  #71, Ground Floor, Gnanabharathi<br />
                  1st Block, 2nd Main, 5th Cross<br />
                  Kengeri, Bengaluru – 560059<br />
                  Karnataka, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal flex-shrink-0" />
                <a href="tel:9380442421" className="text-white/80 hover:text-teal transition-colors text-sm">
                  +91 9380442421
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal flex-shrink-0" />
                <a href="mailto:info@rytglobal.com" className="text-white/80 hover:text-teal transition-colors text-sm">
                  info@rytglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} RYT Global LLP. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-white/60 hover:text-teal transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-teal transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-deep-navy via-royal-blue via-sky-blue to-teal" />
    </footer>
  );
};

export default Footer;
