var express = require('express');
var app = express();
var port = Number(process.env.PORT) || 3000;
var pageFile = require('./lib/s.js')()
var path = require('path')

pageFile.forEach(function (fileName) {
  var iPath = new RegExp('^/' + fileName);
  app.get(iPath, function(req, res){
    var options = {
      root: path.join(__dirname, '../output/pages'),
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };
    var fileName = req.path.replace(/\//, '') + '.html'
    res.sendFile(fileName, options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', fileName);
      }
    });
  });
})


app.get(/^\/maincloud/, function(req, res){
  var options = {
    root: path.join(__dirname, '../output'),
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  var fileName = req.path.replace(/\/maincloud/, '')
  
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.get('/', function(req, res, next){
    var options = {
      root: path.join(__dirname, '../output/pages'),
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };
    var fileName = 'index/index.html'
    res.sendFile(fileName, options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', fileName);
      }
    });
});

app.listen(port, function () {
  console.log("server listening at http://127.0.0.1:%d",
        this.address()
        .port);
});

