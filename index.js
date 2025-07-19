//const express = require ('express');
import router from './routes/routes.js';
import { error } from 'console';
import connectDB from './config/db.js';
import express from 'express'
const app = express();
//const path = require('path')
import path from 'path'
const port=3000 

app.set("view engine","ejs");
app.use(express.json ());
app.use(express.urlencoded({extended:true}));
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("/public"))
app.use("/api", router)
app.get('/', (req, res)=>{
     res.send('Hola Amigo')
    //res.render("index");
})

connectDB()
.then (()=>{
    console.log("DB connected successfully!")
    app.listen(port, ()=>{console.log("server is running!")

    })
})
.catch (()=>{
    console.error(error?.message)
})