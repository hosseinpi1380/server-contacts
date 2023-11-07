// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('../db.json')
// const middlewares = jsonServer.defaults()
const cors=require('cors')
const express=require('express')
const userRouter=require('../router/userRouter')
const app=express();
app.use(express.json())
app.use('/api/',userRouter)
app.use(cors())
app.listen(3000, () => {
  console.log('JSON Server is running')
})