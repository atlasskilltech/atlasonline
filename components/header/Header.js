"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link.js";
import {
  Hamburger,
  Close,
  CallCircle,
  WhatsappCirle,
  Call,
  Whatsapp,
} from "../icon/Icons.js";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full z-10 fixed top-0 left-0 z-20 h-[112px] medium:h-[131px]">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-[#342B7C] to-[#00D4EB] text-white  px-6 py-3 flex items-center justify-between gap-3 small:px-10 small:py-2 medium:px-12.5 medium:py-3 base:px-15 base:py-3  large:px-30">
        <p className="leading-tight  text-[11px] medium:text-[12px] base:text-[14px] cursor-(--f-cursor-text)">
          Admissions are closing on 31st Jan. Avail up to 25% scholarship (valid
          only for this batch)
        </p>
        <div className="flex gap-2 small:gap-2.5">
          <a href="tel:+917973615772" className="small:hidden">
            <CallCircle className="w-9 h-9 " />
          </a>
          <a
            href="https://wa.me/917973615772"
            target="_blank"
            className="small:hidden"
          >
            <WhatsappCirle className="w-9 h-9 " />
          </a>
          <a
            href="tel:+917973615772"
            className="hidden  small:flex items-center justify-center gap-[6px] px-[12px] py-[8px] border border-white rounded-[26px] medium:py-[10px] cursor-(--f-cursor-pointer)"
          >
            <Call className="w-5 h-5 " />
            <span className="font-semibold"> +91 7973615772</span>
          </a>
          <a
            href="https://wa.me/917973615772"
            target="_blank"
            className="hidden  small:flex items-center justify-center gap-[6px] px-[12px] py-[8px]  rounded-[26px] bg-[#4CAF51] medium:py-[10px] cursor-(--f-cursor-pointer)"
          >
            <Whatsapp className="w-5 h-5 " />
            <span className="font-semibold">WhatsApp Chat</span>
          </a>
        </div>
      </div>
      {/* Main navbar */}
      <div className="bg-black text-white px-6 py-2.5 flex items-center justify-between
      small:px-10 small:py-1.5 medium:px-12.5 large:px-30 
      ">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/financial-planing-applied-finance-logo.svg"
            alt="Logo"
            width={212}
            height={32}
            className="w-[212px] h-[32px] small:w-[252px] small:h-[45px]  medium:w-[259px] medium:h-[49px] cursor-(--f-cursor-pointer)"
            loading="eager"
          />
        </div>
        <nav className="hidden small:flex items-center justify-between  w-[600px] 
        font-semibold text-[11px] leading-none tracking-[0.01em]
        medium:text-[12px] base:text-[14px]">
          <Link className="cursor-(--f-cursor-pointer)" href="#">
            ABOUT US
          </Link>
          <Link className="cursor-(--f-cursor-pointer)" href="#">
            PROGRAMMES
          </Link>
          <Link className="cursor-(--f-cursor-pointer)" href="#">
            CAREER
          </Link>
          <Link className="cursor-(--f-cursor-pointer)" href="#">
            CONTACT US
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="space-y-1  small:hidden cursor-(--f-cursor-pointer)"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <Close className="w-6 h-6" />
          ) : (
            <Hamburger className="w-6 h-6" />
          )}
        </button>
      </div>
    </header>
  );
};
export default Header;
