import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">IEEE Student Branch</h3>
            <p className="text-blue-200 text-sm">
              Advancing technology for humanity through education, innovation, and collaboration.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-blue-200 hover:text-white">Home</Link></li>
              <li><Link to="/chapters" className="text-blue-200 hover:text-white">Chapters</Link></li>
              <li><Link to="/events" className="text-blue-200 hover:text-white">Events</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>ieee@university.edu</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>University Campus</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-blue-200 hover:text-white"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-blue-200 hover:text-white"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-blue-200 hover:text-white"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-200">
          <p>&copy; 2024 IEEE Student Branch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
