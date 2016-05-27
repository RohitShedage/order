var mongoose = require('mongoose');

var orderdItemSchema = new mongoose.Schema({
	price: Number,
	quantity: Number,
	unit: String,
	description: String
});

module.exports = mongoose.model('Order', {
	orderId: String,
	timeOrderPlaced: { type: Date, default: Date.now },
	scheduledDeliveryTime: Date,
	orderStatus: String,
	userId: String,
	orderdItems: [orderdItemSchema]
});