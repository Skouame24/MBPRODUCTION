'use client';

import { Mail, MapPin, Music2, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './components/AnimatedSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <HeroSection />
      
      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Nos Services
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Conception de Spectacle', icon: '🎭' },
              { title: 'Location de Sono & Podium', icon: '🎵' },
              { title: 'Location de Lumière & Écran Géant', icon: '💡' },
              { title: 'Location de Chaises & Bâches', icon: '🪑' },
              { title: 'Location de Groupe Électrogène', icon: '⚡' },
              { title: 'Service Traiteur', icon: '🍽️' },
            ].map((service, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-800/50 hover:border-blue-500/50"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="py-20 px-4 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Nos Formations
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Formation Musicale',
                price: '135.000 Frcfa',
                details: ['Inscription: 15.000 Frcfa', '6 mois: 20.000 Frcfa/Mois'],
              },
              {
                title: 'Formation Orchestration',
                price: '30.000 Frcfa',
                details: ['Inscription: 30.000 Frcfa', '1 Mois'],
              },
              {
                title: 'Formation Solfège',
                price: '95.000 Frcfa',
                details: ['Inscription: 15.000 Frcfa', '1 mois: 20.000 Frcfa/Mois'],
              },
              {
                title: 'Formation Ingénieur du Son',
                price: '200.000 Frcfa',
                details: ['Inscription: 20.000 Frcfa', '6 mois: 30.000 Frcfa/Mois'],
              },
            ].map((formation, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-8 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {formation.title}
                  </h3>
                  <div className="text-3xl text-yellow-400 mb-4">{formation.price}</div>
                  <ul className="space-y-2 text-gray-300">
                    {formation.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-xl text-blue-400">
              <Music2 className="w-6 h-6" />
              <span>Instruments : Piano, Guitare, Flûte, Voix, etc...</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Contact
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <p>+242 071 657 7275</p>
                    <p>+242 078 857 3856</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <p>Bouaemmanuel8@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <p>Gonzagueville, Carrefour Dieudonné<br />200 Mètres du goudron</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-6 border border-gray-800/50"
              >
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                  <textarea
                    placeholder="Votre message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  ></textarea>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Envoyer
                  </motion.button>
                </form>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}