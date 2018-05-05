webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  // The constructor for a React component is called before it is mounted. If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
  function Header() {
    _classCallCheck(this, Header);

    // The constructor is the right place to initialize state. To do so, just assign an object to this.state; don’t try to call setState() from the constructor.
    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
    // When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.


    _this.state = {
      name: 'InitializeState'
      // The constructor is also often used to bind event handlers to the class instance.
    };_this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      // Pulls in all the data from listingsData and assigns it to this.props
      var listingsData = this.props.listingsData;
      // If user searches for city that doesn't exist, this notification is displayed

      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry, your filter did not match any listing.";
      }

      //HOUSE INFO BOXES AND THE TWO VIEW TYPES
      return listingsData.map(function (listing, index) {
        // THIS IS THE BOX VIEW OPTION
        if (_this2.props.globalState.view == 'box') {
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Item'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  ' ',
                  listing.city,
                  ' '
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                )
              )
            )
          );
        } else {
          // THIS IS LONG VIEW OPTION
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-6', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Item'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  ' ',
                  listing.city,
                  ' '
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Search', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "long") }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.loopListings()
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '20-34 grand ave',
  city: 'Phalanx',
  state: 'NY',
  rooms: 'Mens',
  price: 65,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-phalanx1-md.jpg'
}, {
  address: '3 universal st',
  city: 'RVCA',
  state: 'FL',
  rooms: 'Mens',
  price: 80,
  floorSpace: 1430,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-rvca1-md.jpg'
}, {
  address: '1 president plaza',
  city: 'Scramble',
  state: 'VA',
  rooms: 'Mens',
  price: 50,
  floorSpace: 2400,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-scramble1-md.jpg'
}, {
  address: '889 beemore st',
  city: 'Reebok',
  state: 'NJ',
  rooms: 'Mens',
  price: 75,
  floorSpace: 1000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-reebok1-md.jpg'
}, {
  address: '43 hollywood blvd',
  city: 'Hayabusa',
  state: 'CA',
  rooms: 'Mens',
  price: 60,
  floorSpace: 3000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-hayabusa1-md.jpg'
}, {
  address: '2 main st',
  city: 'Virus',
  state: 'NY',
  rooms: 'Mens',
  price: 70,
  floorSpace: 2000,
  extras: ['elevator', 'pool'],
  homeType: 'Rashguard',
  image: '/img/mens/m-virus1-md.jpg'
}, {
  address: '123 Fake St',
  city: 'Phalanx',
  state: 'IN',
  rooms: 'Mens',
  price: 65,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-phalanx2-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'RVCA',
  state: 'OO',
  rooms: 'Mens',
  price: 80,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-rvca2-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Virus',
  state: 'OO',
  rooms: 'Mens',
  price: 70,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-virus2-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Billabong',
  state: 'OO',
  rooms: 'Mens',
  price: 65,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-billabong2-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Phalanx',
  state: 'OO',
  rooms: 'Mens',
  price: 60,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-phalanx3-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Billabong',
  state: 'OO',
  rooms: 'Mens',
  price: 60,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-billabong1-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Hayabusa',
  state: 'OO',
  rooms: 'Mens',
  price: 70,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-hayabusa2-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Scramble',
  state: 'OO',
  rooms: 'Mens',
  price: 70,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/mens/m-scramble2-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Reebok',
  state: 'OO',
  rooms: 'Mens',
  price: 75,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Compression Pants',
  image: '/img/mens/m-reebok2-md.jpg'
}, {
  address: '20-34 grand ave',
  city: 'Phalanx',
  state: 'NY',
  rooms: 'Kids',
  price: 55,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/kids/k-phalanx-rashguard-md.png'
}, {
  address: '3 universal st',
  city: 'RVCA',
  state: 'FL',
  rooms: 'Kids',
  price: 50,
  floorSpace: 1430,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/kids/k-rvca-rashguard1-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Billabong',
  state: 'OO',
  rooms: 'Womens',
  price: 60,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Shorts',
  image: '/img/womens/w-billabong-boardshorts1-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Billabong',
  state: 'OO',
  rooms: 'Womens',
  price: 60,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Shorts',
  image: '/img/womens/w-billabong-boardshorts2-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Billabong',
  state: 'OO',
  rooms: 'Womens',
  price: 60,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/womens/w-billabong-rashguard1-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Billabong',
  state: 'OO',
  rooms: 'Womens',
  price: 60,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/womens/w-billabong-rashguard2-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Reebok',
  state: 'OO',
  rooms: 'Womens',
  price: 75,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Shorts',
  image: '/img/womens/w-reebok-short1-md.jpg'
}, {
  address: '456 Warble Ct',
  city: 'Reebok',
  state: 'OO',
  rooms: 'Womens',
  price: 75,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Compression Pants',
  image: '/img/womens/w-reebok-pants1-md.jpg'
}, {
  address: '20-34 grand ave',
  city: 'Phalanx',
  state: 'NY',
  rooms: 'Mens',
  price: 65,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Shorts',
  image: '/img/mens/m-phalanx-shorts1-md.jpg'
}, {
  address: '20-34 grand ave',
  city: 'Phalanx',
  state: 'NY',
  rooms: 'Mens',
  price: 65,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Shorts',
  image: '/img/mens/m-phalanx-shorts2-md.jpg'
}, {
  address: '20-34 grand ave',
  city: 'Phalanx',
  state: 'NY',
  rooms: 'Womens',
  price: 65,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/womens/w-phalanx-rashguard1-md.jpg'
}, {
  address: '20-34 grand ave',
  city: 'Phalanx',
  state: 'NY',
  rooms: 'Womens',
  price: 65,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Rashguard',
  image: '/img/womens/w-phalanx-rashguard2-md.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(99);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(100);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(101);

var _listingsData2 = _interopRequireDefault(_listingsData);

var _Footer = __webpack_require__(98);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'InitializeState',
      listingsData: _listingsData2.default,
      city: 'All',
      homeType: 'All',
      bedrooms: 'All',
      min_price: 0,
      max_price: 100,
      min_floor_space: 0,
      max_floor_space: 50000,
      elavator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: _listingsData2.default,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });
      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        _this2.filteredData();
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space;
        // && item.rooms >= this.state.bedrooms
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }
      //EXPERIMENT
      // if(this.state.rooms != "All") {
      //   newData = newData.filter((item) => {
      //     return item.rooms == this.state.rooms
      //   })
      // }

      if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }
      //Search by brand
      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      // city
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));

      cities = cities.sort();

      // homeType
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));

      homeTypes = homeTypes.sort();

      // bedrooms
      // var bedrooms = this.state.listingsData.map((item) => {
      //   return item.rooms
      // })
      // bedrooms = new Set(bedrooms)
      // bedrooms = [...bedrooms]
      //
      // bedrooms = bedrooms.sort()

      this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          // bedrooms,
          cities: cities
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView })
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'InitializeState'
    };
    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    // this.bedrooms = this.bedrooms.bind(this)
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
    // adds data to the Brand filter

  }, {
    key: 'cities',
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;

        return cities.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
    // adds data to the Types filter option in the left hand column

  }, {
    key: 'homeTypes',
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;

        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
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

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'OPTIONS'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'BRAND'
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: 'filters city', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            this.cities()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'TYPE'
          ),
          _react2.default.createElement(
            'select',
            { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'PRICE'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.globalState.max_price })
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

    _this.state = {
      name: 'InitializeState'
    };
    return _this;
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          'ul',
          { id: 'footer-links' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Store Locator'
            )
          ),
          _react2.default.createElement(
            'li',
            { id: 'tou' },
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Contact'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Size Chart'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'FAQ'
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { id: 'social' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Subscribe to our newsletter'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              _react2.default.createElement('img', { src: '../img/icons/instagram.png' })
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              _react2.default.createElement('img', { src: '../img/icons/twitter.png' })
            )
          ),
          _react2.default.createElement(
            'li',
            { id: 'tou' },
            _react2.default.createElement(
              'a',
              { href: '#' },
              _react2.default.createElement('img', { src: '../img/icons/facebook.png' })
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'InitializeState'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          _react2.default.createElement('img', { src: '/img/icons/spartan.png' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'title' },
          _react2.default.createElement(
            'span',
            null,
            'LEONIDAS surf & sport'
          )
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Surfing'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Training'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'BJJ'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Apparel'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Brands'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Login'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'top-img' },
          _react2.default.createElement('img', { src: '/img/surfBG.jpg', className: 'city', alt: 'several apartment buildings' })
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[103]);