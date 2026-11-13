import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Zap, 
  Clock, 
  CheckCircle, 
  ChevronRight
} from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center bg-primary text-white overflow-hidden">
      {/* Background Hero Elevator Image with Multi-layered Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=2000&q=85"
          alt="Modern Architectural Glass Elevator System"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000 brightness-50"
        />
        {/* Layered responsive gradients for optimal text contrast across all device displays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
        <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Description & CTAs (7-8 cols on Laptop/Desktop) */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6 md:space-y-8">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-secondary/80 border border-accent/40 backdrop-blur-md">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-accent truncate">
                Premier Elevator Engineering
              </span>
              <span className="text-white/40 text-xs hidden sm:inline">|</span>
              <span className="text-xs text-slate-300 font-medium hidden sm:inline">
                ISO 9001 Certified
              </span>
            </div>

            {/* Main Responsive Headline */}
            <h1 className="font-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] break-words">
              Engineering Vertical{' '}
              <span className="text-gold-gradient block sm:inline">
                Elegance & Safety
              </span>
            </h1>

            {/* Sub-headline / Marketing Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
              From bespoke residential panoramic glass elevators to high-speed commercial tower installations, AuraLift delivers turnkey engineering, rapid 24/7 emergency repair, and comprehensive AMC lifecycle maintenance with guaranteed 99.8% uptime.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              {/* Get a Free Quote CTA */}
              <Link
                to="/quote"
                className="group inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-primary bg-gold-gradient shadow-xl hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Call Now CTA */}
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="inline-flex items-center justify-center space-x-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-secondary/90 hover:bg-secondary border border-white/20 hover:border-accent transition-all duration-200 backdrop-blur-md"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-medium">Direct Support</span>
                  <span className="text-xs sm:text-sm font-bold text-white">{companyInfo.phone}</span>
                </div>
              </a>
            </div>

            {/* Trust Points Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span>ASME & EN 81 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span>Sub-30 Min Rapid Dispatch</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span>OEM Certified Spare Parts</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Feature Card (Visible on mobile, tablet & desktop) */}
          <div className="lg:col-span-4 w-full max-w-xl mx-auto lg:max-w-none">
            <div className="bg-secondary/85 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-7 shadow-2xl relative overflow-hidden space-y-4 sm:space-y-5">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-accent block">
                    Fast Response Hub
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                    Need Immediate Assistance?
                  </h3>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Emergency Banner inside card */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-red-950/60 border border-red-500/40 space-y-2">
                <div className="flex items-center space-x-2 text-red-300 text-xs font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></span>
                  <span>Passenger Entrapment or Outage?</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our emergency mobile units arrive on-site in an average under 30 minutes.
                </p>
                <a
                  href={`tel:${companyInfo.emergencyPhoneRaw}`}
                  className="block text-center py-2.5 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wide shadow-md transition-colors"
                >
                  Dial 24/7 Hotline: {companyInfo.emergencyPhone}
                </a>
              </div>

              {/* Quick links to core solutions */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Quick Solutions
                </span>
                <Link
                  to="/services/installation"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group/item text-xs text-slate-200"
                >
                  <span className="font-medium group-hover/item:text-accent truncate pr-2">New Lift Installation Planning</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover/item:text-accent group-hover/item:translate-x-0.5 transition-all shrink-0" />
                </Link>
                <Link
                  to="/services/amc"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group/item text-xs text-slate-200"
                >
                  <span className="font-medium group-hover/item:text-accent truncate pr-2">Annual Maintenance Contract (AMC)</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover/item:text-accent group-hover/item:translate-x-0.5 transition-all shrink-0" />
                </Link>
                <Link
                  to="/services/modernization"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group/item text-xs text-slate-200"
                >
                  <span className="font-medium group-hover/item:text-accent truncate pr-2">Modernize Aging Elevators</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover/item:text-accent group-hover/item:translate-x-0.5 transition-all shrink-0" />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Hero Stats Ribbon */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {companyInfo.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gold-gradient">
                {stat.value}
              </div>
              <div className="font-medium text-white text-xs sm:text-sm">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
