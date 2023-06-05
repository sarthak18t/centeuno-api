const express = require('express')
const dotenv = require('dotenv')
const product_router = require('./routes/route')
const app = express();

dotenv.config()
app.use('/api/products',product_router)
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World')
})


const port = process.env.PORT || 3000;

app.listen(8000,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})