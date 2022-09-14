const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('./database/index.js');
const app = express();
const port = process.env.PORT || 3000;
const routing = require('./routes');
const errorhandler = require('errorhandler')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routing);

console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'developpement'){
    app.use(errorhandler())
}
else{
    app.use((err,req,res,next)=>{
        res.status(err.status || 500).json({
            erreur : err.status || 500,
            message : 'bug'
            }
        )
    })
}
app.listen(port);