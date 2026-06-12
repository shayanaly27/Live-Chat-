"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function HeaderSearch() {
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="relative flex items-center flex-1 min-w-0">

      <button
        onClick={() => setSearchOpen(v => !v)}
        className="sm:hidden p-1.5 rounded-xl text-gray-400 hover:bg-gray-50 border border-gray-100 transition-all shrink-0"
        aria-label="Open search"
      >
        <CiSearch size={18} />
      </button>

      {searchOpen && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[180px] z-10 sm:hidden">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            autoFocus
            className="w-full pl-4 pr-4 py-2 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-[#98A2B3] focus:outline-none focus:ring-4 focus:ring-gray-100 focus:border-gray-300 transition-all shadow-sm"
          />
        </div>
      )}

      <div className="relative hidden sm:flex items-center w-full max-w-xs md:max-w-sm lg:max-w-md">
        <span className="absolute left-4 text-gray-400 pointer-events-none">
          <CiSearch className="text-[#98A2B3]" size={20} />
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full pl-11 pr-12 py-2.5 md:py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-[#98A2B3] focus:outline-none focus:ring-4 focus:ring-gray-100 focus:border-gray-300 transition-all"
        />
        {!query && (
          <kbd className="hidden md:flex absolute right-4 pointer-events-none text-[10px] font-semibold text-gray-500 bg-gray-50 border border-gray-200 rounded-md px-1.5 py-0.5 tracking-widest">
            ⌘S
          </kbd>
        )}
      </div>
    </div>
  );
}