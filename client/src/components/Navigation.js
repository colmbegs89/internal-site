import React, { Component } from 'react'

export class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showNav: false
    }
  }

  toggleSidenav() {
    var css = (this.state.showNav === "hidden") ? "show" : "hidden";
    this.setState({"showNav":css});
  }

  render () {

    return (

      <div className="wrapper">
      <nav id="sidebar" className={this.state.showNav}>
        <div className="sidebar-header">
        </div>
        <ul className="list-unstyled components">
          <li><a href="/">Home</a></li>
          <li>
            <a href="/travel">Travel & Expenses</a>
          </li>
          {/* <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li> */}
        </ul>
      </nav>
      <div id="content">
        {/* <nav className="navbar navbar-default"> */}
          <div className="container-fluid">
            {/* <div className="navbar-header"> */}
              <a ref="btn" align='left' onClick={this.toggleSidenav.bind(this)} href="#" className="btn-menu show-on-small">
              <i className="glyphicon glyphicon-align-left"></i>
              <span>&nbsp;Toggle Navigation</span>
              </a>
            </div>
          {/* </div> */}
        {/* </nav> */}
        {/* <div className=" appBody row"> */}
            {this.props.content}
        {/* </div> */}
      </div>
    </div>
       
    )
  }
}

export default Navigation