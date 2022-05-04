const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;
// console.log(path.join(__dirname,'../public'))
static=path.join(__dirname,'../public');
view=path.join(__dirname,'../views');
partials=path.join(__dirname,'../partials');
app.set('view engine','hbs');
app.set('views',view);
app.use(express.static(static));
hbs.registerPartials(partials);

app.get("/",(req,res)=>{
    res.render('index');
});
app.get("/about",(req,res)=>{
    res.render('about');
});

app.get("*",(req,res)=>{
    res.render('404');
});
// port=3000;
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
// console.log(path.join(__dirname,'../views'));
// console.log(path.join(__dirname,'../partials'));