import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, GraduationCap, Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.png";
import heroVideo from "@/assets/hero-video.mp4";
import kidverseLogo from "@/assets/partners/kidverse-logo.png";
import cmstsLogo from "@/assets/partners/cmsts-logo.png";
import connectforLogo from "@/assets/partners/connectfor-logo.png";
import wethechangeLogo from "@/assets/partners/wethechange-logo.jpg";

const Index = () => {
  const partnerOrganizations = [
    { name: "The Kidverse", url: "https://thekidverse.org/", logo: kidverseLogo },
    { name: "CMSTS", url: "https://cmsts.in/", logo: cmstsLogo },
    { name: "Connect For", url: "https://connectfor.org/home", logo: connectforLogo },
    { name: "We The Change India", url: "https://www.wethechangeindia.org/", logo: wethechangeLogo }
  ];

  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Women Empowerment",
      description: "Empowering women through education and skill development programs."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Development",
      description: "Building stronger communities through social awareness and collaboration."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education & Training",
      description: "Providing quality education and vocational training to rural communities."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Environmental Sustainability",
      description: "Promoting eco-friendly practices and environmental conservation."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <video 
                src={heroVideo} 
                autoPlay 
                muted 
                loop 
                className="w-full max-w-4xl h-64 object-cover rounded-lg shadow-lg"
                controls
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Brajaballavpur
              </span>
              <br />Beauty Sangha
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Empowering communities through education, healthcare, and social development for over two decades. 
              Creating an inclusive and sustainable society where every individual has access to equal opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all">
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We focus on key areas that create lasting impact in rural communities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certified & Registered Organization
            </h2>
            <p className="text-lg text-muted-foreground">
              Officially recognized and certified for transparent operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <h3 className="text-lg font-semibold mb-2">Registration</h3>
                <p className="text-sm text-muted-foreground">S0050599 (WBSR Act, 1961)</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <h3 className="text-lg font-semibold mb-2">NGO Darpan</h3>
                <p className="text-sm text-muted-foreground">WB/2025/0645255</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <h3 className="text-lg font-semibold mb-2">PAN Number</h3>
                <p className="text-sm text-muted-foreground">AANAB3417A</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Collaborating with organizations to amplify our impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerOrganizations.map((partner, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{partner.name}</h3>
                  <Button variant="outline" asChild>
                    <a href={partner.url} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Glimpses of our community development work and activities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-muted/50 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Photo Gallery</span>
                </div>
                <p className="text-sm text-muted-foreground">Community events and activities</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-muted/50 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Video Gallery</span>
                </div>
                <p className="text-sm text-muted-foreground">Documentary and event videos</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-muted/50 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Awards Gallery</span>
                </div>
                <p className="text-sm text-muted-foreground">Recognition and achievements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Together, we can create positive change in rural communities and build a more inclusive society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-gray-100" asChild>
              <Link to="/activities">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
