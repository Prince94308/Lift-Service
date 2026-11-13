import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { testimonialsData } from '../../data/testimonialsData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-primary text-white relative overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute -top-24 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Client Endorsements"
          title="Trusted by Architectural &"
          titleHighlight="Facility Directors"
          description="Read how our engineering precision, customized AMC programs, and rapid 24/7 emergency dispatch deliver uninterrupted vertical mobility for premier properties."
          dark={true}
          align="center"
        />

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-secondary/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-white/10 shadow-2xl transition-all duration-500">
            
            {/* Top decorative elements */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-accent text-accent" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-100 font-light leading-relaxed italic mb-6 sm:mb-8">
              "{current.quote}"
            </blockquote>

            {/* Author Profile & Service Tag */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 sm:pt-6 border-t border-white/10">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-accent shrink-0"
                />
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                    {current.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-accent font-medium">
                    {current.role}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400">
                    {current.company}
                  </p>
                </div>
              </div>

              <div className="self-start sm:self-center">
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-white/5 border border-white/10 text-slate-300">
                  {current.serviceType}
                </span>
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="mt-6 sm:mt-8 pt-4 flex items-center justify-between">
              {/* Pagination Dots */}
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-6 sm:w-8 bg-accent' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Controls with 44px minimum tap targets */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 hover:border-accent text-white hover:text-accent flex items-center justify-center transition-colors active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 hover:border-accent text-white hover:text-accent flex items-center justify-center transition-colors active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
