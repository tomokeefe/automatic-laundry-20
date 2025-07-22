import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Smartphone,
  Leaf,
  Zap,
  Heart,
  Download,
  Apple,
  Play,
  Quote,
  Users,
  Gift,
  Star,
  MessageCircle,
  Clock,
  CheckCircle,
  Sparkles,
  CreditCard,
  DollarSign,
  MapPin,
  Plus,
  Wallet,
  Shield,
  RefreshCw
} from 'lucide-react';

const Residents = () => {
  const [referralData, setReferralData] = useState({
    managerName: '',
    managerEmail: '',
    propertyName: '',
    yourName: '',
    yourEmail: ''
  });

  const [cardOrderData, setCardOrderData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    initialAmount: '20'
  });

  const [cardReloadData, setCardReloadData] = useState({
    cardNumber: '',
    reloadAmount: '10'
  });

  const benefits = [
    {
      icon: <Smartphone className="w-8 h-8 text-laundry-orange" />,
      title: "App Magic",
      description: "Start cycles from your phone, get alerts when done – no more babysitting buzzers. Pro tip: Pair it with Netflix; your load's ready just as the plot thickens."
    },
    {
      icon: <Leaf className="w-8 h-8 text-laundry-orange" />,
      title: "Eco-Smart Gear", 
      description: "Energy-efficient machines that save water and the planet – because who wants a guilty conscience with their clean conscience?"
    },
    {
      icon: <Zap className="w-8 h-8 text-laundry-orange" />,
      title: "Reliability Rocks",
      description: "Family-owned means we fix things fast – no ghosting like that flaky dryer. Share your \"laundry fail\" on our app for a laugh and a chance at free cycles!"
    },
    {
      icon: <Quote className="w-8 h-8 text-laundry-orange" />,
      title: "Resident Rave",
      description: "\"Finally, laundry that doesn't eat my time or my missing socks. The app is a game-changer – thanks, Automatic Laundry User!\" – Tenant in NYC."
    }
  ];

  const funHacks = [
    {
      title: "5 Ways to Fold Like a Pro (Without Folding Under Pressure)",
      icon: <Star className="w-5 h-5 text-laundry-orange" />,
      readTime: "3 min read"
    },
    {
      title: "Laundry Confessions: That Time My Dryer Stole a Whole Outfit – And How We Got It Back",
      icon: <MessageCircle className="w-5 h-5 text-laundry-orange" />,
      readTime: "5 min read"
    }
  ];

  const handleReferralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Referral submitted:', referralData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReferralData({
      ...referralData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-laundry-orange-light via-fresh-white to-laundry-blue-light overflow-hidden py-20">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-laundry-orange text-white">
            For Residents
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-laundry-navy mb-6">
            Laundry That Gets You – 
            <span className="block text-laundry-orange">And Gets It Done</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Hey, fellow laundry warriors – we know the drill: the eternal wait for an open machine, 
            the sock mysteries, the quarter hunts that rival treasure maps. At Automatic Laundry, 
            we're all about keeping it real and making it easy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-laundry-orange hover:bg-laundry-orange text-white">
              <Download className="w-5 h-5 mr-2" />
              Download the App
            </Button>
            <Button size="lg" variant="outline" className="border-laundry-blue text-laundry-blue hover:bg-laundry-blue hover:text-white">
              <Gift className="w-5 h-5 mr-2" />
              Refer Your Manager
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Download Our App, Link Your Card, and Bam!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pay with a tap, no drama. Our Resident Advantage® coinless system means your building's 
              laundry is modern, reliable, so you can reclaim that time for, you know, actual fun.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-laundry-orange-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-laundry-orange" />
                </div>
                <h3 className="text-xl font-semibold text-laundry-navy mb-2">
                  1. Download App
                </h3>
                <p className="text-gray-600">
                  Get the Automatic Laundry app on iOS or Android
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-laundry-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-laundry-blue" />
                </div>
                <h3 className="text-xl font-semibold text-laundry-navy mb-2">
                  2. Link Your Card
                </h3>
                <p className="text-gray-600">
                  Add your payment method securely to the app
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-laundry-navy mb-2">
                  3. Tap & Go!
                </h3>
                <p className="text-gray-600">
                  Start cycles, get alerts, and never hunt for quarters again
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why You'll Dig It Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Why You'll Dig It
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Authentic and Fun
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

      {/* App Download Section */}
      <section className="py-16 bg-laundry-orange text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't Have the App Yet?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Available on iOS and Android. Life's too short for bad laundry – let's make it fresh and funny.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-laundry-orange hover:bg-gray-100">
              <Apple className="w-6 h-6 mr-2" />
              Download for iPhone
            </Button>
            <Button size="lg" className="bg-white text-laundry-orange hover:bg-gray-100">
              <Play className="w-6 h-6 mr-2" />
              Get it on Android
            </Button>
          </div>
          
          <div className="bg-orange-600 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-lg font-semibold">App Preview</h3>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="bg-orange-500 rounded-lg p-3">
                <Clock className="w-5 h-5 mx-auto mb-1" />
                <div>Real-time alerts</div>
              </div>
              <div className="bg-orange-500 rounded-lg p-3">
                <Smartphone className="w-5 h-5 mx-auto mb-1" />
                <div>Remote start</div>
              </div>
              <div className="bg-orange-500 rounded-lg p-3">
                <CheckCircle className="w-5 h-5 mx-auto mb-1" />
                <div>Easy payments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refer Your Manager Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Building Not Set Up Yet?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Refer your property manager and score bonus credits when they sign on. 
              Help bring modern laundry to your building!
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-laundry-navy">
                <Gift className="w-6 h-6 mx-auto mb-2" />
                Refer Your Manager
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleReferralSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="managerName">Manager's Name</Label>
                    <Input
                      id="managerName"
                      name="managerName"
                      value={referralData.managerName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="managerEmail">Manager's Email</Label>
                    <Input
                      id="managerEmail"
                      name="managerEmail"
                      type="email"
                      value={referralData.managerEmail}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="propertyName">Property/Building Name</Label>
                  <Input
                    id="propertyName"
                    name="propertyName"
                    value={referralData.propertyName}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="yourName">Your Name</Label>
                    <Input
                      id="yourName"
                      name="yourName"
                      value={referralData.yourName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="yourEmail">Your Email</Label>
                    <Input
                      id="yourEmail"
                      name="yourEmail"
                      type="email"
                      value={referralData.yourEmail}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-laundry-orange hover:bg-laundry-orange text-white">
                  <Gift className="w-5 h-5 mr-2" />
                  Send Referral & Earn Credits
                </Button>
              </form>
              
              <div className="mt-4 p-4 bg-orange-50 rounded-lg text-center">
                <p className="text-sm text-gray-600">
                  <strong>Bonus:</strong> Earn free wash credits when your manager signs up!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fun Hacks Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Fun Hacks & Tips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Blog-style content to make laundry less of a chore
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funHacks.map((hack, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {hack.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-laundry-navy mb-2 hover:text-laundry-orange transition-colors">
                        {hack.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {hack.readTime}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              More Laundry Hacks
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-laundry-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Laundry Day?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of residents who've made the switch to coinless, hassle-free laundry
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-laundry-orange hover:bg-laundry-orange text-white">
              <Download className="w-5 h-5 mr-2" />
              Download App Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-laundry-navy">
              <Users className="w-5 h-5 mr-2" />
              Share with Friends
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residents;
