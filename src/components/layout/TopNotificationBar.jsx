import React from 'react';
import { Phone, Clock, MapPin, MessageCircle, AlertCircle } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function TopNotificationBar() {
  return (
    <div className="bg-primary text-slate-300 text-xs border-b border-secondary/80 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          
          {/* Emergency 24/7 hotline notice - visible on all screens */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            <a 
              href={`tel:${companyInfo.emergencyPhoneRaw}`} 
              className="flex items-center space-x-1.5 sm:space-x-2 text-accent hover:text-accent-hover font-semibold tracking-wide transition-colors text-[11px] sm:text-xs"
              title="Click to dial 24/7 Breakdown Dispatch"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <AlertCircle className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>
                <strong className="font-bold sm:inline hidden">24/7 Emergency: </strong>
                <strong className="font-bold sm:hidden inline">24/7 Rescue: </strong>
                {companyInfo.emergencyPhone}
              </span>
            </a>
            
            <div className="hidden md:flex items-center space-x-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{companyInfo.hours}</span>
            </div>
          </div>

          {/* Right: Location & WhatsApp */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="hidden xl:flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Financial District, NY & Regional Depots</span>
            </div>

            <a
              href={companyInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-[11px] sm:text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp<span className="hidden sm:inline"> Support</span></span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
