"use client";
const GlowEffect = () => {
  return (
    <div className="absolute inset-0 overflow-x-hidden pointer-events-none">

      <img
        src="shape/blue-glow.png"
        className="absolute -top-[290px] w-[900px] -right-[290px] float1"
      />

      <img
        src="/shape/purple-glow.png"
        className="absolute w-[1200px] top-[176px] -left-[550px] float2"
      />
<style jsx>{`
  .float1 {
    animation: float1 2.5s linear infinite;
  }

  .float2 {
    animation: float2 3s linear infinite;
  }

  @keyframes float1 {
    0% { transform: translate(0, 0); }
    50% { transform: translate(-120px, 120px); }
    100% { transform: translate(0, 0); }
  }

  @keyframes float2 {
    0% { transform: translate(0, 0); }
    50% { transform: translate(120px, -100px); }
    100% { transform: translate(0, 0); }
  }
`}</style>

    </div>
  );
};


export default GlowEffect



