import React, { Component} from 'react'

export default class Footer extends Component {
  constructor () {
    super()
    this.state = {
      name: 'InitializeState'
    }
  }
  render () {
    return (
      <footer>
        {/* <div className="footer-info"> */}
          {/* <span>LEONIDAS surf & sport</span> */}
          {/* <br /> */}
          {/* <div className="left"> */}
            <ul id="footer-links">
              <li><a href="#">Store Locator</a></li>
              <li id="tou"><a href="#">Contact</a></li>
              <li><a href="#">Size Chart</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          {/* </div> */}
          {/* <div className="right"> */}
            <ul id="social">
              <li><a href="#">Subscribe to our newsletter</a></li>
              <li><a href="#"><img src="../img/icons/instagram.png" /></a></li>
              <li><a href="#"><img src="../img/icons/twitter.png" /></a></li>
              <li id="tou"><a href="#"><img src="../img/icons/facebook.png" /></a></li>
            </ul>
          {/* </div> */}
        {/* </div> */}
      </footer>)
  }
}
