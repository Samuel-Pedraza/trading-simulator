const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();
const express = require('express');
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const MONGO_URL = 'mongodb://<user>:<password>@ds133597.mlab.com:33597/trading-simulator';

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname + "/views/index.html"))
});

app.listen(3000);
