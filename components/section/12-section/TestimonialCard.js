export default function TestimonialCard() {
    return (
      <div
        className="
          min-w-[240px]
          small:min-w-[520px]
          bg-[#262b2f]
          text-white
          rounded-2xl
          shadow-xl
          flex
          flex-col
          small:flex-row
          overflow-hidden
        "
      >
  
        {/* IMAGE */}
<div
  className="
    relative
    w-full
    h-[220px]
    small:w-[220px]
    small:h-auto
    order-1
    small:order-2
    flex-shrink-0
  "
>

  {/* Photo */}
  <img
    src="/slider/Frame-91.png"
    alt="Student"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div
    className="
      absolute
      bottom-0
      left-0
      w-full
      bg-gradient-to-t
      from-black/70
      to-transparent
      p-3
      text-center
    "
  >
    <p className="text-xs text-gray-200">
      Placed at
    </p>

    <p className="font-bold text-white">
      upGrad
    </p>
  </div>

</div>

  
  
        {/* CONTENT */}
        <div
          className="
            p-6
            flex-1
            order-2
            small:order-1
            flex
            flex-col
            justify-between
          "
        >
  
          {/* Quote */}
          <span className="text-4xl text-teal-400 mb-3">
            “
          </span>
  
          {/* Text */}
          <p className="text-sm text-gray-300 leading-relaxed">
            ATLAS helped me grow exponentially, and pushed me to my limits
            to understand what I wanted to do professionally.
          </p>
  
          {/* Footer */}
          <div className="mt-5">
  
            <p className="font-semibold">
              Kritija Mugdha
            </p>
  
            <p className="text-sm text-gray-400 italic">
              Batch of 2026
            </p>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  