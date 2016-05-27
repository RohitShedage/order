var Order = require('../models/Order'),
uuId = require('node-uuid');

module.exports.create = function createOrder(req, res){
	var order = new Order(req.body);

	order.orderId = uuId.v1();
	order.orderStatus = 'Ordered';
	order.userId = req.params.userId;

	order.save(function(err, result){
		return res.json(result);
	});
}

module.exports.list = function getOrders(req, res){
	Order.find({userId: req.params.userId}, function(err, results){
		return res.json(results);
	});
}


module.exports.listAll = function getOrders(req, res){
	Order.find({}, function(err, results){
		return res.json(results);
	});
}

module.exports.fetch = function getOrder(req, res){
	Order.find({orderId: req.params.orderId}, function(err, results){
		return res.json(results);
	});
}
