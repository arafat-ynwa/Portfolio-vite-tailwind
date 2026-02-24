import express from "express";
import mongoose from "mongoose";
import dns from "node:dns/promises";
import formRouter from "./routes/form.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
}

main().catch((err) => console.log(err));

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/form", formRouter);

app.listen(process.env.PORT, () => {
  console.log("server started");
});
