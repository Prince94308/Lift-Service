import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import ServiceCard from '../common/ServiceCard';
import { servicesData } from '../../data/servicesData';

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Installation', 'Maintenance', 'Repair', 'Modernization', 'Emergency'];

  const filteredServices = activeTab === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === activeTab);

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="End-to-End Vertical Transit"
          title="Engineered Services for Every"
          titleHighlight="Elevator Lifecycle Stage"
          description="From initial architectural shaft planning and turnkey installation to proactive preventative maintenance and round-the-clock emergency support, we deliver precision at every floor."
          align="center"
        />

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
                activeTab === cat
                  ? 'bg-primary text-white shadow-md border-primary'
                  : 'bg-white text-slate-600 hover:text-primary hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Services (9)' : cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              featured={service.highlight}
            />
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-secondary text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-bold text-base sm:text-xl text-white">
              Have a Custom or Multi-Unit Complex Requirement?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our chief systems engineers provide personalized traffic analysis and tender compliance reviews.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/quote"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-gold-gradient text-primary font-bold text-xs sm:text-sm hover:shadow-gold-glow transition-all"
            >
              Request Custom Consultation
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
