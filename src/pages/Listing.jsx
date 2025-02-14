import React, { useEffect, useState } from "react";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import Filters from "../components/Filters"; // Import Filters component
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const apiEndpoint = "https://hedgeconsulty.cdn.prismic.io/api/v2"; // Prismic API endpoint
const client = Prismic.client(apiEndpoint);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Listings = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    price: "",
  });

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      once: true,
    });

    const fetchProperties = async () => {
      try {
        const response = await client.query(
          Prismic.Predicates.at("document.type", "property_listings"),
          { orderings: "[my.property_listings.date desc]" }
        );
        setProperties(response.results);
      } catch (error) {
        console.error("Error fetching property listings:", error);
      }
    };

    fetchProperties();
  }, []);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleBackClick = () => {
    setSelectedProperty(null);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const filteredProperties = properties.filter((property) => {
    const propertyData = property.data;

    const matchesLocation = filters.location
      ? propertyData.location &&
        propertyData.location.toLowerCase() === filters.location.toLowerCase()
      : true;

    const matchesType = filters.type
      ? propertyData.type && propertyData.type === filters.type
      : true;

    const matchesPrice = filters.price
      ? propertyData.price &&
        (filters.price === "1000000"
          ? propertyData.price <= 1000000
          : propertyData.price > 1000000)
      : true;

    return matchesLocation && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-5">
      <Filters onFilterChange={handleFilterChange} />

      {selectedProperty ? (
        <div
          className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6"
          data-aos="fade-up"
        >
          <button
            onClick={handleBackClick}
            className="mb-4 text-blue-500 hover:text-blue-700 font-semibold"
          >
            &larr; Back to Listings
          </button>
          <img
            src={selectedProperty.data.image.url}
            alt="Property Image"
            className="w-full h-72 object-cover rounded-lg mb-4"
            data-aos="zoom-in"
          />
          <div className="text-center mb-4">
            <h2
              className="text-3xl font-bold text-gray-800"
              data-aos="fade-right"
            >
              {RichText.asText(selectedProperty.data.name || [])}
            </h2>
            <p
              className="text-xl text-gray-600"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {RichText.asText(selectedProperty.data.location || [])}
            </p>
            <p
              className="text-lg font-semibold text-green-600"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              N{selectedProperty.data.price.toLocaleString()}
            </p>
          </div>
          <div
            className="prose lg:prose-xl mt-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {RichText.render(selectedProperty.data.summary || [])}

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div
                className="w-full sm:w-1/2 lg:w-1/3"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <img
                  src={selectedProperty.data.imageview_1.url}
                  alt="Property Image"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div
                className="w-full sm:w-1/2 lg:w-1/3"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <img
                  src={selectedProperty.data.imageview_2.url}
                  alt="Property Image"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div
                className="w-full sm:w-1/2 lg:w-1/3"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <img
                  src={selectedProperty.data.imageview_3.url}
                  alt="Property Image"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white cursor-pointer shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              data-aos="zoom-in"
              onClick={() => handlePropertyClick(property)}
            >
              <div className="relative w-full h-64">
                <img
                  src={property.data.image.url}
                  alt="Property"
                  className="absolute inset-0 w-full cursor-pointer h-full object-cover rounded-t-lg"
                  
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">
                  {formatDate(property.data.date)}
                </p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {RichText.asText(property.data.name)}
                </h3>
                <p className="text-sm text-gray-500">
                  {RichText.asText(property.data.location)}
                </p>
                <p className="text-lg font-semibold text-green-600">
                  N{property.data.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  Type: {property.data.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Listings;
