import React, { useState, useEffect } from 'react';
import PageBanner from '../components/common/PageBanner';
import SectionHeader from '../components/common/SectionHeader';
import ServiceCard from '../components/common/ServiceCard';
import ContactCTA from '../components/home/ContactCTA';
import { servicesData } from '../data/servicesData';
import { Shield, Sparkles, Wrench, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    document.title = "Our Services | AuraLift Elevator Installation, Repair & AMC";
  }, []);

  const categories = ['All', 'Installation', 'Maintenance', 'Repair', 'Modernization', 'Emergency'];

  const filteredServices = activeTab === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === activeTab);

  return (
    <div>
      <PageBanner
        badge="Complete Lifecycle Solutions"
        title="Comprehensive Elevator"
        titleHighlight="Engineering Services"
        description="From bespoke architectural installations to proactive AMC agreements, rapid component diagnostics, and complete modernizations, AuraLift is your single-source partner for vertical transit excellence."
        breadcrumbs={[{ name: 'Services' }]}
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80"
      />

      {/* Services Grid Section */}
      <section className="py-20 lg:py-28 bg-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Tailored Engineering"
            title="Explore Our Specialized"
            titleHighlight="Elevator Capabilities"
            description="Select a service category below to view specific technical parameters, compliance features, and project scope details."
            align="center"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-primary hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Services (9)' : cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                featured={service.highlight}
              />
            ))}
          </div>

          {/* Service Comparison Matrix */}
          <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-premium">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-primary text-center mb-4">
              Comparing Solutions: Which Service Does Your Facility Require?
            </h3>
            <p className="text-xs sm:text-sm text-mutedText text-center max-w-2xl mx-auto mb-10">
              Not sure whether you need an emergency repair, scheduled AMC maintenance, or complete modernization? Review this quick reference guide:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-lightBg border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary text-accent flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-primary">
                  New Lift Installation
                </h4>
                <p className="text-xs text-mutedText leading-relaxed">
                  Best for new construction, penthouse additions, or buildings undergoing major architectural retrofits requiring complete new shafts and machinery.
                </p>
                <Link to="/services/installation" className="text-xs font-semibold text-accent-dark hover:underline block pt-2">
                  Explore Installation Details &rarr;
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-lightBg border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary text-accent flex items-center justify-center">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-primary">
                  Annual Maintenance (AMC)
                </h4>
                <p className="text-xs text-mutedText leading-relaxed">
                  Ideal for operational elevators needing routine 48-point safety checkups, proactive lubrication, priority breakdown dispatch, and municipal code filings.
                </p>
                <Link to="/services/amc" className="text-xs font-semibold text-accent-dark hover:underline block pt-2">
                  Explore AMC Packages &rarr;
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-lightBg border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary text-accent flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-primary">
                  Elevator Modernization
                </h4>
                <p className="text-xs text-mutedText leading-relaxed">
                  Recommended for systems over 15 years old suffering frequent breakdowns, rough rides, high energy bills, or obsolete controllers that lack parts availability.
                </p>
                <Link to="/services/modernization" className="text-xs font-semibold text-accent-dark hover:underline block pt-2">
                  Explore Modernization Details &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
