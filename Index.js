const print = (data)=> console.log(data)

// Index js - Entry point of Application
// Required libraries
const express = require('express')
const http = require('http')
const fs = require('fs')
const exp = require('constants')

const port = 1000

const app = express()
app.use(express.static(__dirname+'/Asset'))
app.use(express.static(__dirname+'/Back-End'))

app.use('/',function(req,res,next){
    if(! req.errored){
        res.send('working correctly')
    }
})

app.listen(port,function(err){
    if(err) print('Error : '+err)
    else print('server started')
})