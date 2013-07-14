//#!/usr/bin/env node
var fs = require('fs'),
    express = require('express'),
    app = express();

app.get('/', function (request, response) { 
    var path = require('path'),
        filePath = path.join(__dirname, 'index.html'),
        readFile = fs.readFileSync(filePath), 
        readBuffer = new Buffer(readFile);
        response.send(readBuffer.toString());
});    

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});