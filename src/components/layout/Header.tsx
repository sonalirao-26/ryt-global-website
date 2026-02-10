import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
const services = [{
  title: "Corporate Training",
  href: "/services/corporate-training"
}, {
  title: "Technology Training",
  href: "/services/technology-training"
}, {
  title: "Compliance & Risk Training",
  href: "/services/compliance-training"
}, {
  title: "Leadership & Capability Building",
  href: "/services/leadership-training"
}, {
  title: "Custom Programs",
  href: "/services/custom-programs"
}];
const industries = [{
  title: "IT & Technology",
  href: "/industries/it-technology"
}, {
  title: "BFSI",
  href: "/industries/bfsi"
}, {
  title: "Healthcare & Life Sciences",
  href: "/industries/healthcare"
}, {
  title: "Consulting",
  href: "/industries/consulting"
}, {
  title: "Manufacturing",
  href: "/industries/manufacturing"
}];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img alt="RYT Global" className="h-20 w-auto" src="/lovable-uploads/265b3f15-9a09-4fb0-ba81-33a366a01744.jpg" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn("px-4 py-2 text-sm font-medium transition-colors hover:text-accent", isActive("/") ? "text-accent" : "text-foreground")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn("px-4 py-2 text-sm font-medium transition-colors hover:text-accent", isActive("/about") ? "text-accent" : "text-foreground")}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent hover:text-accent data-[state=open]:text-accent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 bg-white">
                      {services.map(service => <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link to={service.href} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent">
                              <div className="text-sm font-medium">{service.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>)}
                      <li className="border-t mt-2 pt-2">
                        <NavigationMenuLink asChild>
                          <Link to="/services" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent font-medium text-sm">
                            View All Services →
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent hover:text-accent data-[state=open]:text-accent">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[350px] gap-1 p-4 bg-white">
                      {industries.map(industry => <li key={industry.href}>
                          <NavigationMenuLink asChild>
                            <Link to={industry.href} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent">
                              <div className="text-sm font-medium">{industry.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>)}
                      <li className="border-t mt-2 pt-2">
                        <NavigationMenuLink asChild>
                          <Link to="/industries" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent font-medium text-sm">
                            View All Industries →
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/trainers">
                    <NavigationMenuLink className={cn("px-4 py-2 text-sm font-medium transition-colors hover:text-accent", isActive("/trainers") ? "text-accent" : "text-foreground")}>
                      Trainers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/case-studies">
                    <NavigationMenuLink className={cn("px-4 py-2 text-sm font-medium transition-colors hover:text-accent", isActive("/case-studies") ? "text-accent" : "text-foreground")}>
                      Case Studies
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={cn("px-4 py-2 text-sm font-medium transition-colors hover:text-accent", isActive("/contact") ? "text-accent" : "text-foreground")}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/training-request">
              <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-6">
                Request Proposal
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-md hover:bg-muted" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-1">
              <Link to="/" className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/services" className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link to="/industries" className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
                Industries
              </Link>
              <Link to="/trainers" className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
                Trainers
              </Link>
              <Link to="/case-studies" className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
                Case Studies
              </Link>
              <Link to="/contact" className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="pt-4 px-4">
                <Link to="/training-request" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-medium">
                    Request Proposal
                  </Button>
                </Link>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;