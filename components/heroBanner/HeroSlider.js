"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
export default function HeroSlider({className}) {
  return (
    <div className={className}>
    <div className="w-full" >
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="custom-swiper"
      >
        <SwiperSlide>
          
            <Image
              src="/herobanner/1.png"
              alt="slide"
              width={362}
              height={308}
              className="w-full h-full object-cover"
            />
         
        </SwiperSlide>
         <SwiperSlide>
          
            <Image
              src="/herobanner/1.png"
              alt="slide"
              width={362}
              height={308}
              className="w-full h-full object-cover"
            />
         
        </SwiperSlide>
         <SwiperSlide>
          
            <Image
              src="/herobanner/1.png"
              alt="slide"
              width={362}
              height={308}
              className="w-full h-full object-cover"
            />
         
        </SwiperSlide>
       
      
      </Swiper>
      <style jsx global>{`
        .custom-swiper .swiper-pagination {
          bottom: 30px;
        }
        .custom-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: white;
          opacity: 0.4;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          width: 36px;
          border-radius: 999px;
          opacity: 1;
          background: #aee7f3;
        }
      `}</style>
    </div>

     <div className="flex items-center justify-between mb-5 mt-3 small:px-[40px] small:mb-0">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <img className="w-6 h-6 rounded-full border" src="https://i.pravatar.cc/40?img=1" />
            <img className="w-6 h-6 rounded-full border" src="https://i.pravatar.cc/40?img=2" />
            <img className="w-6 h-6 rounded-full border" src="https://i.pravatar.cc/40?img=3" />
          </div>
          <span className="text-gray-300 text-[12px] font-semibold small:text-[15px] medium:text-[16px] base:text-[20px]">
            Join 10k+ alumni
          </span>
        </div>

        <div className="h-5 w-px bg-gray-600" />

        <div className="flex items-center gap-1 text-yellow-400 small:text-[15px] medium:text-[16px] base:text-[20px]">
          ★★★★☆
          <span className="text-white ml-1 text-[12px] font-semibold">
            4/5 <span className="text-[#8F8F8F]">(7812 ratings)</span>
          </span>
        </div>
      </div>

    </div>
  );
}
