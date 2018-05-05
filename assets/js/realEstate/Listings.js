import React, { Component} from 'react'

export default class Header extends Component {
  // The constructor for a React component is called before it is mounted. If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
  constructor () {
    // When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    super()
    // The constructor is the right place to initialize state. To do so, just assign an object to this.state; don’t try to call setState() from the constructor.
    this.state = {
      name: 'InitializeState'
    }
    // The constructor is also often used to bind event handlers to the class instance.
    this.loopListings = this.loopListings.bind(this)
  }

  loopListings () {
    // Pulls in all the data from listingsData and assigns it to this.props
    var {listingsData} = this.props
    // If user searches for city that doesn't exist, this notification is displayed
    if(listingsData == undefined || listingsData.length == 0) {
      return "Sorry, your filter did not match any listing."
    }

    //HOUSE INFO BOXES AND THE TWO VIEW TYPES
    return listingsData.map((listing, index) => {
      // THIS IS THE BOX VIEW OPTION
      if(this.props.globalState.view == 'box') {
        return (<div className="col-md-3" key={index}>
          <div className="listing">
            <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
              <div className="details">
                <div className="col-md-9">
                  <div className="view-btn">
                    View Item
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="location"> {listing.city} </span>
              <span className="price">${listing.price}</span>
            </div>
          </div>
        </div>)
      } else {
        // THIS IS LONG VIEW OPTION
        return (<div className="col-md-12 col-lg-6" key={index}>
          <div className="listing">
            <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
              <div className="details">
                <div className="col-md-9">
                  <div className="view-btn">
                    View Item
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location"> {listing.city} </span>
            </div>
          </div>
        </div>)
      }
    })
  }

  render () {
    return (<section id="listings">

    {/* Search bar */}
    <section className="search-area">
      <input type="text" name="search" placeholder="Search" onChange={this.props.change} />
    </section>

    {/* Sorting options */}
    <section className="sortby-area">
      <div className="results">{this.props.globalState.filteredData.length} results found</div>
      <div className="sort-options">
        <select name="sortby" className="sortby" onChange={this.props.change}>
          <option value="price-dsc">Lowest Price</option>
          <option value="price-asc">Highest Price</option>
        </select>
        <div className="view">
          <i className="fa fa-th-list" aria-hidden="true" onClick={this.props.changeView.bind(null, "long")}></i>
          <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, "box")}></i>
        </div>
      </div>

    </section>

{/* THIS DISPLAYS THE LISTING BOXES */}
    <section className="listings-results">
      <div className="row">
        {this.loopListings()}
      </div>
    </section>

    {/* PAGINATION */}
    {/* <section id="pagination">
    <div className="row">
      <ul className="pages">
        <li>Prev</li>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>Next</li>
      </ul>
      </div>
    </section> */}

  </section>)
  }
}
