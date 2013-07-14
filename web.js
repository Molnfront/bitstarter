//#!/usr/bin/env node
var fs = require('fs'),
    express = require('express'),
    app = express();

app.get('/', function (request, response) { 
    var path = require('path');
        response.send('test text');
    
});    
        //filePath = path.join(__dirname, 'index.html');
//console.log(filePath);
//var theFile = "index.html";
    //var readFile = fs.readFileSync(filePath); 
//var test = readFile.toString('utf8', 0, readFile.length);
//console.log(readFile);
    //var readBuffer = new Buffer(fs.readFileSync(filePath));
//readBuffer.write(readFile, 0);
//console.log(readBuffer.toString());
//response.send(readBuffer.toString());
    //response.send(fs.readFileSync(path.join(__dirname, 'index.html')).toString());
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});