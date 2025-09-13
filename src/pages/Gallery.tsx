import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Image, Video, FileText, Calendar, Trophy, Newspaper } from "lucide-react";

const Gallery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore our activities, events, and achievements through photos, videos, and stories
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-7 mb-8">
              <TabsTrigger value="photos" className="flex items-center space-x-2">
                <Image className="h-4 w-4" />
                <span>Photo Gallery</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center space-x-2">
                <Video className="h-4 w-4" />
                <span>Video Gallery</span>
              </TabsTrigger>
              <TabsTrigger value="publications" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Publications</span>
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Events</span>
              </TabsTrigger>
              <TabsTrigger value="news" className="flex items-center space-x-2">
                <Newspaper className="h-4 w-4" />
                <span>News & Stories</span>
              </TabsTrigger>
              <TabsTrigger value="press" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Press Coverage</span>
              </TabsTrigger>
              <TabsTrigger value="press-release" className="flex items-center space-x-2">
                <Trophy className="h-4 w-4" />
                <span>Press Release</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="photos">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-center">Photo Gallery</h2>
                <Card className="border-dashed border-2 border-muted">
                  <CardContent className="p-12 text-center">
                    <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Upload Photos</h3>
                    <p className="text-muted-foreground mb-4">
                      Drag and drop your photos here or click to browse
                    </p>
                    <div className="text-sm text-muted-foreground">
                      Supported formats: JPG, PNG, GIF
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-center">Video Gallery</h2>
                <Card className="border-dashed border-2 border-muted">
                  <CardContent className="p-12 text-center">
                    <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Upload Videos</h3>
                    <p className="text-muted-foreground mb-4">
                      Drag and drop your videos here or click to browse
                    </p>
                    <div className="text-sm text-muted-foreground">
                      Supported formats: MP4, AVI, MOV
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="publications">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-center">Publications</h2>
                <Card className="border-dashed border-2 border-muted">
                  <CardContent className="p-12 text-center">
                    <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Upload Publications</h3>
                    <p className="text-muted-foreground mb-4">
                      Share newsletters, reports, and other publications
                    </p>
                    <div className="text-sm text-muted-foreground">
                      Supported formats: PDF, DOC, DOCX
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-center">Events</h2>
                <Card className="border-dashed border-2 border-muted">
                  <CardContent className="p-12 text-center">
                    <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Upload Event Content</h3>
                    <p className="text-muted-foreground mb-4">
                      Share photos and videos from events and activities
                    </p>
                    <div className="text-sm text-muted-foreground">
                      All media formats supported
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="news">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-center">News & Stories</h2>
                <Card className="border-dashed border-2 border-muted">
                  <CardContent className="p-12 text-center">
                    <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Upload News & Stories</h3>
                    <p className="text-muted-foreground mb-4">
                      Share impact stories and news about your work
                    </p>
                    <div className="text-sm text-muted-foreground">
                      Text, images, and documents supported
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="press">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-center">Press Coverage</h2>
                <Card className="border-dashed border-2 border-muted">
                  <CardContent className="p-12 text-center">
                    <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Upload Press Coverage</h3>
                    <p className="text-muted-foreground mb-4">
                      Share media coverage and press mentions
                    </p>
                    <div className="text-sm text-muted-foreground">
                      Articles, images, and video clips supported
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="press-release">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-center">Press Release</h2>
                <Card className="border-dashed border-2 border-muted">
                  <CardContent className="p-12 text-center">
                    <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Upload Press Releases</h3>
                    <p className="text-muted-foreground mb-4">
                      Share official press releases and announcements
                    </p>
                    <div className="text-sm text-muted-foreground">
                      PDF, DOC, and text formats supported
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;