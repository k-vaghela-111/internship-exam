import { Router } from "express";
import {
    bookEvent,
    getMyBookings,
} from "../controllers/booking.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.use(verifyJWT);

router.route("/").post(bookEvent);

router.route("/my").get(getMyBookings);

export default router;