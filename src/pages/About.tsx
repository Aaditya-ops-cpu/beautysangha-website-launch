import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Beauty Sangha</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering rural communities through dedicated social service for over two decades
            </p>
          </div>
        </div>
      </section>

      {/* Organization Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Organization</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Brajaballavpur Beauty Sangha is a registered nonprofit organization (Reg. No. S0050599, West Bengal Act XXVI of 1961; NGO DARPAN ID: WB/2025/0645255) dedicated to social development, education, women empowerment, health, and environmental sustainability for over two decades.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with the vision of creating an inclusive and empowered society, our NGO works across rural communities to uplift marginalized groups through education programs, cultural initiatives, health awareness drives, and sustainable livelihood projects.
              </p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Key Information</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Registration:</strong> S0050599 (West Bengal Act XXVI of 1961)</li>
                  <li><strong>NGO DARPAN ID:</strong> WB/2025/0645255</li>
                  <li><strong>CSR-1 Registration:</strong> CSR00094085</li>
                  <li><strong>PAN Number:</strong> AANAB3417A</li>
                  <li><strong>12A URN NO:</strong> AANAB3417AE20251</li>
                  <li><strong>80G URN NO:</strong> AANAB3417AF20251</li>
                </ul>
              </div>
            </div>
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4">
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Leadership</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold">Prasanta Bera</h4>
                        <p className="text-muted-foreground">President</p>
                        <p className="text-sm text-muted-foreground mt-2">Leading the organization with dedication and vision for community development</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full text-white mr-4">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To build an empowered, inclusive, and sustainable society where every woman, youth, and community member has access to education, skills, healthcare, and equal opportunities. We envision a future where rural communities are self-reliant, socially aware, and environmentally responsible—transforming lives with dignity, hope, and shared growth.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full text-white mr-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to empower women, youth, and underprivileged communities through education, skill development, healthcare, and social awareness. We are committed to creating opportunities for sustainable livelihoods, promoting gender equality, supporting cultural and environmental initiatives, and nurturing leadership at the grassroots level. By combining compassion with action, we aim to bring lasting positive change in rural society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Women's Wing Organization */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Women's Wing Organization
            </h2>
            <p className="text-lg text-muted-foreground">
              Dedicated women leaders driving change in our communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Minati Das", "Chandana Bera", "Kalyani Raut Das", 
              "Nilima Bera", "Joytsna Bera", "Rupali Bera", 
              "Astami Bera", "Pratima Bera", "Archana Bera", 
              "Debashree Bera"
            ].map((name, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-sm text-muted-foreground">Women's Wing Member</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Address and Contact */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Our Location</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl mb-6 opacity-90">
                Brajaballavpur, Barakumarchak<br/>
                P.S. Moyna, Dist. Purba Medinipur<br/>
                West Bengal – 721647
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact Person</h3>
                  <p className="opacity-90">Prasanta Bera (President)</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="opacity-90">+91 9733579666</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;