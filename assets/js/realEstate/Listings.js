import React, { Component} from 'react'

export default class Header extends Component {
  //The constructor for a React component is called before it is mounted. If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
  constructor () {
    //When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    super()
    //The constructor is the right place to initialize state. To do so, just assign an object to this.state; don’t try to call setState() from the constructor.
    this.state = {
      name: 'InitializesState'
    }
    //The constructor is also often used to bind event handlers to the class instance.
    this.loopListings = this.loopListings.bind(this)
  }

  loopListings () {
    //pulls in all the data from listingsData and assigns it to this.props
    var {listingsData} = this.props
    //if user searches for city that doesn't exist, this notification is displayed
    if(listingsData == undefined || listingsData.length == 0) {
      return "Sorry your filter did not match any listing"
    }

    //HERE WE ADD THE HOUSE INFO BOXES AND THE TWO VIEW TYPES
    return listingsData.map((listing, index) => {
      // THIS IS THE BOX VIEW OPTION
      if(this.props.globalState.view == 'box') {
        return (<div className="col-md-3" key={index}>
          <div className="listing">
            <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"> </div>
                </div>
                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Nina Smith</span>
                    <span className="post-date">05/05/2017</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa fa-square-o" aria-hidden="true"></i>
                      <span>{listing.floorSpace} ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"></i>
                      <span>{listing.rooms} bedrooms</span>
                    </div>
                  </div>
                  <div className="view-btn">
                    View Listing
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> {listing.city}, {listing.state} </span>
            </div>
          </div>
        </div>)
      } else {
        // THIS IS LONG VIEW OPTION
        return (<div className="col-md-12 col-lg-6" key={index}>
          <div className="listing">
            <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"> </div>
                </div>
                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Nina Smith</span>
                    <span className="post-date">05/05/2017</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa fa-square-o" aria-hidden="true"></i>
                      <span>{listing.floorSpace} ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"></i>
                      <span>{listing.rooms} bedrooms</span>
                    </div>
                  </div>
                  <div className="view-btn">
                    View Listing
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> {listing.city}, {listing.state} </span>
            </div>
          </div>
        </div>)
      }
    })
  }

  render () {
    return (<section id="listings">
    <section className="search-area">
      <input type="text" name="search" onChange={this.props.change} />
    </section>
    {/* SORTING OPTIONS */}
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
    <section id="pagination">
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
    </section>

  </section>)
  }
}
