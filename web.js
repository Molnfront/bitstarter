var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());
var theFile = "index.html";
var readFile = fs.readFileSync(theFile); 
var readBuffer = new Buffer(readFile);
//readBuffer.write(readFile, 0);
app.get('/', function (request, response) {
  response.send(readBuffer.toString('utf8', 0, readBuffer.length));
});
