import React from 'react';
import ServiceDetailPage from '../components/common/ServiceDetailPage';
import { servicesData } from '../data/servicesData';

export default function ServiceRepairPage() {
  const service = servicesData.find((s) => s.id === 'repair') || servicesData[1];
  return <ServiceDetailPage service={service} />;
}
