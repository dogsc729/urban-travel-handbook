import { useState } from 'react'
// import { w3cwebsocket as W3CWebSocket } from 'websocket'

// const client = new W3CWebSocket('ws://localhost:4000')
const client = new WebSocket('ws://localhost:80')//WS server URL(client side)

const Display = () => {
  const [messages, setMessages] = useState([])
  const [status, setStatus] = useState({})
  const [opened, setOpened] = useState(false)

  client.onopen = () => {
    setOpened(true)
  }//跟WS server連接建立時觸發

  client.onmessage = (message) => {
    const { data } = message
    //payload:承載量，在一堆資料中我們所關心的部份
    const [task, payload] = JSON.parse(data)//將data字串解析成JSON

    switch (task) {
      case 'init': {
        setMessages(() => payload)
        break
      }
      default:
        break
    }
  }

  return {
    status,
    opened,
    messages
  }
}

export default Display

