import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

import Manger from './Common/Manger';
import Home from './Common/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShopCart from './Common/ShopCart';
import HomeIndex from './Common/HomeIndex';
import TableData from './Common/TableData';
// import Manger from './Common/Manger';


function App() {

  return (
    <div className="App1">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Hello name="person"/> */}
      {/* <Parest/> */}
      {/* <TangGiam/> */}
      {/* <Login/> */}
      {/* <Eat/> */}
      {/* <Test/> */}

      {/* <Test/> */}
      {/* <Home /> */}
      <Router>
        <div>
          <ul class="nav">
            <li class="nav-item">
              <Link class="nav-link active" to="/home">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/manager">Manager</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/ShopCart">ShopCart</Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" to="/HomeIndex">Index</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/TableData">Data Table</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/manager" component={Manger} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/ShopCart" component={ShopCart} />
          <Route exact path="/HomeIndex" component={HomeIndex} />
          <Route exact path="/TableData" component={TableData} />

        </div>
      </Router>
    </div>
  );
}

export default App;
