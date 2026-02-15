
import Header from "@/components/header/Header";
import HeroBanner from "@/components/heroBanner/HeroBanner";
import GlowEffect from "@/components/glowEffect/GlowEffect";
import Footer from "@/components/footer/Footer";
import ProgramOverview from "@/components/programOverview/ProgramOverview";


export default function Home() {
  return (
   <>
    <Header />
    <HeroBanner />
     
      <ProgramOverview/>

   
  
    <section className="h-[2000px] border-1 w-full border-amber-600 bg-black"></section>
    <Footer/>
  
    <GlowEffect/>
   </>
  );
}
