const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();
var express = require('express');
var app = express();

app.get("/", function(req, res){
	res.send(
		publicClient.getProductTicker('ETH-USD', function(error, response, data){
			if(error){
				throw error;
			} else {
				return data['price'];
			}
		})
	);
});

app.listen(3000, function(){
	console.log("hello world");
});
