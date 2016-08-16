var express =require('express');
var app = express();
var path =require('path');
var bodyParser=require('body-parser');

app.listen(8080, 'localhost', function(){
  console.log('server is listening on 8080');
});
app.get('/', function(req,res){
  console.log('in base url');
  res.sendFile(path.resolve('./helloworld.html'));
});
app.use(express.static('build'));
