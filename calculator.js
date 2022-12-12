const express = require('express');
const BodyParser = require ('body-parser');

const app = express();
app.use(BodyParser.urlencoded({extended: true}));

app.get('/bmicalculator', function(req,res){
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function (req,res){
  var Num1 = parseFloat(req.body.num1);
  var Num2 = parseFloat(req.body.num2);
  var n = (Num1/ Num2)/Num2;
  res.send('BMI juaj eshte  ' + n);
});

app.listen(3000, function(){

  console.log('Server is running on port 3000');
});
