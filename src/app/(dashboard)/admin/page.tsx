import type { Metadata } from 'next';
import { AdminDashboardView } from '@/frontend/features/dashboard/admin-dashboard-view';

export const metadata: Metadata = {
  title: 'Dashboard Admin & TU',
};

export default function AdminPage() {
  return <AdminDashboardView />;
}