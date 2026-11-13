import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Cpu, 
  Settings, 
  BadgeCheck, 
  TrendingUp 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "Sub-30 Min Rapid Dispatch",
      desc: "Our GPS-coordinated mobile technical response units resolve unexpected stoppages and passenger entrapments with industry-leading speed."
    },
    {
      icon: ShieldCheck,
      title: "100% ASME & EN 81 Safety",
      desc: "Zero tolerance for safety compromises. All installations, load tests, and drop calibrations strictly adhere to international codes."
    },
    {
      icon: Cpu,
      title: "IoT Predictive Diagnostics",
      desc: "Smart remote sensors actively track door cycles, motor heat, and guide-rail vibration, stopping faults before they trigger breakdowns."
    },
    {
      icon: Zap,
      title: "Up to 40% Energy Reduction",
      desc: "Whisper-quiet PMSM gearless machines combined with regenerative braking drives feed clean electricity back into your building's grid."
    },
    {
      icon: Settings,
      title: "Multi-Brand Systems Mastery",
      desc: "Seamless diagnostic and maintenance capabilities across Otis, Schindler, KONE, Thyssenkrupp, Mitsubishi, and custom controllers."
    },
    {
      icon: TrendingUp,
      title: "Transparent Digital AMC Logs",
      desc: "Access timestamped technician inspection reports, parts wear projections, and regulatory safety certificates directly in our portal."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-primary text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="The AuraLift Advantage"
          title="Why Leading Property Directors"
          titleHighlight="Trust Our Engineering"
          description="We combine precision German-engineered mechanics with responsive client service, delivering superior ride comfort, uninterrupted uptime, and extended capital asset life."
          dark={true}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="p-8 rounded-2xl bg-secondary/70 border border-white/10 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary border border-accent/30 text-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
