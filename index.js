const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();

publicClient.getProductTicker('ETH-USD', function(error, response, data){
	if(error){
		throw error;
	} else {
		console.log(data['price']);
	}
});