import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/logo.jpg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Activities", path: "/activities" },
    { name: "Team", path: "/team" },
    { name: "Competitions", path: "/competitions" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoImage} alt="Beauty Sangha Logo" className="h-12 w-auto" />
            <div className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Beauty Sangha
            </div>
          </Link>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 9733579666</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>beautysangha2001@gmail.com</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-muted rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-primary to-secondary text-white"
                      : "text-foreground hover:text-primary hover:bg-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t pt-3 space-y-2">
                <div className="flex items-center space-x-2 px-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+91 9733579666</span>
                </div>
                <div className="flex items-center space-x-2 px-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>beautysangha2001@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Brajaballavpur Beauty Sangha</h3>
            <p className="text-sm opacity-90 mb-4">
              Empowering communities through education, healthcare, and social development for over two decades.
            </p>
            <div className="space-y-2 text-sm opacity-90">
              <p>Reg. No: S0050599</p>
              <p>NGO DARPAN ID: WB/2025/0645255</p>
              <p>PAN: AANAB3417A</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9733579666</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>beautysangha2001@gmail.com</span>
              </div>
              <p>Brajaballavpur, Barakumarchak</p>
              <p>P.S. Moyna, Dist. Purba Medinipur</p>
              <p>West Bengal – 721647</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm opacity-90">
              <Link to="/about" className="block hover:opacity-75 transition-opacity">About Us</Link>
              <Link to="/activities" className="block hover:opacity-75 transition-opacity">Our Activities</Link>
              <Link to="/team" className="block hover:opacity-75 transition-opacity">Team Members</Link>
              <Link to="/certifications" className="block hover:opacity-75 transition-opacity">Certifications</Link>
              <Link to="/contact" className="block hover:opacity-75 transition-opacity">Contact</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 Brajaballavpur Beauty Sangha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};