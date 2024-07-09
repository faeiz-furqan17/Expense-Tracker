import express from "express";
import router from "./routes/routes.js";
import cors from "cors";

const app = express();

app.use(cors()); // Enable CORS for all routes

app.listen(process.env.PORT || 3000, () =>
  console.log("Server is running on port 3000...")
);

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
