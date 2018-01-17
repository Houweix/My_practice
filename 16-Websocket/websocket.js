var ws = require("nodejs-websocket")

var PORT =  3000;
console.log('websoctet start on port'+PORT);

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
        console.log("Received "+str)
        conn.sendText('hello'+str.toUpperCase())
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(PORT);