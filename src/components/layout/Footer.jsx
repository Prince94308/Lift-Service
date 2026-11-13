import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle
} from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function Footer() {
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureSent, setBrochureSent] = useState(false);

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    if (!brochureEmail || !brochureEmail.includes('@')) return;
    setBrochureSent(true);
    setTimeout(() => {
      setBrochureSent(false);
      setBrochureEmail('');
    }, 5000);
  };

  return (
    <footer className="bg-primary text-slate-300 border-t border-secondary/60 relative overflow-hidden">
      {/* Decorative Gold Glow accent in background */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner: Emergency Support Callout */}
      <div className="bg-secondary/70 border-b border-white/5 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-heading font-semibold text-sm sm:text-base md:text-lg">
                  Experiencing an Elevator Emergency or Entrapment?
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Our certified mobile rescue units are dispatched within 30 minutes, 24/7/365.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
              <a
                href={`tel:${companyInfo.emergencyPhoneRaw}`}
                className="px-4 sm:px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm shadow-lg flex items-center justify-center space-x-2 transition-colors text-center"
              >
                <Phone className="w-4 h-4 animate-bounce" />
                <span>Call Emergency: {companyInfo.emergencyPhone}</span>
              </a>
              <a
                href={companyInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-emerald-700/60 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm border border-emerald-500/40 flex items-center justify-center space-x-1.5 transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Bio (2 cols wide on LG) */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-5">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-secondary border border-accent/40 flex items-center justify-center shrink-0">
                <div className="w-5 h-5 flex flex-col justify-between py-0.5">
                  <div className="w-full h-0.5 bg-accent"></div>
                  <div className="flex justify-between px-0.5">
                    <div className="w-1 h-2 bg-white"></div>
                    <div className="w-1 h-2 bg-white"></div>
                  </div>
                  <div className="w-full h-0.5 bg-accent"></div>
                </div>
              </div>
              <span className="font-heading font-extrabold text-2xl text-white">
                Aura<span className="text-accent">Lift</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Engineering vertical mobility with architectural refinement and zero-compromise safety. Specializing in high-speed commercial lifts, bespoke residential elevators, smart modernization, and comprehensive AMC contracts.
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>ASME A17.1 / CSA B44 & EN 81 Safety Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>ISO 9001:2015 Quality Management Certified</span>
              </div>
            </div>

            {/* Catalog Download Form */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Download Technical Catalog & Specs
              </span>
              {brochureSent ? (
                <div className="p-3 rounded-lg bg-accent/15 border border-accent/40 text-accent text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Catalog sent! Check your inbox for the download link.</span>
                </div>
              ) : (
                <form onSubmit={handleBrochureSubmit} className="flex flex-col xs:flex-row max-w-sm gap-2 xs:gap-0">
                  <input
                    type="email"
                    required
                    placeholder="Enter corporate email..."
                    value={brochureEmail}
                    onChange={(e) => setBrochureEmail(e.target.value)}
                    className="flex-1 bg-secondary text-white text-xs px-3 py-2.5 rounded-lg xs:rounded-r-none border border-white/10 focus:outline-none focus:border-accent"
                  />
                  <button
                    type="submit"
                    className="bg-gold-gradient text-primary font-semibold text-xs px-4 py-2.5 rounded-lg xs:rounded-l-none hover:shadow-gold-glow flex items-center justify-center space-x-1 transition-all"
                  >
                    <span>Download</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Elevator Services */}
          <div>
            <h4 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-3 sm:mb-4 border-b border-white/10 pb-2">
              Elevator Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/services/installation" className="text-slate-400 hover:text-accent transition-colors flex items-center space-x-1.5">
                  <span className="text-accent text-xs">›</span>
                  <span>Lift Installation</span>
                </Link>
              </li>
              <li>
                <Link to="/services/repair" className="text-slate-400 hover:text-accent transition-colors flex items-center space-x-1.5">
                  <span className="text-accent text-xs">›</span>
                  <span>Lift Repair & Faults</span>
                </Link>
              </li>
              <li>
                <Link to="/services/amc" className="text-slate-400 hover:text-accent transition-colors flex items-center space-x-1.5">
                  <span className="text-accent text-xs">›</span>
                  <span>Annual Maintenance (AMC)</span>
                </Link>
              </li>
              <li>
                <Link to="/services/modernization" className="text-slate-400 hover:text-accent transition-colors flex items-center space-x-1.5">
                  <span className="text-accent text-xs">›</span>
                  <span>Elevator Modernization</span>
                </Link>
              </li>
              <li>
                <Link to="/services/emergency" className="text-slate-400 hover:text-accent transition-colors flex items-center space-x-1.5">
                  <span className="text-accent text-xs">›</span>
                  <span>24/7 Breakdown Dispatch</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-accent transition-colors flex items-center space-x-1.5">
                  <span className="text-accent text-xs">›</span>
                  <span>Spare Parts Replacement</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-3 sm:mb-4 border-b border-white/10 pb-2">
              Company & Work
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-accent transition-colors flex items-center space-x-1.5">
                  <span className="text-accent text-xs">›</span>
                  <span>About AuraLift</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-accent transition-colors flex items-center space-x-1.5">
                  <span className="text-accent text-xs">›</span>
                  <span>Projects & Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-slate-400 hover:text-accent transition-colors flex items-center space-x-1.5">
                  <span className="text-accent text-xs">›</span>
                  <span>Industries We Serve</span>
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-slate-400 hover:text-accent transition-colors flex items-center space-x-1.5">
                  <span className="text-accent text-xs">›</span>
                  <span>Request a Free Quote</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-accent transition-colors flex items-center space-x-1.5">
                  <span className="text-accent text-xs">›</span>
                  <span>Contact Headquarters</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-3 sm:mb-4 border-b border-white/10 pb-2">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start space-x-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{companyInfo.address}</span>
              </li>
              <li>
                <a href={`tel:${companyInfo.phoneRaw}`} className="flex items-center space-x-2.5 text-slate-300 hover:text-accent transition-colors text-xs">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex items-center space-x-2.5 text-slate-300 hover:text-accent transition-colors text-xs">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <span className="truncate">{companyInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-2.5 text-slate-400 text-xs">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-slate-300">Office Hours:</span>
                  <span>{companyInfo.hours}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-primary/95 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
            <div>
              &copy; {new Date().getFullYear()} AuraLift Elevator Engineering Group. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link to="/about" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <span>&bull;</span>
              <Link to="/about" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
              <span>&bull;</span>
              <Link to="/contact" className="hover:text-slate-300 transition-colors">Safety Codes</Link>
              <span>&bull;</span>
              <a href="/sitemap.xml" className="hover:text-slate-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
