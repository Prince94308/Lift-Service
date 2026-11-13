import React, { useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  AlertTriangle 
} from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import ContactForm from '../components/forms/ContactForm';
import { companyInfo } from '../data/companyInfo';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | AuraLift Elevator Engineering & 24/7 Dispatch";
  }, []);

  return (
    <div>
      <PageBanner
        badge="Connect With Our Engineers"
        title="Contact AuraLift Elevators"
        titleHighlight="& 24/7 Dispatch"
        description="Have a new project inquiry, require urgent breakdown service, or wish to review your building's AMC agreement? Our technical directors and field engineers are ready to assist."
        breadcrumbs={[{ name: 'Contact Us' }]}
        image="https://images.unsplash.com/photo-1541888946425-d0fbb18f15f7?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Contact Form (7 cols on desktop, full width on tablets/mobile) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Direct Contact Details & Emergency Dispatch (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Emergency Hotline Alert Box */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-red-950/90 text-white border border-red-500/50 shadow-xl space-y-3.5 sm:space-y-4">
                <div className="flex items-center space-x-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>24/7 Critical Breakdown Dispatch</span>
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                  Active Passenger Entrapment?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Do not attempt untrained manual door release. Call our direct emergency dispatch line immediately for priority GPS rescue response.
                </p>
                <a
                  href={`tel:${companyInfo.emergencyPhoneRaw}`}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-lg transition-colors text-center"
                >
                  <Phone className="w-4 h-4 animate-bounce" />
                  <span>Call Emergency: {companyInfo.emergencyPhone}</span>
                </a>
              </div>

              {/* Direct Offices & Contact Details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-premium space-y-5 sm:space-y-6">
                <h3 className="font-heading font-bold text-base sm:text-lg text-primary border-b border-slate-100 pb-3">
                  Engineering Headquarters & Regional Depots
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start space-x-3 text-slate-700">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-primary block">Corporate Headquarters:</span>
                      <span>{companyInfo.address}</span>
                      <span className="block text-slate-500 text-xs mt-0.5">With mobile service depots stationed regionally.</span>
                    </div>
                  </div>

                  {/* Telephone */}
                  <div className="flex items-start space-x-3 text-slate-700">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-primary block">Toll-Free Office & Sales:</span>
                      <a href={`tel:${companyInfo.phoneRaw}`} className="text-accent-dark hover:underline font-bold text-sm">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-3 text-slate-700">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-primary block">Instant WhatsApp Support:</span>
                      <a 
                        href={companyInfo.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline font-semibold"
                      >
                        Start WhatsApp Chat &rarr;
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3 text-slate-700">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-primary block">Technical Inquiries:</span>
                      <a href={`mailto:${companyInfo.email}`} className="text-slate-600 hover:text-accent break-all">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3 text-slate-700">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-primary block">Operating Schedule:</span>
                      <span>{companyInfo.hours}</span>
                      <span className="block text-emerald-600 font-medium text-xs mt-0.5">{companyInfo.emergencyHours}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
