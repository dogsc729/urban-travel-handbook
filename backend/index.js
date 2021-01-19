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
      /*.send():enqueues the specified data to 
      be transmitted to 
      the server over the WebSocket connection
      */
      /* .stringify(): converts a JavaScript value to a JSON string*/
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
    /*onmessage:an eventlistener that is called when 
    a message is received from the server */
    ws.onmessage = (message) => {
      const { data } = message
      console.log(data)
      //將data字串解析成JSON
      const [task, payload] = JSON.parse(data)

      switch (task) {
        case 'input': {
          // TODO
          Message.insertMany(payload, () => {
            sendData(['output', [payload]])
            sendStatus({ type: 'info', msg: 'Message inputed' })
          })
          break
        }
        case 'clear': {
          //deleteMany():刪除多筆資料
          //to delete all of the data,filter is {}
          Message.deleteMany({}, () => {
            sendData(['cleared'])

            sendStatus({
              type: 'info',
              msg: 'Message cache cleared.'
            })
          })

          break
        }
        default:
          break
      }
    }
  })

  const PORT = process.env.port || 4000

  server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
  })
})//連線成功
