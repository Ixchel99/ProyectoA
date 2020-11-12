var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("hola mundo soy isaac e ixchel isaac2 ixchel 2"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
