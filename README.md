# Web Programming - Final Project Report
# 題目 : 都市旅行手札(GROUP 24)
#### Explore Six Municipality Of Taiwan With Our Application!
## Links
* [Demo Video](https://www.youtube.com/watch?fbclid=IwAR2FDx6Op8PasfRtinzsz8aGrjLn6RqEnWTvIkcA1XOujpTlnt-YBOglrgs&v=Pe1jGced9VY&feature=youtu.be)
* [Explore Six Municipality Of Taiwan](https://dogsc729.github.io/1091ntueewebprog_group24/)
* [Github](https://github.com/dogsc729/1091ntueewebprog_group24)

### Introduction
    能讓想去六個首都（台北、新北、桃園、台中、台南、高雄）的學生利用我們這個網站
    能快速找到想吃、想玩、想住、
    甚至是想去哪裡打球都能找得到，省去了一點需要花的時間，
    讓臨時起意的學生都能方便行事！
    使用/操作方式：
    首先先選擇自己想要去的首都，接下來再點選自己所欲前往首都的行為模式（食住行球場，
    另外也可以配合googlemap來規劃自己的路線。
#### Usage
### Local
* Overall

    - simply run `yarn` to install packages.

* Backend

    - run `yarn server` under the main directory 

* Frontend

    - run `yarn start` under the main directory

* Get Started

    - Press `Start Your Trip!`
    ![](https://i.imgur.com/d225d07.png)

* Choose a city

    - Select `台北` or `新北` or `桃園` or `台中` or `台南` or `高雄`
    ![](https://i.imgur.com/tHDxCpv.png)

* Choose a type

    - Select `食` or `住` or `景點` or `球場`
    ![](https://i.imgur.com/LLKsV5I.png)

* Get informations you need!

    ![](https://i.imgur.com/BlNSy8Q.png)

## 相關技術
* Frontend
    - react
    - axios
    - antd
    - googlemap API
* Backend
    - expresss
    - babel
    - mongoose
    - http
    - cors
    - dotenv
    - nodemon

* Database
    - mongodb atlas
## Contribution
* 林書宇
    * Frontend
        * Embed googlemap API
        * Basic structure of pages
    * Backend
        * Database Schema construction
        * Connect database to server
        * axios design
* 連威翔
    * Frontend
        * pages switching management
        * web layouts
    * Backend
        * Save data to database
        * 資料收集
* 林昱宏
    * provide idea
    * 資料收集

## 心得
* 林書宇
    ```
    這次開發這個專案的時間有點緊湊，我覺得非常可惜，
    理想上是做出很酷的作品，因此跟預期落差有點大，
    不過在這段時間中我也很快整合了前後端的技術，
    資料的傳輸模式也越來越清晰。希望在這次的專題之後，
    我更能夠掌握進行一個專案的流程以及相關技術，做出
    更完善的專案，感謝老師幫我開了一扇網路服務的大門，
    日後必會精進。
    ```

* 連威翔
    ```
    平常作業和hackathon頁面的html和css都不用我們自己設計，
    期末專題第一次自己設計畫面，
    學習到如何設計排版出自己想要的頁面，
    也把整個學期所學的整合在一個project裡，
    最後做出一個網路服務，很有成就感
    ```
* 林昱宏
    ```
    開發一個期末專題真的滿不容易的，即便功能齊全，一個吸引人的網頁，
    在設計上面往往也佔了很大一部分，
    這次結合球場主要是因為滿喜歡打球的，可以讓在出去玩之餘也能運動。
    這次找的資料不夠多，希望之後可以再搜集到更多資料推薦給大家
    ```
## Reference
*   GoogleMap API
    ```
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
    ```





