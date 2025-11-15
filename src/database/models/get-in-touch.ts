const mongoose = require('mongoose');

const getInTouchSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    isRead: { type: Boolean, default: false },
}, { timestamps: true, versionKey: false });

export const getInTouchModel = mongoose.model('get-in-touch', getInTouchSchema);

