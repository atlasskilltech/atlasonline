import Header from "@/components/header/Header";
import HeroBanner from "@/components/heroBanner/HeroBanner";
import GlowEffect from "@/components/glowEffect/GlowEffect";

export default function Home() {
  return (
   <>
    <Header />
    <HeroBanner />
     
      
  
    <section className="h-[2000px] border-1 w-full border-amber-600 bg-black"></section>
    <GlowEffect/>
   </>
  );
}
