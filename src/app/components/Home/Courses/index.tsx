"use client"

import React, { useState } from "react";
import {
  FaUserGraduate,
  FaUniversity,
  FaFileAlt,
  FaFileContract,
  FaEnvelope,
  FaBuilding,
  FaPassport,
  FaHome,
} from "react-icons/fa";

const services = [
  {
    icon: FaUserGraduate,
    title: "Free Counselling",
  },
  {
    icon: FaUniversity,
    title: "University Shortlisting",
  },
  {
    icon: FaFileAlt,
    title: "Statement of Purpose",
  },
  {
    icon: FaFileContract,
    title: "Curriculum Vitae",
  },
  {
    icon: FaEnvelope,
    title: "Letter of Recommendation",
  },
  {
    icon: FaBuilding,
    title: "University Application",
  },
  { 
    icon: FaPassport, 
    title: "Visa Assistance", 
  },
  {
    icon: FaHome,
    title: "Accommodation and Travel Assistance",
  },
];

const Courses = () => {
  const [selectedService, setSelectedService] = useState(null);

  // const handleServiceClick = (service) => {
  //   setSelectedService(service);
  // };

  return (
    <div className="free-counselling-container"
    style={{
      fontFamily:"gilroy"
    }}>
      {/* Services Section */}
      <div className="our-services-section">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto p-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
               
              >
                <service.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-[16px] font-medium text-center">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Selected Service Content */}
          {/* {selectedService && (
            <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <selectedService.icon className="w-12 h-12 text-orange-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedService.title}
                </h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">Service Details:</h4>
                <p>Click on any service icon to see details here</p>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Courses;