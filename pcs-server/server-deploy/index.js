const express = require('express');
const route = require('./routes/route');
var cors = require('cors');
var app = express();
const port = 3000;

app.use('/', route);
app.use(cors());

app.get('/' , (req, res) => {
    res.send("Welcome PCS-server is up!!!!!!!");
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    next();
});

app.listen(port, function(error) {
    if(error){
        console.log('something went wrong' , error);
    }else{
        console.log('server is listening on port' + port)
    }
})