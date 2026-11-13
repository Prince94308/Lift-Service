import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Gauge, Building } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { projectsData } from '../../data/projectsData';

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Engineering Portfolio"
            title="Signature Projects &"
            titleHighlight="Vertical Installations"
            description="Explore our commissioned architectural elevators, high-speed commercial banks, and luxury custom residential lifts."
            align="left"
            className="mb-0"
          />

          <Link
            to="/projects"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            <span>View All Commissioned Projects</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((proj) => (
            <div
              key={proj.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-primary">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-primary/80 backdrop-blur-md text-white border border-white/20">
                      {proj.category}
                    </span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1.5 text-xs text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{proj.location}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-primary group-hover:text-accent-dark transition-colors line-clamp-1">
                    {proj.title}
                  </h3>
                  
                  <p className="mt-2 text-xs font-semibold text-accent-dark">
                    {proj.scope}
                  </p>

                  <p className="mt-2 text-xs sm:text-sm text-mutedText leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>

                  {/* Specs Quick Pills */}
                  <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center space-x-1.5">
                      <Gauge className="w-3.5 h-3.5 text-accent" />
                      <span>Speed: {proj.speed}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Building className="w-3.5 h-3.5 text-accent" />
                      <span>{proj.floors}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
