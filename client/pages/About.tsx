import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Heart, 
  Lightbulb, 
  MapPin,
  Mail,
  Calendar,
  Award
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-laundry-blue" />,
      title: "Technology That Talks Back",
      description: "Remote service tech spots issues early, reducing visits and emissions."
    },
    {
      icon: <Award className="w-8 h-8 text-laundry-blue" />,
      title: "Ethical Excellence", 
      description: "Transparent partnerships, no-surprise leasing, and top-tier equipment."
    },
    {
      icon: <Heart className="w-8 h-8 text-laundry-blue" />,
      title: "Community Focus",
      description: "Serving New England and NYC with local hires who know the drill (and the punchlines)."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-laundry-blue-light to-fresh-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-laundry-blue text-white">
            Since 1964
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-laundry-navy mb-6">
            Our Story: From 1964 to Future-Proof Laundry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Automatic Laundry, we're more than machines – we're a family-owned team 
            passionate about making laundry less of a chore and more of a choice.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-laundry-navy mb-6">
                Our Story
                <span className="block text-lg font-normal text-gray-600 mt-2">
                  (With a Hint of Humor)
                </span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1964 and headquartered in Newton, MA, we've grown from local heroes 
                  to Northeast leaders in laundry management. Acquired by industry giants but 
                  staying true to our roots, we serve multi-housing properties, colleges, and 
                  more with ethical practices and cutting-edge tech.
                </p>
                <p>
                  Laundry might not be glamorous, but we've seen it all – from sock-eating dryers 
                  to midnight maintenance calls. That's why we pioneered remote monitoring and the 
                  Resident Advantage® coinless system: to give owners peace of mind and residents 
                  their weekends back.
                </p>
                <p>
                  We're committed to sustainability (fewer trucks on the road means a cleaner planet) 
                  and innovation that actually works. Think of us as the witty wizard in your laundry 
                  room: solving problems before they spin out of control.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-laundry-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-laundry-navy">60+</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-laundry-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-laundry-navy">Northeast</div>
                  <div className="text-sm text-gray-600">Regional Leader</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-laundry-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-laundry-navy">Family</div>
                  <div className="text-sm text-gray-600">Owned & Operated</div>
                </div>
                <div className="text-center">
                  <Lightbulb className="w-8 h-8 text-laundry-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-laundry-navy">Innovation</div>
                  <div className="text-sm text-gray-600">With Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Our Edge
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the laundry management industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-laundry-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-laundry-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            We're expanding and hiring – join a team where training leads to real benefits 
            and the occasional laundry pun.
          </p>
          <p className="text-gray-300 mb-8">
            We believe in giving back to our community, one clean load at a time. When you 
            work with us, you're not just joining a company – you're becoming part of a 
            family that's been making life easier for decades.
          </p>
          
          <Button size="lg" className="bg-laundry-blue hover:bg-laundry-blue-dark">
            <Mail className="w-5 h-5 mr-2" />
            <a href="mailto:careers@automaticlaundry.com">
              careers@automaticlaundry.com
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-laundry-navy mb-8">
            Visit Our Headquarters
          </h2>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-laundry-navy mb-4">
                  Automatic Laundry Services Co., Inc.
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-laundry-blue" />
                    45 Border Street, Newton, MA 02493
                  </p>
                  <p>Serving the Northeast with pride since 1964</p>
                </div>
              </div>
              
              <div className="bg-laundry-blue-light rounded-lg p-6 text-center">
                <h4 className="font-semibold text-laundry-navy mb-2">
                  Ready to Learn More?
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Contact us to see how we can transform your laundry operations
                </p>
                <Button variant="outline" className="border-laundry-blue text-laundry-blue hover:bg-laundry-blue hover:text-white">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
