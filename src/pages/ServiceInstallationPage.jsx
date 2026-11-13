import React from 'react';
import ServiceDetailPage from '../components/common/ServiceDetailPage';
import { servicesData } from '../data/servicesData';

export default function ServiceInstallationPage() {
  const service = servicesData.find((s) => s.id === 'installation') || servicesData[0];
  return <ServiceDetailPage service={service} />;
}
