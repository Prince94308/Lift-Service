import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  FileCheck, 
  Phone, 
  MessageCircle 
} from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import QuoteRequestForm from '../components/forms/QuoteRequestForm';
import { companyInfo } from '../data/companyInfo';

export default function RequestQuotePage() {
  useEffect(() => {
    document.title = "Request a Free Quote | AuraLift Elevator Engineering & AMC";
  }, []);

  const quotePerks = [
    {
      icon: Clock,
      title: "24-Hour Engineering Turnaround",
      desc: "Our estimation team analyzes your floor counts, shaft footprint, and traffic load to provide itemized preliminary pricing within one business day."
    },
    {
      icon: ShieldCheck,
      title: "Zero-Cost Preliminary Shaft Audit",
      desc: "For existing structures and modernizations, we provide complimentary on-site laser measurements and structural feasibility checks."
    },
    {
      icon: FileCheck,
      title: "Tender & Code-Compliant Specs",
      desc: "Receive comprehensive BIM/CAD documentation and ASME A17.1 compliance sheets ready for submission to municipal building departments."
    }
  ];

  return (
    <div>
      <PageBanner
        badge="Accurate & Itemized Pricing"
        title="Request a Detailed Elevator"
        titleHighlight="Engineering Quotation"
        description="Whether you are planning a new architectural installation, looking to transfer an AMC portfolio, or modernizing older elevators, our chief engineering team delivers competitive, transparent pricing."
        breadcrumbs={[{ name: 'Request a Quote' }]}
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Form (8 cols on desktop, full width on tablets/mobile) */}
            <div className="lg:col-span-8">
              <QuoteRequestForm />
            </div>

            {/* Right Information & Perks (4 cols on desktop) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Direct Help Callout */}
              <div className="bg-primary text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-xl space-y-4">
                <span className="text-[11px] sm:text-xs uppercase font-bold tracking-widest text-accent block">
                  Need Immediate Advice?
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                  Speak Directly with a Senior Estimator
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have urgent tender deadlines or complex architectural specifications? Call our engineering desk directly for immediate answers.
                </p>
                <div className="pt-2 space-y-2.5">
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gold-gradient text-primary font-bold text-xs sm:text-sm shadow-md hover:shadow-gold-glow transition-all text-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {companyInfo.phone}</span>
                  </a>
                  <a
                    href={companyInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-xs border border-emerald-500/40 transition-colors text-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat with Sales on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Perks List */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-premium space-y-5 sm:space-y-6">
                <h4 className="font-heading font-bold text-sm sm:text-base text-primary border-b border-slate-100 pb-3">
                  The AuraLift Quotation Guarantee
                </h4>

                <div className="space-y-4">
                  {quotePerks.map((perk, idx) => {
                    const Icon = perk.icon;
                    return (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-lightBg border border-slate-200 text-accent-dark flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-heading font-bold text-xs sm:text-sm text-primary">
                            {perk.title}
                          </h5>
                          <p className="text-xs text-mutedText leading-relaxed mt-0.5">
                            {perk.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Confidentiality card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <span className="font-bold text-primary block">Engineering Non-Disclosure:</span>
                <p>
                  All architectural drawings, CAD files, and building blueprints submitted to AuraLift are protected under strict commercial confidentiality agreements.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
