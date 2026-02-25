import { getDeviceType } from "@/lib/device";
import { MobileLandingTemplate } from "@/components/mobile/templates/MobileLandingTemplate";
// import { DesktopLandingTemplate } from "@/components/desktop/templates/DesktopLandingTemplate";

export default async function Home() {
  const device = await getDeviceType();

  if (device === "mobile") {
    return <MobileLandingTemplate />;
  }

  // Nanti kembalikan DesktopTemplate jika sudah dibuat
  // return <DesktopLandingTemplate />; 
  return <MobileLandingTemplate />; // Sementara tampilkan mobile dulu
}
