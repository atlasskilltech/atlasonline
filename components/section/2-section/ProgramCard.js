import React from "react";

/**
 * ProgramCard
 * - image background with dark top gradient overlay
 * - rounded corners, responsive heights
 * - props: title, description, imgSrc, className
 */
const ProgramCard = ({ title, description, imgSrc, className = "" }) => {
  return (
    <article
      className={`rk-program-card relative overflow-hidden rounded-[24px] ${className}`}
      aria-label={title}
    >
      {/* background image */}
      <img
        src={imgSrc}
        alt=""
        className="rk-card-img w-full h-[340px] object-cover small:h-[360px] medium:h-[420px] base:h-[460px]"
        loading="lazy"
      />

      {/* overlay gradient (dark at top -> transparent) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-transparent"></div>
      </div>

      {/* content placed in top-left */}
      <div className="absolute top-0 left-0 right-0 p-6 small:p-7 z-10 flex flex-col">
        <h3 className="rk-card-title font-visual text-[18px] small:text-[20px] medium:text-[20px] font-semibold text-white leading-[1.05]">
          {title}
        </h3>

        <p className="rk-card-desc mt-3 text-[13px] small:text-[14px] leading-[1.45] text-white/90 font-visual max-w-[42ch]">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProgramCard;
