//#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express(express.logger());
var filePath = path.join(__dirname, 'index.html');
//console.log(filePath);
//var theFile = "index.html";
var readFile = fs.readFileSync(filePath, 'UTF8'); 

//var test = readFile.toString('utf8', 0, readFile.length);
console.log(readFile);
//var readBuffer = new Buffer(readFile);
//readBuffer.write(readFile, 0);

app.get('/', function (request, response) {
   //console.log(response);
  response.send(readFile);
});

