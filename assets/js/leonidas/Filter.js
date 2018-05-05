import React, { Component } from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'InitializeState'
    }
    this.brands = this.brands.bind(this)
    this.itemTypes = this.itemTypes.bind(this)
  }

  componentWillMount(){
    this.props.populateAction()
  }
  // adds data to the Brand filter
  brands() {
    if(this.props.globalState.populateFormsData.brands != undefined) {
      var { brands } = this.props.globalState.populateFormsData
      return brands.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  // adds data to the Types filter option in the left hand column
  itemTypes() {
    if(this.props.globalState.populateFormsData.itemTypes != undefined) {
      var { itemTypes } = this.props.globalState.populateFormsData
      return itemTypes.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  // LEFT HAND COLUMN WITH FILTER OPTIONS
  render () {
    return (
    <section id="filter">
      <div className="inside">
        <h4>OPTIONS</h4>

        <label htmlFor="brand">BRAND</label>
        <select name="brand" className="filters brand" onChange={this.props.change}>
          <option value="All">All</option>
          {this.brands()}
        </select>

        <label htmlFor="brand">TYPE</label>
        <select name="itemType" className="filters itemType" onChange={this.props.change}>
          <option value="All">All</option>
          {this.itemTypes()}
        </select>

        <div className="filters price">
          <span className="title">PRICE</span>
          <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
          <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
        </div>

      </div>
    </section>
    )
  }
}
