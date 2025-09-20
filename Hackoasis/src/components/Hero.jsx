import React from "react";
import Globe from "./Globe";
import { Link } from "react-router-dom";
import { FaPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Globe /> {/* 3D Globe */}

      {/* Overlay content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-6 flex items-center gap-3">
          <FaPlane className="text-yellow-400" /> Track Your Flight
        </h1>
        <p className="text-lg mb-6">
          Get real-time updates on flight delays and plan your journey better
        </p>
        <Link
          to="/my-flights"
          className="px-6 py-3 bg-red-500 rounded-lg hover:bg-red-600 transition"
        >
          Check Flights
        </Link>
      </div>
    </section>
  );
}
