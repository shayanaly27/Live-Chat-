// DashboardStatsRow.tsx
import { FaGlobe, FaUserGroup } from "react-icons/fa6";
import { BiSolidMessage } from "react-icons/bi";
import StatCard from "./dashboard-stats-row/stat-card";
import BrandInsightsCard from "./dashboard-stats-row/brand-insights-card";

export default function DashboardStatsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard
        icon={<FaGlobe size={26} className="text-[#45B369]" />}
        iconBg="bg-emerald-50"
        label="Total Active Visitors"
        value="458"
        badge={{ text: "-4.0%", positive: false }}
        subText="From Last Hours"
        actionIcon="arrow"
      />
      <StatCard
        icon={<BiSolidMessage size={26} className="text-[#8060DF]" />}
        iconBg="bg-violet-50"
        label="Total Ongoing Chats"
        value="65"
        badge={{ text: "+5", positive: true }}
        subText="Waiting For Reply"
        actionIcon="arrow"
      />
      <StatCard
        icon={<FaUserGroup size={26} className="text-[#92BA23]" />}
        iconBg="bg-violet-50"
        label="Available Agents"
        value="3"
        badge={{ text: "+2", positive: true }}
        subText="Available Now"
        actionIcon="plus"
      />
      <BrandInsightsCard />
    </div>
  );
}