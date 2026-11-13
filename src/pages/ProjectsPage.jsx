import React, { useState, useEffect } from 'react';
import { MapPin, Gauge, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionHeader from '../components/common/SectionHeader';
import ContactCTA from '../components/home/ContactCTA';
import { projectsData } from '../data/projectsData';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = "Projects & Portfolio | AuraLift Elevator Engineering";
  }, []);

  const categories = ['All', 'Commercial', 'Residential', 'Healthcare', 'Hospitality', 'Industrial', 'Retail'];

  const filtered = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div>
      <PageBanner
        badge="Engineering Showcase"
        title="Signature Elevator Projects &"
        titleHighlight="Architectural Installations"
        description="A showcase of commissioned vertical transportation systems spanning commercial towers, luxury residential villas, tertiary medical facilities, and heritage modernizations."
        breadcrumbs={[{ name: 'Projects' }]}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-14 sm:py-20 lg:py-28 bg-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Commissioned Works"
            title="Browse Our Featured"
            titleHighlight="Case Studies"
            description="Filter by sector to discover how our engineering team tackled structural challenges, high passenger density, and bespoke aesthetic guidelines."
            align="center"
          />

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-primary hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.id}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Image with overlay tags */}
                  <div className="relative h-52 sm:h-64 overflow-hidden bg-primary">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                      <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-primary/80 backdrop-blur-md text-white border border-white/20">
                        {proj.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 flex items-center space-x-1.5 text-xs text-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="truncate">{proj.location}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-primary group-hover:text-accent-dark transition-colors line-clamp-1">
                      {proj.title}
                    </h3>
                    
                    <p className="mt-1 text-xs font-semibold text-accent-dark line-clamp-1">
                      {proj.scope}
                    </p>

                    <p className="mt-2.5 text-xs sm:text-sm text-mutedText leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      {proj.highlights.map((h, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specs Ribbon */}
                    <div className="mt-4 sm:mt-5 p-3 rounded-xl bg-lightBg border border-slate-200/80 grid grid-cols-2 gap-2 text-xs text-slate-700">
                      <div className="flex items-center space-x-1.5">
                        <Gauge className="w-4 h-4 text-accent shrink-0" />
                        <span className="font-semibold">{proj.speed}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Building className="w-4 h-4 text-accent shrink-0" />
                        <span className="font-semibold">{proj.floors}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 sm:p-6 sm:pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Completed: {proj.year}</span>
                  <Link
                    to="/quote"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-primary hover:text-accent transition-colors"
                  >
                    <span>Request Similar Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
