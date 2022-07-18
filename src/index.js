import React from 'react';
import ReactDOM from 'react-dom';
import css from './styles/main.scss';
import App from './component/App';
import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const ws = new WebSocket("wss://ws.bitmex.com/realtime?subscribe=orderBookL2:XBTUSD");


const apiCall = {
    
};

ws.onopen = (event) => {
    ws.send(JSON.stringify(apiCall));
};

ws.onmessage = function (event) {
const json =JSON.parse(event.data);
 if(json.action==="partial"){
debugger;
 }else{

 }
 console.log(json)
};


// import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';

// const Nav=()=>{
//    return  <nav>
//         <NavLink exact activeClassName="activeClass" to="/">Home</NavLink>|
//         <NavLink exact activeClassName="activeClass" to="/contact">Contact</NavLink>|
//         <NavLink exact activeClassName="activeClass" to="/about">About</NavLink>|
//     </nav>
// }
// const home=()=>{
//     return <di>HOME</di>
// }

// const about=()=>{
//     return <di>ABOUT</di>
// }

// const contact=()=>{
//     return <di>CONTACT</di>
// }

// const notFound=()=>{
//     return <di>404</di>
// }

// const router=(
//     <BrowserRouter>
//     <Nav></Nav>
//         <Switch>
//     <Route exact path="/" component={home}></Route>
//     <Route exact path="/contact" component={contact}></Route>
//     <Route exact path="/about" component={about}></Route>
//     <Route exact component={notFound}></Route>
//         </Switch>
//     </BrowserRouter>
// )
ReactDOM.render(<App></App>,document.getElementById('root'));