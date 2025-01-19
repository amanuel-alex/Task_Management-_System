import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import RegistrationModel from "./models/registrationAuthSchema";
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Task_managment_auth");

app.post("/registration", (req, res) => {
  RegistrationModel.create(req.body)
    .then((Registration) => res.json(Registration))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("server is running");
});
