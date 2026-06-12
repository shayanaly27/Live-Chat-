"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Importing the exact icons requested for the new sequence
import { MdHomeFilled, MdReport } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { HiCursorClick } from "react-icons/hi";
import { GiElectric } from "react-icons/gi";
import { IoArchiveSharp, IoCard, IoSettings, IoLogOutSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { AiFillAppstore } from "react-icons/ai";
import { GoShieldCheck } from "react-icons/go";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: <MdHomeFilled size={17} /> },
  { label: "Conversations", href: "/conversations", icon: <IoMdChatboxes size={17} /> },
  { label: "Engage", href: "/engage", icon: <HiCursorClick size={17} /> },
  { label: "Automate", href: "/automate", icon: <GiElectric size={17} /> },
  { label: "Archives", href: "/archives", icon: <IoArchiveSharp size={17} /> },
  { label: "Team", href: "/team", icon: <RiTeamFill size={17} /> },
  { label: "Reports", href: "/reports", icon: <MdReport size={17} /> },
  { label: "Apps", href: "/apps", icon: <AiFillAppstore size={17} /> },
  { label: "All Brands", href: "/brands", icon: <GoShieldCheck size={17} /> },
  { label: "Billing", href: "/billing", icon: <IoCard size={17} /> },
  { label: "Settings", href: "/settings", icon: <IoSettings size={17} /> },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-y-2.25 px-6 pt-9">
  
      {NAV_ITEMS.map(({ label, href, icon }) => {
        const active = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={[
              "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all",
              active 
                ? "text-[#111111] font-medium bg-violet-50" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-600",
            ].join(" ")}
          >
            <span className={active ? "text-[#8060DF]" : ""}>
              {icon}
            </span>
            {label}
          </Link>
        );
      })}

      <button
        onClick={() => {
        
          console.log("Logging out...");
        }}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all text-[#DE1A1D99] hover:bg-red-50/50 hover:text-[#DE1A1D]"
      >
        <span>
          <IoLogOutSharp className="text-[#e6000499]" size={17} />
        </span>
        Logout
      </button>
    </nav>
  );
}