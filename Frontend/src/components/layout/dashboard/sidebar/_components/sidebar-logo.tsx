import Image from "next/image";

export default function SidebarLogo() {
  return (
    <div className="flex items-center gap-2 px-4 sm:px-5 lg:px-6 pt-2.5 h-14 sm:h-16  shrink-0">
      <Image
        src="/images/logo/logo.svg"
        alt="logoipsum"
        width={165}
        height={30}
        className="w-[7.5rem] sm:w-[8.75rem] lg:w-[10.3125rem] h-auto"
        priority
      />
    </div>
  );
}