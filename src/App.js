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
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Key = "AIzaSyBT92vSGssAdIl7g-JDd3joI_0n9z_QN1M"
// Map

function App() {
  const [mylat, setmylat] = useState(0)
  const [mylng, setmylng] = useState(0)
  const [myzoom, setmyzoom] = useState(10)
  const lats = [0, 25.0466852, 25.046146, 25.005998, 24.1515062, 22.995732, 22.6508225]
  const lngs = [0, 121.5419117, 121.5282649, 121.3105929, 120.6827387, 120.2347414, 120.3146344]
  const zooms = [0, 13, 13, 12, 12.5, 13.5, 13.96]

  class SimpleMap extends Component {
    static defaultProps = {
      center: {
        lat: mylat,
        lng: mylng
      },
      zoom: myzoom
    };

    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '1000%', position: "relative" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: Key }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={mylat}
              lng={mylng}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
  //const [start, setstart] = useState(false)
  //const [selectcity, setselectcity] = useState(false)//選擇城市與否
  //const [selecttype, setselecttype] = useState(false)//選擇種類與否
  const [typename, settype] = useState("default")//種類為何？
  const [cityname, setcity] = useState("default")
  const [page, setpage] = useState(0)
  //const [typename, settypename] = useState("default")
  //const [cityname, setcityname] = useState("default")
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
        <select onChange={async (e) => {
          await setpage(2);
          setcity(e.target.options[e.target.options.selectedIndex].value);
          setmylat(lats[e.target.options.selectedIndex]);
          setmylng(lngs[e.target.options.selectedIndex]);
          setmyzoom(zooms[e.target.options.selectedIndex])
        }}>
          <option value="select">select a city</option>
          <option value="台北">台北</option>
          <option value="新北">新北</option>
          <option value="桃園">桃園</option>
          <option value="台中">台中</option>
          <option value="台南">台南</option>
          <option value="高雄">高雄</option>
        </select>
        <button onClick={async () => { await setpage(0) }}>回到上一頁</button>
      </div>
      <div className="city">
        <div className="cityname">
          <h1>台北市</h1>
          <img src={taipei} alt="" />
        </div>
        <div className="cityname">
          <h1>台南市</h1>
          <img src={tainan} alt="" />
        </div>
        <div className="cityname">
          <h1>桃園市</h1>
          <img src={taoyuan} alt="" />
        </div>
      </div>
      <div className="city">
        <div className="cityname">
          <h1>台中市</h1>
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
        <h1>{cityname}</h1>
        <button onClick={async () => { await setpage(1) }}>回到上一頁</button>
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
            <button type="button" onClick={async () => { await setpage(3); settype("行"); }}><img className="type" src={tour} alt="" /></button>
          </div>
          <div className="typename">
            <h1>籃球場</h1>
            <button type="button" onClick={async () => { await setpage(3); settype("球場"); }}><img className="type" src={basket} alt="" /></button>
          </div>
        </div>

      </div>
    </>
  )
  //逛圖片的畫面
  const filter = messages.filter(function (messages) { return messages.type === typename && messages.city === cityname })
  const finalPage = (
    <div>
      <h1>{cityname}/{typename}</h1>
      <button onClick={async () => { await setpage(2) }}>回到上一頁</button>
      <p>推薦清單 : </p>
      <div className="App-messages">
        {
          filter.map(({ name, type, city, reference }, i) => (
            <p className="App-message" key={i}>
              <Tag color="blue">{name}</Tag> <Tag color="red">{type}</Tag> <Tag color="red">{city}</Tag> {reference}
            </p>
          ))
        }
      </div>
      <div className="GoogleMap">
        <SimpleMap />
      </div>
    </div >
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
