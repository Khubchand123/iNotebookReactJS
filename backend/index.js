const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express();
const port = 4000
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello1')
})
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.listen(port,()=>{
    console.log("Hello1");
})