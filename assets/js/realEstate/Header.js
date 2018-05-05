import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'InitializeState'
    }
  }
  render () {
    return (<header>

      <div className="logo">
        <img src="/img/icons/spartan.png" />
      </div>

      <div className="title">
        <span>LEONIDAS surf & sport</span>
      </div>

      <nav>
        <a href="#">Surfing</a>
        <a href="#">Training</a>
        <a href="#">BJJ</a>
        <a href="#">Apparel</a>
        <a href="#">Brands</a>
        <a href="#" className="register-btn">Login</a>
      </nav>

      <div className="top-img">
        <img src="/img/surfBG.jpg" className="city" alt="several apartment buildings"/>
      </div>

      </header>)
  }
}
