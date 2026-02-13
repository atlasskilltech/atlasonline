"use client";
import { useState } from "react";
const FooterFaq = () => {
  const [open, setOpen] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const faqGroups = [
    [
      {
        q: "Are ATLAS Online programs UGC-recognized?",
        a: "Yes. ATLAS Online programs, including our Online MBA and Online BBA, are offered through ATLAS SkillTech University's Centre for Distance and Online Education and are fully UGC-recognized. You'll earn a legitimate university degree, not just a certification.",
      },
      {
        q: "How is online learning different from traditional online courses?",
        a: "ATLAS offers structured mentorship, live sessions, and industry-aligned curriculum for real career growth.",
      },
      {
        q: "Can I work full-time while pursuing an ATLAS Online program?",
        a: "Yes. Programs are designed for working professionals with flexible schedules.",
      },
      {
        q: "What kind of career support do I get?",
        a: "Yes. Programs are designed for working professionals with flexible schedules.",
      },
      {
        q: "What's the difference between bootcamps, cohort programs, and degree programs?",
        a: "Yes. Programs are designed for working professionals with flexible schedules.",
      },
    ],
    [
      {
        q: "What eligibility is required for the Online MBA?",
        a: "Candidates must have a recognized bachelor's degree from any discipline. Final year students may also apply subject to completion proof.",
      },
      {
        q: "Is prior finance experience required?",
        a: "No. The program starts with foundation concepts and gradually builds advanced finance knowledge.",
      },
      {
        q: "How are exams conducted?",
        a: "Assessments are conducted online with proctored evaluations, assignments, and project-based submissions.",
      },
      {
        q: "Will I receive placement assistance?",
        a: "Yes. Career services include resume building, mock interviews, industry mentorship, and hiring network access.",
      },
    ],
    [
      {
        q: "Can international students enroll?",
        a: "Yes. The program is open to international learners and designed with global certification alignment.",
      },
      {
        q: "Is the degree recognized outside India?",
        a: "The curriculum aligns with international CFP® standards, making it globally relevant.",
      },
      {
        q: "What learning format is used?",
        a: "Students get live sessions, recorded lectures, and hands-on industry projects.",
      },
      {
        q: "How much time commitment is needed weekly?",
        a: "On average 8–12 hours per week is recommended for optimal learning.",
      },
    ],
    [
      {
        q: "Do I get access to recorded lectures?",
        a: "Yes. All live sessions are recorded and available anytime on the learning portal.",
      },
      {
        q: "Are there industry certifications included?",
        a: "Yes. The program includes globally recognized certifications aligned with finance careers.",
      },
      {
        q: "Can I switch specializations later?",
        a: "Specialization changes are allowed within the academic window, subject to approval.",
      },
      {
        q: "What support is available during the course?",
        a: "Students receive academic mentors, technical support, and dedicated success managers.",
      },
    ],
  ];
  const faqs = faqGroups[activeTab];
  return (
    <div className="bg-[#3E3E3E] w-full p-[16px] rounded-[20px] small:p-[30px]">
      <div className=" flex gap-[10px] overflow-x-auto whitespace-nowrap mb-[28px]">
        <button
          onClick={() => {
            setActiveTab(0);
            setOpen(0);
          }} 
          className={`cursor-(--f-cursor-pointer) rounded-[40px] py-[10px] px-[16px] shrink-0 text-[14px] hover:bg-[#02A7B6] small:text-[13px] medium:text-[14px] base:text-[16px]
  ${activeTab === 0 ? "bg-[#02A7B6]" : "border border-[#8B8B8B]"}`}
        >
          FAQ Type -1
        </button>
        <button
          onClick={() => {
            setActiveTab(1);
            setOpen(0);
          }}
          className={`cursor-(--f-cursor-pointer) rounded-[40px] py-[10px] px-[16px] shrink-0 text-[14px] hover:bg-[#02A7B6] small:text-[13px] medium:text-[14px] base:text-[16px]
  ${activeTab === 1 ? "bg-[#02A7B6]" : "border border-[#8B8B8B]"}`}
        >
          FAQ Type -2
        </button>
        <button
          onClick={() => {
            setActiveTab(2);
            setOpen(0);
          }}
          className={`cursor-(--f-cursor-pointer) rounded-[40px] py-[10px] px-[16px] shrink-0 text-[14px] hover:bg-[#02A7B6] small:text-[13px] medium:text-[14px] base:text-[16px]
  ${activeTab === 2 ? "bg-[#02A7B6]" : "border border-[#8B8B8B]"}`}
        >
          FAQ Type -3
        </button>
        <button
          onClick={() => {
            setActiveTab(3);
            setOpen(0);
          }}
          className={`cursor-(--f-cursor-pointer) rounded-[40px] py-[10px] px-[16px] shrink-0 text-[14px] hover:bg-[#02A7B6] small:text-[13px] medium:text-[14px] base:text-[16px]
  ${activeTab === 3 ? "bg-[#02A7B6]" : "border border-[#8B8B8B]"}`}
        >
          FAQ Type -4
        </button>
      </div>
      <div className=" text-white  overflow-hidden">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border-b border-[#8B8B8B] last:border-b-0 py-[28px] px-0 last:pb-0 first:pt-0"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center cursor-(--f-cursor-pointer)"
            >
              <span className="text-[14px] font-medium text-left small:text-[16px] medium:text-[18px] base:text-[20px]">
                {item.q}
              </span>
              <img
                src="/icon/arrow-circle-white.png"
                className={`w-5 h-5 transition-transform duration-300 ml-[12px] ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                open === i
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p
                className={`overflow-hidden ${open === i ? "pt-5 pe-[20px]" : ""} text-gray-300 text-[12px] medium:text-[14px] medium:text-[16px] cursor-(--f-cursor-text)`}
              >
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FooterFaq;
