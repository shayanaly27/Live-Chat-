export type Brand = {
  name: string;
  icon: string;
  visitors: number;
  visitorsPct: number;
  chats: number;
  chatsPct: number;
  avg: string;
  avgPct: number;
};

const brandsData: Brand[] = [
  {
    name: "AliWheels",
    icon: "/images/placeholder/user.svg",
    visitors: 200,
    visitorsPct: 100,
    chats: 53,
    chatsPct: 100,
    avg: "5m 25s",
    avgPct: 100,
  },
  {
    name: "AliWheels",
    icon: "/images/placeholder/user.svg",
    visitors: 186,
    visitorsPct: 93,
    chats: 28,
    chatsPct: 53,
    avg: "4m 25s",
    avgPct: 88,
  },
  {
    name: "Webzoro",
    icon: "/images/placeholder/user.svg",
    visitors: 142,
    visitorsPct: 71,
    chats: 19,
    chatsPct: 36,
    avg: "3m 35s",
    avgPct: 71,
  },
  {
    name: "LegalTMS",
    icon: "/images/placeholder/user.svg",
    visitors: 91,
    visitorsPct: 46,
    chats: 12,
    chatsPct: 23,
    avg: "3m 35s",
    avgPct: 71,
  },
  {
    name: "Fast Publications",
    icon: "/images/placeholder/user.svg",
    visitors: 39,
    visitorsPct: 20,
    chats: 6,
    chatsPct: 11,
    avg: "3m 35s",
    avgPct: 71,
  },
  {
    name: "Fast Publications",
    icon: "/images/placeholder/user.svg",
    visitors: 39,
    visitorsPct: 20,
    chats: 6,
    chatsPct: 11,
    avg: "3m 35s",
    avgPct: 71,
  },
];

export async function getBrandsData(): Promise<Brand[]> {
  return brandsData;
  // Real API later: const res = await fetch("https://yourapi.com/api/brands"); return res.json();
}
