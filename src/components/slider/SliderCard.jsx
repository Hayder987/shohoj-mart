const SliderCard = ({ product }) => {
    const discount =
      parseFloat(product?.price) * (parseFloat(product?.discount) / 100);
  
    return (
      <div className="w-full relative p-4 rounded-md shadow-md flex flex-col h-full">
        {/* Image Section */}
        <div className="mb-3">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover"
          />
        </div>
  
        {/* Content Section */}
        <div className="flex h-full flex-col ">
          <p className="text-sm font-semibold mb-3 flex-grow">{product?.title}</p>
  
          {/* Price Section */}
          <div className="mt-auto"> 
            <p className="flex gap-4 items-center">
              <span className="text-2xl font-semibold text-yellow-700">
                {product?.price && product?.discount
                  ? (parseFloat(product?.price) - discount).toFixed(2)
                  : product?.price}
                $
              </span>
              <span className="line-through text-xl">{product?.price}$</span>
            </p>
          </div>
        </div>
  
        {/* Floating Discount */}
        <div className="bg-yellow-700 absolute top-4 right-4 z-10 font-semibold px-6 text-white">
          <p className="text-sm flex gap-2 items-center">
            Save: {discount.toFixed(1)}${" "}
            <span className="text-base">-{product?.discount}%</span> Off
          </p>
        </div>
      </div>
    );
  };
  
  export default SliderCard;
  