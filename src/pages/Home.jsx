import React from 'react'
import Banner from '../components/homeComponents/Banner'
import InfoShiping from '../components/homeComponents/InfoShiping'
import Fetured from '../components/homeComponents/Fetured'
import SectionDivider from '../components/common/SectionDivider'
import TopCategory from '../components/homeComponents/TopCategory'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoShiping></InfoShiping>
      <Fetured></Fetured>
      <SectionDivider/>
      <TopCategory/>
      <SectionDivider/>
    </div>
  )
}

export default Home