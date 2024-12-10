import React, { useState } from "react";
import Filters from "../components/Filters";
import PropertyCard from "../components/PropertyCard";

const Listings = () => {
  // Example property data
  const propertyData = [
    { id: 1, name: "Luxury Villa", price: 500000, location: "New York", type: "villa", image: "https://via.placeholder.com/400x300" },
    { id: 2, name: "Beachfront Condo", price: 300000, location: "Miami", type: "condo", image: "https://via.placeholder.com/400x300" },
    { id: 3, name: "Mountain Cabin", price: 200000, location: "Denver", type: "cabin", image: "https://via.placeholder.com/400x300" },
    { id: 4, name: "City Apartment", price: 400000, location: "New York", type: "apartment", image: "https://via.placeholder.com/400x300" },
    { id: 5, name: "Modern Condo", price: 350000, location: "Miami", type: "condo", image: "https://via.placeholder.com/400x300" },
  ];

  const [filters, setFilters] = useState({
    location: "",
    price: "",
    type: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredProperties = propertyData.filter((property) => {
    const matchesLocation = !filters.location || property.location === filters.location;
    const matchesPrice =
      !filters.price || (filters.price === "500000" ? property.price <= 500000 : property.price > 500000);
    const matchesType = !filters.type || property.type === filters.type;
    return matchesLocation && matchesPrice && matchesType;
  });

  return (
    <div className="bg-white min-h-screen">
      <Filters onFilterChange={handleFilterChange} />
      <div className="container mx-auto py-10">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No properties found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Listings;
