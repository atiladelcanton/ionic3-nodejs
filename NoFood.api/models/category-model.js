'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categoryModel = new schema({
    title: { trim: true, index: true, required: true, type: String },
    description: { type: String },
    active: { type: Boolean, required: true },
    picture: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

categoryModel.pre('save', next => {
    let now = new Date();

    if (this.createdAt)
        this.createdAt = now;
    next();
});

module.exports = mongoose.model('Category', categoryModel);