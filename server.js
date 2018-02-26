const express = require('express')
const app = express()
//io = require('socket.io')(server);

bodyParser = require('body-parser');
//app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

//io = require('socket.io').listen(server);

///socketManager=require('./SocketManager.js');


test = '9001';

app.get('/', function (req, res) {
    //res.render('main');
    res.send({thing: 'hi'})
    console.log(test);
})


function test(var1,var2){
    console.log("cool");
}

app.post('/robotData', function(req,res){
    res.send("cool");
    //test=req.body.temperature;
    //console.log(req.body)
    console.log("\nthe robot is "+req.body.name
    +"\nand is at battery "+req.body.password)
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})