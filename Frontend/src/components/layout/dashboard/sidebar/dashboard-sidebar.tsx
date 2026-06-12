"use client";

import SidebarLogo from "./_components/sidebar-logo";
import SidebarNav from "./_components/sidebar-nav";
import SidebarUpgradeBanner from "./_components/sidebar-upgrade-banner";

interface DashboardSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function DashboardSidebar({
  open,
  onClose,
}: DashboardSidebarProps) {
  return (
    <>
      {open && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/30"
          onClick={onClose}
        />
      )}

      <aside
        className={[
          "flex flex-col w-[18rem] max-w-full bg-white border-r border-gray-200 shrink-0",
          "overflow-x-hidden overflow-y-auto [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-transform duration-200 ease-in-out",
          "fixed top-0 left-0 h-full z-40",
          "md:relative md:translate-x-0 md:min-h-screen",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <SidebarLogo />
        <SidebarNav />
        <div className="flex-1 min-h-[20px]" />
        <SidebarUpgradeBanner />
      </aside>
    </>
  );
}
