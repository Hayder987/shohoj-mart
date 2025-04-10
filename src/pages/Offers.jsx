import React, { useEffect } from "react";
import PageMargin from "../components/common/PageMargin";
import offer1 from '../../src/assets/images/banner4.webp'
import { Link } from "react-router";

const Offers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <div className="container mx-auto">
    <PageMargin/>
    <div className="p-6">
      <Link to={'/collection'}><img src={offer1} alt="" className="hover:scale-105 duration-500" /></Link>
    </div>
    
  </div>
  );
};

export default Offers;
