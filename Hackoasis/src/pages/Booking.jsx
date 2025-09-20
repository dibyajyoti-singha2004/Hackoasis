import { useState } from "react";

function Booking() {
  const [form, setForm] = useState({
    flightNumber: "",
    airline: "",
    departure: "",
    destination: "",
    departureTime: "",
    arrivalTime: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/flights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, status: "Booked" }),
      });

      if (res.ok) {
        setMessage("✅ Flight booked successfully!");
        setForm({
          flightNumber: "",
          airline: "",
          departure: "",
          destination: "",
          departureTime: "",
          arrivalTime: "",
        });
      } else {
        setMessage("❌ Failed to book flight.");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Server error.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-900 rounded-lg shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Book a Flight</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="flightNumber"
          value={form.flightNumber}
          onChange={handleChange}
          placeholder="Flight Number"
          className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="airline"
          value={form.airline}
          onChange={handleChange}
          placeholder="Airline"
          className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="departure"
          value={form.departure}
          onChange={handleChange}
          placeholder="Origin"
          className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="destination"
          value={form.destination}
          onChange={handleChange}
          placeholder="Destination"
          className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="datetime-local"
          name="departureTime"
          value={form.departureTime}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="datetime-local"
          name="arrivalTime"
          value={form.arrivalTime}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Book Flight
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-center font-medium ${
            message.includes("✅") ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default Booking;
