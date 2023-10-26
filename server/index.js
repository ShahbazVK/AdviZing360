require("dotenv").config();
require("express-async-errors");
const cookieParser = require("cookie-parser");

const express = require("express");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const notFoundMiddleware = require("./middlewares/not-found");
const authRoutes = require("./routes/auth");
const appointmentRoutes = require("./routes/appointment");
const authMiddleware = require("./middlewares/auth");
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/appointment", authMiddleware, appointmentRoutes);

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
