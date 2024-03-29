const express = require("express");
const bodyParser= require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req,res){

    var weight= Number(req.body.weight);
    var height= Number(req.body.height);

    var result = weight / (height*height);
    res.send("Your BMI is" + " " + result);
})

app.post("/", function(req,res){

    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);

    var result = num1 + num2;
    res.send("The correct answer is" + " " + result);
})

app.get("/contact", function(req,res){
    res.send("How may I help you?");
})
app.listen(3000, function(){
    console.log("Server is running on port 3000");
})