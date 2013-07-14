//#!/usr/bin/env node
var fs = require('fs'),
    express = require('express'),
    app = express(express.logger());
app.get('/', function (request, response) {
    var path = require('path'),
        filePath = path.join(__dirname, 'index.html');
//console.log(filePath);
//var theFile = "index.html";
    //var readFile = fs.readFileSync(filePath); 
//var test = readFile.toString('utf8', 0, readFile.length);
//console.log(readFile);
    var readBuffer = new Buffer(fs.readFileSync(filePath));
//readBuffer.write(readFile, 0);
//console.log(readBuffer.toString());
response.send(readBuffer.toString());
});

