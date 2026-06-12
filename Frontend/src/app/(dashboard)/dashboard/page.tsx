import DashboardWelcomeBanner from "./_components/dashboard-welcome-banner";
import DashboardStatsRow from "./_components/dashboard-stats-row";
import DashboardBrandsTable from "./_components/dashboard-brands-table";
import Tip from "./_components/dashboard-tip";
import { getBrandsData } from "@/app/(dashboard)/dashboard/data/brands";

export default async function DashboardPage() {
  const data = await getBrandsData();

  return (
    <div className="flex flex-col gap-6">
      <DashboardWelcomeBanner />
      <DashboardStatsRow />
      <Tip />
      <DashboardBrandsTable data={data} />
    </div>
  );
}