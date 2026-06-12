"use client";

import { useState } from "react";
import { Brand } from "@/app/(dashboard)/dashboard/data/brands";
import { DataTable } from "@/components/layout/dashboard/Table/data-table";
import { brandsColumns } from "./dashboard-brands-table/brands-columns";

interface DashboardBrandsTableProps {
  data: Brand[];
}

const tabs = ["All Brands", "Pages", "Sources"] as const;
type Tab = (typeof tabs)[number];

export default function DashboardBrandsTable({ data }: DashboardBrandsTableProps) {
  const [activeTab, setActiveTab] = useState<Tab>("All Brands");

  return (
    <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">

      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-sm rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-1.5 text-xs text-gray-400 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50">
          Last 7 days <span>▾</span>
        </button>
      </div>

      <DataTable columns={brandsColumns} data={data} />
    </div>
  );
}