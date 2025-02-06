import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading={"What Our Client Say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper px-20"
        >
          {reviews.map((review) => (
            <SwiperSlide className="px-20 text-center" key={review._id}>
              <div className="flex items-center justify-center mb-5 text-[#CD9003]">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </div>
              <div className="flex justify-center text-5xl my-5">
                <FaQuoteLeft />
              </div>
              <p className="text-xl mb-3 px-5">{review.details}</p>
              <h3 className="text-[#CD9003] text-3xl font-medium mb-3">
                {review.name}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
