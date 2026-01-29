import { Menu, X, Facebook, Instagram, Home, Info, Briefcase, Calendar, Users, Mail, PhoneCall } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home', icon: Home },
    { name: 'About', path: 'about', icon: Info },
    { name: 'Services', path: 'services', icon: Briefcase },
    { name: 'Events', path: 'events', icon: Calendar },
    { name: 'Our Team', path: 'team', icon: Users },
    { name: 'Contact Us', path: 'contact', icon: Mail },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-28">
          <div className="flex items-center space-x-6">
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
              <img src="/logo.png" alt="Silkvory Group" className="h-20 object-contain" />
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 border-l border-gray-200 pl-4 sm:pl-6 h-10">
              <a href="https://www.facebook.com/officialhumansofriceculture" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-[#1877F2] transition-colors" aria-label="Follow us on Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/silkvorygroup/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-[#E4405F] transition-colors" aria-label="Follow us on Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`text-gray-700 hover:text-emerald-600 font-medium transition-colors ${currentPage === item.path ? 'text-emerald-600 border-b-2 border-emerald-600' : ''
                  }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => onNavigate('book-consultation')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md flex items-center"
            >
              Book Consultation
            </button>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => onNavigate('home')}
              className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
              aria-label="Go to Home"
            >
              <Home size={24} />
            </button>
            <button
              className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[calc(100vh-112px)]">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-3 w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all ${currentPage === item.path ? 'bg-emerald-50 text-emerald-600 font-semibold' : ''
                  }`}
              >
                <item.icon size={20} className={currentPage === item.path ? 'text-emerald-600' : 'text-gray-400'} />
                <span>{item.name}</span>
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('book-consultation');
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 mt-4 text-white font-semibold bg-emerald-600 rounded-xl shadow-md hover:bg-emerald-700 transition-all"
            >
              <PhoneCall size={20} />
              <span>Book Consultation</span>
            </button>

            <div className="pt-6 mt-6 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">Follow Us on Social Media</p>
              <div className="flex px-4 space-x-6">
                <a href="https://www.facebook.com/officialhumansofriceculture" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-1 text-gray-600 hover:text-[#1877F2] transition-colors" aria-label="Follow us on Facebook">
                  <div className="bg-gray-50 p-3 rounded-full">
                    <Facebook size={22} className="text-emerald-600" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase">Facebook</span>
                </a>
                <a href="https://www.instagram.com/silkvorygroup/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-1 text-gray-600 hover:text-[#E4405F] transition-colors" aria-label="Follow us on Instagram">
                  <div className="bg-gray-50 p-3 rounded-full">
                    <Instagram size={22} className="text-emerald-600" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
