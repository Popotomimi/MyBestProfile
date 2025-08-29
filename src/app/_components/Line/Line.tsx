import React, { useState, useEffect } from "react";

const Line = () => {
  const [isPurpleDominant, setIsPurpleDominant] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPurpleDominant((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-2 bg-gray-800 rounded overflow-hidden flex">
      <div
        className={`transition-all duration-1000 h-full ${
          isPurpleDominant ? "bg-purple-600 w-[80%]" : "bg-orange-500 w-[20%]"
        }`}
      />
      <div
        className={`transition-all duration-1000 h-full ${
          isPurpleDominant ? "bg-orange-500 w-[20%]" : "bg-purple-600 w-[80%]"
        }`}
      />
    </div>
  );
};

export default Line;
