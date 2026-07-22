import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        event: {
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
            required: true,
            enum: ["UPI", "Card", "Net Banking", "Wallet"],
        },

        status: {
            type: String,
            enum: ["Booked", "Cancelled"],
            default: "Booked",
        },
    },
    {
        timestamps: true,
    }
);

export const Booking = mongoose.model("Booking", bookingSchema);