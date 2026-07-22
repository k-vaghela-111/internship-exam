import { Event } from "../models/event.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createEvent = asyncHandler(async (req, res) => {
    const {
        title,
        description,
        image,
        date,
        location,
        totalSeats,
        seatsLeft,
    } = req.body;

    if (
        !title ||
        !description ||
        !date ||
        !location ||
        !totalSeats ||
        seatsLeft === undefined
    ) {
        throw new ApiError(400, "All fields are required");
    }

    const event = await Event.create({
        title,
        description,
        image,
        date,
        location,
        totalSeats,
        seatsLeft,
    });

    return res.status(201).json(
        new ApiResponse(201, event, "Event created successfully")
    );
});

const getAllEvents = asyncHandler(async (req, res) => {
    const events = await Event.find().sort({ date: 1 });

    return res.status(200).json(
        new ApiResponse(200, events, "Events fetched successfully")
    );
});

const getEventById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const event = await Event.findById(id);

    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    return res.status(200).json(
        new ApiResponse(200, event, "Event fetched successfully")
    );
});

export {
    createEvent,
    getAllEvents,
    getEventById,
};