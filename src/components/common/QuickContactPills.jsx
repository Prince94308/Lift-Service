import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function QuickContactPills() {
  return (
    <aside aria-label="Quick contact links" className="fixed bottom-4 sm:bottom-6 left-3 sm:left-6 z-40 flex items-center space-x-1.5 sm:space-x-2">
      {/* WhatsApp Pill */}
      <a
        href={companyInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full bg-emerald-600 text-white font-medium text-xs shadow-xl hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all duration-200 border border-emerald-400/40"
      >
        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
        <span className="hidden xs:inline">WhatsApp</span>
      </a>

      {/* Emergency / Call Pill */}
      <a
        href={`tel:${companyInfo.emergencyPhoneRaw}`}
        aria-label="Call 24/7 Breakdown Dispatch"
        className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full bg-primary/95 text-accent font-medium text-xs shadow-xl hover:bg-secondary hover:scale-105 active:scale-95 transition-all duration-200 border border-accent/40 backdrop-blur-md"
      >
        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent animate-pulse shrink-0" />
        <span className="hidden xs:inline">24/7 Dispatch</span>
      </a>
    </aside>
  );
}
