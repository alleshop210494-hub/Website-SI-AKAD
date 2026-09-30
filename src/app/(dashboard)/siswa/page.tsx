import type { Metadata } from 'next';
import { StudentDashboardView } from '@/frontend/features/dashboard/student-dashboard-view';

export const metadata: Metadata = {
  title: 'Dashboard Siswa',
};

export default function SiswaPage() {
  return <StudentDashboardView />;
}