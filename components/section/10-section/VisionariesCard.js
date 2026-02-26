"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import Image from "next/image";
import { LeftArrow,RightArrow } from "@/components/icon/Icons";
const VisionariesCard = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
console.log("progress",progress)
const slidesData = [
  {
    id: 1,
    role: "Marketing & Strategy\nConsultant, Ex-CMO",
    personImg: "/person/ex-cmo.png",
    logos: ["/logo/kellog.png", "/logo/havard-bussiness-school.png"],
    title: "The Power of Brands",
    author: "Tim Calkins",
    overview:
      "Learn how iconic brands are built: from finding their voice to dominating their category. Learn how iconic brands are built: from finding their voice to dominating their category. Learn how iconic brands are built: from finding their voice to dominating their category."
  },
  {
    id: 2,
    role: "Digital Growth Expert, Ex-Google",
    personImg: "/person/ex-cmo.png",
   logos: ["/logo/kellog.png", "/logo/havard-bussiness-school.png"],
    title: "Digital Growth Playbook",
    author: "Sarah Johnson",
     overview:
      "Learn how iconic brands are built: from finding their voice to dominating their category. Learn how iconic brands are built: from finding their voice to dominating their category. Learn how iconic brands are built: from finding their voice to dominating their category."
  },
  {
    id: 3,
    role: "Leadership Coach, Ex-McKinsey",
    personImg: "/person/ex-cmo.png",
   logos: ["/logo/kellog.png", "/logo/havard-bussiness-school.png"],
    title: "Leading with Impact",
    author: "Michael Brown",
     overview:
      "Learn how iconic brands are built: from finding their voice to dominating their category. Learn how iconic brands are built: from finding their voice to dominating their category. Learn how iconic brands are built: from finding their voice to dominating their category."
  }
];
  
const updateProgress = (swiper) => {
  const total = swiper.slides.length;
  setProgress(((swiper.activeIndex + 1) / total) * 100);
};
  return (
    <div className="bg-black  text-white">
      <Swiper
        modules={[Navigation]}
       onSwiper={(swiper) => {
    swiperRef.current = swiper;
    updateProgress(swiper); // 👈 first slide progress yahi set hoga
  }}
  onSlideChange={updateProgress}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
    1081: {
      slidesPerView: 2
    }
  }}
      >
      


        {slidesData.map((slide) => ( 
        
        <SwiperSlide key={slide.id}>
<div className=" flex rounded-t-[20px] bg-gradient-to-b from-[#342B7C] to-[#02A7B6] flex items-start justify-center h-[230px] relative items-center ">
            <Image
              className=""
              src={slide.personImg}
              width="242"
              height="279"
              alt="person"
            />
            <div className="absolute bottom-0 flex justify-between  px-[16px] pt-[16px] pb-[14px] w-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_2.11%,_rgba(0,0,0,0.8)_100%)]">
              <p className="text-[14px] font-[400] text-white/80 whitespace-pre-line" >
                {slide.role}
              </p>
              <div className="flex items-center gap-[6px]">
                {slide.logos.map((logo, index) => (
            <img
              key={index}
              className="h-[30px] object-contain"
              src={logo}
              alt="logo"
            />
          ))}
              </div>
            </div>
          </div>
          <div className="bg-white/14 rounded-b-[20px]  p-[14px] flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[18px] font-[400] font-denton tracking-[0.18px]">
                {slide.title}
              </p>
              <p className="text-[14px] italic font-denton tracking-[0.14px] ">
                by {slide.author}
              </p>
            </div>
            <p className="text-[14px]">
              <span className="text-[#4CECFA] ">OVERVIEW</span>
              <br />
             {slide.overview}
            </p>
          </div>

        </SwiperSlide>
        
        ))}
        
      </Swiper>





     
      <div className="flex items-center gap-[20px] mt-[24px]">
      
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="w-[44px] h-[44px] border border-white rounded-full flex items-center p-[10px] gap-[10px]"
        >
          <LeftArrow/>
        </button>
       
        <div className="flex-1 h-[6px] rounded-[10px] bg-white/20 overflow-hidden">
          <div
            className="h-[6px] rounded-[10px] bg-white transition-all duration-300 "
            style={{ width: `${progress}%` }}
          />
        </div>
      
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="w-[44px] h-[44px] border border-white rounded-full flex items-center p-[10px] gap-[10px]"
        >
          <RightArrow/>
        </button>
      </div>
    </div>
  );
};
export default VisionariesCard;
