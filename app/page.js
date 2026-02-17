
import Header from "@/components/header/Header";
import HeroBanner from "@/components/heroBanner/HeroBanner";
import ProgramOverview from "@/components/section/1-section/ProgramOverview";
import ProgramChoose from "@/components/section/2-section/ProgramChoose";
import Wealth from "@/components/section/3-section/Wealth";
import CanTakeYou from "@/components/section/4-section/CanTakeYou";
import BuiltAmbitious from "@/components/section/5-section/BuiltAmbitious";
import PathToGlobal from "@/components/section/6-section/PathToGlobal";
import Industry from "@/components/section/7-section/Industry";
import MbaStands from "@/components/section/8-section/MbaStands";
import CertificationsMba from "@/components/section/9-section/CertificationsMba";
import Visionaries from "@/components/section/10-section/Visionaries";
import LearnAnyTime from "@/components/section/11-section/LearnAnyTime";
import HereFromThose from "@/components/section/12-section/HereFromThose";
import InvestmentFuture from "@/components/section/13-section/InvestmentFuture";
import Footer from "@/components/footer/Footer";
import GlowEffect from "@/components/glowEffect/GlowEffect";


export default function Home() {
  return (
   <>
      <Header />



      <HeroBanner />
      <ProgramOverview/>
      <ProgramChoose/>
      <Wealth/>
      <CanTakeYou/>
      <BuiltAmbitious/>
      <PathToGlobal/>
      <Industry/> 
      <MbaStands/>
      <CertificationsMba/>
      <Visionaries/>
      <LearnAnyTime/>
      <HereFromThose/>
      <InvestmentFuture/>
      <Footer/>
  
      <GlowEffect/>
   </>
  );
}
