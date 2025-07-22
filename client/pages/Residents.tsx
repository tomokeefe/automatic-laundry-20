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

  const handleCardOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Card order submitted:', cardOrderData);
    // Here you would integrate with payment processor and card ordering system
    alert('Card order submitted! You will receive a confirmation email shortly.');
  };

  const handleCardReloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Card reload submitted:', cardReloadData);
    // Here you would process the card reload
    alert(`$${cardReloadData.reloadAmount} has been added to your card! Funds are available immediately.`);
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

      {/* Payment Options Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Two Ways to Pay - Choose What Works for You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you prefer our mobile app or a physical card, we've got you covered.
              Both work at any Automatic Laundry location!
            </p>
          </div>

          <Tabs defaultValue="app" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="app" className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4" />
                <span>Mobile App</span>
              </TabsTrigger>
              <TabsTrigger value="card" className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span>Physical Card</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="app" className="space-y-8">
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
                      2. Add Payment
                    </h3>
                    <p className="text-gray-600">
                      Link your credit card or bank account securely
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
            </TabsContent>

            <TabsContent value="card" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-laundry-navy mb-2">
                      1. Order Your Card
                    </h3>
                    <p className="text-gray-600">
                      Get a physical laundry card delivered to your address
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-laundry-navy mb-2">
                      2. Add Money
                    </h3>
                    <p className="text-gray-600">
                      Load money online or at any location kiosk
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-laundry-navy mb-2">
                      3. Use Anywhere
                    </h3>
                    <p className="text-gray-600">
                      Works at any Automatic Laundry location across the Northeast
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-laundry-navy mb-2">
                  Universal Card Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>✓ Works at 500+ locations</div>
                  <div>✓ No expiration date</div>
                  <div>✓ Instant balance updates</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Card Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Laundry Card Management
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Order a new card or add money to your existing card. Use it at any Automatic Laundry location!
            </p>
          </div>

          <Tabs defaultValue="order" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="order" className="flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Order New Card</span>
              </TabsTrigger>
              <TabsTrigger value="reload" className="flex items-center space-x-2">
                <RefreshCw className="w-4 h-4" />
                <span>Add Money to Card</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="order">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-laundry-blue" />
                    <span>Order Your Laundry Card</span>
                  </CardTitle>
                  <p className="text-gray-600">
                    Get a physical card delivered to your address. Free shipping on orders over $20!
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleCardOrderSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={cardOrderData.fullName}
                          onChange={(e) => setCardOrderData({...cardOrderData, fullName: e.target.value})}
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
                          value={cardOrderData.email}
                          onChange={(e) => setCardOrderData({...cardOrderData, email: e.target.value})}
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
                          value={cardOrderData.phone}
                          onChange={(e) => setCardOrderData({...cardOrderData, phone: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="initialAmount">Initial Card Balance *</Label>
                        <select
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-laundry-blue"
                          value={cardOrderData.initialAmount}
                          onChange={(e) => setCardOrderData({...cardOrderData, initialAmount: e.target.value})}
                        >
                          <option value="10">$10.00</option>
                          <option value="20">$20.00 (Free Shipping!)</option>
                          <option value="30">$30.00</option>
                          <option value="50">$50.00</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={cardOrderData.address}
                        onChange={(e) => setCardOrderData({...cardOrderData, address: e.target.value})}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={cardOrderData.city}
                          onChange={(e) => setCardOrderData({...cardOrderData, city: e.target.value})}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          value={cardOrderData.state}
                          onChange={(e) => setCardOrderData({...cardOrderData, state: e.target.value})}
                          required
                          className="mt-1"
                          placeholder="MA"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={cardOrderData.zipCode}
                          onChange={(e) => setCardOrderData({...cardOrderData, zipCode: e.target.value})}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-laundry-navy mb-2">Order Summary</h4>
                      <div className="flex justify-between items-center text-sm">
                        <span>Card + Initial Balance (${cardOrderData.initialAmount})</span>
                        <span>${cardOrderData.initialAmount}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Shipping</span>
                        <span className={parseInt(cardOrderData.initialAmount) >= 20 ? "text-green-600" : ""}>
                          {parseInt(cardOrderData.initialAmount) >= 20 ? "FREE" : "$3.99"}
                        </span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between items-center font-semibold">
                        <span>Total</span>
                        <span>${parseInt(cardOrderData.initialAmount) >= 20 ? cardOrderData.initialAmount : (parseFloat(cardOrderData.initialAmount) + 3.99).toFixed(2)}</span>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-laundry-blue hover:bg-laundry-blue-dark">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Order Card & Pay
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reload">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wallet className="w-5 h-5 text-laundry-orange" />
                    <span>Add Money to Your Card</span>
                  </CardTitle>
                  <p className="text-gray-600">
                    Reload your existing laundry card online. Funds are available immediately!
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleCardReloadSubmit}>
                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={cardReloadData.cardNumber}
                        onChange={(e) => setCardReloadData({...cardReloadData, cardNumber: e.target.value})}
                        placeholder="Enter your 16-digit card number"
                        required
                        className="mt-1"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Find this number on the front of your laundry card
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="reloadAmount">Amount to Add *</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                        {['5', '10', '20', '50'].map((amount) => (
                          <Button
                            key={amount}
                            type="button"
                            variant={cardReloadData.reloadAmount === amount ? "default" : "outline"}
                            className="h-12"
                            onClick={() => setCardReloadData({...cardReloadData, reloadAmount: amount})}
                          >
                            ${amount}
                          </Button>
                        ))}
                      </div>
                      <div className="mt-3">
                        <Input
                          type="number"
                          min="5"
                          max="100"
                          step="5"
                          value={cardReloadData.reloadAmount}
                          onChange={(e) => setCardReloadData({...cardReloadData, reloadAmount: e.target.value})}
                          placeholder="Custom amount"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-semibold text-laundry-navy mb-2">Reload Summary</h4>
                      <div className="flex justify-between items-center text-sm">
                        <span>Amount to Add</span>
                        <span>${cardReloadData.reloadAmount}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Processing Fee</span>
                        <span>$0.00</span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between items-center font-semibold">
                        <span>Total Charge</span>
                        <span>${cardReloadData.reloadAmount}</span>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-laundry-orange hover:bg-laundry-orange text-white">
                      <RefreshCw className="w-5 h-5 mr-2" />
                      Add ${cardReloadData.reloadAmount} to Card
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-laundry-navy mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Other Ways to Add Money
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Visit any location with cash/card reload kiosks</li>
                      <li>• Ask your property manager about bulk reloads</li>
                      <li>• Set up auto-reload when balance gets low</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
