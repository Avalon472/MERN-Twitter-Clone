import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

//Makes dotenv variables accessible in process.env object
dotenv.config();

//Initialize express server and set port
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

//Behavior of server once it's spun up
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
  connectMongoDB();
});
