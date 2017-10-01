/**
 * Created by Uriel on 14/07/2017.
 */
var express = require ('express');
var app= express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require ('mongoose');
var port = process.env.PORT || 8080;
var path = require('path');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(request,response,next)
{
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Methods','GET','POST');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type','Authorization');
  next();
})

var basicRouter = express.Router();

basicRouter.get('/',function(request,response)
{
  console.log(__dirname);
  response.sendFile(path.join(__dirname+'/index.html'));
})
app.use('/',basicRouter);


app.listen(port);
console.log('Server is listening on port : ' + port);
