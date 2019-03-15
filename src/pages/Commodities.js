import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import CommoditiesCards from '../components/CommoditiesCards'
import Footer from '../components/Footer'

class Commodities extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <CommoditiesCards />
        <Footer />
      </div>
    )
  }
}

export default Commodities
