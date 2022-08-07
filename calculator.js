const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
result = num1 + num2;
  res.send("The result of the calculations is " + result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
var weight = Number(req.body.weight);
var height = Number(req.body.height);
result2 = weight / (height * height);

  res.send("Your BMI is " + result2)
})

app.listen(3000, function() {
  console.log("The app will be listening from port 3000");
});
