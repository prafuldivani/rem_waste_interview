"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";
import { ILocation } from "../types/global";
import LocationCard from "./LocationCard";
import LocationLoader from "./LocationLoader";
import LocationFooter from "./LocationFooter";

const SkipSelectionPage = () => {
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<ILocation | null>(
    null
  );

  useEffect(() => {
    axios
      .get(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      )
      .then((response) => {
        console.log("Locations:", response.data);
        setLocations(response.data); // Setting the fetched data into state
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
      });
  }, []);

  const handleSelectLocation = (location: ILocation) => {
    setSelectedLocation(location);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Header />

      <div className="max-w-7xl mx-auto px-4 pb-32">
        <h2 className="text-2xl font-bold text-center mb-4">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Select the skip size that best suits your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {locations.length === 0
            ? Array.from({ length: 6 }).map((_, index) => (
                <LocationLoader key={index} />
              ))
            : locations.map((location) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  isSelected={selectedLocation?.id === location.id}
                  onSelect={handleSelectLocation}
                />
              ))}
        </div>
      </div>

      {selectedLocation && (
        <LocationFooter selectedLocation={selectedLocation} />
      )}
    </main>
  );
};
export default SkipSelectionPage;
