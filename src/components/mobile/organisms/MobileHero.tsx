"use client";

import { motion, Variants } from "framer-motion";

export const MobileHero = () => {
  // --- KONFIGURASI ANIMASI FRAMER MOTION ---
  
  // 1. Tambahkan ': Variants' agar TypeScript mengenali ini sebagai objek animasi
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // 2. Tambahkan ': Variants' di sini juga
  const slideUpSpring: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 250, damping: 25 },
    },
  };

  // 3. Tambahkan 'as const' pada ease agar dibaca sebagai literal string
  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const, 
    },
  };

  return (
    <>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col px-6 pt-24 pb-10 gap-8"
      >
        {/* Gambar Hero */}
        <motion.figure
          variants={slideUpSpring}
          className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden group mt-0 shadow-[0_20px_40px_rgba(242,161,178,0.2)] border border-white/40"
        >
          {/* Gambar dengan efek zoom lambat saat hover */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFHCzxV4za1HOWQP2y8l87d89eI44Jk1lRRAGdSrb_vKA8TLq_-8iX_NX0bJoFerC0HnEW8Pe_chg5v9YWDZa03-0-ka6zsatFMhk3D5O_UC0wKK2XM6QS3QQSNA9d9336xTX3wAZj42cmhATlyDvkFHdnmoqfBYWWIh1uteUjniJWUUcKVAhWd0F88qc1pEugiSp4G0jNrH_rH4T5vSuGteAcPMhY9o0FaqsS1_njJvXUyP-pWtYnmtf_ySdTjNobt73LsJcQpoY')" }}
          ></div>
          
          {/* Gradien bayangan bawah */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b0e11]/50 via-transparent to-[#1b0e11]/10"></div>
          
          {/* Floating Badge (New Arrival) */}
          <motion.figcaption
            animate={floatingAnimation}
            className="absolute top-8 right-6 glass-panel px-5 py-2.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/60"
            style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1b0e11] drop-shadow-sm">
              New Arrival
            </span>
          </motion.figcaption>
        </motion.figure>

        {/* Teks Hero */}
        <div className="flex flex-col items-center text-center gap-5 mt-2">
          <motion.h2
            variants={slideUpSpring}
            className="font-serif text-[42px] leading-[1.1] font-medium text-[#1b0e11] tracking-tight"
          >
            Elevate Your <br />
            <span className="italic text-primary-dark font-light">Natural Beauty</span>
          </motion.h2>
          
          <motion.p
            variants={slideUpSpring}
            className="text-[#5e4a4f] text-[15px] leading-relaxed max-w-[90%] font-light"
          >
            Handcrafted, premium nail art designed for the modern muse. Experience the <span className="font-medium">liquid glass aesthetic</span>.
          </motion.p>
          
          <motion.div variants={slideUpSpring} className="w-full sm:w-auto mt-2">
            <motion.button
              whileTap={{ scale: 0.92 }} 
              whileHover={{ scale: 1.03 }}
              className="glass-btn px-8 py-4 rounded-full flex items-center justify-center gap-3 text-white font-semibold tracking-wide w-full shadow-[0_10px_30px_rgba(242,161,178,0.4)]"
            >
              <span>Shop Collection</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Bagian Icon (Scroll-triggered Animation) */}
      <section className="px-6 py-4 mb-8">
        <motion.div
          initial="hidden"
          whileInView="show" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={staggerContainer}
          className="glass-panel rounded-[2rem] p-6 flex justify-between items-start text-center border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
          style={{ backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }}
        >
          {/* Icon 1 */}
          <motion.div variants={slideUpSpring} className="flex flex-col items-center gap-3 flex-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-primary/10 flex items-center justify-center text-primary mb-1 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_10px_rgba(242,161,178,0.2)]">
              <span className="material-symbols-outlined text-[22px]">eco</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5e4a4f]">Non-Toxic</span>
          </motion.div>

          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/20 to-transparent self-center"></div>

          {/* Icon 2 */}
          <motion.div variants={slideUpSpring} className="flex flex-col items-center gap-3 flex-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-primary/10 flex items-center justify-center text-primary mb-1 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_10px_rgba(242,161,178,0.2)]">
              <span className="material-symbols-outlined text-[22px]">brush</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5e4a4f]">Hand-Painted</span>
          </motion.div>

          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/20 to-transparent self-center"></div>

          {/* Icon 3 */}
          <motion.div variants={slideUpSpring} className="flex flex-col items-center gap-3 flex-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-primary/10 flex items-center justify-center text-primary mb-1 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_10px_rgba(242,161,178,0.2)]">
              <span className="material-symbols-outlined text-[22px]">diamond</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5e4a4f]">Durable</span>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};