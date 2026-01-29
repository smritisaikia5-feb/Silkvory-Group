import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="Silkvory Group" className="h-24 mb-4 invert mix-blend-screen object-contain" />
            <p className="text-gray-400 text-sm">
              Transforming brands through creative excellence and strategic marketing solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('team')} className="text-gray-400 hover:text-white transition-colors">Our Team</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li><button onClick={() => onNavigate('privacy')} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</button></li>
            </ul>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/officialhumansofriceculture" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-[#1877F2] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/silkvorygroup/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-[#E4405F] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                info@silkvorygroup.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                +91 8399078105
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Silkvory Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
