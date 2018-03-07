import React from 'react'
import ReactDOM from 'react-dom'
import NotFound from './NotFound'
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('NotFound', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NotFound />, div)
  })

  it('has a defined structure', () => {
    const wrapper = shallow(<NotFound />)

    expect(wrapper.find('.NotFound')).to.have.length(1)
    expect(wrapper.find('.container-fluid')).to.have.length(1)
    expect(wrapper.find('.bodyDiv')).to.have.length(0)
    expect(wrapper.find('.row')).to.have.length(4)
    expect(wrapper.find('footer')).to.have.length(1)
  })
})
