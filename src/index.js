import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sepatuRoutes from "./routes/sepatuRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Shoe Laundry API is Running!"));
app.use("/api/sepatu", sepatuRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server berjalan di port ${port}`));
