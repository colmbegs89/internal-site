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
            <h1>Pure CSS Ticker (No-JS)</h1>
<h2>A smooth horizontal news like ticker using CSS transform on infinite loop</h2>

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

<p>So, annoyingly, most JS solutions don't do horizontal tickers on an infinite loop, nor do they render all that smoothly.</p>
<p>The difficulty with CSS was getting the animation to transform the entire items 100% yet include an offset that was only the width of the browser (and not the items full width).</p>
<p>Setting the start of the animation to anything less than zero (e.g. -100%) is unreliable as it is based on the items width, and may not offset the full width of the browser or creates too large an offset</p>
<p>Padding left on the wrapper allows us the correct initial offset, but you still get a 'jump' as it then loops too soon. (The full text does not travel off-screen)</p>
<p>This is where adding display:inline-block to the item parent, where the natural behaviour of the element exists as inline, gives an opportunity to add padding-right 100% here. The padding is taken from the parent (as its treated as inline) which usefully is the wrapper width.</p>
<p><b>Magically*</b> we now have perfect 100% offset, a true 100% translate (width of items) and enough padding in the element to ensure all items leave the screen before it repeats! (width of browser)</p>
<p>*Why this works: The inside of an inline-block is formatted as a block box, and the element itself is formatted as an atomic inline-level box. <br/>Uses `box-sizing: content-box`<br/>
Padding is calculated on the width of the containing box.<br/>
So as both the ticker and the items are formatted as nested inline, the padding must be calculated by the ticker wrap.</p>

<p>Ticker content c/o <a href="http://hipsum.co/">Hipsum.co</a></p>
            </div>
      </div>
    );
  }
}
export default App;