import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';
import $ from "jquery";

class App extends Component {
  constructor (props) {
    super(props)

  this.state = {
    response: '',
    mileage: {
      origin: '',
      destination: '',
      returnTrip: false
    } 
  };
  this.handleAddressChange = this.handleAddressChange.bind(this)
  this.handleAddressSubmit = this.handleAddressSubmit.bind(this)
}
  handleAddressChange (event) {
    console.log(this.state.mileage.returnTrip )
    this.setState({
      mileage: {
        origin: event.target.name === 'originData' ? event.target.value : this.state.mileage.origin,
        destination: event.target.name === 'destinationData' ? event.target.value : this.state.mileage.destination,
        returnTrip: event.target.name === 'returnTrip' ? !this.state.mileage.returnTrip : this.state.mileage.returnTrip,
      }
    })

  }
  

  handleAddressSubmit (event) {
    event.preventDefault()
    let that = this
    $(document).ready(function(){
      var user,pass;
        user=$("#origin").val();
        pass=$("#destination").val();
        // $.post("http://localhost:5000/api/login",{user: user,password: pass}, function(data){
        // $.get("http://localhost:5000/api/getMileage", {originLocation: user,destinationLocation: pass}, function(data){
        // $.get("http://localhost:5000/colm.begley/getinfo", function(data){
        $.post("http://localhost:5000/api/getMileage2", {originLocation: user,destinationLocation: pass}, function(data){
          if(data)
            {
              that.setState({
                response: that.state.mileage.returnTrip ? data + ' doubled' : data
              })
               console.log(data)
            }
        });
      });
    }
  render() {
    return (     
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Milage Calculator</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
         <form onSubmit={this.handleAddressSubmit} name='addressForm'>
              <h5 id='mileageTitle'><b>Enter Your Journey Details</b></h5>
              <div className='row'>
                <label id='streetText' htmlFor='origin' className='col-md-3'>Journey Starting Point:</label>
                <br/>
                <input
                  size={50}
                  className='col-md-9'
                  name='originData'
                  id='origin'
                  type='text'
                  placeholder='Please enter your Starting Location'
                  required
                  value={this.state.mileage.origin}
                  onChange={this.handleAddressChange} />
              </div>
              <br/>

              <div className='row'>
                <label id='destinationText' htmlFor='destination' className='col-md-3'>Journey Destination:</label>
                <br/>
                <input
                  size={35}
                  id='destination'
                  className='col-md-4'
                  name='destinationData'
                  type='text'
                  placeholder='Please enter your Destination'
                  required
                  value={this.state.mileage.destination}
                  onChange={this.handleAddressChange} />
              </div>
              <br/>
              <label id='returnText' htmlFor='returning' className='col-md-3'>Return Trip:</label>

              <input
                name="returnTrip"
                type="checkbox"
                id="returning"
                checked={this.state.mileage.return}
                onChange={this.handleAddressChange} />
              <br />
              <br/>

              <div className='row'>
                <input id='submit' type='submit' className='btn btn-primary' value='Check Address' />
              </div>
            </form>


            <div>

              <div className="ticker-wrap">
              <div className="ticker">
                <div className="tickerItem">--Letterpress chambray brunch.</div>
                <div className="tickerItem">--Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.</div>
                <div className="tickerItem">--Ugh PBR&B kale chips Echo Park.</div>
                <div className="tickerItem">--Gluten-free mumblecore chambray mixtape food truck. </div>
                <div className="tickerItem">--Letterpress chambray brunch.</div>
                <div className="tickerItem">--Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.</div>
                <div className="tickerItem">--Ugh PBR&B kale chips Echo Park.</div>
                <div className="tickerItem">--Gluten-free mumblecore chambray mixtape food truck. </div>
                <div className="tickerItem">--Authentic bitters seitan pug single-origin coffee whatever.</div>-->
              </div>
              </div>

            </div>
      </div>
    );
  }
}
export default App;