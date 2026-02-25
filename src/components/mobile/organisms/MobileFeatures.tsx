"use client";

import { motion, Variants } from "framer-motion";

export const MobileFeatures = () => {
  // --- KONFIGURASI ANIMASI ---
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const slideUpSpring: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 250, damping: 25 },
    },
  };

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <>
      {/* 1. Collections Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-8 w-full overflow-hidden"
      >
        <motion.header variants={slideUpSpring} className="px-6 mb-6 flex justify-between items-end">
          <h3 className="font-serif text-3xl font-medium text-[#1b0e11] tracking-tight">Collections</h3>
          <a className="text-sm font-medium text-primary hover:text-primary-dark transition-colors" href="#">
            View All
          </a>
        </motion.header>
        
        <div className="flex gap-5 overflow-x-auto px-6 pb-8 no-scrollbar snap-x snap-mandatory">
          {/* Card 1 */}
          <motion.article
            variants={scaleUp}
            whileTap={{ scale: 0.95 }}
            className="relative min-w-[280px] h-[360px] rounded-[2rem] overflow-hidden snap-center group shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-white/50"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNyyBqjKdrWfRaKgp7ABM2ClaTNALY3LILgYHW0tcXuWG4Za0oyCUcSATWI3cKi8p7lR-DFecJKBIyl9NK_IOOXTX9ZpTEUqIbhubZpllZLnt_5iD9JjuvV2UdUPZ7uNk9v5YDvvBi7JAi8j4uYZpeMqTsO4cLybzby9DQuz3vQSg-gkv_u4BwzrTB3PPRfhoBfZlj6lsfjKXsDjioJjUJ5-tTQL7zlLfEelsPxV820TnKbAkGVdcM4EzLchdv3eeewLE--qvp7XA')" }}></div>
            {/* Gradien Kaca Apple */}
            <div className="absolute inset-x-3 bottom-3 p-5 rounded-[1.5rem] bg-white/30 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.8)]" style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
              <h4 className="font-serif text-lg font-bold text-[#1b0e11]">The Bridal Edit</h4>
              <p className="text-xs text-[#5e4a4f] mt-1 font-medium">For your special day</p>
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            variants={scaleUp}
            whileTap={{ scale: 0.95 }}
            className="relative min-w-[280px] h-[360px] rounded-[2rem] overflow-hidden snap-center group shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-white/50"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDu8qUGhJJU7onWjojAjERCC08Usg7P8a7-8399i4QdKQ7QByFhTgAbwZHUYt9kA1LBD2FvnMUjzrw1kAxqNDignIw-YtDTOcvlETi41Drt20qlKfLDYZTdQuoeLPxL6r4HAPzdVx5DzFy9lT4BPYkDQtWqvXB8Q8WAy5b82uj7zqbvSI_AqOTHEUoKcqX-ihjLKtaOWVsmtjlHAH8O4jKm3LsWpMUYewOCZxia6aN1RabbNQ3kiVAQkuzPaQxYhkQynte9wYBLcN8')" }}></div>
            <div className="absolute inset-x-3 bottom-3 p-5 rounded-[1.5rem] bg-white/30 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.8)]" style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
              <h4 className="font-serif text-lg font-bold text-[#1b0e11]">Daily Minimalist</h4>
              <p className="text-xs text-[#5e4a4f] mt-1 font-medium">Elegant everyday wear</p>
            </div>
          </motion.article>

          {/* Card 3 */}
          <motion.article
            variants={scaleUp}
            whileTap={{ scale: 0.95 }}
            className="relative min-w-[280px] h-[360px] rounded-[2rem] overflow-hidden snap-center group shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-white/50"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcHFfzWxIwlM31gmDB2WlfnLp-wgAlb_Z2TjY2QlHEIzN2QZsFxE8bHc2KbfmTvSoDxz5T9TaEn03w9gvm_wcRzhjyALfoKIKm8JxAUZ2tH5n1roPhFmqVQU0_PhI-mPmZnuR-LYZHVCQx7BbJM2nJuKGt6c0AvtozFBf8aB0jZMh757OOOuAT9aVJwsSCuV5LC60rc7pqnLL2bjEwlKCosEeTknYsoABKLqIiOTwqr0-6vfRd6IdOnGzGVBv5q5dXDqKJhVU_s0s')" }}></div>
            <div className="absolute inset-x-3 bottom-3 p-5 rounded-[1.5rem] bg-white/30 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.8)]" style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
              <h4 className="font-serif text-lg font-bold text-[#1b0e11]">Avant-Garde</h4>
              <p className="text-xs text-[#5e4a4f] mt-1 font-medium">Bold artistic statements</p>
            </div>
          </motion.article>
        </div>
      </motion.section>

      {/* 2. Shop by Category Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 py-6 flex flex-col gap-5"
      >
        <motion.h3 variants={slideUpSpring} className="font-serif text-3xl font-medium text-[#1b0e11] mb-1 tracking-tight">Shop by Category</motion.h3>
        <div className="grid grid-cols-2 gap-4">
          
          {/* Category 1 (Full Width) */}
          <motion.article
            variants={scaleUp}
            whileTap={{ scale: 0.96 }}
            className="col-span-2 relative h-48 rounded-[2rem] overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.06)] border border-white/60 cursor-pointer"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAy4xfRFlL2RXal6HcIulrxaOcOiuti6Zo4w56ku-HDgPB_tI4W9-2PxNynlytLAeXeo1xgqsooxMgMiGOcg7VzQdFEJKhTYIicRbxv7t4jW20q8x1Sm-GovsjaYY8SDu8yp9HFuPQwVJOPuLxBZJfggUsXDaYzechSrE81K0t6mAKDZzuC26bhwjsPJXmNh5tyKjps4C6PrTLKjawUOFZRm8DR79y0yiloZc0bcQu51SPYRqYbu2xQiQn8GstVB_SRhVN_hmnTeUE')" }}></div>
            <div className="absolute inset-0 bg-black/15"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/40 px-8 py-3.5 rounded-full border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.9)]" style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
                <span className="font-bold tracking-wide text-[#1b0e11] drop-shadow-sm">Press-on Nails</span>
              </div>
            </div>
          </motion.article>

          {/* Category 2 (Half Width) */}
          <motion.article
            variants={scaleUp}
            whileTap={{ scale: 0.94 }}
            className="relative h-44 rounded-[2rem] overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.06)] border border-white/60 cursor-pointer"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXwE1rI4DXuOzafYNKVi9US_IAcbcigh2iHlfg7_S54KZ0YKqEWB7MMhtkbbyjpEc-MVpOh77v07a3HgX68taGETIxdYd0J2PUHKg3kVDhBLihHNF3bTDyeglPiQk3fHfQu9Q0BMzwSWMuBeQ3hEHAgSLZxWvaH6oEzy-Hfz4R5CxsO0hA8e-9SGM9e8gPPefVZw3eAV6PMx3V-PLDXLb5qpQ1rejP74-NkdkLIaw5U_BgZZwbVjaW--Tx24aUCs2W9pWvMlfFWyg')" }}></div>
            <div className="absolute inset-0 bg-black/15"></div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-white/40 px-5 py-2.5 rounded-full border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.9)] text-xs" style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
                <span className="font-bold tracking-wide text-[#1b0e11]">Tools</span>
              </div>
            </div>
          </motion.article>

          {/* Category 3 (Half Width) */}
          <motion.article
            variants={scaleUp}
            whileTap={{ scale: 0.94 }}
            className="relative h-44 rounded-[2rem] overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.06)] border border-white/60 cursor-pointer"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0MC-ItZjxYTYq4tk7_eEigvnyzYs0omQZJhSIN6RmZSREZuJ-dAHotvp6z8XK8AirwccuYk22Wph6QOrAgCwyrXmEGJqOYHBG3J2OE7myTx1sI7AIHkhgSqnAIPhZOlZZiWi7HCAOK4ZEPwgBKPTMy8nGfeg9wQ3cm6gc4EvZDjPwUSKwbl2E7kyUO_sLRKzrr4SDKTPwLUDIM5ZiPKCAKdGvwpCuUh5avIlMCXUoVoY1sA1FpO640PMysyTl9DR0g2LQff4OxP0')" }}></div>
            <div className="absolute inset-0 bg-black/15"></div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-white/40 px-5 py-2.5 rounded-full border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.9)] text-xs" style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
                <span className="font-bold tracking-wide text-[#1b0e11]">Polishes</span>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.section>

      {/* 3. How to Order Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 py-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <motion.h3 variants={slideUpSpring} className="font-serif text-3xl font-medium text-[#1b0e11] mb-10 text-center tracking-tight">How to Order</motion.h3>
        
        <div className="relative">
          {/* Animated Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[23px] top-4 w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent rounded-full origin-top"
          ></motion.div>

          <ol className="flex flex-col gap-8 list-none m-0 p-0 relative z-10">
            {/* Step 1 */}
            <motion.li variants={slideUpSpring} className="flex gap-5 items-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-[0_8px_16px_rgba(242,161,178,0.2)] flex items-center justify-center border-2 border-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-[22px]">search</span>
              </div>
              <div className="bg-white/50 p-4.5 rounded-[1.25rem] flex-1 border border-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,1)]" style={{ backdropFilter: "blur(16px)" }}>
                <h4 className="font-bold text-[#1b0e11] text-base">Browse & Select</h4>
                <p className="text-[13px] text-[#5e4a4f] mt-1 leading-relaxed">Choose your favorite design from our collection.</p>
              </div>
            </motion.li>

            {/* Step 2 */}
            <motion.li variants={slideUpSpring} className="flex gap-5 items-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-[0_8px_16px_rgba(242,161,178,0.2)] flex items-center justify-center border-2 border-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-[22px]">straighten</span>
              </div>
              <div className="bg-white/50 p-4.5 rounded-[1.25rem] flex-1 border border-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,1)]" style={{ backdropFilter: "blur(16px)" }}>
                <h4 className="font-bold text-[#1b0e11] text-base">Measure Size</h4>
                <p className="text-[13px] text-[#5e4a4f] mt-1 leading-relaxed">Follow our guide to find your perfect fit.</p>
              </div>
            </motion.li>

            {/* Step 3 */}
            <motion.li variants={slideUpSpring} className="flex gap-5 items-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-[0_8px_16px_rgba(242,161,178,0.2)] flex items-center justify-center border-2 border-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-[22px]">chat</span>
              </div>
              <div className="bg-white/50 p-4.5 rounded-[1.25rem] flex-1 border border-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,1)]" style={{ backdropFilter: "blur(16px)" }}>
                <h4 className="font-bold text-[#1b0e11] text-base">Consultation</h4>
                <p className="text-[13px] text-[#5e4a4f] mt-1 leading-relaxed">Chat with our artists via WhatsApp for details.</p>
              </div>
            </motion.li>

            {/* Step 4 */}
            <motion.li variants={slideUpSpring} className="flex gap-5 items-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-[0_8px_16px_rgba(242,161,178,0.2)] flex items-center justify-center border-2 border-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-[22px]">credit_card</span>
              </div>
              <div className="bg-white/50 p-4.5 rounded-[1.25rem] flex-1 border border-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,1)]" style={{ backdropFilter: "blur(16px)" }}>
                <h4 className="font-bold text-[#1b0e11] text-base">Secure Payment</h4>
                <p className="text-[13px] text-[#5e4a4f] mt-1 leading-relaxed">Complete your order with secure payment.</p>
              </div>
            </motion.li>
          </ol>
        </div>
      </motion.section>
    </>
  );
};