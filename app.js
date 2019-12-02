var express= require('express');
var app=new express();

app.get('/',function(req,res){
    res.send('welcome');
});
const port =process.env.PORT||3000
app.listen(port,function(){
    console.log('Listening to Port')})