var express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser');
order = require('./app/server/Order');

mongoose.connect('mongodb://localhost:27017/order');
app.use(bodyParser());

app.post('/api/:userId/order', order.create);
app.get('/api/:userId/orders', order.list);
app.get('/api/orders', order.listAll);
app.get('/api/:userId/order/:orderId', order.fetch);

app.listen(3000, function() {
	console.log('Ordering Started');
});