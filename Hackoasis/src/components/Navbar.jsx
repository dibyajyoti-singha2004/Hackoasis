import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState("");

  useEffect(() => {
    // If user is logged in, retrieve username from localStorage
    if (token) {
      const savedUser = localStorage.getItem("username");
      if (savedUser) setUsername(savedUser);
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken(null);
    setUsername("");
    navigate("/auth");
  };

  return (
    <nav className="fixed w-full flex justify-between items-center p-4 bg-black/80 text-white z-50">
      
      <div className="logo font-bold text-xl">
        <Link to="/" className="hover:text-yellow-300">FlightX</Link>
      </div>

      
      <ul className="flex gap-6 text-lg">
        <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
        <li><Link to="/my-flights" className="hover:text-yellow-300">My Flights</Link></li>
        <li><Link to="/booking" className="hover:text-yellow-300">Booking</Link></li>
        <li><Link to="/delay" className="hover:text-yellow-300">Delay</Link></li>
      </ul>

      
      <div className="flex gap-4 text-lg items-center">
        {token ? (
          <>
            <span className="text-green-400 font-semibold">{username}</span>
            <button 
              onClick={handleLogout} 
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/auth" className="bg-green-600 px-3 py-1 rounded hover:bg-green-700">
              Login / Sign Up
            </Link>
          </>
        )}
        <Link to="/help" className="hover:text-yellow-300">Help</Link>
      </div>
    </nav>
  );
}

export default Navbar;
