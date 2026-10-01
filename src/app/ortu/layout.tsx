import React from "react";
import ParentSidebar from "@/frontend/components/ParentSidebar";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <ParentSidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}