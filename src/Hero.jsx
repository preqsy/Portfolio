function Hero() {
  return (
    <div className="bg-[url('/src/assets/port_img.jpg')] h-screen bg-cover bg-center flex flex-col items-center justify-center">
      {/* Name Section */}
      <div className="text-center mb-10 text-white text-[54px] leading-[1.2] font-bold font-poppins">
        <h1 className="mb-3">
          HI <span className="text-pink-500">,</span> I AM
        </h1>
        <h1 className="mb-3">
          PRECIOUS
        </h1>
        <h1 className="mb-3">
          OBINNA <span className="text-pink-500">.</span>
        </h1>
      </div>

      {/* Title Section */}
      <div className="mt-8">
        <p className="text-white text-[32px] font-semibold w-[600px] text-center">
          FULL-STACK DEVELOPER
        </p>
      </div>
      <div className="bg-pink-500 text-white p-5 mt-12 rounded-[5px]">
        <button>
          DOWNLOAD RESUME
        </button>
      </div>
    </div>
  );
}

export default Hero;
