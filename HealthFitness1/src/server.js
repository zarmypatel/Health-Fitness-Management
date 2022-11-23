var express=require('express')
var bodyparser=require('body-parser')
var fs = require('fs');
var multer = require('multer');
var app=express()

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ReadyToMove", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.listen(8000,()=>console.log('server is listening at 8000'))
//const server = http.createServer(app);
