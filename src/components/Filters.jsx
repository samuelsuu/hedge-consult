import React, { useState, useEffect } from "react";

const Filters = ({ userLocation, onFilterChange }) => {
  const [location, setLocation] = useState(userLocation || "");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (userLocation) {
      setLocation(userLocation);
    }
  }, [userLocation]);

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    onFilterChange("location", value);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);
    onFilterChange("price", value);
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setType(value);
    onFilterChange("type", value);
  };

  return (
    <div className="bg-gray-100 py-4 px-6 border-b">
      <div className="container mx-auto flex flex-wrap gap-4">
        {/* Location Filter */}
        <select
          onChange={handleLocationChange}
          value={location}
          className="border border-gray-300 rounded-md px-4 py-2"
        >
          <option value="">All Locations</option>
          <option value="New York">New York</option>
          <option value="Miami">Miami</option>
          <option value="Denver">Denver</option>
          {userLocation && <option value={userLocation}>{userLocation}</option>}
        </select>

        {/* Price Filter */}
        <select
          onChange={handlePriceChange}
          value={price}
          className="border border-gray-300 rounded-md px-4 py-2"
        >
          <option value="">All Prices</option>
          <option value="500000">Up to N500,000</option>
          <option value="1000000">Above N500,000</option>
        </select>

        {/* Type Filter */}
        <select
          onChange={handleTypeChange}
          value={type}
          className="border border-gray-300 rounded-md px-4 py-2"
        >
          <option value="">All Types</option>
          <option value="Land">Land</option>
          <option value="Flat">Flat</option>
          <option value="Apartment">Apartment</option>
          <option value="Cabin">Cabin</option>
          <option value="Others">Others</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
