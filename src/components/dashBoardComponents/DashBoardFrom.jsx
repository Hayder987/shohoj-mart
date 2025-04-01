import { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa6";

const DashBoardFrom = ({ categoryArr, discountArr }) => {
  const [imgPath, setImgPath] = useState("");
  const [imgPreview, setImgPreview] = useState("");

  useEffect(() => {
    if (imgPath) {
      const imageURL = URL.createObjectURL(imgPath);
      setImgPreview(imageURL);
      return () => URL.revokeObjectURL(imageURL);
    }
  }, [imgPath, setImgPreview]);



  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto rounded-md bg-white shadow-md p-6 md:p-10 lg:px-14">
        <h1 className="text-2xl text-center my-6 font-semibold">Add Product</h1>
        {/* form */}
        <form 
        
        className="flex flex-col gap-6">
          {/* title and brand && model */}
          <div className="flex flex-col md:flex-row  justify-center items-center gap-6">
            {/* title */}
            <div className="flex flex-col gap-1 w-full">
              <label className="">Title</label>
              <input
                type="text"
                required
                name="title"
                className="border rounded-sm w-full border-gray-400 py-1 px-3"
              />
            </div>
            {/* Brand */}
            <div className="flex flex-col gap-1 w-full">
              <label className="brandName">Brand Name</label>
              <input
                type="text"
                required
                name=""
                className="border rounded-sm border-gray-400 py-1 px-3"
              />
            </div>
            {/* Model */}
            <div className="flex flex-col gap-1 w-full">
              <label className="modelName">Model Name</label>
              <input
                type="text"
                required
                name=""
                className="border rounded-sm border-gray-400 py-1 px-3"
              />
            </div>
          </div>
          {/* description and Photo */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* description */}
            <div className="flex flex-col gap-1 w-full lg:w-8/12">
              <label className="">Description</label>
              <textarea
                name="description"
                required
                rows={4}
                cols={10}
                placeholder="Type Here"
                className="border p-3 rounded-sm border-gray-400 w-full resize-none"
              ></textarea>
            </div>
            {/* Photo*/}
            <div className="flex flex-col gap-1 w-full lg:w-4/12 px-6 mt-7">
              {/* image Upload */}
              <div className="mb-6 w-full h-full">
                <label className="uppercase">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setImgPath(e.target.files[0])}
                  />
                  <div className="border-2 flex overflow-hidden w-full h-20 py-2 items-center gap-3 border-dashed border-blue-800 p-2 px-4 cursor-pointer">
                    {imgPreview ? (
                      <img src={imgPreview} alt="" className="w-32 h-20" />
                    ) : (
                      <span className="flex gap-2 items-center">
                        <span className="text-xl">
                          <FaImage />
                        </span>
                        Upload Photo
                      </span>
                    )}
                  </div>
                </label>
              </div>
            </div>
          </div>
          {/* category && price && feature */}
          <div className="flex flex-col md:flex-row  justify-center items-center gap-6">
            {/* Category */}
            <div className="flex flex-col gap-1 w-full">
              <label className="modelName">Category</label>
              <select required name="category" className="select w-full">
                {categoryArr.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {/* price */}
            <div className="flex flex-col gap-1 w-full">
              <label className="modelName">Price</label>
              <input
                type="number"
                name="price"
                required
                className="border rounded-sm border-gray-400 py-1 px-3"
              />
            </div>
            {/* feature */}
            <div className="flex flex-col gap-1 w-full">
              <label className="modelName">Features</label>
              <input
                type="text"
                name="feature"
                required
                className="border rounded-sm border-gray-400 py-1 px-3"
              />
            </div>
          </div>
           {/* discount && stock && product code */}
           <div className="flex flex-col md:flex-row  justify-center items-center gap-6">
            {/* Category */}
            <div className="flex flex-col gap-1 w-full">
              <label className="modelName">Discount</label>
              <select required name="discount" className="select w-full">
                {discountArr.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {/* price */}
            <div className="flex flex-col gap-1 w-full">
              <label className="modelName">Stock</label>
              <input
                type="number"
                name="stock"
                required
                className="border rounded-sm border-gray-400 py-1 px-3"
              />
            </div>
            {/* Product code*/}
            <div className="flex flex-col gap-1 w-full">
              <label className="modelName">Product Code</label>
              <input
                type="text"
                name="productCode"
                required
                className="border rounded-sm border-gray-400 py-1 px-3"
              />
            </div>
          </div>
           <input 
           type="submit" 
           value="Add Post"
           className={`w-full mt-6 font-medium cursor-pointer bg-blue-800 text-white py-2 px-4 rounded-sm`}
            />
        </form>
      </div>
    </div>
  );
};

export default DashBoardFrom;
