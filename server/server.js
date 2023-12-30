// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('../db.json')
// const middlewares = jsonServer.defaults()
const express=require('express')
const cors=require('cors')
const userRouter=require('../router/userRouter')
const app=express();
app.use(cors({
  origin:'http://localhost:5173',
  headers:['Content-Type'],
  credentials:true,
  http://localhost:5173
}));
app.use('/api',userRouter)
app.listen(5000, () => {
  console.log('JSON Server is running')
})
module.exports=app
