import Image from "next/image";

export default function BrandInsightsCard() {
  return (
    <div 
      className="rounded-2xl border border-gray-100 p-5 flex flex-col gap-3"
      style={{
        background: "linear-gradient(180deg, #F0ECFF 0%, #F7F4FF 18%, rgba(247, 244, 255, 0) 100%)"
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-800">View Brand Insights</p>
        <button className="text-xs font-medium text-violet-500 hover:text-violet-700 transition-colors cursor-pointer">
          See more →
        </button>
      </div>

      {/* Chart image */}
      <div className="w-full flex-1">
        <Image
          src="/images/icons/dashboard-graph.svg"
          alt="Brand insights chart"
          width={300}
          height={100}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}