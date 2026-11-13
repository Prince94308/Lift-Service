import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiries',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/80 shadow-premium">
      <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-2">
        Send Us a Direct Message
      </h3>
      <p className="text-xs sm:text-sm text-mutedText mb-5 sm:mb-6">
        Whether you require immediate technical advice or wish to consult on an upcoming facility project, our regional engineering desk is at your service.
      </p>

      {submitted ? (
        <div className="p-5 sm:p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-in zoom-in-95 duration-200 space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="font-heading font-bold text-base sm:text-lg text-emerald-900">
            Message Successfully Received!
          </h4>
          <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed max-w-sm mx-auto">
            Thank you, <span className="font-semibold">{formData.name}</span>. Your inquiry regarding <span className="font-semibold">{formData.subject}</span> has been processed in this demo environment.
          </p>

          <div className="mt-3 p-3 rounded-lg bg-amber-50 border border-amber-200 text-left text-[11px] text-amber-900 flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Frontend Demo Note:</strong> This form confirms client-side data validation. In production, this would route to our dispatch ticket desk.
            </span>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', phone: '', subject: 'General Inquiries', message: '' });
            }}
            className="mt-4 px-5 py-2.5 rounded-lg bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-secondary transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Richard Sterling"
                className={`w-full bg-lightBg border rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-accent'
                }`}
              />
              {errors.name && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.name}</span>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. r.sterling@example.com"
                className={`w-full bg-lightBg border rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-accent'
                }`}
              />
              {errors.email && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.email}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 (555) 019-2834"
                className={`w-full bg-lightBg border rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-accent'
                }`}
              />
              {errors.phone && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.phone}</span>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Inquiry Topic
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-lightBg border border-slate-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none focus:border-accent"
              >
                <option value="General Inquiries">General Technical Inquiries</option>
                <option value="New Project Consultation">New Project Architectural Consultation</option>
                <option value="AMC Maintenance Plan">Annual Maintenance Contracts (AMC)</option>
                <option value="Modernization Audit">Modernization & Performance Audit</option>
                <option value="Spare Parts Sourcing">Spare Parts & Components Sourcing</option>
                <option value="Emergency Breakdown Inquiry">Non-Urgent Breakdown Question</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Message or Project Details *
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your elevator requirement, current issues, or building specifications..."
              className={`w-full bg-lightBg border rounded-lg px-3 py-2.5 text-xs sm:text-sm text-primary focus:outline-none ${
                errors.message ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-accent'
              }`}
            />
            {errors.message && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.message}</span>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-xl text-sm font-semibold text-primary bg-gold-gradient shadow-md hover:shadow-gold-glow transition-all disabled:opacity-50 text-center"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Sending Message...' : 'Transmit Message to Engineering Desk'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
