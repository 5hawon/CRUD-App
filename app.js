const express = require('express');
const mongoose = require('mongoose');

const url ='mongodb://localhost/AlienDbex';

const app = express();

//conncect db
mongoose.connect(url,{useNewUrlParser:true});
const con =mongoose.connection;

con.on('open',function(){
    console.log('connection to database');
})
app.use(express.json());
const alienRouter =require('./routers/aliens');
app.use('/alien',alienRouter);


app.listen(9000,()=>{
    console.log('listening on port 9000');
})