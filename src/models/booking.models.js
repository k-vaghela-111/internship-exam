import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        eventId: {
            type: Schema.Types.ObjectId,
            ref: "Event",
            required: true,
        },

        seats: {
            type: Number,
            required: true,
            min: 1,
        },

        paymentMethod: {
            type: String,
            enum: ["UPI", "Card", "Net Banking", "Wallet"],
            required: true,
        },

        status: {
            type: String,
            enum: ["Confirmed", "Cancelled"],
            default: "Confirmed",
        },
    },
    {
        timestamps: true,
    }
);

export const Booking = mongoose.model("Booking", bookingSchema);