import React, { Component } from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'InitializeState'
    }
    this.cities = this.cities.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    // this.bedrooms = this.bedrooms.bind(this)
  }

  componentWillMount(){
    this.props.populateAction()
  }
  // adds data to the Brand filter
  cities() {
    if(this.props.globalState.populateFormsData.cities != undefined) {
      var { cities } = this.props.globalState.populateFormsData
      return cities.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  // adds data to the Types filter option in the left hand column
  homeTypes() {
    if(this.props.globalState.populateFormsData.homeTypes != undefined) {
      var { homeTypes } = this.props.globalState.populateFormsData
      return homeTypes.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  // adds data to the Men/Womens/Kids filter option in the left hand column
  // bedrooms() {
  //   if(this.props.globalState.populateFormsData.bedrooms != undefined) {
  //     var { bedrooms } = this.props.globalState.populateFormsData
  //     return bedrooms.map((item) => {
  //       return(
  //         <option key={item} value={item}>{item}</option>
  //       )
  //     })
  //   }
  // }

  // LEFT HAND COLUMN WITH FILTER OPTIONS
  render () {
    return (
    <section id="filter">
      <div className="inside">
        <h4>OPTIONS</h4>

        <label htmlFor="city">BRAND</label>
        <select name="city" className="filters city" onChange={this.props.change}>
          <option value="All">All</option>
          {this.cities()}
        </select>

        <label htmlFor="city">TYPE</label>
        <select name="homeType" className="filters homeType" onChange={this.props.change}>
          <option value="All">All</option>
          {this.homeTypes()}
        </select>

        {/* <label htmlFor="city">MENS / WOMENS / KIDS</label>
        <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
          <option value="All">All</option>
          {this.bedrooms()}
        </select> */}

        <div className="filters price">
          <span className="title">PRICE</span>
          <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
          <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
        </div>

        {/* <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min_floor_space" className="min-floor-space"  onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
          <input type="text" name="max_floor_space" className="max-floor-space"  onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
        </div> */}

        {/* <div className="filters extras">
          <span className="title">
            Size
          </span>

          <label htmlFor="extras">
            <span>SM</span>
            <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change}/>
          </label>

          <label htmlFor="extras">
            <span>MD</span>
            <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change} />
          </label>

          <label htmlFor="extras">
            <span>LG</span>
            <input name="finished_basement" value="finished basement" type="checkbox"  onChange={this.props.change} />
          </label>

          <label htmlFor="extras">
            <span>XL</span>
            <input name="gym" value="gym" type="checkbox" onChange={this.props.change} />
          </label>
        </div> */}

      </div>
    </section>
    )
  }
}
