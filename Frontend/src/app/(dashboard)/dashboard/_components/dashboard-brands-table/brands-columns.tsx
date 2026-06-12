"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Brand } from "@/app/(dashboard)/dashboard/data/brands";
import { ChevronsUpDown } from "lucide-react";

// Progress bar used inside cells
function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="w-36 sm:w-44 md:w-52 h-2 rounded-full bg-gray-100 overflow-hidden">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

// Sort icon matching Figma
function SortIcon() {
  return <ChevronsUpDown size={13} className="inline ml-1 text-gray-400" />;
}

export const brandsColumns: ColumnDef<Brand>[] = [
  {
    accessorKey: "name",
    header: () => <span>Brand</span>,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 bg-gray-100 flex items-center justify-center">
          <Image
            src={row.original.icon}
            alt={row.original.name}
            width={28}
            height={28}
            className="object-cover w-full h-full"
          />
        </div>
        <span className="font-medium text-gray-800">{row.original.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "visitors",
    header: () => (
      <span>
        Visitors <SortIcon />
      </span>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Bar pct={row.original.visitorsPct} color="bg-violet-600" />
        <span className="text-sm text-gray-500 w-8">{row.original.visitors}</span>
      </div>
    ),
  },
  {
    accessorKey: "chats",
    header: () => (
      <span>
        Chats <SortIcon />
      </span>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Bar pct={row.original.chatsPct} color="bg-violet-500" />
        <span className="text-sm text-gray-500 w-8">{row.original.chats}</span>
      </div>
    ),
  },
  {
    accessorKey: "avg",
    header: () => (
      <span>
        Avg. time per session <SortIcon />
      </span>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Bar pct={row.original.avgPct} color="bg-violet-300" />
        <span className="text-sm text-gray-500 w-14">{row.original.avg}</span>
      </div>
    ),
  },
];