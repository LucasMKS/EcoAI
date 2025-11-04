import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 shadow-neutral-400">
    <Icon className="w-12 h-12 text-green-600 mb-4" />
    <h3 className="text-xl font-bold mb-2 text-neutral-700">{title}</h3>
    <p className="text-neutral-600 font-inter">{description}</p>
  </div>
);

export default FeatureCard;
