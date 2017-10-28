const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobSchema = new Schema({
    amount: Number,
    used: Number
});

module.exports = JobSchema;