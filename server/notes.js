//What is Node.js
// Node.js is an open source server environment
// Node.js is free
// Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
// Node.js uses JavaScript on the server
// Node.js uses asynchronous programming!
// Node.js eliminates the waiting, and simply continues with the next request.
// Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

//To access module use require
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);


// Use the exports keyword to make properties and methods available outside the module file.

exports.myDateTime = function () {
    return Date();
};


