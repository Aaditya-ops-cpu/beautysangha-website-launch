import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar, Users, Award } from "lucide-react";

const Competitions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Competitions</span> & Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating talent, promoting creativity, and fostering community engagement through various competitions and cultural events
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-8">
              <Trophy className="h-12 w-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Exciting Events Coming Soon!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We're preparing amazing competitions and events to showcase talent, promote learning, and bring our community together. 
              Stay tuned for announcements about upcoming events.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Events We Organize */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types of Events We Organize
            </h2>
            <p className="text-lg text-muted-foreground">
              Various competitions and events that celebrate talent and promote community engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cultural Competitions</h3>
                <p className="text-muted-foreground">Dance, music, drama, and art competitions celebrating local talent and cultural heritage</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Educational Events</h3>
                <p className="text-muted-foreground">Quiz competitions, essay writing, and educational seminars promoting learning and knowledge sharing</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sports Tournaments</h3>
                <p className="text-muted-foreground">Local sports competitions promoting fitness, teamwork, and healthy competition among youth</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Awareness Campaigns</h3>
                <p className="text-muted-foreground">Social awareness events, health camps, and environmental conservation programs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Event Legacy
            </h2>
            <p className="text-lg text-muted-foreground">
              Over two decades of organizing successful events that have enriched our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <h3 className="text-lg font-semibold mb-2">Events Organized</h3>
                <p className="text-sm text-muted-foreground">Cultural and educational events over 20+ years</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  1000+
                </div>
                <h3 className="text-lg font-semibold mb-2">Participants</h3>
                <p className="text-sm text-muted-foreground">Community members engaged in our events</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <h3 className="text-lg font-semibold mb-2">Winners Recognized</h3>
                <p className="text-sm text-muted-foreground">Talented individuals awarded and celebrated</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated on Upcoming Events
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't miss out on our upcoming competitions and events. Get in touch with us to stay informed about 
            new announcements and participation opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Contact for Updates
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Competitions;