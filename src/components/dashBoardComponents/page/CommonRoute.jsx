import React from 'react'
import banner from '../../../assets/images/welcome.jpg'
import { Helmet } from 'react-helmet'

const CommonRoute = () => {
  return (
    <div>
      <Helmet>
        <title>Welcome! </title>
      </Helmet>
        <div className="container mx-auto ">
            <img src={banner} alt="" className="max-h-[100vh]" />
        </div>
    </div>
  )
}

export default CommonRoute