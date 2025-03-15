import React from 'react'
import Banner from '../components/homeComponents/Banner'
import InfoShiping from '../components/homeComponents/InfoShiping'
import Fetured from '../components/homeComponents/Fetured'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoShiping></InfoShiping>
      <Fetured></Fetured>
    </div>
  )
}

export default Home