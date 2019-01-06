'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProductModel = new schema({
    name: { type: String, required: true, trim: true, index: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    picture: { type: String, required: true },
    active: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

ProductModel.pre('save', next => {
    let now = new Date();

    if (this.createdAt)
        this.createdAt = now;
    next();
});

module.exports = mongoose.model('Product', ProductModel);