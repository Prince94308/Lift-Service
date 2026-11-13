import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function ServiceCard({ service, featured = false }) {
  const { title, shortDescription, image, features, path, category } = service;

  return (
    <div className={`group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
      featured ? 'ring-2 ring-accent/40' : ''
    }`}>
      {/* Card Header & Image */}
      <div>
        <div className="relative h-48 sm:h-56 overflow-hidden bg-primary">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80" />
          
          {/* Category Badge */}
          <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
            <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-primary/80 backdrop-blur-md text-white border border-white/20">
              {category}
            </span>
          </div>

          {/* Accent Gold Corner Stripe */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-hover to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-primary group-hover:text-accent-dark transition-colors line-clamp-1">
            {title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-mutedText leading-relaxed line-clamp-3">
            {shortDescription}
          </p>

          {/* Features Preview */}
          {features && features.length > 0 && (
            <div className="mt-3.5 sm:mt-4 pt-3.5 sm:pt-4 border-t border-slate-100 space-y-1.5">
              {features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                  <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-5 pt-0 sm:p-6 sm:pt-0 mt-1 sm:mt-2 flex items-center justify-between border-t border-slate-100/80 gap-3">
        {/* Learn More link */}
        <Link
          to={path}
          className="inline-flex items-center space-x-1 sm:space-x-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent group-hover/link:translate-x-1 transition-transform" />
        </Link>

        {/* Contact CTA */}
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          className="inline-flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold text-secondary hover:text-primary bg-lightBg hover:bg-slate-200 border border-slate-200 transition-colors shrink-0"
          title="Direct Consultation"
        >
          <Phone className="w-3 h-3 text-accent" />
          <span>Contact</span>
        </a>
      </div>
    </div>
  );
}
