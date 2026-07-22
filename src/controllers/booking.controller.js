import { Booking } from "../models/booking.models.js";
import { Event } from "../models/event.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const bookEvent = asyncHandler(async (req, res) => {
    const { eventId, seats, paymentMethod } = req.body;

    const event = await Event.findById(eventId);

    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    if (event.seatsLeft < seats) {
        throw new ApiError(400, "Not enough seats available");
    }

    event.seatsLeft -= seats;

    await event.save();

    const booking = await Booking.create({
        userId: req.user._id,
        eventId,
        seats,
        paymentMethod,
    });

    return res.status(201).json(
        new ApiResponse(201, booking, "Booking successful")
    );
});

const getMyBookings = asyncHandler(async (req, res) => {

    const bookings = await Booking.find({
        userId: req.user._id,
    }).populate("eventId");

    return res.status(200).json(
        new ApiResponse(200, bookings, "Bookings fetched successfully")
    );
});

export {
    bookEvent,
    getMyBookings,
};