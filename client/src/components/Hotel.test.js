import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Hotel from './Hotel.js'

import hotel1 from '../img/travel-lodge.jpg'

describe('Hotel', () => {
  const hotelData = [
    {
      title:'Derry City Travelodge Hotel',
      body: "The Derry Travelodge is centrally located in  the heart of the city with views of the River Foyle. Our hotel is situated on  Strand Street which is popular for nightlife, restaurants, shopping and minutes’  walk from Derry City’s many attractions",
      telephone:'+44 (0)870 1 911 733', 
      email:'derry@travelodge.ie',
      web:'http://www.travelodge.ie/hotels/225/Derry-hotel',
      image: hotel1
    }
  ]
  it('Hotel renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Hotel hotelInformation={hotelData} />, div)
  })

  it('has a defined structure', () => {
    const wrapper = shallow(<Hotel hotelInformation={hotelData}/>)
    expect(wrapper.find('#hotels')).to.have.length(1)
    expect(wrapper.find('.row')).to.have.length(1)
  })
})
