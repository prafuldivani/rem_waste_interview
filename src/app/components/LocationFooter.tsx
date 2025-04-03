import { ILocation } from "../types/global";

interface IProps {
  selectedLocation: ILocation;
}

const LocationFooter = (props: IProps) => {
  const { selectedLocation } = props;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <h3 className="font-medium text-white">Selected Skip</h3>
              <p className="text-sm text-gray-400">
                {selectedLocation.hire_period_days} days hire
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-[#0037C1]">
                £{selectedLocation?.price_before_vat?.toFixed(2)}
              </span>
              <p className="text-sm text-gray-400">Includes VAT</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn-secondary px-6 py-3 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all cursor-pointer">
              Back
            </button>
            <button className="btn-primary flex items-center gap-2 px-6 py-3 rounded-md bg-[#0037C1] text-white font-semibold hover:bg-[#0056FF] transition-all shadow-lg cursor-pointer">
              Continue
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right w-4 h-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationFooter;
