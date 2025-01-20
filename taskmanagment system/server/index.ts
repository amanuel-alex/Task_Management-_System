import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import RegistrationModel from "./models/registrationAuthSchema";

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/Task_managment_auth")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Registration endpoint
app.post("/registration", async (req: Request, res: Response) => {
  try {
    const registration = await RegistrationModel.create(req.body);
    res.json(registration);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
