import React, { Component } from 'react'

//images

import Map from './Map.js'

export class Sites extends Component {

  //Place the body inside of the 'bodyDiv'

  render () {
    return (
      <div >
       
    <div className='section' id='recent-projects' >
          <div className='container'>
            <div className='row'>
            <Map />
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default Sites