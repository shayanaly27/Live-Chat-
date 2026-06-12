import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

interface SidebarToggleButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function SidebarToggleButton({ open, onClick }: SidebarToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-all"
      aria-label="Toggle sidebar"
    >
      {open ? <IoCloseOutline size={22} /> : <RxHamburgerMenu size={20} />}
    </button>
  );
}