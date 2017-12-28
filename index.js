const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();
const express = require('express');
const app = express();
const MongoClient = require("mongodb").MongoClient;

const MONGO_URL = 'mongodb://<user>:<password>@ds133597.mlab.com:33597/trading-simulator';

app.get("/", function(req, res){
	MongoClient.connect(MONGO_URL, (err, db) => {  
		  if (err) {
		    return console.log(err);
		  }

		  // Do something with db here, like inserting a record
		  db.collection('notes').insertOne(
		    {
		      title: 'Hello MongoDB',
		      text: 'Hopefully this works!'
		    },
		    function (err, res) {
		      if (err) {
		        db.close();
		        return console.log(err);
		      }
		      // Success
		      db.close();
		    }
		  )
		});
});

app.listen(3000);
