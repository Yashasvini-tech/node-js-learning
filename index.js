const express = require("express")
var app = express()
app.get("/", function(req,res){
    res.send("hello world");
});
app.listen(2000, function(){
    console.log("started app on port %d", 2000)
});