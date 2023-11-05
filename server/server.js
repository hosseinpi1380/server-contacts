const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('../db.json')
const middlewares = jsonServer.defaults()
const cors=require('cors')
const express=require('express')
const userRouter=require('../router/userRouter')
const app=express();
app.use(express.json())
app.use(cors())
app.use('/api/',userRouter)
server.use(cors())
server.use(middlewares)
server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})