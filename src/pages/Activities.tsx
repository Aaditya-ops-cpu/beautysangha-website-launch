import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Users, Leaf, Shield, HandHeart, Camera, Video } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Education & Skill Development",
      description: "Providing quality education and vocational training to empower rural communities with essential skills for sustainable livelihoods.",
      programs: [
        "Adult literacy programs",
        "Computer training centers",
        "Vocational skill development",
        "Children's education support",
        "Scholarship programs"
      ]
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Women Empowerment",
      description: "Empowering women through various initiatives that promote gender equality, leadership development, and economic independence.",
      programs: [
        "Self-help group formation",
        "Microfinance programs",
        "Leadership training",
        "Entrepreneurship development",
        "Legal awareness programs"
      ]
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Community Development",
      description: "Building stronger, more resilient communities through collaborative initiatives and social awareness programs.",
      programs: [
        "Community mobilization",
        "Social awareness campaigns",
        "Cultural events organization",
        "Youth development programs",
        "Community infrastructure projects"
      ]
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Healthcare & Wellness",
      description: "Improving healthcare access and promoting wellness through medical camps, health education, and preventive care programs.",
      programs: [
        "Medical health camps",
        "Health awareness drives",
        "Vaccination campaigns",
        "Maternal and child health",
        "Mental health support"
      ]
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Environmental Conservation",
      description: "Promoting environmental sustainability and conservation through awareness programs and eco-friendly initiatives.",
      programs: [
        "Tree plantation drives",
        "Waste management programs",
        "Water conservation projects",
        "Environmental awareness campaigns",
        "Sustainable agriculture promotion"
      ]
    },
    {
      icon: <HandHeart className="h-10 w-10" />,
      title: "Relief & Rehabilitation",
      description: "Providing emergency relief and rehabilitation support during natural disasters and crisis situations.",
      programs: [
        "Disaster relief operations",
        "Emergency food distribution",
        "Temporary shelter provision",
        "Medical emergency response",
        "Rehabilitation assistance"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Activities</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to create lasting positive impact in rural communities through education, empowerment, and sustainable development
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white">
                        {activity.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{activity.title}</h3>
                      <p className="text-muted-foreground mb-6">{activity.description}</p>
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Key Programs:</h4>
                        <ul className="space-y-2">
                          {activity.programs.map((program, programIndex) => (
                            <li key={programIndex} className="flex items-center text-muted-foreground">
                              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                              {program}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact Over Two Decades
            </h2>
            <p className="text-lg text-muted-foreground">
              Measurable change in the communities we serve
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  20+
                </div>
                <h3 className="text-lg font-semibold mb-2">Years of Service</h3>
                <p className="text-sm text-muted-foreground">Dedicated community service</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <h3 className="text-lg font-semibold mb-2">Families Empowered</h3>
                <p className="text-sm text-muted-foreground">Through various programs</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <h3 className="text-lg font-semibold mb-2">Women Trained</h3>
                <p className="text-sm text-muted-foreground">In skill development programs</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <h3 className="text-lg font-semibold mb-2">Programs Conducted</h3>
                <p className="text-sm text-muted-foreground">Across different sectors</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Media Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Documenting our journey through photos and videos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-6">
                  <Camera className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Photo Gallery</h3>
                <p className="text-muted-foreground mb-6">
                  Browse through our collection of photos showcasing community events, training programs, and social activities.
                </p>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all">
                  View Photos
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-6">
                  <Video className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Video Gallery</h3>
                <p className="text-muted-foreground mb-6">
                  Watch documentaries, event highlights, and testimonials from our community development work.
                </p>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the Change
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join us in our mission to create sustainable development and empower rural communities. 
            Your support can make a significant difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Support Our Cause
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;