import React from 'react';
import ServiceDetailPage from '../components/common/ServiceDetailPage';
import { servicesData } from '../data/servicesData';

export default function ServiceModernizationPage() {
  const service = servicesData.find((s) => s.id === 'modernization') || servicesData[3];
  return <ServiceDetailPage service={service} />;
}
