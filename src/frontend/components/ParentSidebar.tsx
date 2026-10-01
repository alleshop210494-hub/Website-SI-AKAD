"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/ortu", icon: "📊" },
  { label: "Kehadiran Anak", href: "/ortu/attendances", icon: "📅" },
  { label: "Nilai & Rapor", href: "/ortu/grades", icon: "🎓" },
  { label: "Tagihan & SPP", href: "/ortu/finance", icon: "💳" },
];

export default function ParentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4 flex flex-col justify-between shrink-0">
      <div className="space-y-6">
        <div className="px-3 py-2">
          <h2 className="text-xl font-bold text-blue-600">Portal Orang Tua</h2>
          <p className="text-xs text-gray-500">Sistem Informasi Akademik</p>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <div className="px-3 py-2 mb-2 bg-gray-50 rounded-lg">
          <p className="text-xs font-semibold text-gray-700">Wali Murid</p>
          <p className="text-[11px] text-gray-500">Siswa: Ahmad Dahlan (X IPA 1)</p>
        </div>
        <Link
          href="/login"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
        >
          <span>🚪</span>
          <span>Keluar</span>
        </Link>
      </div>
    </aside>
  );
}