import './App.css';
import { useState } from 'react'
import { startPage, selectcityPage, selecttypePage, choosingPage } from './axios';
import background from "./images/taiwan_map.png";
import { Button, Input, message, Tag } from 'antd'
import Display from './display'
import taipei from "./images/taipei.png"
import new_taipei from "./images/new taipei.png"
import taoyuan from "./images/taoyuan.png"
import taichung from "./images/taichung.png"
import tainan from "./images/tainan.png"
import kaohsiung from "./images/kaohsiung.png"
import food from "./images/food.png"
import hotel from "./images/hotel.png"
import basket from "./images/basket.jpeg"
import tour from "./images/tour.jpeg"


function App() {
  //const [start, setstart] = useState(false)
  //const [selectcity, setselectcity] = useState(false)//選擇城市與否
  //const [selecttype, setselecttype] = useState(false)//選擇種類與否
  const [type, settype] = useState("default")//種類為何？
  const [city, setcity] = useState("default")
  const [page, setpage] = useState(0)
  const [typename, settypename] = useState("default")
  const [cityname, setcityname] = useState("default")
  const { status, opened, messages } = Display()
  //起始畫面
  const startPage = (
    <div>
      <div className="background">
        <img src={background} alt="" />
      </div>
      <button
        onClick={async () => {
          await //selectcityPage()
            setpage(1)
        }}>
        Start Your Trip!</button>
    </div>
  )
  //選擇程式的畫面
  const selectcityPage = (
    <>
      <div>
        <h1>WELCOME TO TAIWAN</h1>
        <select onChange={async (e) => { await setpage(2); setcity(e.target.options[e.target.options.selectedIndex].value); }}>
          <option value="select">select a city</option>
          <option value="臺北">臺北</option>
          <option value="新北">新北</option>
          <option value="桃園">桃園</option>
          <option value="臺中">臺中</option>
          <option value="臺南">臺南</option>
          <option value="高雄">高雄</option>
        </select>
        <button onClick={async () => { await setpage(0) }}>回到上一頁</button>
      </div>
      <div className="city">
        <div className="cityname">
          <h1>臺北市</h1>
          <img src={taipei} alt="" />
        </div>
        <div className="cityname">
          <h1>臺南市</h1>
          <img src={tainan} alt="" />
        </div>
        <div className="cityname">
          <h1>桃園市</h1>
          <img src={taoyuan} alt="" />
        </div>
      </div>
      <div className="city">
        <div className="cityname">
          <h1>臺中市</h1>
          <img className="img" src={taichung} alt="" />
        </div>
        <div className="cityname">
          <h1>新北市</h1>
          <img className="img" src={new_taipei} alt="" />
        </div>
        <div className="cityname">
          <h1>高雄市</h1>
          <img className="img" src={kaohsiung} alt="" />
        </div>
      </div>
    </>
  )
  //選擇種類的畫面
  const selecttypePage = (
    <>
      <div>
        <h1>{city}</h1>
      </div>
      <div>
        <div className="tp">
          <div className="typename">
            <h1>食</h1>
            <button type="button" onClick={async () => { await setpage(3); settype("食"); }}><img className="type" src={food} alt="" /></button>
          </div>
          <div className="typename">
            <h1>住</h1>
            <button type="button" onClick={async () => { await setpage(3); settype("住"); }}><img className="type" src={hotel} alt="" /></button>
          </div>
        </div>
        <div className="tp">
          <div className="typename">
            <h1>景點</h1>
            <button type="button" onClick={async () => { await setpage(3); settype("景點"); }}><img className="type" src={tour} alt="" /></button>
          </div>
          <div className="typename">
            <h1>籃球場</h1>
            <button type="button" onClick={async () => { await setpage(3); settype("籃球場"); }}><img className="type" src={basket} alt="" /></button>
          </div>
        </div>
        <button onClick={async () => { await setpage(1) }}>回到上一頁</button>
      </div>
    </>
  )
  //逛圖片的畫面
  const filter = messages.filter(function (messages, typename, cityname) { return messages.type === "行" && messages.city === "桃園" })
  const finalPage = (
    <div>
      <h1>{city}/{type}</h1>
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
  if (page === 0) {
    return <div className="App" >{startPage}</div>
  }
  else if (page === 1) {
    return <div className="App" >{selectcityPage}</div>
  }
  else if (page === 2) {
    return <div className="App" >{selecttypePage}</div>
  }
  else if (page === 3) {
    return <div className="App" >{finalPage}</div>
  }
}

export default App;
