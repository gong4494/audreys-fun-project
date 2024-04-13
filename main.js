var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/'; // this folder should contain your html files.


router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use("/",router);
app.use(express.static(__dirname + '/img'));

app.listen(3000,function(){
  console.log("Live at Port 3000");
});