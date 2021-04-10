const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    phone: { type: String, default: 'NA' },
    address: {
        city: { type: String },
        line1: { type: String },
        line2: { type: String },
        postalCode: { type: String }
    }
});

employee = mongoose.model('Employee', schema);

module.exports = employee;