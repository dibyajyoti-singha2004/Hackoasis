import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyFlights from "./pages/MyFlights";
import Booking from "./pages/Booking";

import Auth from "./pages/Auth"; 
import Help from "./pages/Help";

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-flights" element={<MyFlights />} />
          <Route path="/booking" element={<Booking />} />
        
          <Route path="/auth" element={<Auth />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
