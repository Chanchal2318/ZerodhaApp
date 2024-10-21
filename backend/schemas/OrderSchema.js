const {Schema} = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    price: Number,
    qty: Number,
    mode: Boolean,
});

module.exports = {OrderSchema};