import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  DollarSign, 
  TrendingUp, 
  Settings, 
  Target, 
  CheckCircle, 
  Quote,
  Monitor,
  Smartphone,
  Wrench,
  PieChart,
  Phone,
  Mail
} from 'lucide-react';

const PropertyOwners = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    propertyType: '',
    message: ''
  });

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-laundry-blue" />,
      title: "Revenue Boost",
      description: "Lease our commercial-grade equipment and watch income flow – because quarters add up, but app payments multiply."
    },
    {
      icon: <Monitor className="w-8 h-8 text-laundry-blue" />,
      title: "Efficiency Edge", 
      description: "Remote tech means fewer service calls; imagine resolving a glitch from your desk, not the basement. (Who knew laundry could be this hands-off?)"
    },
    {
      icon: <Target className="w-8 h-8 text-laundry-blue" />,
      title: "Custom Fit",
      description: "Tailored for multi-housing, condos, and campuses – ethical leases that respect your budget and boost tenant retention."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-laundry-blue" />,
      title: "The Proof",
      description: "\"Automatic Laundry transformed our OPL from a cost center to a cash cow – reliable and refreshingly straightforward.\" – Property Manager, Boston."
    }
  ];

  const services = [
    {
      service: "Equipment Leasing",
      feature: "High-quality washers/dryers",
      benefit: "Low upfront costs; maintenance included",
      icon: <Wrench className="w-6 h-6 text-laundry-blue" />
    },
    {
      service: "App-Based Management", 
      feature: "Coinless payments via Resident App",
      benefit: "Increased usage and revenue tracking",
      icon: <Smartphone className="w-6 h-6 text-laundry-blue" />
    },
    {
      service: "Remote Monitoring",
      feature: "Real-time alerts and fixes", 
      benefit: "Reduced on-site fixes; eco-friendly",
      icon: <Monitor className="w-6 h-6 text-laundry-blue" />
    },
    {
      service: "OPL Optimization",
      feature: "Labor/linen cost cutters",
      benefit: "Up to 55% savings; scalable solutions",
      icon: <PieChart className="w-6 h-6 text-laundry-blue" />
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-laundry-blue to-laundry-blue-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white text-laundry-blue">
            For Property Owners
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Monetize Your Laundry Room – 
            <span className="block">Without the Spin Cycle of Stress</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Property owners, you get it: Tenants need clean sheets, but you need steady streams – 
            of revenue, not water. At Automatic Laundry, we specialize in turning underused spaces into profit powerhouses.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-laundry-navy mb-6">
                Transform Your Laundry Operations
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our on-premise laundry (OPL) solutions cut costs by up to 55% on labor and 
                  linens, while our leasing and management services handle the heavy lifting. 
                  No more jammed machines or outdated coins – just seamless app integrations 
                  and remote monitoring that keeps everything running smoothly.
                </p>
                <p>
                  Ready to wash away operational woes? Our experts will audit your setup and 
                  show you the savings. No fluff, just facts (and maybe a dry joke about shrinkage rates).
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-laundry-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-laundry-navy">55%</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
                <div className="text-center">
                  <DollarSign className="w-8 h-8 text-laundry-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-laundry-navy">Revenue</div>
                  <div className="text-sm text-gray-600">Boost</div>
                </div>
                <div className="text-center">
                  <Settings className="w-8 h-8 text-laundry-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-laundry-navy">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-laundry-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-laundry-navy">Ethical</div>
                  <div className="text-sm text-gray-600">Partnerships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Serious Benefits, Subtle Smirk
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-laundry-navy mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Services Breakdown
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your property's needs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-2">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg text-laundry-navy">
                      {service.service}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Key Feature</h4>
                      <p className="text-sm text-gray-600">{service.feature}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Benefit for You</h4>
                      <p className="text-sm text-gray-600">{service.benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-laundry-blue-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-laundry-blue mx-auto mb-6" />
          <blockquote className="text-2xl font-medium text-laundry-navy mb-6">
            "Automatic Laundry transformed our OPL from a cost center to a cash cow – 
            reliable and refreshingly straightforward."
          </blockquote>
          <cite className="text-gray-600">
            – Property Manager, Boston
          </cite>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Request a Free Consultation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experts will audit your setup and show you the savings. 
              No fluff, just facts (and maybe a dry joke about shrinkage rates).
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company/Property Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Input
                    id="propertyType"
                    name="propertyType"
                    placeholder="e.g., Multi-family, Student Housing, Condo Complex"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Tell us about your laundry challenges</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your current setup, challenges, and goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button type="submit" size="lg" className="bg-laundry-blue hover:bg-laundry-blue-dark">
                    <Mail className="w-5 h-5 mr-2" />
                    Request Free Consultation
                  </Button>
                  <Button type="button" variant="outline" size="lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (617) 555-1234
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-laundry-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Maximize Your Laundry Revenue?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of property owners who've transformed their laundry operations with Automatic Laundry
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-laundry-blue hover:bg-laundry-blue-dark">
              <DollarSign className="w-5 h-5 mr-2" />
              Start Monetizing Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-laundry-navy">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyOwners;
