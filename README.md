# 1091ntueewebprog_group24
#### Explore Six Municipality Of Taiwan With Our Application!
## Links
* [Demo Video](https://youtu.be/hy1TVrDzkAU)
* [Explore Six Municipality Of Taiwan](https://dogsc729.github.io/1091ntueewebprog_group24/)
* [Github](https://github.com/dogsc729/1091ntueewebprog_group24)

## Introduction

## Usage
### Local
```bash=
git clone https://github.com/jill880829/Skrik
```
* Overall

    - simply run `yarn` to install packages.

* Backend

    - run `yarn server` under the main directory 

* Frontend
    - run `yarn start` under the main directory
## Dependency
### Backend
```json=
"body-parser": "^1.19.0",             <!-- deal with http request body -->
"cookie-parser": "~1.4.4",            <!-- parse cookie  -->
"crypto-js": "^4.0.0",        	       <!-- generate hash and base64 -->
"express": "~4.16.1",         	       <!-- deal with express -->
"express-session": "^1.17.1", 	       <!-- deal with session -->
"fstream": "^1.0.12",                 <!-- zip files for download -->
"http": "^0.0.1-security",            <!-- create http server -->
"http-errors": "~1.6.3",
"mongoose": "^5.11.8",                <!-- package to access mongodb -->
"morgan": "~1.9.1",                   <!-- backend server's log middleware-->
"passport": "^0.4.1",                 <!-- login logout strategy -->
"passport-github2": "^0.1.12",        <!-- github oAuth -->
"passport-local": "^1.0.0",           <!-- local login strategy -->
"connect-redis": "^5.0.0",            <!-- construct redis channel -->
"redis": "^3.0.2",                    <!-- construct redis channel -->
"ws": "^7.4.1"                        <!-- websocket -->
```
### Frontend
```json=
"@material-ui/core": "^4.11.2",          <!-- login icons -->
"@material-ui/icons": "^4.11.2",         <!-- login icons -->
"antd": "^4.10.2",                       <!-- alert and infos -->
"codemirror": "^5.58.3",                 <!-- editor text area-->
"diff": "^5.0.0",                        <!-- detect duplicate codes when -->
                                         <!-- transfering to backend      -->
"material-ui-password-field": "^2.1.2",  <!-- login blanks -->
"nodemon": "^2.0.7",                           
"react": "^17.0.1",                            
"react-codemirror2": "^7.2.1",           <!-- editor text area-->
"react-dom": "^17.0.1",
"react-icons": "4.1.0",                  <!-- icons -->
"react-router-dom": "^5.2.0",            <!-- router of pages -->
"react-scripts": "4.0.1",
"react-select": "^3.1.1",
"slice-lines": "^1.0.3",                 <!-- remove duplicate codes when --> 
                                         <!-- transfering to backend      -->
"styled-components": "5.1.0",            <!-- css tools-->
"web-vitals": "^0.2.4"
```
## Contribution
* 翁瑋襄 (jill880829) leader
    * Frontend pages
        * Editor (Text)
    * Communication
        * Broadcast
        * Deal with buffers of textarea and send to backend 
    * Backend
        * DB Management
        * Backend APIs
        * Save data to DB
* 鄭謹譯 (chinyi0523)
    * Frontend pages
        * Profile
        * Editor (Hybrid)
        * Structure
    * Communication
        * Broadcast
        * Fetch data from backend and Page switching
    * Backend
        * Save data to DB
* 呂承樺 (anitalu724)
    * CSS design (All)
    * Frontend pages
        * Login/Register
        * Profile
        * Project/Modal
        * Editor (Cursor)
    * Router




