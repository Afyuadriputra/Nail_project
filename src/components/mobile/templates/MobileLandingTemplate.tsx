import { MobileHeader } from "../organisms/MobileHeader";
import { MobileHero } from "../organisms/MobileHero";
import { MobileFeatures } from "../organisms/MobileFeatures";
import { MobileFooter } from "../organisms/MobileFooter";

export const MobileLandingTemplate = () => {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="liquid-blob w-[500px] h-[500px] bg-primary/20 rounded-full top-[-100px] left-[-100px]"></div>
        <div className="liquid-blob w-[400px] h-[400px] bg-[#e3d5d8] rounded-full bottom-[10%] right-[-100px]"></div>
        <div className="liquid-blob w-[300px] h-[300px] bg-primary/15 rounded-full top-[40%] left-[20%]"></div>
      </div>

      <div className="relative flex min-h-screen w-full flex-col items-center">
        <div className="w-full max-w-[600px] flex flex-col min-h-screen bg-white/40 backdrop-blur-sm border-x border-white/50 shadow-2xl relative">
          
          <MobileHeader />

          <main className="w-full flex-grow">
            <MobileHero />
            <MobileFeatures />
            <div className="h-28"></div> {/* Spacer agar footer tidak menutupi konten */}
          </main>
        </div>

        <MobileFooter />
      </div>
    </>
  );
};