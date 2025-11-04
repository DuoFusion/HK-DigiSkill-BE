const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String },
    contant: { type: String },
    category: { type: String },
    tags: [{ type: String }],
    status: { type: String, enum: ['draft', 'published', 'scheduled'], default: 'draft' },
    isDeleted: { type: Boolean, default: false }
} , { timestamps: true });

export const blogModel = mongoose.model('Blog', blogSchema);