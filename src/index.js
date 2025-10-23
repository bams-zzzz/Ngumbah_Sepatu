import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sepatuRoutes from "./routes/sepatuRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => res.send("Shoe Laundry API is Running!"));

// API routes
app.use("/api/sepatu", sepatuRoutes);

// ⚠️ Jangan pakai app.listen di Vercel!
// Ekspor app sebagai handler
export default app;
