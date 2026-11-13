import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function ContactCTA() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 backdrop-blur-xl shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols on desktop) */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                <span>Ready to Elevate Your Building Standards?</span>
              </div>

              <h2 className="font-heading font-extrabold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Get a Comprehensive Feasibility Study &{' '}
                <span className="text-gold-gradient block sm:inline">
                  Free Quotation Today
                </span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
                Connect with our senior lift engineers for turnkey installation blueprints, comprehensive AMC cost audits, or 24/7 emergency response coverage.
              </p>

              {/* Service Badges */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span>24-Hour Preliminary Quote Guarantee</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>Zero-Obligation On-Site Shaft Survey</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons (4 cols on desktop) */}
            <div className="lg:col-span-4 flex flex-col space-y-3">
              {/* Get a Free Quote */}
              <Link
                to="/quote"
                className="w-full inline-flex items-center justify-center space-x-2 py-3.5 sm:py-4 px-6 rounded-xl text-sm sm:text-base font-bold text-primary bg-gold-gradient shadow-xl hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Call Now Button with tel: */}
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="w-full inline-flex items-center justify-center space-x-2.5 py-3 sm:py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-accent transition-all text-center"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call Now: {companyInfo.phone}</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={companyInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2.5 py-3 sm:py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-500/40 transition-all shadow-md text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
