"use client";

import { useState } from "react";

const QUALIFICATIONS = [
  { value: "", label: "Enter Highest Qualifications" },
  { value: "Below 12th", label: "Below 12th" },
  { value: "12th / HSC", label: "12th / HSC" },
  { value: "Graduation", label: "Graduation" },
  { value: "Post Graduation", label: "Post Graduation" },
  { value: "Doctorate", label: "Doctorate" },
  { value: "Other", label: "Other" },
];

export default function RequestCallForm() {
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    interest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to API
  };

  const labelClass = "block text-[#1f2937] font-bold text-[12px] leading-tight font-visual mb-[4px] base:text-[14px] ";
  const inputClass =
    "w-full rounded-[2px] bg-[#f3f4f6] border-0 p-[8px] text-[#222222] placeholder:text-[#222222] text-[12px] font-visual focus:outline-none focus:ring-2 focus:ring-[#0d9488]/50    base:p-[10px base:text-[14px]";

  return (
    <section className="w-full  flex justify-center mt-[10px] hidden small:block medium:mt-[20px]">
      <div className="w-full rounded-[30px]  bg-white shadow-xl overflow-hidden medium:rounded-[28px]">
        <form onSubmit={handleSubmit} className="p-[20px]">
          <h2 className="font-visual font-bold text-[#1f2937] text-[20px] leading-tight medium:text-[22px] base:text-[24px]">
            Adapt Early or Fall Behind
          </h2>
          <p className="font-visual font-normal text-[#4b5563] text-[12px]  leading-snug base:text-[14px] ">
            60% of business tasks are becoming AI-driven, stay relevant!
          </p>

          <div className="mt-[10px] space-y-[8px] medium:mt-[20px] medium:space-y-[10px]">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Your Name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone No.
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter Your Phone No."
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="qualification" className={labelClass}>
                Highest Qualifications
              </label>
              <div className="relative">
                <select
                  id="qualification"
                  name="qualification"
                  value={form.qualification}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none pr-10 cursor-(--f-cursor-pointer)`}
                >
                  {QUALIFICATIONS.map(({ value, label }) => (
                    <option key={value || "placeholder"} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
                  aria-hidden
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="interest" className={labelClass}>
                Area of Interest
              </label>
              <input
                id="interest"
                name="interest"
                type="text"
                placeholder="Enter Area of Interest"
                value={form.interest}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full my-[10px] py-[14px] px-[24px] rounded-[10px] bg-[#02A7B6] text-white font-bold text-[14px] font-visual cursor-(--f-cursor-pointer) hover:bg-[#0f766e] transition-colors medium:px-[24px] medium:my-[20px] base:py-[24px]"
          >
            Request A Call
          </button>

          <label className="flex items-center gap-[17px]  cursor-(--f-cursor-pointer)">
            <div className="p-[3px]">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 w-[18px] h-[18px] rounded border border-[#02A7B6] text-[#02A7B6] focus:ring-[#02A7B6] cursor-(--f-cursor-pointer)"
            />
            </div>
            <span className="font-visual text-[#272323] text-[10px] leading-snug">
              By clicking on Request A Call I allow Atlas University to send program communication on email/sms/WhatsApp etc.
            </span>
          </label>
        </form>
      </div>
    </section>
  );
}
