"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility untuk menggabungkan class Tailwind dengan rapi
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MobileFooter = () => {
  // State untuk menyimpan tab yang sedang aktif
  const [activeTab, setActiveTab] = useState("home");

  // Definisi menu agar kode lebih bersih (DRY)
  const leftTabs = [
    { id: "home", icon: "home" },
    { id: "grid", icon: "grid_view" },
  ];
  const rightTabs = [
    { id: "cart", icon: "shopping_bag", hasBadge: true },
    { id: "profile", icon: "person" },
  ];

  return (
    <nav
      className="fixed bottom-0 w-full max-w-[600px] z-50 pointer-events-none flex justify-center pb-8 px-6"
      aria-label="Bottom Navigation"
    >
      {/* Liquid Glass Container ala Apple */}
      <div
        className="relative pointer-events-auto flex items-center justify-between w-full px-6 py-3 rounded-[2rem] border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.6)]"
        style={{
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}
      >
        {/* Kiri: Home & Grid */}
        <div className="flex items-center gap-2">
          {leftTabs.map((tab) => (
            <NavItem
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        {/* Tengah: Floating Action Button (Premium Glass) */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <motion.button
            whileTap={{ scale: 0.85 }} // Animasi mengecil saat ditekan
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center w-16 h-16 rounded-full border border-white/80 shadow-[0_10px_30px_rgba(242,161,178,0.4),inset_0_2px_4px_rgba(255,255,255,0.8)] z-50"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(242,161,178,0.3))",
              backdropFilter: "blur(24px)",
            }}
          >
            <span className="material-symbols-outlined text-[36px] font-bold text-primary drop-shadow-sm">
              add
            </span>
          </motion.button>
        </div>

        {/* Kanan: Cart & Profile */}
        <div className="flex items-center gap-2">
          {rightTabs.map((tab) => (
            <NavItem
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

// Komponen Sub-Item Navigasi
const NavItem = ({ tab, isActive, onClick }: { tab: any; isActive: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-col items-center justify-center w-14 h-12 rounded-2xl outline-none tap-highlight-transparent"
    >
      {/* Active Indicator (Animasi Sliding ala iOS) */}
      {isActive && (
        <motion.div
          layoutId="active-pill" // Kunci animasi framer-motion!
          className="absolute inset-0 bg-primary/15 rounded-2xl"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        />
      )}

      {/* Ikon */}
      <motion.div
        animate={{ y: isActive ? -2 : 0 }} // Ikon sedikit naik saat aktif
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10 flex flex-col items-center"
      >
        <span
          className={cn(
            "material-symbols-outlined text-[28px] transition-colors duration-300",
            isActive ? "text-primary" : "text-[#8a7a80] hover:text-[#5e4a4f]"
          )}
          style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }} // Mengisi warna ikon jika aktif (jika didukung font)
        >
          {tab.icon}
        </span>
        
        {/* Red Dot Badge (khusus cart) */}
        {tab.hasBadge && (
          <span className="absolute top-0 right-[-2px] w-2.5 h-2.5 rounded-full bg-primary border-[2px] border-white/80 shadow-sm"></span>
        )}
      </motion.div>
    </button>
  );
};