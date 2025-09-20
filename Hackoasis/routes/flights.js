import express from "express";
import { getFlights, bookFlight, predictDelay } from "../controllers/flightsController.js";

const router = express.Router();

router.get("/", getFlights);
router.post("/", bookFlight);
router.post("/predict", predictDelay);

export default router;
