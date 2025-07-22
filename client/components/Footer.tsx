import { Link } from "react-router-dom";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-laundry-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-laundry-blue rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Automatic Laundry</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Family-owned since 1964, delivering ethical, tech-driven laundry
              solutions for property owners and residents across the Northeast.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-laundry-blue" />
                <span className="text-sm text-gray-300">
                  45 Border Street, Newton, MA 02493
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-laundry-blue" />
                <span className="text-sm text-gray-300">(617) 555-1234</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-laundry-blue" />
                <span className="text-sm text-gray-300">
                  info@automaticlaundry.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/owners"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  For Property Owners
                </Link>
              </li>
              <li>
                <Link
                  to="/residents"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  For Residents
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Equipment Leasing</li>
              <li>App-Based Management</li>
              <li>Remote Monitoring</li>
              <li>OPL Optimization</li>
              <li>Coinless Payments</li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 Automatic Laundry Services Co., Inc. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 text-sm">Follow us:</span>
            <a
              href="https://twitter.com/AutoLaundry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-laundry-blue transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/AutoLaundry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-laundry-blue transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
