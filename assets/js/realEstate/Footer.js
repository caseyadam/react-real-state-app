import React, { Component} from 'react'

export default class Footer extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Casey'
    }
  }
  render () {
    return (<footer>

      <div className="footer-info">
        <span>My Cozy Home</span>
        <br />
        <ul>
          <li><a href="#">Equal Housing Opportunity</a></li>
          <li id="tou"><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

    </footer>)
  }
}
