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

  const mainWing = [
    { name: "Alakesh Bera", position: "Vice President" },
    { name: "Poritosh Das", position: "Secretary" },
    { name: "Biblab Bera", position: "Treasurer" },
    { name: "Ashis Kumar Sahoo", position: "Assistant Secretary" },
    { name: "Rajendra Prasad Bera", position: "Member" },
    { name: "Subhankar Das", position: "Member" },
    { name: "Manojit Bera", position: "Member" },
    { name: "Bubai Bera", position: "Member" },
    { name: "Dinabandhu Bera", position: "Member" },
    { name: "Krishna Gopal Bera", position: "Member" },
    { name: "Srikanta Bera", position: "Member" },
    { name: "Aparesh Bera", position: "Member" },
    { name: "Prakash Bera", position: "Member" },
    { name: "Pratap Bera", position: "Member" },
    { name: "Gobinda Das", position: "Member" }
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

  const risingStaff = [
    { name: "Pabitra Bera", position: "Rising Staff Member" },
    { name: "Subhajit Das", position: "Rising Staff Member" },
    { name: "Biswajit Bera", position: "Rising Staff Member" },
    { name: "Biswarup Bera", position: "Rising Staff Member" },
    { name: "Lakhikanta Bera", position: "Rising Staff Member" },
    { name: "Biswajit Das", position: "Rising Staff Member" },
    { name: "Gopal Bera", position: "Rising Staff Member" },
    { name: "Sidhartha Bera", position: "Rising Staff Member" },
    { name: "Gopal Das", position: "Rising Staff Member" },
    { name: "Ruhitosh Das", position: "Rising Staff Member" },
    { name: "Shibsankar Bera", position: "Rising Staff Member" },
    { name: "Pijush Bera", position: "Rising Staff Member" }
  ];

  const advisoryTeam = [
    { 
      name: "Dr. Sachindra Nath Mandal", 
      position: "Advisor",
      description: "With over 30 years of rich experience, Dr. Mandal is a guiding force for our organization."
    },
    { 
      name: "Mr. Anil Chandra Gayen", 
      position: "Committee Member",
      description: "A retired Head Teacher bringing lifelong dedication to education and community development."
    },
    { 
      name: "Mr. Golok Bihari Barui", 
      position: "Advisor",
      description: "With over 25 years of service in Moyna Block BDO Office, bringing extensive grassroots experience."
    },
    { 
      name: "Mr. Lakshmikant Maiti", 
      position: "Committee Member",
      description: "Indian Railways professional with passion for community service and student programs."
    },
    { 
      name: "Mr. Mukunda Maity", 
      position: "Committee Member",
      description: "Managing Director bringing creativity and innovative ideas to Beauty Sangha's vision."
    }
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

      {/* Main Wing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Main Wing Organization
            </h2>
            <p className="text-lg text-muted-foreground">
              Core team members managing organizational operations and programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mainWing.map((member, index) => (
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

      {/* Women's Wing Section */}
      <section className="py-20">
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

      {/* Rising Staff Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Rising Staff Organization
            </h2>
            <p className="text-lg text-muted-foreground">
              Next generation leaders developing skills and contributing to our mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {risingStaff.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4 group-hover:scale-110 transition-transform">
                    <Star className="h-8 w-8" />
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

      {/* Advisory Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advisory Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced advisors guiding our organization towards excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryTeam.map((advisor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4">
                    <Crown className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{advisor.name}</h3>
                  <p className="text-lg text-primary font-semibold mb-4">{advisor.position}</p>
                  <p className="text-sm text-muted-foreground">{advisor.description}</p>
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