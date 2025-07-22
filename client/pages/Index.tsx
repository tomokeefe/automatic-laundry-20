import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  TrendingUp,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  DollarSign,
  Smartphone,
  Shield,
} from "lucide-react";

const Index = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-laundry-blue" />,
      title: "50+ Years",
      subtitle: "Family-run reliability in the Northeast",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-laundry-blue" />,
      title: "55% Cost Savings",
      subtitle: "Slash labor and linen expenses with our OPL innovations",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-laundry-blue" />,
      title: "100% Convenience",
      subtitle: "App payments mean no more lost coins – just clean clothes",
    },
  ];

  const blogArticles = [
    // Property Owner Articles
    {
      title:
        "Navigating 2025 Laundry Trends: What Property Owners Need to Know",
      category: "Owners",
      slug: "2025-laundry-trends",
    },
    {
      title: "Maximizing ROI: The Hidden Revenue in Your Laundry Room",
      category: "Owners",
      slug: "maximizing-roi-laundry",
    },
    {
      title: "Smart Property Management: Why OPL Solutions Save 55% on Costs",
      category: "Owners",
      slug: "smart-opl-solutions",
    },
    {
      title: "Remote Monitoring Revolution: Reducing Service Calls by 70%",
      category: "Owners",
      slug: "remote-monitoring-revolution",
    },
    {
      title: "Coinless Systems: The Future of Multi-Housing Laundry Revenue",
      category: "Owners",
      slug: "coinless-systems-future",
    },

    // Resident Articles
    {
      title:
        "Fun Laundry Hacks: 5 Ways to Fold Like a Pro (Without Folding Under Pressure)",
      category: "Residents",
      slug: "fun-laundry-hacks",
    },
    {
      title: "Laundry Confessions: That Time My Dryer Stole a Whole Outfit",
      category: "Residents",
      slug: "laundry-confessions",
    },
    {
      title: "App Magic: Start Your Laundry from Anywhere in Your Building",
      category: "Residents",
      slug: "app-magic-remote-start",
    },
    {
      title: "Eco-Smart Washing: Save the Planet One Load at a Time",
      category: "Residents",
      slug: "eco-smart-washing",
    },
    {
      title: "The Great Sock Mystery: Where Do They Really Go?",
      category: "Residents",
      slug: "great-sock-mystery",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-laundry-blue-light via-fresh-white to-laundry-orange-light overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-laundry-blue/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-laundry-orange/10 rounded-full blur-xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-laundry-blue text-white">
                Family-Owned Since 1964
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold text-laundry-navy mb-6 leading-tight">
                Automatic Laundry:
                <span className="block text-laundry-blue">
                  Where Fresh Starts and Frustrations End
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Family-owned since 1964, delivering ethical, tech-driven laundry
                solutions for property owners and residents. Monetize smarter or
                wash easier—your choice.
              </p>

              <div className="flex flex-col gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="bg-laundry-blue hover:bg-laundry-blue-dark"
                >
                  <Link to="/owners">
                    <DollarSign className="w-5 h-5 mr-2" />
                    For Owners: Monetize Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-laundry-orange text-laundry-orange hover:bg-laundry-orange hover:text-white"
                >
                  <Link to="/residents">
                    <Smartphone className="w-5 h-5 mr-2" />
                    For Residents: Get the App
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto"
                role="img"
                aria-label="Automatic Laundry mobile app interface preview"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className="w-12 h-12 bg-laundry-blue rounded-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-laundry-navy">
                      Laundry App
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Modern. Coinless. Simple.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-laundry-blue-light rounded-lg">
                    <span className="text-sm font-medium">
                      Machine #3 - Washer
                    </span>
                    <Badge className="bg-green-100 text-green-800">
                      Available
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">
                      Machine #7 - Dryer
                    </span>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      15 min left
                    </Badge>
                  </div>
                  <Button className="w-full bg-laundry-blue hover:bg-laundry-blue-dark">
                    Start New Cycle
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Why Choose Automatic Laundry?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over five decades of innovation in laundry management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{stat.icon}</div>
                  <h3 className="text-2xl font-bold text-laundry-navy mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600">{stat.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-laundry-navy mb-4">
            See Our Solutions in Action
          </h2>
          <p className="text-gray-600 mb-8">
            Discover how we're revolutionizing laundry in New England's biggest
            communities
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="aspect-video bg-gradient-to-br from-laundry-blue-light to-laundry-orange-light rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="w-0 h-0 border-l-[12px] border-l-laundry-blue border-y-[8px] border-y-transparent ml-1"></div>
                </div>
                <h3 className="text-xl font-semibold text-laundry-navy mb-2">
                  Demo Video Coming Soon
                </h3>
                <p className="text-gray-600">
                  Watch real users experience our game-changing technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Latest Insights & Tips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert advice for property owners and helpful hacks for residents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Property Owner Articles */}
            <div>
              <h3 className="text-xl font-semibold text-laundry-navy mb-6 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-laundry-blue" />
                For Property Owners
              </h3>
              <div className="space-y-4">
                {blogArticles.slice(0, 5).map((article, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <Link to={`/blog/${article.slug}`} className="block">
                        <h4 className="font-medium text-laundry-navy hover:text-laundry-blue transition-colors">
                          {article.title}
                        </h4>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Badge variant="outline" className="mr-2">
                            {article.category}
                          </Badge>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Resident Articles */}
            <div>
              <h3 className="text-xl font-semibold text-laundry-navy mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-laundry-orange" />
                For Residents
              </h3>
              <div className="space-y-4">
                {blogArticles.slice(5, 10).map((article, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <Link to={`/blog/${article.slug}`} className="block">
                        <h4 className="font-medium text-laundry-navy hover:text-laundry-orange transition-colors">
                          {article.title}
                        </h4>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Badge
                            variant="outline"
                            className="mr-2 border-laundry-orange text-laundry-orange"
                          >
                            {article.category}
                          </Badge>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                View All Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-laundry-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Laundry Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied property owners and residents across the
            Northeast
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-laundry-blue hover:bg-laundry-blue-dark"
              asChild
            >
              <Link to="/owners">
                <Shield className="w-5 h-5 mr-2" />
                Start Monetizing
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-laundry-navy"
              asChild
            >
              <Link to="/contact">
                <span style={{ color: "rgb(4, 4, 4)" }}>
                  Get Free Consultation
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
