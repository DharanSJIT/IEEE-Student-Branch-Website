import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { chapters } from '../../data/chapters';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChapters, setShowChapters] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IEEE</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Student Branch</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path) 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Chapters Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowChapters(true)}
              onMouseLeave={() => setShowChapters(false)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center space-x-1 ${
                  isActive('/chapters') || location.pathname.startsWith('/chapters/')
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <span>Chapters</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showChapters ? 'rotate-180' : ''}`} />
              </button>
              
              {showChapters && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Technical Societies</h3>
                  </div>
                  <div className="py-2">
                    {chapters.map((chapter) => (
                      <Link
                        key={chapter.id}
                        to={`/chapters/${chapter.id}`}
                        className="block px-4 py-3 hover:bg-blue-50 transition-colors border-l-4 border-transparent hover:border-blue-600"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-white">{chapter.shortName}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-gray-900 mb-0.5">{chapter.name}</div>
                            <div className="text-xs text-gray-500 truncate">{chapter.domain.split(',')[0]}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                    <Link 
                      to="/chapters" 
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center justify-center"
                    >
                      View All Chapters
                      <ChevronDown className="w-3 h-3 ml-1 -rotate-90" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <button className="px-5 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-5 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors">
                Join IEEE
              </button>
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-lg ${
                  isActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Chapters */}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Chapters
              </div>
              {chapters.map((chapter) => (
                <Link
                  key={chapter.id}
                  to={`/chapters/${chapter.id}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">{chapter.shortName}</span>
                  </div>
                  <span>{chapter.shortName}</span>
                </Link>
              ))}
              <Link
                to="/chapters"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg mt-2"
              >
                View All Chapters
              </Link>
            </div>
            
            <div className="pt-4 space-y-2 border-t border-gray-200 mt-2">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
                  Sign In
                </button>
              </Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <button className="w-full px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
                  Join IEEE
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
