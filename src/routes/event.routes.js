import { Router } from "express";
import {
    createEvent,
    getAllEvents,
    getEventById,
} from "../controllers/event.controller.js";

const router = Router();

router.route("/")
    .post(createEvent)
    .get(getAllEvents);

router.route("/:id")
    .get(getEventById);

export default router;