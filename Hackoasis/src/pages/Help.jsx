// src/pages/Help.jsx
import React from "react";

export default function Help() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-8"> {/* Added top padding */}
      <h1 className="text-4xl font-bold mb-6">Help & Support</h1>
      <p className="text-lg mb-8">
        Welcome to the FlightX Help section. Here you can find answers to common questions and get support.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Frequently Asked Questions</h2>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <strong>How can I check my flight status?</strong>
          <p className="ml-4 mt-1 text-gray-300">
            You can check your flight status by visiting the "My Flights" page and entering your flight details.
          </p>
        </li>
        <li>
          <strong>How do I book a new flight?</strong>
          <p className="ml-4 mt-1 text-gray-300">
            Go to the "Booking" page, select your departure and arrival cities, choose the flight, and complete the booking process.
          </p>
        </li>
        <li>
          <strong>What should I do if my flight is delayed?</strong>
          <p className="ml-4 mt-1 text-gray-300">
            Check the "Delay" page for real-time updates. You may also receive alternative rebooking options or compensation eligibility information.
          </p>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p className="text-lg">
        If you need further assistance, please reach out to our support team at{" "}
        <a href="mailto:support@flightpredict.com" className="text-red-500 underline">
          travelx1234@gmail.com
        </a>.
      </p>
    </div>
  );
}
