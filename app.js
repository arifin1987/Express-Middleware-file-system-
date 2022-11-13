const express = require('express');

const studentRouter = require('./routers/studentRouter');
const morgan = require('morgan');


app = express()
app.use(express.json());

app.use(express.urlencoded({extended: true})); // handle key-value pair
app.use(express.static('public'))
app.use(morgan('dev'))

app.use((req, res, next)=>{
    console.log("this is middleware 1")
    next();
})

app.use((req, res, next)=>{
    console.log("this is middleware 2")
    next();
})

app.use('/api/students', studentRouter);

app.get('/', (req, res)=>{
    res.send("hello from express js")
});






app.listen(8000, ()=>{
    console.log("server run success")
})