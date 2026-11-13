import React from 'react';
import ServiceDetailPage from '../components/common/ServiceDetailPage';
import { servicesData } from '../data/servicesData';

export default function ServiceEmergencyPage() {
  const service = servicesData.find((s) => s.id === 'emergency') || servicesData[4];
  return <ServiceDetailPage service={service} />;
}
