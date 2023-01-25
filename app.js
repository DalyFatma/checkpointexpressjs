const express = require('express');
const app = express();
const pug=require("pug")
const port=5000;
const checkTime=require('./views/middlewares/CheckTime')
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.use(checkTime);

app.get("/",(req,res)=>{
    res.render("Home",{title:"Home"})
})
    
    app.get("/Contact-us",(req,res)=>{
        res.render("Contact-us",{title:"Contact-us"})
        })
    
    app.get("/Our-Services",(req,res)=>{
        res.render("Our-Services",{title:"Our-Services"})
    })

   
    

    app.listen(port,(err)=>{
        err? console.log(err):console.log(`server is running at ${port}`);
    })