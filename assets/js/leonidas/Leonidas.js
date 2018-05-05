import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'
import Footer from './Footer.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'InitializeState',
      listingsData,
      brand: 'All',
      itemType: 'All',
      min_price: 0,
      max_price: 100,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  componentWillMount(){
    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })
    this.setState({
      listingsData
    })
  }

  change(event){
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    }, () => {
      this.filteredData()
    })
  }

  changeView(viewName){
    this.setState({
      view: viewName
    })
  }

  filteredData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price
      && item.price <= this.state.max_price
    })

    if(this.state.brand != "All") {
      newData = newData.filter((item) => {
        return item.brand == this.state.brand
      })
    }

    if(this.state.itemType != "All") {
      newData = newData.filter((item) => {
        return item.itemType == this.state.itemType
      })
    }

    if(this.state.sortby == 'price-dsc') {
      newData = newData.sort((a,b) => {
        return a.price - b.price
      })
    }

    if(this.state.sortby == 'price-asc') {
      newData = newData.sort((a,b) => {
        return b.price - a.price
      })
    }
    //Search by brand
    if(this.state.search != ''){
      newData = newData.filter((item) => {
        var brand = item.brand.toLowerCase()
        var searchText = this.state.search.toLowerCase()
        var n = brand.match(searchText)

        if(n != null) {
          return true
        }
      })
    }

    this.setState({
      filteredData: newData
    })
  }
  populateForms() {
    // brand
    var brands = this.state.listingsData.map((item) => {
      return item.brand
    })
    brands = new Set(brands)
    brands = [...brands]

    brands = brands.sort()

    // itemType
    var itemTypes = this.state.listingsData.map((item) => {
      return item.itemType
    })
    itemTypes = new Set(itemTypes)
    itemTypes = [...itemTypes]

    itemTypes = itemTypes.sort()

    this.setState({
      populateFormsData: {
        itemTypes,
        brands
      }
    }, () => {
      console.log(this.state)
    })

  }

  render () {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/>
          <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView}/>
        </section>
        <Footer />
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
