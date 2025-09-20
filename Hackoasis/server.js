import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import flightsRoutes from "./routes/flights.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/flights", flightsRoutes);
app.use("/api/auth", authRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
