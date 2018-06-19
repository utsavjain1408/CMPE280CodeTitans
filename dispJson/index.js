import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express';
var http = require("http");


const PORT = 1206

var app = express()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    // res.send("This is working")
    var options = {
        "method": "GET",
        "hostname": "localhost",
        "port": "3000",
        "path": "/orders",
        "headers": {
          "cache-control": "no-cache",
          "postman-token": "f1696e0f-da59-84c3-d478-215b5d52b7b0"
        }
      };
      var orders
      var req = http.request(options, function (resp) {
        var chunks = [];
      
        resp.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        resp.on("end", function () {
          var body = Buffer.concat(chunks);
          res.send(body.toString());
          orders = Buffer.concat(chunks)
        });
      });
      console.log(orders)

      req.end();
      res.send(orders)
})

app.listen(PORT, () => {
    console.log('hbdfhfg')
})
