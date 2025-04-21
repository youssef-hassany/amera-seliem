import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full p-4 border border-gray-200 rounded-2xl shadow animate-pulse">
      <div className="h-48 bg-gray-300 rounded-xl mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
      <div className="flex space-x-2">
        <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
        <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
