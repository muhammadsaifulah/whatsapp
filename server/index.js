const express = require('express');
const handler = require('./middlewares/handler');
const connect = require('./config/connectDB');
const app = express();
require('dotenv').config();
require('colors')


app.use(express.json());
app.use(express.urlencoded({extendded:false}))

connect()


app.use('/api/user/',require('./routes/userRoutes'))
app.use(handler)

app.listen(process.env.PORT,()=>console.log(`server is runing on PORT: ${process.env.PORT}`));