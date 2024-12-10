import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{property.name}</h3>
        <p className="text-gold font-semibold">${property.price.toLocaleString()}</p>
        <p className="text-gray-500">{property.location}</p>
        <a
          href={`/property/${property.id}`}
          className="mt-4 inline-block text-gold hover:underline"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
