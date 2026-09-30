import type { Metadata } from 'next';
import { ParentDashboardView } from '@/frontend/features/dashboard/parent-dashboard-view';

export const metadata: Metadata = {
  title: 'Dashboard Orang Tua',
};

export default function OrtuPage() {
  return <ParentDashboardView />;
}