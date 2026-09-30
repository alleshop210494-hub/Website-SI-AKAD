import type { Metadata } from 'next';
import { TeacherDashboardView } from '@/frontend/features/dashboard/teacher-dashboard-view';

export const metadata: Metadata = {
  title: 'Dashboard Guru',
};

export default function GuruPage() {
  return <TeacherDashboardView />;
}