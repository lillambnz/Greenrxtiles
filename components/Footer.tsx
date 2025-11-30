import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  const LOGO_URL = "/greenrx-logo-new.png?v=1";

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img
                src={LOGO_URL}
                alt="GreenRx Logo"
                className="h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing accessible, high-quality telehealth services to all Australians. 
              Your health journey starts here.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-emerald-500 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Alternate Health</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Quit Smoking</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Weight Loss</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">How it Works</a></li>
              <li>
                <a 
                  href="https://www.hotdoc.com.au/medical-centres/baldivis-WA-6171/baldivis-north-medical/doctors/dr-ameer-khan-1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Doctors
                </a>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-emerald-400 transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:text-emerald-400 transition-colors text-left">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>info@greenrx.com.au</li>
              <li>+61 2 3456 7890</li>
              <li>202/37 Barrack Street</li>
              <li>Perth, WA 6000, Australia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p className="mb-2">&copy; {new Date().getFullYear()} GreenRx Australia. All rights reserved.</p>
          
          {/* Powered By Neon Link */}
          <div className="mt-6 flex items-center justify-center gap-1 text-sm">
             <span>Site powered by</span>
             <a 
               href="https://clinicit.solutions" 
               target="_blank" 
               rel="noopener noreferrer"
               className="font-bold text-emerald-400 hover:text-emerald-300 transition-all duration-300 drop-shadow-[0_0_5px_rgba(52,211,153,0.6)] hover:drop-shadow-[0_0_10px_rgba(52,211,153,1)]"
             >
               ClinicIT Solutions
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
