import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, FileText, CheckCircle, Users, Building } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "West Bengal Societies Registration",
      details: "Registration Number: S0050599",
      description: "Registered under West Bengal Societies Registration Act (XXVI of 1961)",
      authority: "Government of West Bengal",
      year: "2001"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "NGO Darpan Registration",
      details: "DARPAN ID: WB/2025/0645255",
      description: "Registered with NITI Aayog's NGO Darpan portal for transparency and accountability",
      authority: "NITI Aayog, Government of India",
      year: "2025"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "12A Registration Certificate",
      details: "URN: AANAB3417AE20251",
      description: "Income Tax exemption certificate under Section 12A of Income Tax Act, 1961",
      authority: "Income Tax Department",
      year: "2025"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "80G Registration Certificate",
      details: "URN: AANAB3417AF20251",
      description: "Tax exemption certificate for donors under Section 80G of Income Tax Act",
      authority: "Income Tax Department",
      year: "2025"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "CSR-1 Registration",
      details: "Registration: CSR00094085",
      description: "Corporate Social Responsibility registration for receiving CSR funds",
      authority: "Ministry of Corporate Affairs",
      year: "2025"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "PAN Registration",
      details: "PAN: AANAB3417A",
      description: "Permanent Account Number for financial transactions and tax compliance",
      authority: "Income Tax Department",
      year: "2025"
    }
  ];

  const recognitions = [
    {
      title: "NITI Aayog Recognition",
      description: "Officially recognized by NITI Aayog through NGO Darpan registration, ensuring transparency and credibility in operations."
    },
    {
      title: "Tax Exemption Status",
      description: "Granted 12A and 80G certifications, enabling tax-deductible donations and supporting our fundraising capabilities."
    },
    {
      title: "CSR Eligibility",
      description: "Registered for Corporate Social Responsibility funding, allowing partnerships with corporate entities for community development."
    },
    {
      title: "Legal Compliance",
      description: "Full compliance with all legal requirements for NGO operations in West Bengal and India."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certifications</span> & Recognition
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our official registrations and certifications demonstrate our commitment to transparency, 
              accountability, and legal compliance in all our operations
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Official Certifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive legal documentation and government approvals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full text-white group-hover:scale-110 transition-transform">
                        {cert.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
                      <p className="text-sm font-semibold text-primary mb-2">{cert.details}</p>
                      <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-medium">Authority: {cert.authority}</p>
                        <p>Year: {cert.year}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition and Impact */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recognition & Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              What our certifications mean for our organization and the communities we serve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">{recognition.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{recognition.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              Maintaining the highest standards of governance and accountability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">All operations conducted with complete transparency and regular reporting to stakeholders</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accountability</h3>
                <p className="text-muted-foreground">Rigorous monitoring and evaluation systems ensure responsible use of resources</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p className="text-muted-foreground">Measurable outcomes and sustained positive impact in the communities we serve</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Verification */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Verify Our Credentials
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            All our certifications can be independently verified through the respective government portals. 
            Contact us for any documentation or verification requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Request Documents
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

export default Certifications;