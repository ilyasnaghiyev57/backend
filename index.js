require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db/db");
const path = require("path");
const router = express.Router();
const thingRouter = require("./routes/thingRoutes");
connection();
app.use(express.json({ extended: true }));
app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use("/api/v3/thing", thingRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
