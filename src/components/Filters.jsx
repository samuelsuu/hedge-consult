import React from "react";

const Filters = ({ onFilterChange }) => {
  return (
    <div className="bg-gray-100 py-4 px-6 border-b">
      <div className="container mx-auto flex flex-wrap gap-4">
        <select
          onChange={(e) => onFilterChange("location", e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2"
        >
          <option value="">All Locations</option>
          <option value="New York">New York</option>
          <option value="Miami">Miami</option>
          <option value="Denver">Denver</option>
        </select>

        <select
          onChange={(e) => onFilterChange("price", e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2"
        >
          <option value="">All Prices</option>
          <option value="500000">Up to $500,000</option>
          <option value="1000000">Above $500,000</option>
        </select>

        <select
          onChange={(e) => onFilterChange("type", e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2"
        >
          <option value="">All Types</option>
          <option value="villa">Villa</option>
          <option value="condo">Condo</option>
          <option value="cabin">Cabin</option>
          <option value="apartment">Apartment</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
