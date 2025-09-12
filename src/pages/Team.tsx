import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Crown, Star } from "lucide-react";

const Team = () => {
  const leadership = [
    {
      name: "Prasanta Bera",
      position: "President",
      description: "Leading the organization with vision and dedication towards community development and social empowerment.",
      type: "leadership"
    }
  ];

  const womensWing = [
    { name: "Minati Das", position: "Women's Wing Member" },
    { name: "Chandana Bera", position: "Women's Wing Member" },
    { name: "Kalyani Raut Das", position: "Women's Wing Member" },
    { name: "Nilima Bera", position: "Women's Wing Member" },
    { name: "Joytsna Bera", position: "Women's Wing Member" },
    { name: "Rupali Bera", position: "Women's Wing Member" },
    { name: "Astami Bera", position: "Women's Wing Member" },
    { name: "Pratima Bera", position: "Women's Wing Member" },
    { name: "Archana Bera", position: "Women's Wing Member" },
    { name: "Debashree Bera", position: "Women's Wing Member" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated individuals who drive our mission forward and work tirelessly for community development
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership
            </h2>
            <p className="text-lg text-muted-foreground">
              Our dedicated leadership guiding the organization towards its mission
            </p>
          </div>
          
          <div className="flex justify-center">
            <Card className="max-w-md w-full hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-6">
                  <Crown className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{leadership[0].name}</h3>
                <p className="text-lg text-primary font-semibold mb-4">{leadership[0].position}</p>
                <p className="text-muted-foreground leading-relaxed">{leadership[0].description}</p>
                <div className="flex justify-center mt-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Women's Wing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Women's Wing Organization
            </h2>
            <p className="text-lg text-muted-foreground">
              Empowering women leaders driving change in our communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {womensWing.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                  <div className="mt-4 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Organization Structure
            </h2>
            <p className="text-lg text-muted-foreground">
              Our structured approach to community service and development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4">
                  <Crown className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Executive Leadership</h3>
                <p className="text-muted-foreground">Strategic planning and organizational oversight under presidential leadership</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Women's Wing</h3>
                <p className="text-muted-foreground">Dedicated women's division focusing on empowerment and community development programs</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Program Teams</h3>
                <p className="text-muted-foreground">Specialized teams implementing various community development and social welfare programs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of our mission to create positive change in rural communities. 
            We're always looking for dedicated individuals who share our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Become a Volunteer
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;