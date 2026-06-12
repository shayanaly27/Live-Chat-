import { type ReactNode } from "react";
import { ArrowUpRight, Plus } from "lucide-react";

interface StatCardProps {
  icon: ReactNode;
  iconBg: string;       // e.g. "bg-emerald-50"
  label: string;
  value: string;
  badge: {
    text: string;
    positive: boolean;
  };
  subText: string;
  actionIcon?: "arrow" | "plus";
}

export default function StatCard({
  icon,
  iconBg,
  label,
  value,
  badge,
  subText,
  actionIcon = "arrow",
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-4">
      {/* Icon Wrapper with Figma Inset Shadows */}
      <div 
        className={`w-13 h-13 rounded-full ${iconBg} flex items-center justify-center shrink-0`}
        style={{
          boxShadow: "inset 3.55px 3.55px 7.1px 0px rgba(213, 213, 213, 0.25), inset -3.55px -3.55px 7.1px 0px rgba(166, 171, 189, 0.25)"
        }}
      >
        {icon}
      </div>

      {/* Label */}
      <p className="text-sm text-gray-400">{label}</p>

      {/* Value row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-2xl font-bold text-gray-900">{value}</span>
          <span
            className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
              badge.positive
                ? "bg-emerald-50 text-emerald-600"
                : "bg-red-50 text-red-500"
            }`}
          >
            {badge.text}
          </span>
          <span className="text-xs text-gray-400">{subText}</span>
        </div>
        <div className="text-gray-300 shrink-0">
          {actionIcon === "arrow" ? (
            <ArrowUpRight size={16} />
          ) : (
            <Plus size={16} />
          ) }
        </div>
      </div>
    </div>
  );
}