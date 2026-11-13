import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  ShieldCheck, 
  Wrench, 
  CalendarCheck, 
  Sparkles, 
  AlertTriangle, 
  Layers,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open on phones
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      items: [
        { name: 'All Services Overview', path: '/services', icon: Layers, desc: 'Complete portfolio of vertical mobility solutions' },
        { name: 'New Lift Installation', path: '/services/installation', icon: ShieldCheck, desc: 'MRL & high-speed traction elevator systems' },
        { name: 'Lift Repair & Diagnostics', path: '/services/repair', icon: Wrench, desc: 'Rapid on-site component troubleshooting' },
        { name: 'Annual Maintenance (AMC)', path: '/services/amc', icon: CalendarCheck, desc: 'Proactive preventative care & regulatory testing' },
        { name: 'Elevator Modernization', path: '/services/modernization', icon: Sparkles, desc: 'Drive, controller & cab architectural upgrades' },
        { name: '24/7 Emergency Breakdown', path: '/services/emergency', icon: AlertTriangle, desc: 'Immediate human entrapment & rescue dispatch' },
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary/95 backdrop-blur-md shadow-2xl border-b border-secondary/60 py-2.5 sm:py-3' 
        : 'bg-primary border-b border-white/10 py-3 sm:py-4 lg:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3 group focus:outline-none shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-secondary to-primary border border-accent/40 flex items-center justify-center shadow-lg group-hover:border-accent transition-all duration-300">
              {/* Custom Elevator Graphic */}
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-between py-0.5">
                <div className="w-full h-1 bg-accent rounded-sm"></div>
                <div className="flex justify-between items-center px-0.5">
                  <div className="w-1.5 h-2.5 sm:h-3 bg-white/80 rounded-sm"></div>
                  <div className="w-0.5 h-2.5 sm:h-3 bg-accent/60"></div>
                  <div className="w-1.5 h-2.5 sm:h-3 bg-white/80 rounded-sm"></div>
                </div>
                <div className="w-full h-1 bg-accent rounded-sm"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1 sm:space-x-1.5">
                <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-white">
                  Aura<span className="text-accent">Lift</span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-accent/15 text-accent border border-accent/30 hidden xs:inline-block">
                  Pro
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                Elevator Engineering
              </p>
            </div>
          </Link>

          {/* Desktop Navigation (Visible on lg/xl/2xl screens: >= 1024px) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-all ${
                        isActive(link.path)
                          ? 'text-accent'
                          : 'text-slate-200 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-accent' : 'text-slate-400'}`} />
                    </button>

                    {/* Services Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 xl:w-96 pt-2 z-50">
                        <div className="bg-secondary/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2 divide-y divide-white/5 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="space-y-1 pb-2">
                            {link.items.map((subItem) => {
                              const SubIcon = subItem.icon;
                              return (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group/item"
                                >
                                  <div className="mt-0.5 p-1.5 rounded-md bg-primary border border-white/10 text-accent group-hover/item:border-accent/40 group-hover/item:bg-accent/10 transition-colors">
                                    <SubIcon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-white group-hover/item:text-accent transition-colors">
                                      {subItem.name}
                                    </div>
                                    <div className="text-xs text-slate-400 line-clamp-1">
                                      {subItem.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="pt-2 px-3 pb-1 flex justify-between items-center text-xs">
                            <span className="text-slate-400">Need emergency repair?</span>
                            <Link to="/services/emergency" className="text-accent hover:underline flex items-center space-x-1 font-semibold">
                              <span>24/7 Dispatch</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'text-accent font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs (Laptop / Desktop / Tablet) */}
          <div className="flex items-center space-x-2 sm:space-x-3 xl:space-x-4">
            
            {/* Click to Call CTA - visible on sm+ screens */}
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="hidden sm:flex items-center space-x-2 text-slate-200 hover:text-accent px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-semibold transition-colors"
              title="Call AuraLift Directly"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="hidden xl:block text-left">
                <span className="block text-[10px] text-slate-400 uppercase font-medium">Toll Free</span>
                <span className="text-xs text-white">{companyInfo.phone}</span>
              </div>
            </a>

            {/* Request a Quote Button - visible on sm+ screens */}
            <Link
              to="/quote"
              className="hidden sm:inline-flex items-center justify-center px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-primary bg-gold-gradient shadow-lg hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none"
            >
              <span>Get Free Quote</span>
            </Link>

            {/* Mobile / Tablet Emergency Call Icon on small screens */}
            <a
              href={`tel:${companyInfo.emergencyPhoneRaw}`}
              className="sm:hidden p-2 rounded-lg bg-red-600/20 border border-red-500/40 text-red-400 hover:bg-red-600/30 transition-colors"
              title="Call 24/7 Emergency Hotline"
              aria-label="Call Emergency Hotline"
            >
              <Phone className="w-4 h-4 animate-pulse" />
            </a>

            {/* Hamburger Menu Toggle (Visible on Mobile & Tablets: < 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none border border-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary/98 border-t border-white/10 px-4 pt-4 pb-8 space-y-4 animate-in slide-in-from-top duration-200 max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="space-y-1">
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm sm:text-base font-medium ${
                        isActive(link.path) ? 'text-accent bg-white/5' : 'text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-accent' : ''}`} />
                    </button>
                    {servicesDropdownOpen && (
                      <div className="pl-4 pr-2 space-y-1 py-1 border-l-2 border-accent/40 ml-3">
                        {link.items.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-3 py-2 text-xs sm:text-sm text-slate-300 hover:text-accent rounded-md hover:bg-white/5 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                    isActive(link.path) ? 'text-accent bg-white/5 font-semibold' : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs in Mobile/Tablet Menu */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link
              to="/quote"
              className="w-full flex items-center justify-center py-3 rounded-xl text-sm font-semibold text-primary bg-gold-gradient shadow-md active:scale-95 transition-transform"
            >
              Request a Free Quote
            </Link>

            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-semibold text-white bg-secondary border border-white/10 hover:border-accent transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call Us: {companyInfo.phone}</span>
            </a>

            <a
              href={companyInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-700/80 hover:bg-emerald-600 transition-colors border border-emerald-500/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with Sales on WhatsApp</span>
            </a>

            <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/30 text-center">
              <span className="text-[11px] text-red-200 block font-medium uppercase tracking-wider">
                24/7 Breakdown & Entrapment Hotline
              </span>
              <a href={`tel:${companyInfo.emergencyPhoneRaw}`} className="text-sm sm:text-base font-bold text-red-400 hover:underline mt-0.5 block">
                {companyInfo.emergencyPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
