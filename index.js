const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();

var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type' : 'text/plain'})
	response.end(
	publicClient.getProductTicker('ETH-USD', function(error, response, data){
		if(error){
			throw error;
		} else {
			process.stdout.write(data['price']);
		}
	}));
}).listen(8000, '127.0.0.1');
console.log("Server Running on 127.0.0.1");