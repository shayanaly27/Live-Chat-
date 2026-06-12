"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import HeaderSearch from "./_components/header-search";
import HeaderActions from "./_components/header-actions";

interface DashboardHeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export default function DashboardHeader({ sidebarOpen, onToggleSidebar }: DashboardHeaderProps) {
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 bg-[#F8F9FA]">
      <header className="flex items-center justify-between h-16 sm:h-18 md:h-20 px-3 sm:px-5 md:px-6 bg-white border border-gray-100 rounded-2xl shadow-sm w-full gap-2 sm:gap-4">

        <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">

          <button
            onClick={onToggleSidebar}
            className="md:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-50 border border-gray-100 transition-all shrink-0"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <IoCloseOutline size={20} /> : <RxHamburgerMenu size={18} />}
          </button>

          <HeaderSearch />
        </div>

        <HeaderActions />

      </header>
    </div>
  );
}