import React from 'react';

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  align = 'center',
  dark = false,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 sm:mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3 ${
          dark 
            ? 'bg-accent/15 text-accent border border-accent/30' 
            : 'bg-primary/5 text-primary border border-primary/10'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight break-words ${
        dark ? 'text-white' : 'text-primary'
      }`}>
        {title}{' '}
        {titleHighlight && (
          <span className="text-gold-gradient inline-block">
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p className={`mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed ${
          dark ? 'text-slate-300' : 'text-mutedText'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
