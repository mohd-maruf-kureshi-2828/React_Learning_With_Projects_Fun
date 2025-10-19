import React from "react";

function Card({name="og"}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="h-full w-full object-cover"
      />

      {/* Gradient overlay to darken the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>

      {/* Text content */}
      <div className="absolute bottom-4 left-4 right-4">
        <h1 className="text-lg font-semibold text-white">
          {name}
        </h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button className="mt-3 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md text-sm font-semibold transition">
          →
        </button>
      </div>
    </div>
  );
}


export default Card