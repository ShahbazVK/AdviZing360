require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const express = require("express");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const notFoundMiddleware = require("./middlewares/not-found");
const authRoutes = require("./routes/auth");
const appointmentRoutes = require("./routes/appointment");
const authMiddleware = require("./middlewares/auth");
const consultantProfileRoutes = require("./routes/consultantProfile");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your React app's domain
    credentials: true, // Enable credentials (cookies)
  })
);

app.use(cookieParser());
// app.use(express.json());
app.use(express.json({ limit: "50mb" }));

app.use("/api/auth", authRoutes);
app.use("/api/appointment", authMiddleware, appointmentRoutes);
app.use("/api/profile", authMiddleware, consultantProfileRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
