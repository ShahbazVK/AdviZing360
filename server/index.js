require("dotenv").config();
require("express-async-errors");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const express = require("express");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const notFoundMiddleware = require("./middlewares/not-found");
const authRoutes = require("./routes/auth");
const appointmentRoutes = require("./routes/appointment");
const authMiddleware = require("./middlewares/auth");
const consultantProfileRoutes = require("./routes/consultantProfile");
const socketEvents = require("./utils/socketEvents");
const chatRoutes = require("./routes/chat");
const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your React app's domain
    credentials: true, // Enable credentials (cookies)
  })
);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
  },
});

app.use(cookieParser());
// app.use(express.json());
app.use(express.json({ limit: "50mb" }));

app.use("/api/auth", authRoutes);
app.use("/api/appointment", authMiddleware, appointmentRoutes);
app.use("/api/profile", authMiddleware, consultantProfileRoutes);
app.use("/api/chat", authMiddleware, chatRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

io.use((socket, next) => {
  socket.id = socket.handshake.auth.id;
  // console.log(`connected socket id ${socket.id}`);
  next();
});

io.on("connection", (socket) => {
  socketEvents(socket, io);
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    server.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
