require('dotenv-defaults').config()//use dotenv-defaults instead of dotenv

const http = require('http')//require(): include module
const express = require('express')
const mongoose = require('mongoose')
const WebSocket = require('ws')

const Message = require('./models/message')
//server side
const app = express()
const server = http.createServer(app)//建立server
const wss = new WebSocket.Server({ server })

if (!process.env.MONGO_URL) {
  console.error('Missing MONGO_URL!!!')
  process.exit(1)
}

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})//connect to database

const db = mongoose.connection
//取得資料庫連線狀態(operate DB through mongoose API)
db.on('error', (error) => {
  console.error(error)
})//連線異常

db.once('open', () => {
  console.log('MongoDB connected!')
  //從外部連結時執行
  wss.on('connection', ws => {
    //based on the data retrieved from DB, define what to return to client side through 'ws'
    const sendData = (data) => {
      ws.send(JSON.stringify(data))
    }
    const sendStatus = (s) => {
      sendData(['status', s])
    }
    Message.find()
      .limit(100)
      .sort({ _id: 1 })//依_id由小到大排序
      .exec((err, res) => {
        //handle error situation
        if (err) throw err
        // initialize app with existing messages
        sendData(['init', res])
      })
  })

  const PORT = process.env.port || 80

  server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
  })
})//連線成功
