import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SliderCard from "./SliderCard";

const Slider = ({ data, class1, class2 }) => {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        loop={true} 
        navigation={{ nextEl: `.${class2}`, prevEl: `.${class1}` }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 5 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 5, spaceBetween: 15 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            data.map((item)=>(
                <SwiperSlide className="pb-4" key={item?._id}>
                  <SliderCard product={item}/>   
                </SwiperSlide>
            ))
        }
        
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          className={`${class1} text-xl cursor-pointer p-2 hover:text-white rounded-lg shadow-md hover:bg-blue-800 transition`}
        >
          <FaAngleLeft />
        </button>
        <button
          className={`${class2} text-xl cursor-pointer p-2 hover:text-white rounded-lg shadow-md hover:bg-blue-800 transition`}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
