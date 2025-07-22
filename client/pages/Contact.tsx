import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Building,
  Users,
  Star,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    audienceType: "property-owner",
    subject: "",
    message: "",
    urgency: "normal",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Here you would integrate with your contact management system
    alert(
      "Thank you for your message! We'll respond within 24 hours during business days.",
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      audienceType: "property-owner",
      subject: "",
      message: "",
      urgency: "normal",
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-laundry-blue" />,
      title: "Phone",
      primary: "(617) 555-1234",
      secondary: "Mon-Fri 8AM-6PM EST",
      description: "Call for immediate assistance",
    },
    {
      icon: <Mail className="w-6 h-6 text-laundry-blue" />,
      title: "Email",
      primary: "info@automaticlaundry.com",
      secondary: "24-hour response time",
      description: "General inquiries and support",
    },
    {
      icon: <Building className="w-6 h-6 text-laundry-blue" />,
      title: "Sales",
      primary: "sales@automaticlaundry.com",
      secondary: "Property owner inquiries",
      description: "New installations and partnerships",
    },
    {
      icon: <Users className="w-6 h-6 text-laundry-blue" />,
      title: "Support",
      primary: "support@automaticlaundry.com",
      secondary: "Resident assistance",
      description: "App help and account issues",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency Service", hours: "24/7 for critical issues" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-laundry-blue-light via-fresh-white to-laundry-orange-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-laundry-blue text-white">
            Get in Touch
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-laundry-navy mb-6">
            Let's Chat – We're All Ears
            <span className="block text-laundry-blue">(And Washers)</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions, ideas, or a partnership in mind? Reach out – we're
            based in Newton, MA, and ready to serve the Northeast. Whether it's
            owners seeking savings or residents sharing laughs, we're here to
            elevate your laundry game.
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-laundry-navy mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{method.icon}</div>
                  <h3 className="text-lg font-semibold text-laundry-navy mb-3">
                    {method.title}
                  </h3>
                  <p className="font-medium text-gray-900 mb-2 break-words">
                    {method.primary}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    {method.secondary}
                  </p>
                  <p className="text-xs text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-laundry-blue" />
                    <span>Send Us a Message</span>
                  </CardTitle>
                  <p className="text-gray-600">
                    Tell us your story, and we'll respond within 24 hours during
                    business days.
                  </p>
                </CardHeader>
                <CardContent>
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
                        <Label htmlFor="email">Email Address *</Label>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="audienceType">I am a... *</Label>
                        <select
                          id="audienceType"
                          name="audienceType"
                          value={formData.audienceType}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-laundry-blue"
                          required
                        >
                          <option value="property-owner">
                            Property Owner/Manager
                          </option>
                          <option value="resident">Resident/Tenant</option>
                          <option value="partner">Potential Partner</option>
                          <option value="vendor">Vendor/Supplier</option>
                          <option value="job-seeker">Job Seeker</option>
                          <option value="media">Media/Press</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">Priority Level</Label>
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-laundry-blue"
                        >
                          <option value="low">General Inquiry</option>
                          <option value="normal">Standard</option>
                          <option value="high">Urgent</option>
                          <option value="emergency">Emergency</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Tell us more about how we can help you..."
                        required
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-laundry-blue hover:bg-laundry-blue-dark"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Company Info Sidebar */}
            <div className="space-y-6">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-laundry-blue" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm font-medium text-gray-700">
                          {schedule.day}
                        </span>
                        <span className="text-sm text-gray-600">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-laundry-blue" />
                    <span>Visit Our Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">
                        Automatic Laundry Services Co., Inc.
                      </p>
                      <p className="text-sm text-gray-600">
                        45 Border Street
                        <br />
                        Newton, MA 02493
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="https://twitter.com/AutoLaundry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-blue-600" />
                    </a>
                    <a
                      href="https://instagram.com/AutoLaundry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    Follow @AutoLaundry for tips, hacks, and updates!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
