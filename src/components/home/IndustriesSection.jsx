import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home, Activity, Hotel, ShoppingBag, Factory } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { industriesData } from '../../data/industriesData';

export default function IndustriesSection() {
  const iconMap = {
    Building2,
    Home,
    Activity,
    Hotel,
    ShoppingBag,
    Factory,
  };

  return (
    <section className="py-20 lg:py-28 bg-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Tailored Vertical Mobility"
          title="Engineered for Specialized"
          titleHighlight="Industry Demands"
          description="Every building sector presents unique traffic dynamics, aesthetic expectations, and code requirements. We tailor each lift system to your facility's exact operational rhythm."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((ind) => {
            const IconComponent = iconMap[ind.icon] || Building2;
            return (
              <div
                key={ind.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Industry Image */}
                  <div className="relative h-48 overflow-hidden bg-primary">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    
                    {/* Floating Icon */}
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-primary flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5 text-accent-dark" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-primary group-hover:text-accent-dark transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-accent-dark font-medium mt-1 mb-2.5">
                      {ind.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-mutedText leading-relaxed line-clamp-3">
                      {ind.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                  <Link
                    to="/industries"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors"
                  >
                    <span>Explore Solutions for this Sector</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-secondary transition-colors"
          >
            <span>View All Industry Case Studies</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </Link>
        </div>

      </div>
    </section>
  );
}
