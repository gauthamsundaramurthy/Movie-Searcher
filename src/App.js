import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import DashBoard from './components/DashBoard/DashBoard'
import './App.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={DashBoard} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
