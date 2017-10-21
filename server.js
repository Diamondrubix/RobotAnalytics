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


joshua = {programer: true, age: 18, favoriteIceCream: "pizza flavour"};

console.log(joshua.favoriteIceCream);


app.get('/', function (req, res) {
    //res.render('main');
    res.send(test)
    console.log(test);
})

app.post('/robotData', function(req,res){
    res.send("cool");
    //test=req.body.temperature;
    //console.log(req.body)
    console.log("the robot is "+req.body.temperature
    +"\nand is at battery "+req.body.battery)
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})