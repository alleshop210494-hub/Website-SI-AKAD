import { redirect } from 'next/navigation';

export default function RootPage() {
  // Entry point utama: Mengarahkan secara otomatis ke portal login
  redirect('/login');
}