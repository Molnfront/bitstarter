var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express.createServer(express.logger());
var filePath = path.join(__dirname, 'index.html');
//var theFile = "index.html";
var readFile = fs.readFileSync(filePath); 
//var readBuffer = new Buffer(readFile);
//readBuffer.write(readFile, 0);
app.get('/', function (request, response) {
   // console.log(response);
  response.send(readFile.toString('utf8', 0, readBuffer.length));
});
