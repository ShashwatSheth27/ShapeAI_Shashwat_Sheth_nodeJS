const express = require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
	console.log(req.body);
	var h=Number(req.body.height);
	var w=Number(req.body.weight);
	var result=((w/(h*h))*10000);
	res.send("BMI::"+result);
});
app.listen(3000, function(){
	console.log("Server started on port:3000");
});