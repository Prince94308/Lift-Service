import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function QuoteRequestForm({ preselectedService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    buildingType: 'commercial',
    serviceRequired: preselectedService || 'installation',
    floors: '5-10',
    capacity: '8-10 Passengers (680kg - 800kg)',
    timeline: 'Within 3 Months',
    projectLocation: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please provide a valid contact number';
    }
    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = 'City or project location is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      buildingType: 'commercial',
      serviceRequired: 'installation',
      floors: '5-10',
      capacity: '8-10 Passengers (680kg - 800kg)',
      timeline: 'Within 3 Months',
      projectLocation: '',
      notes: '',
    });
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-premium text-center animate-in zoom-in-95 duration-300">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 sm:mb-6">
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary">
          Quote Request Received (Demo Mode)
        </h3>
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-primary">{formData.fullName}</span>! Your project specifications for{' '}
          <span className="font-semibold text-primary">{formData.serviceRequired.toUpperCase()}</span> have been successfully captured in this demo preview.
        </p>

        {/* Demo Notice Disclaimer */}
        <div className="my-5 sm:my-6 p-3.5 sm:p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-left text-xs text-amber-900 flex items-start space-x-2.5 sm:space-x-3">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Frontend Demonstration Notice:</span>
            This form has validated your inputs client-side and simulated quotation processing. As this is a frontend marketing presentation, no actual email or database entry has been dispatched.
          </div>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-lightBg border border-slate-200 text-left text-xs text-slate-600 space-y-1.5 mb-5 sm:mb-6">
          <div className="font-semibold text-primary mb-1.5">Captured Project Summary:</div>
          <div><span className="font-medium text-slate-700">Service:</span> {formData.serviceRequired}</div>
          <div><span className="font-medium text-slate-700">Building Type:</span> {formData.buildingType} ({formData.floors} floors)</div>
          <div><span className="font-medium text-slate-700">Location:</span> {formData.projectLocation}</div>
          <div><span className="font-medium text-slate-700">Contact Email:</span> {formData.email}</div>
          <div><span className="font-medium text-slate-700">Contact Phone:</span> {formData.phone}</div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-secondary transition-colors"
          >
            Submit Another Inquiry
          </button>
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gold-gradient text-primary text-xs sm:text-sm font-semibold hover:shadow-gold-glow transition-all text-center"
          >
            Call Directly: {companyInfo.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/80 shadow-premium">
      <div className="border-b border-slate-100 pb-5 sm:pb-6 mb-5 sm:mb-6">
        <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-primary">
          Project Specification & Quotation
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-mutedText">
          Fill in your architectural and facility requirements below. Our engineering desk provides detailed preliminary feasibility estimates within 24 hours.
        </p>
      </div>

      <div className="space-y-6">
        {/* Section 1: Project & Lift Parameters */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent-dark mb-3.5 sm:mb-4 flex items-center space-x-2">
            <span className="w-5 h-5 rounded-full bg-accent/20 text-accent-dark flex items-center justify-center text-[10px]">1</span>
            <span>Vertical Transport Requirements</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {/* Service Required */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Service Type *
              </label>
              <select
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full bg-lightBg border border-slate-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none focus:border-accent"
              >
                <option value="installation">New Lift Installation</option>
                <option value="residential">Residential Luxury Elevator</option>
                <option value="commercial">Commercial Tower Elevator</option>
                <option value="amc">Annual Maintenance Contract (AMC)</option>
                <option value="repair">Lift Repair & Diagnostics</option>
                <option value="modernization">Elevator Modernization & Overhaul</option>
                <option value="emergency">24/7 Breakdown Coverage</option>
              </select>
            </div>

            {/* Building Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Facility / Building Category *
              </label>
              <select
                name="buildingType"
                value={formData.buildingType}
                onChange={handleChange}
                className="w-full bg-lightBg border border-slate-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none focus:border-accent"
              >
                <option value="commercial">Commercial Office Tower</option>
                <option value="residential-villa">Private Villa / Luxury Residence</option>
                <option value="residential-multi">Residential Multi-Family Apartment</option>
                <option value="hospital">Hospital / Healthcare Facility</option>
                <option value="hospitality">Hotel / Resort Complex</option>
                <option value="industrial">Industrial Warehouse / Factory</option>
                <option value="retail">Shopping Concourse / Retail</option>
              </select>
            </div>

            {/* Number of Floors */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Number of Stops / Floors *
              </label>
              <select
                name="floors"
                value={formData.floors}
                onChange={handleChange}
                className="w-full bg-lightBg border border-slate-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none focus:border-accent"
              >
                <option value="2-4">2 to 4 Floors (Low-Rise / Villa)</option>
                <option value="5-10">5 to 10 Floors (Mid-Rise)</option>
                <option value="11-25">11 to 25 Floors (High-Rise)</option>
                <option value="26+">26+ Floors (Super High-Rise)</option>
              </select>
            </div>

            {/* Estimated Capacity */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Target Capacity
              </label>
              <select
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                className="w-full bg-lightBg border border-slate-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none focus:border-accent"
              >
                <option value="4-6 Passengers (320kg - 450kg)">4 - 6 Passengers (320 - 450 kg)</option>
                <option value="8-10 Passengers (680kg - 800kg)">8 - 10 Passengers (680 - 800 kg)</option>
                <option value="13-16 Passengers (1000kg - 1150kg)">13 - 16 Passengers (1000 - 1150 kg)</option>
                <option value="20+ Passengers / Bed Stretcher (1350kg - 2000kg)">20+ Passengers / Bed Stretcher (1350 - 2000 kg)</option>
                <option value="Heavy Freight (2500kg - 5000kg+)">Heavy Freight (2500 - 5000 kg+)</option>
              </select>
            </div>

            {/* Preferred Timeline */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project Schedule
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full bg-lightBg border border-slate-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none focus:border-accent"
              >
                <option value="Immediate (< 1 Month)">Immediate (Under 1 Month)</option>
                <option value="Within 3 Months">Within 3 Months</option>
                <option value="3 to 6 Months">3 to 6 Months</option>
                <option value="Planning / Architectural Stage">Planning / Architectural Stage</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project City / Postal Code *
              </label>
              <input
                type="text"
                name="projectLocation"
                placeholder="e.g. Manhattan, NY 10005"
                value={formData.projectLocation}
                onChange={handleChange}
                className={`w-full bg-lightBg border rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none ${
                  errors.projectLocation ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-accent'
                }`}
              />
              {errors.projectLocation && (
                <span className="text-[11px] text-red-500 mt-1 block">{errors.projectLocation}</span>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Contact Information */}
        <div className="pt-4 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent-dark mb-3.5 sm:mb-4 flex items-center space-x-2">
            <span className="w-5 h-5 rounded-full bg-accent/20 text-accent-dark flex items-center justify-center text-[10px]">2</span>
            <span>Contact & Company Details</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="e.g. Jonathan Hayes"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full bg-lightBg border rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none ${
                  errors.fullName ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-accent'
                }`}
              />
              {errors.fullName && (
                <span className="text-[11px] text-red-500 mt-1 block">{errors.fullName}</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Business Email *
              </label>
              <input
                type="email"
                name="email"
                placeholder="e.g. j.hayes@enterprise.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-lightBg border rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-accent'
                }`}
              />
              {errors.email && (
                <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Direct Contact Phone *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="e.g. +1 (555) 234-5678"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-lightBg border rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-accent'
                }`}
              />
              {errors.phone && (
                <span className="text-[11px] text-red-500 mt-1 block">{errors.phone}</span>
              )}
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Company / Organization / Property Name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="e.g. Hayes Real Estate Trust / Private Villa Estate"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full bg-lightBg border border-slate-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none focus:border-accent"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Specific Scope Details or Architectural Drawings Notes
              </label>
              <textarea
                name="notes"
                rows="3"
                placeholder="Mention any specific requirements: panoramic glass car, MRL, fire-rated doors, existing shaft dimensions, or special access control..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-lightBg border border-slate-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none focus:border-accent"
              />
            </div>
          </div>
        </div>

        {/* Form Submission Action */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2.5 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
            <span>Strict engineering confidentiality. Instant validation demo.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3.5 rounded-xl text-sm font-semibold text-primary bg-gold-gradient shadow-lg hover:shadow-gold-glow active:scale-[0.98] transition-all disabled:opacity-50 text-center"
          >
            {isSubmitting ? (
              <span>Calculating Estimate...</span>
            ) : (
              <>
                <span>Generate Official Quote Request</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
