import React from "react";

const CategoryCard = ({ logo, name }) => {
  return (
    <div>
      <div className="cursor-pointer group overflow-hidden ">
        <img src={logo} alt="" className="mb-3 duration-500 group-hover:scale-105" />
        <p className="text-center  group-hover:text-blue-700 group-hover:underline">{name}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
