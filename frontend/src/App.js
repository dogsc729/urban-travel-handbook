import './App.css';
import { useState } from 'react'
import { startPage, selectcityPage, selecttypePage, choosingPage } from './axios';
import background from "./images/taiwan_map.png";
import { Button, Input, message, Tag } from 'antd'
import Display from './display'


function App() {
  const [start, setstart] = useState(false)
  const [selectcity, setselectcity] = useState(false)//選擇城市與否
  const [selecttype, setselecttype] = useState(false)//選擇種類與否
  const [type, settype] = useState("default")//種類為何？
  const { status, opened, messages } = Display()
  //起始畫面
  const startPage = (
    <div>
      <div className="background">
        <img src={background} alt="" />
      </div>
      <button
        onClick={async () => {
          await selectcityPage()
        }}>
        Start Your Trip!</button>
    </div>
  )
  //選擇程式的畫面
  const selectcityPage = (
    <div>
      <h1>WELCOME TO TAIWAN</h1>
      <select>
        <option selected value="臺北">臺北</option>
        <option value="新北">新北</option>
        <option value="桃園">桃園</option>
        <option value="臺中">臺中</option>
        <option value="臺南">臺南</option>
        <option value="高雄">高雄</option>
      </select>
      <button>回到上一頁</button>
    </div>
  )
  //選擇種類的畫面
  const selecttypePage = (
    <div>
      <select>
        <option selected value="食">食</option>
        <option value="住">住</option>
        <option value="行">行</option>
        <option value="球場">球場</option>
      </select>
    </div>
  )
  //逛圖片的畫面
  const filter = messages.filter(function(messages){return messages.type ==="球場"})
  const finalPage = (
    <div>
      <h1>{type}</h1>
      <p>fuck</p>
      <a href='/'>幹你娘</a>
      <button>上一張</button>
      <button>下一張</button>
      <div className="App-messages">
        {
          filter.map(({ name, type, city, reference }, i) => (
            <p className="App-message" key={i}>
              <Tag color="blue">{name}</Tag> <Tag color="red">{type}</Tag> <Tag color="red">{city}</Tag> {reference}
            </p>
          ))
        }
      </div>
    </div>
  )

  return <div className="App">{finalPage}</div>
}

export default App;
