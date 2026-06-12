import Image from "next/image";
// Import the static data object from your sibling file in the same directory
import { workspace } from "./dumy-data";

export default function DashboardWelcomeBanner() {
  return (
    <div
      className="relative grid grid-cols-[auto_1fr_auto] gap-y-3 rounded-2xl px-5 sm:px-8 py-4 overflow-hidden min-[1001px]:flex min-[1001px]:flex-row min-[1001px]:items-center min-[1001px]:justify-between"
      style={{
        background: "linear-gradient(93.53deg, #8060DF 10.24%, #260096 78.39%)",
        minHeight: "6.5rem",
      }}
    >
      <div className="col-start-1 row-start-1 z-10 shrink-0">
        <div className="w-16 h-16 sm:w-20 sm:h-20 min-[1001px]:w-16 min-[1001px]:h-16 rounded-full overflow-hidden border-2 border-white/30">
          <Image
            src={workspace.image || "/images/icons/user.svg"} // Dynamic fallback link line
            alt={`${workspace.name}'s avatar`}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="col-span-3 row-start-2 z-10 min-w-0 w-full mt-1 min-[1001px]:mt-0 min-[1001px]:col-span-1 min-[1001px]:row-start-1 min-[1001px]:flex-1 min-[1001px]:pl-4 min-[1001px]:pr-8 min-[1391px]:max-w-[50%]">
        <h1 className="text-white text-base sm:text-3xl min-[1001px]:text-2xl font-bold leading-tight min-[1391px]:truncate">
          Good Afternoon, {workspace.name}
        </h1>
        <p className="text-white/70 text-xs sm:text-sm min-[1001px]:text-base mt-1 min-[1391px]:truncate">
          Your connected brands handled 65 conversations today.
        </p>
      </div>

      <button className="col-start-3 row-start-1 z-10 shrink-0 h-fit self-start min-[1001px]:self-auto min-[1001px]:ml-auto px-3 sm:px-5 py-2 sm:py-1 rounded-full bg-white text-[#200F5C] text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer">
        View Inbox
      </button>

      <div
        className="absolute bottom-0 hidden min-[1391px]:block pointer-events-none"
        style={{ 
          right: "13.75rem", 
          height: "95%" 
        }}
      >
        <Image
          src="/images/banner/illustration.svg"
          alt=""
          width={240}
          height={100}
          className="h-full w-auto object-contain object-bottom"
          aria-hidden
        />
      </div>
    </div>
  );
}