import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
   cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
   })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// auth routes
import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/auth", authRouter);

// event routes
import eventRouter from "./routes/event.routes.js";

app.use("/api/v1/events", eventRouter);

// booking routes
import bookingRouter from "./routes/booking.routes.js";

app.use("/api/v1/bookings", bookingRouter);

export default app;