import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Casey'
    }
  }
  render () {
    return (<header>

      <div className="logo">
        <img src="/img/home-icon.png" />
      </div>

      <div className="title">
        <span>COZY HOME</span>
      </div>

      <nav>
        <a href="#">Buy</a>
        <a href="#">Rent</a>
        <a href="#">Sell</a>
        <a href="#">Mortgage</a>
        <a href="#" className="register-btn">Register</a>
        <a href="#" className="register-btn">Sign In</a>
      </nav>

      <div className="top-img">
        <img src="/img/homes1.jpg" className="city" alt="several apartment buildings"/>
      </div>

      </header>)
  }
}
