import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center  items-center  ">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-200 shadow-sm shadow-gray-300 border-t-gray-800 animate-spin rounded-full"></div>
    </div>
  );
};

export default Loading;
