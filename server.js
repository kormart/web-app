// Start an Express server

var express = require('express');
var app = express();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Start listening for incoming calls

app.listen(3000, function(){
  console.log("Express server listening on port %d",3000);
});
