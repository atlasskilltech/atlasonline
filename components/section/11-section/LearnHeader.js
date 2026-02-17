export default function LearnHeader() {
    return (
      <div className="relative flex justify-center mb-14 pt-10 overflow-visible">
  
        {/* Dark Circle */}
        <div
          className="
            absolute
            top-10
            w-[260px]
            h-[260px]
            rounded-full
            bg-gradient-to-b
            from-[#081a33]
            via-[#0c2b55]
            to-[#07101f]
            shadow-2xl
          "
        />
  
        {/* Glow */}
        <div
          className="
            absolute
            top-10
            w-[260px]
            h-[260px]
            rounded-full
            bg-blue-500/20
            blur-2xl
          "
        />
  
        {/* Phone */}
        <div
          className="
            relative
            z-10
            w-[280px]
            -mt-37
            translate-y-16
            rotate-[-6deg]
          "
        >
          <img
            src="/object/mobile.png"
            alt="App Preview"
            className="w-full drop-shadow-2xl"
          />
        </div>
  
      </div>
    );
  }
  