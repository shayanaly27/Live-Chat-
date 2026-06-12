import Image from "next/image";
import { IoSunnyOutline, IoNotificationsOutline } from "react-icons/io5";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0">

      <button
        aria-label="Toggle theme"
        className="p-1.5 sm:p-2 md:p-2.5 rounded-full text-gray-500 border border-gray-200 hover:bg-gray-50 hover:text-gray-700 transition-all cursor-pointer"
      >
        <IoSunnyOutline size={16} className="sm:hidden" />
        <IoSunnyOutline size={18} className="hidden sm:block" />
      </button>

      <button
        aria-label="Notifications"
        className="relative p-1.5 sm:p-2 md:p-2.5 rounded-full text-gray-500 border border-gray-200 hover:bg-gray-50 hover:text-gray-700 transition-all cursor-pointer"
      >
        <IoNotificationsOutline size={16} className="sm:hidden" />
        <IoNotificationsOutline size={18} className="hidden sm:block" />
        <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-violet-500 border border-white" />
      </button>

      <button
        aria-label="User menu"
        className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full overflow-hidden border border-gray-100 hover:border-violet-200 flex items-center justify-center transition-all shrink-0 relative"
      >
        <Image
          src="/images/icons/user.svg"
          alt="User avatar"
          width={44}
          height={44}
          className="object-cover w-full h-full"
        />
      </button>
    </div>
  );
}