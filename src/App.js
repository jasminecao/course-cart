import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import Home from './components/Home'
import Checkout from './components/Checkout.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const mapStateToProps = state => {
  return state
}

const App = ( state ) => {
  const cartList = state.cartList;
  const numItems = state.numItems;

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/checkout" render={() => <Checkout cartList={cartList} numItems={numItems} />} />
      </Switch>
    </Router>
  );
  }

export default connect(mapStateToProps)(App);