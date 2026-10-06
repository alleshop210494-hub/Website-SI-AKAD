// src/app/admin/teachers/page.tsx
import { pool } from '@/backend/config/db';

async function getTeachers() {
  try {
    const result = await pool.query('SELECT * FROM teachers ORDER BY id ASC');
    return result.rows;
  } catch (error) {
    console.error('Error fetching teachers:', error);
    return [];
  }
}

export default async function TeacherManagementPage() {
  const teachers = await getTeachers();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Manajemen Data Guru</h1>
        <span className="text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md font-medium">
          Login sebagai: Admin TU
        </span>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 font-semibold text-slate-700">
          Daftar Guru Pengajar
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">No</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Username</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Nama Lengkap</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Mata Pelajaran</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {teachers.length > 0 ? (
                teachers.map((teacher, index) => (
                  <tr key={teacher.id || index} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{teacher.username || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{teacher.nama || teacher.nama_guru || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{teacher.mapel || teacher.subject || '-'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-sm text-slate-500">
                    Belum ada data guru di database.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}