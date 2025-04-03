import { ILocation } from "../types/global";

interface IProps {
  location: ILocation;
  isSelected: boolean;
  onSelect: (location: ILocation) => void;
}

const LocationCard = ({ location, isSelected, onSelect }: IProps) => {
  return (
    <div
      className={`group relative rounded-xl border-2 p-6 transition-all ${
        isSelected
          ? "border-[#0037C1] bg-[#0037C1]/10"
          : "border-[#2A2A2A] hover:border-[#0037C1]/70"
      } text-white cursor-pointer hover:shadow-2xl transform hover:-translate-y-1 duration-300`}
      onClick={() => onSelect(location)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&amp;w=800"
          alt={`${location.size} Yard Skip`}
          className="w-full h-48 object-cover rounded-lg mb-4 transition-transform group-hover:scale-110 duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-[#0037C1] text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm bg-opacity-90">
          {location.size} Yards
        </div>

        <div className="absolute bottom-6 left-2 flex flex-wrap items-center gap-2">
          {location.allows_heavy_waste && (
            <span className="text-sm font-medium bg-amber-600/30 text-amber-400 px-3 py-1.5 rounded-full flex items-center backdrop-blur-sm shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1.5"
              >
                <path d="M12 22V8"></path>
                <path d="m2 10 10-8 10 8"></path>
              </svg>
              Heavy Waste Suitable
            </span>
          )}

          {!location.allowed_on_road && (
            <span className="text-sm font-medium bg-red-600/30 text-red-400 px-3 py-1.5 rounded-full flex items-center backdrop-blur-sm shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1.5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m15 9-6 6"></path>
                <path d="m9 9 6 6"></path>
              </svg>
              No Road Placement
            </span>
          )}
        </div>
      </div>
      <h3 className="text-xl font-bold mt-3 mb-1 text-white group-hover:text-[#0037C1] transition-colors">
        {location.size} Yard Skip
      </h3>
      <p className="text-sm text-gray-300 mb-2">
        {location.hire_period_days} day hire period
      </p>

      <div className="flex justify-between items-center mb-5">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-[#0037C1] group-hover:scale-105 transition-transform">
            £{location?.price_before_vat?.toFixed(2)}
          </span>
          <span className="text-xs text-gray-400">per week</span>
        </div>
      </div>
      <button
        className={`w-full py-3 rounded-md transition-all flex items-center justify-center space-x-2 ${
          isSelected
            ? "bg-[#0037C1] shadow-lg shadow-[#0037C1]/30"
            : "bg-[#2A2A2A] hover:bg-[#0037C1]"
        } text-white font-medium transform hover:scale-[1.02] duration-300`}
        aria-pressed={isSelected}
      >
        <span>{isSelected ? "Selected" : "Select This Skip"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${
            isSelected ? "ml-1 translate-x-1" : "group-hover:translate-x-1"
          }`}
          aria-hidden="true"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default LocationCard;
