const express = require('express');
const  app = express();

const exphbs = require('express-handlebars');




require('dotenv-safe').config({
    example: './.env'
});

const port = process.env.PORT;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`); 
});

app.get('/',(request,response,next)=>{
    response.render('home',{layout:false,title:'123456789'});
});