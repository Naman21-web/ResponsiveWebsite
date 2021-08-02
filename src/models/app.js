const express = require("express");
const path = require('path');
const hbs = require('hbs')
require("../db/conn.js")
const User = require("./usermessage")
const app = express();
const port = process.env.PORT || 3000;

//Setting the path
const partialpath = path.join(__dirname,'../../templates/partials')
const templatepath = path.join(__dirname,'../../templates/views')
const staticpath = path.join(__dirname,'../../static');
//console.log(path.join(__dirname,'../../static'));

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//Will read html file of this path if exist
app.use('/static',express.static(staticpath));//Read files of the folder static
//app.use('/static'  We can get into the folder in staticpath by just writing "/static",express.static('staticpath'))
//Like this we can use any complex folder

//Setting the view engine
app.set("view engine","hbs")
//Set view engine folder directory from views to templatepath/partialpath as we have changed its folder
app.set("views",templatepath)//Default it is views
//app.set("views",partialpath)
hbs.registerPartials(partialpath)//Registering with hbs

//routing
//app.get(path,callback)
app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/contact",(req,res)=>{
    res.render("contact")
});

app.post("/contact", async(req,res)=>{
    try{
       //res.send(req.body)
       const userData = new User(req.body)
       await userData.save();
       res.status(201).render("index")//Status 201 is used when new file is created
    }catch(error){
        res.status(500).send(error);
    }
});

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
});