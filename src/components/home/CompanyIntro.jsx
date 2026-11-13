import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Wrench, CheckCircle, ArrowRight, Users, Clock } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function CompanyIntro() {
  const pillars = [
    {
      icon: Shield,
      title: "Uncompromising Safety Standards",
      desc: "Every installation, overhaul, and service operation conforms strictly to ASME A17.1, CSA B44, and EN 81-20/50 international life safety codes."
    },
    {
      icon: Award,
      title: "Master Certified Engineers",
      desc: "Our field engineering teams undergo continuous OEM training on leading control systems including Otis, Schindler, KONE, and Thyssenkrupp."
    },
    {
      icon: Clock,
      title: "Sub-30 Minute Emergency SLA",
      desc: "A centralized 24/7/365 emergency coordination room with GPS-routed mobile units ready for immediate human entrapment and outage rescue."
    },
    {
      icon: Wrench,
      title: "Genuine OEM Spare Parts",
      desc: "Over 40,000 certified components maintained in regional depots to maximize first-visit diagnostic and repair resolution rates."
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase with Badge (5 cols) */}
          <div className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18f15f7?auto=format&fit=crop&w=1000&q=80"
                alt="AuraLift Elevator Installation Engineer at Work"
                className="w-full h-[320px] xs:h-[380px] sm:h-[460px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
              
              {/* Bottom Card Overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary text-accent flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-primary">
                      25+ Years of Lift Engineering
                    </h4>
                    <p className="text-[11px] sm:text-xs text-mutedText leading-snug">
                      Trusted by corporate towers, luxury architects & hospitals nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent decorative border box behind */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-40 sm:w-48 h-40 sm:h-48 border-2 border-accent/30 rounded-2xl -z-10 pointer-events-none" />
          </div>

          {/* Right Column: Company Story & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            <SectionHeader
              badge="About AuraLift Elevators"
              title="Setting the Gold Standard in"
              titleHighlight="Vertical Transportation"
              description="Founded on the principles of mechanical excellence and passenger safety, AuraLift is a premier full-service elevator engineering company. We partner with architects, real estate developers, and facility directors to create smooth, reliable, and whisper-quiet vertical transit solutions."
              align="left"
              className="mb-4 sm:mb-6"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-1">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="p-4 sm:p-5 rounded-xl bg-lightBg border border-slate-200/60 space-y-2 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary text-accent flex items-center justify-center">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-primary">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-mutedText leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center space-x-2 px-5 sm:px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-primary hover:bg-secondary transition-colors text-center"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </Link>

              <Link
                to="/quote"
                className="inline-flex items-center justify-center space-x-2 px-5 sm:px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-primary bg-gold-gradient hover:shadow-gold-glow transition-all text-center"
              >
                <span>Request Architectural Consultation</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
