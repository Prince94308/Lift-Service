import React from 'react';
import { ClipboardCheck, Compass, Cog, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { Link } from 'react-router-dom';

export default function WorkingProcess() {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Site Survey & Traffic Simulation",
      desc: "Our engineers analyze shaft dimensions, structural pit depths, traffic flow intensity, and peak travel requirements using computational modeling."
    },
    {
      number: "02",
      icon: Compass,
      title: "Bespoke Engineering & Cab Styling",
      desc: "We generate custom 3D CAD/BIM drawings, machine specifications, and interior finishes (architectural glass, brushed bronze, or acoustic timber)."
    },
    {
      number: "03",
      icon: Cog,
      title: "Laser-Guided Installation & Rigging",
      desc: "Certified technicians install plumb-aligned guide rails, permanent-magnet gearless motors, counterweights, and microprocessor controllers."
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Load Certification & AMC Onboarding",
      desc: "Rigorous full-load overspeed drop tests, safety brake calibrations, and formal municipal sign-off followed by seamless preventive AMC activation."
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Disciplined Execution"
          title="Our Structured Engineering"
          titleHighlight="Working Process"
          description="From initial feasibility studies to commissioning and lifelong maintenance, our four-stage framework ensures zero structural surprises and punctual handovers."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-0.5 bg-slate-200 -translate-y-12 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="relative z-10 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-premium flex flex-col justify-between hover:border-accent transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-200 group-hover:text-accent transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-lightBg border border-slate-200 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-accent transition-all">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base lg:text-lg text-primary mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center space-x-1 text-xs font-semibold text-accent-dark">
                  <span>Phase {step.number} Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner below process */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            to="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-primary bg-gold-gradient shadow-lg hover:shadow-gold-glow transition-all"
          >
            <span>Start Phase 01: Schedule a Site Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
