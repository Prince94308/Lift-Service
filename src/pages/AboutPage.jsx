import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, CheckCircle2, Clock, Cpu, ArrowRight } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionHeader from '../components/common/SectionHeader';
import ContactCTA from '../components/home/ContactCTA';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | AuraLift Elevator Engineering & Manufacturing";
  }, []);

  const values = [
    {
      icon: ShieldCheck,
      title: "Safety as an Absolute Mandate",
      desc: "Zero tolerance for compromises. Every cable, drop buffer, interlock switch, and emergency brake conforms rigorously to ASME A17.1 and EN 81 standards."
    },
    {
      icon: Cpu,
      title: "Pioneering IoT Technology",
      desc: "We integrate permanent magnet synchronous motors (PMSM) and regenerative drive controllers that harvest descending kinetic energy and feed it back to your building."
    },
    {
      icon: Award,
      title: "Architectural Refinement",
      desc: "Elevators are moving rooms. We collaborate with architects and interior designers to deliver custom glass capsules, hand-finished metals, and acoustic dampening."
    },
    {
      icon: Clock,
      title: "Unconditional Reliability",
      desc: "Our proactive maintenance agreements and 24/7 centralized dispatch control room guarantee that your passengers experience uninterrupted vertical transit."
    }
  ];

  const milestones = [
    { year: "2001", title: "Founding & Master Contracting", text: "Established by certified mechanical elevator engineers specializing in commercial shaft installations." },
    { year: "2008", title: "Green Lift Initiative", text: "Pioneered gearless MRL systems cutting building elevator energy consumption by up to 40%." },
    { year: "2016", title: "IoT Predictive Fleet Launch", text: "Introduced real-time telemetry monitoring for early bearing wear and door interlock degradation." },
    { year: "2024", title: "2,850+ Active Installations", text: "Managing prestigious commercial high-rises, trauma hospitals, and luxury private residential estates nationwide." }
  ];

  return (
    <div>
      <PageBanner
        badge="About AuraLift"
        title="Engineering Precision & Vertical"
        titleHighlight="Excellence Since 2001"
        description="AuraLift is a premier full-service elevator engineering company dedicated to designing, installing, modernizing, and maintaining world-class vertical transportation systems."
        breadcrumbs={[{ name: 'About Us' }]}
        image="https://images.unsplash.com/photo-1541888946425-d0fbb18f15f7?auto=format&fit=crop&w=1800&q=80"
      />

      {/* Mission & Story Section */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <SectionHeader
                badge="Our Philosophy"
                title="Elevating Architecture with"
                titleHighlight="Whisper-Quiet Engineering"
                description="For over two decades, AuraLift has operated at the intersection of precision heavy engineering and refined architectural design. We believe an elevator is not merely a utility—it is the vital circulatory artery of your building."
                align="left"
                className="mb-4"
              />

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether deploying ultra-high-speed destination dispatch passenger elevator banks in 60-story metropolitan commercial headquarters or handcrafting bespoke curved glass pneumatic lifts for private coastal estates, our focus remains absolute: passenger safety, acoustic isolation, and long-term asset value.
              </p>

              <div className="pt-2 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Licensed Master Elevator Contractors & Insured Riggers</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Comprehensive ASME A17.1 / CSA B44 & EN 81 Engineering Compliance</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>ISO 9001:2015 Quality Management Certified Field Procedures</span>
                </div>
              </div>

              <div className="pt-3 sm:pt-4">
                <Link
                  to="/quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-primary bg-gold-gradient shadow-md hover:shadow-gold-glow transition-all text-center"
                >
                  <span>Request Engineering Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative w-full max-w-lg mx-auto lg:max-w-none pt-4 lg:pt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                  alt="High-Rise Elevator Engineering"
                  className="rounded-2xl shadow-xl h-52 sm:h-72 lg:h-80 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=600&q=80"
                  alt="Modern Glass Elevator"
                  className="rounded-2xl shadow-xl h-52 sm:h-72 lg:h-80 w-full object-cover mt-6 sm:mt-8"
                />
              </div>

              {/* Stat callout badge */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:left-1/2 sm:-translate-x-1/2 p-4 sm:p-5 rounded-2xl bg-primary text-white border border-accent/40 shadow-2xl text-center w-full sm:w-72">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-gold-gradient">
                  99.8% Uptime
                </span>
                <span className="block text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Guaranteed Under AuraLift AMC Agreements
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 sm:py-20 lg:py-28 bg-lightBg border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Foundation of Trust"
            title="Our Non-Negotiable"
            titleHighlight="Core Engineering Values"
            description="Our engineering standards are built upon four fundamental cornerstones that guide every design, installation, and inspection."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-premium flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-accent flex items-center justify-center mb-4 sm:mb-5">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-primary mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History & Timeline */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Two Decades of Progress"
            title="Key Milestones in Our"
            titleHighlight="Engineering Journey"
            description="A timeline of technological milestones, safety innovations, and sustainable vertical transit achievements."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative p-5 sm:p-6 rounded-2xl bg-lightBg border border-slate-200 hover:border-accent transition-colors">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-gold-gradient block mb-2">
                  {m.year}
                </span>
                <h4 className="font-heading font-bold text-sm sm:text-base text-primary mb-2">
                  {m.title}
                </h4>
                <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
