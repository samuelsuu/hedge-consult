import React from "react";
import { RichText } from "prismic-reactjs";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const PropertyCard = ({ property, onClick }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
      onClick={() => onClick(property)}
    >
      <div className="relative">
        <img
          src={property.data.image.url}
          alt="Property"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-md px-2 py-1 text-sm text-gray-800 font-semibold">
          {RichText.asText(property.data.type)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {RichText.asText(property.data.name)}
        </h3>
        <p className="text-sm text-gray-500 truncate">
          {RichText.asText(property.data.location)}
        </p>
        <p className="text-lg font-semibold text-green-600 mt-2">
          N{property.data.price.toLocaleString()}
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Posted on {formatDate(property.data.date)}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
