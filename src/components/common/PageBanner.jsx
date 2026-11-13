import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageBanner({
  badge,
  title,
  titleHighlight,
  description,
  breadcrumbs = [],
  image = 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1800&q=80',
}) {
  return (
    <div className="relative bg-primary text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden border-b border-white/10">
      {/* Background Image with dark luxury overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation with Flex Wrap for mobile screens */}
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 mb-4 sm:mb-6 font-medium">
          <Link to="/" className="hover:text-accent flex items-center space-x-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-accent transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-accent truncate max-w-[200px] sm:max-w-none">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white tracking-tight max-w-3xl leading-tight break-words">
          {title}{' '}
          {titleHighlight && (
            <span className="text-gold-gradient inline-block">
              {titleHighlight}
            </span>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
            {description}
          </p>
        )}

      </div>
    </div>
  );
}
