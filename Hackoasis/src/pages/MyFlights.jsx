import { useEffect, useState } from "react";

function MyFlights() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/flights")
      .then(res => res.json())
      .then(data => {
        setFlights(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching flights:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4">Loading flights...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Flights</h2>
      {flights.length === 0 ? (
        <p>No flights found. Please book one.</p>
      ) : (
        <ul className="space-y-4">
          {flights.map(flight => (
            <li key={flight._id} className="p-4 bg-gray-800 rounded-lg shadow">
              <h3 className="text-lg font-semibold">{flight.flightNumber} - {flight.airline}</h3>
              <p>Departure: {flight.departure} → {flight.destination}</p>
              <p>Status: <span className="font-bold">{flight.status}</span></p>
              <p>
                Departure Time: {new Date(flight.departureTime).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false
                })}
              </p>
              <p>
                Arrival Time: {new Date(flight.arrivalTime).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyFlights;
