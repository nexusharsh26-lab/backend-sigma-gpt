// import OpenAI from "openai";
// import "dotenv/config";

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
// });

// const response = await client.responses.create({
//   model: "gpt-5-mini",
//   instructions: "You are a stand up comedian",
//   input: "tell me some joke related to computer science ",
// });

// console.log(response);

import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.ts";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectDB();
});

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("Connected! to DB Successfully");
  } catch (err) {
    console.log(`failed to connect to DB ${err}`);
  }
};
