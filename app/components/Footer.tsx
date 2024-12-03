import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            MB Production
          </h3>
          <p className="text-gray-400 mb-4">
            Studio d&apos;enregistrement professionnel & Centre de formation musicale
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Facebook />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Instagram />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Twitter />
            </Link>
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="w-5 h-5" />
              <span>+242 071 657 7275</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <span>Bouaemmanuel8@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Gonzagueville, Carrefour Dieudonné</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#accueil" className="text-gray-400 hover:text-blue-400 transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#formations" className="text-gray-400 hover:text-blue-400 transition-colors">
                Formations
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Sk. Tous droits réservés.</p>
      </div>
    </footer>
  );
}