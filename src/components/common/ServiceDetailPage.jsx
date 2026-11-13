import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Settings, 
  Wrench,
  ChevronRight
} from 'lucide-react';
import PageBanner from './PageBanner';
import QuoteRequestForm from '../forms/QuoteRequestForm';
import { companyInfo } from '../../data/companyInfo';

export default function ServiceDetailPage({ service }) {
  useEffect(() => {
    document.title = `${service.title} | AuraLift Elevator Engineering`;
  }, [service.title]);

  const otherServices = [
    { title: 'New Lift Installation', path: '/services/installation' },
    { title: 'Lift Repair & Diagnostics', path: '/services/repair' },
    { title: 'Annual Maintenance (AMC)', path: '/services/amc' },
    { title: 'Elevator Modernization', path: '/services/modernization' },
    { title: '24/7 Emergency Breakdown', path: '/services/emergency' },
  ].filter((s) => s.path !== service.path);

  return (
    <div>
      <PageBanner
        badge={service.category}
        title={service.title}
        titleHighlight=""
        description={service.subtitle}
        breadcrumbs={[
          { name: 'Services', path: '/services' },
          { name: service.title }
        ]}
        image={service.image}
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Main Content Area (8 cols on desktop) */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-12">
              
              {/* Executive Overview */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/80 shadow-premium space-y-5 sm:space-y-6">
                <div className="space-y-2.5 sm:space-y-3">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-accent-dark">
                    Engineering Overview
                  </span>
                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-primary">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed font-light">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Key Features Checklist */}
                {service.features && (
                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-primary mb-3 sm:mb-4">
                      Key Technical & Operational Features:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Technical Specifications */}
              {service.specifications && (
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/80 shadow-premium">
                  <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-primary mb-5 sm:mb-6 flex items-center space-x-2">
                    <Settings className="w-5 h-5 text-accent shrink-0" />
                    <span>Specifications & Benchmarks</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {service.specifications.map((spec, idx) => (
                      <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-lightBg border border-slate-200/70">
                        <span className="block text-[11px] sm:text-xs text-mutedText uppercase tracking-wider font-semibold">
                          {spec.label}
                        </span>
                        <span className="font-heading font-bold text-sm sm:text-base text-primary mt-1 block">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Working Process / Methodology */}
              {service.process && (
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/80 shadow-premium">
                  <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-primary mb-5 sm:mb-6 flex items-center space-x-2">
                    <Wrench className="w-5 h-5 text-accent shrink-0" />
                    <span>Operational Procedure & Execution Phases</span>
                  </h3>

                  <div className="space-y-4 sm:space-y-6">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3.5 sm:space-x-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary text-accent font-heading font-extrabold flex items-center justify-center shrink-0 text-xs sm:text-sm">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-sm sm:text-base text-primary">
                            {step.title}
                          </h4>
                          <p className="mt-1 text-xs sm:text-sm text-mutedText leading-relaxed">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Embedded Quote Form with Preselection */}
              <div>
                <QuoteRequestForm preselectedService={service.id} />
              </div>

            </div>

            {/* Sidebar Column (4 cols on desktop, full width on tablets/mobile) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Emergency Hotline Card */}
              <div className="bg-gradient-to-br from-red-950 to-primary text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-red-500/40 shadow-xl space-y-3.5 sm:space-y-4">
                <div className="flex items-center space-x-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span>24/7 Breakdown Dispatch</span>
                </div>
                <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
                  Immediate Technical Assistance Needed?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call our certified emergency engineers directly. Average on-site dispatch time under 30 minutes.
                </p>
                <a
                  href={`tel:${companyInfo.emergencyPhoneRaw}`}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors text-center"
                >
                  <Phone className="w-4 h-4 animate-bounce" />
                  <span>Call {companyInfo.emergencyPhone}</span>
                </a>
              </div>

              {/* Direct Toll-Free Sales Desk */}
              <div className="bg-primary text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 shadow-xl space-y-3.5 sm:space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent block">
                  Direct Engineering Desk
                </span>
                <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                  Have Technical Questions?
                </h4>
                <p className="text-xs text-slate-300">
                  Speak directly with an elevator consultant regarding site planning, tender specs, or AMC transfers.
                </p>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gold-gradient text-primary font-bold text-xs sm:text-sm shadow-md hover:shadow-gold-glow transition-all text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {companyInfo.phone}</span>
                </a>
              </div>

              {/* Other Services Navigation List */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-premium">
                <h4 className="font-heading font-bold text-sm sm:text-base text-primary mb-3 sm:mb-4 pb-2 border-b border-slate-100">
                  Other Elevator Services
                </h4>
                <div className="space-y-2">
                  {otherServices.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-lightBg hover:bg-slate-200/70 text-xs sm:text-sm font-medium text-primary hover:text-accent-dark transition-colors group"
                    >
                      <span className="truncate pr-2">{item.title}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-accent-dark group-hover:translate-x-1 transition-transform shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Compliance & Standards Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-premium space-y-2.5 sm:space-y-3">
                <div className="flex items-center space-x-2 text-primary font-heading font-bold text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>Compliance Guarantee</span>
                </div>
                <p className="text-xs text-mutedText leading-relaxed">
                  Every service performed by AuraLift satisfies all local municipal building regulations, annual safety filings, and ASME A17.1 life safety codes.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
