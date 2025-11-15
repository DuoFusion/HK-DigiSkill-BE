const mongoose = require('mongoose');

const workshopPaymentSchema = new mongoose.Schema({
    workshop_id: { type: mongoose.Schema.Types.ObjectId, ref: 'workshop', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    amount: { type: Number, required: true },
    payment_status: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], default: 'pending' },
    payment_method: { type: String },
    payment_id: { type: String },
    transaction_date: { type: Date, default: Date.now },
    receipt_number: { type: String },
    discount_amount: { type: Number, default: 0 },
    final_amount: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
}, { timestamps: true, versionKey: false });

export const workshopPaymentModel = mongoose.model('workshop-payment', workshopPaymentSchema);

