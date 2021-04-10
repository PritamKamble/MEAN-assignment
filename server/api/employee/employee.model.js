const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    phone: { type: String, default: 'NA' },
    address: {
        city: { type: String, required: true },
        line1: { type: String, required: true },
        line2: { type: String, required: true },
        postalCode: { type: String, required: true }
    }
});

employee = mongoose.model('Employee', schema);

module.exports = employee;