"use client";

import Image from "next/image";

export default function SidebarUpgradeBanner() {
  return (
    // Changed mx-3 to ml-6 mr-2 to shift the entire layout to the right
    <div className="ml-6 mr-2 mb-4 mt-4 max-w-[240px] rounded-[16px] px-5 py-4 bg-[linear-gradient(180deg,#F0ECFF_0%,#F7F4FF_18%,rgba(247,244,255,0)_100%)] flex flex-col items-start">
      
      {/* Discount Icon Badge */}
      <div className="w-8 h-8 rounded-full bg-[#7C5CFC] flex items-center justify-center mb-2.5 shadow-sm shadow-purple-200">
        <Image
          src="/images/icons/discount.svg"
          alt="Discount icon"
          width={30}
          height={30}
        />
      </div>

      {/* Heading */}
      <h3 className="flex items-center gap-1 text-sm font-medium text-[#111827] mb-1">
        <span>🔥</span>  50% OFF Pro Membership
      </h3>

      {/* Description */}
      <p className="text-[11px] leading-normal text-[#6B7280] mb-3">
        Upgrade today and get 50% off your Pro plan. Enjoy unlimited access to premium features and enhanced performance.
      </p>

      {/* Action Button */}
      <button className="w-full py-2 rounded-full bg-[#7C5CFC] text-white text-[11px] font-semibold hover:bg-[#6944ff] transition-colors shadow-sm shadow-purple-200">
        Redeem Offer
      </button>
    </div>
  );
}