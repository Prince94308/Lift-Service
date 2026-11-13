import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Home, 
  Activity, 
  Hotel, 
  ShoppingBag, 
  Factory, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionHeader from '../components/common/SectionHeader';
import ContactCTA from '../components/home/ContactCTA';
import { industriesData } from '../data/industriesData';

export default function IndustriesPage() {
  useEffect(() => {
    document.title = "Industries We Serve | AuraLift Elevator Engineering";
  }, []);

  const iconMap = {
    Building2,
    Home,
    Activity,
    Hotel,
    ShoppingBag,
    Factory,
  };

  return (
    <div>
      <PageBanner
        badge="Specialized Sectors"
        title="Custom Vertical Mobility for"
        titleHighlight="Every Industry Sector"
        description="Whether managing high-density morning commuter traffic in corporate towers, ensuring sterile trauma stretcher transport in hospitals, or handcrafting silent home lifts for private estates, AuraLift designs for your operational realities."
        breadcrumbs={[{ name: 'Industries We Serve' }]}
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-14 sm:py-20 lg:py-28 bg-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Engineered by Sector"
            title="Tailored Architectures for"
            titleHighlight="Specific Industry Challenges"
            description="Discover our sector-specific engineering solutions, code integrations, and customized traffic configurations below."
            align="center"
          />

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {industriesData.map((ind, index) => {
              const Icon = iconMap[ind.icon] || Building2;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={ind.id}
                  id={ind.id}
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-premium p-5 sm:p-8 lg:p-10"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Visual Showcase (5 cols on desktop) */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg h-56 sm:h-72 lg:h-96">
                        <img
                          src={ind.image}
                          alt={ind.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary text-accent flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div>
                              <h4 className="font-heading font-bold text-xs sm:text-sm text-primary">
                                {ind.title}
                              </h4>
                              <span className="text-[10px] sm:text-[11px] text-accent-dark font-medium block">
                                Compliant with ASME / ADA Standards
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Details (7 cols on desktop) */}
                    <div className={`lg:col-span-7 space-y-4 sm:space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent-dark text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                        <Icon className="w-3.5 h-3.5 text-accent-dark shrink-0" />
                        <span>{ind.subtitle}</span>
                      </div>

                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-primary leading-tight">
                        {ind.title}
                      </h3>

                      <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed font-light">
                        {ind.description}
                      </p>

                      <div className="pt-2">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 mb-2.5 sm:mb-3">
                          Sector-Specific Engineering Advantages:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                          {ind.keyBenefits.map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 sm:pt-4 flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3">
                        <Link
                          to="/quote"
                          className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-primary bg-gold-gradient shadow-md hover:shadow-gold-glow transition-all inline-flex items-center justify-center space-x-1.5 text-center"
                        >
                          <span>Request Sector Proposal</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          to="/services/installation"
                          className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-primary bg-lightBg hover:bg-slate-200 border border-slate-200 transition-colors text-center"
                        >
                          Explore Equipment Specs
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
