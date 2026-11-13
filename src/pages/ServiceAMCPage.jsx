import React from 'react';
import ServiceDetailPage from '../components/common/ServiceDetailPage';
import { servicesData } from '../data/servicesData';

export default function ServiceAMCPage() {
  const service = servicesData.find((s) => s.id === 'amc') || servicesData[2];
  return <ServiceDetailPage service={service} />;
}
