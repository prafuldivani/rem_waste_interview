const LocationLoader = () => {
  return (
    <div className="animate-pulse group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] bg-[#1C1C1C] text-white cursor-pointer">
      <div className="relative">
        <div className="w-full h-36 md:h-48 bg-[#2A2A2A] rounded-md mb-4"></div>
      </div>
      <div className="h-6 bg-[#2A2A2A] rounded-md mb-2"></div>
      <div className="h-4 bg-[#2A2A2A] rounded-md mb-4 md:mb-6"></div>
    </div>
  );
};

export default LocationLoader;
