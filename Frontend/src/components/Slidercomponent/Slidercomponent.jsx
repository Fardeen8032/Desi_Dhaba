import "./Slidercomponent.css";
import { assets } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper/modules";

import Testimonal from "../Testimonal/Testimonal";
const Slidercomponent = () => {
  return (
    <>
      <Testimonal />
      <div className="Slidercontainer">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={2}

          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10
            },

            600: {
              slidesPerView: 1,
              spaceBetween: 10
            },

            768: {
              slidesPerView: 1,
              spaceBetween:10

            },
            992: {
              slidesPerView: 2,
              spaceBetween: 10

            },
            1050: {
              slidesPerView: 2,
              spaceBetween: 20

            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 20

            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="testimonal-content">
              <div className="testimonal-review">
                <p>
                  “Desi dhaba is an excellent place to have food.nice dishes
                  with paneer specially the starters good experience.”
                </p>
              </div>
              <div className="testimonal-profile">
                <div className="profile-image">
                  <img src={assets.icon} alt="icon" />
                </div>
                <div className="testimonal-profile-content">
                  <h3>Vinod kumar</h3>
                  <p>Palanpur</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonal-content">
              <div className="testimonal-review">
                <p>
                  “Good place to eat specially paneer chatpata with tiny fry
                  paneer peices, its good place for kids too good for family and
                  friends.”
                </p>
              </div>
              <div className="testimonal-profile">
                <div className="profile-image">
                  <img src={assets.icon} alt="icon" />
                </div>
                <div className="testimonal-profile-content">
                  <h3>Amin Bapu</h3>
                  <p>Palanpur</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonal-content">
              <div className="testimonal-review">
                <p>
                  “food items are good in quality. above average food taste and
                  appearance.best setup restaurant.cheap price and
                  good quality.”
                </p>
              </div>
              <div className="testimonal-profile">
                <div className="profile-image">
                  <img src={assets.icon} alt="icon" />
                </div>
                <div className="testimonal-profile-content">
                  <h3>Piyush</h3>
                  <p>Ahmedabad</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonal-content">
              <div className="testimonal-review">
                <p>
                  “Desi dhaba is an excellent place to have food.. nice dishes
                  with paneer specially the starters.. good experience.”
                </p>
              </div>
              <div className="testimonal-profile">
                <div className="profile-image">
                  <img src={assets.icon} alt="icon" />
                </div>
                <div className="testimonal-profile-content">
                  <h3>Shek2005</h3>
                  <p>Mumbai</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slidercomponent;
