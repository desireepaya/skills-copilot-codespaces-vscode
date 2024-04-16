// Create web server and listen on port 3000
var http = require('http');
var fs = require('fs');
var url = require('url');
var comments = [];
http.createServer(function (req, res) {
    // Parse the URL
    var url_parts = url.parse(req.url);
}
