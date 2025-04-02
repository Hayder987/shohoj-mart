import React, { useEffect } from "react";
import { useParams } from "react-router";

const Details = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {id} = useParams();

  

  return (
    <div>
        <p className="">details</p>
    </div>
  );
};

export default Details;
