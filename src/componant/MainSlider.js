import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import HTML from "../assets/images/104494_html5_html_icon.png";
import CSS from "../assets/images/294692_css3_icon.png";
import JS from "../assets/images/28854_javascript_js_icon.png";
import ReactJS from "../assets/images/1174949_js_react js_logo_react_react native_icon.png";
import NodeJS from "../assets/images/8546986_node_icon.png";
import MongoDB from "../assets/images/1012822_code_development_logo_mongodb_programming_icon.png";
import BootStrap from "../assets/images/8666135_bootstrap_icon.png";
import Tailwind from "../assets/images/9074204_tailwind_icon.png";
import Github from "../assets/images/317712_code repository_github_repository_resource_icon.png";
import Postman from "../assets/images/4691397_postman_icon.png";
function MainSlider() {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{ delay: 3000 }}
      style={{ height: "10rem" }}
      //slidesPerView={4}
      spaceBetween={50}
      breakpoints={{ 320: { slidesPerView: 2 }, 720: { slidesPerView: 4 } }}
      className="bg-gradiant-r from-cyan-400 to-purple-400"
    >
      <SwiperSlide>
        <div
          className="slider-content bg-gradiant-r from-cyan-400 to-purple-400"
          style={{ height: "100%", width: "100%" }}
        >
          <img
            src={HTML}
            alt="html"
            style={{ height: "100%", width: "Auto" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider-content"
          style={{ height: "100%", width: "100%" }}
        >
          <img src={CSS} alt="html" style={{ height: "100%", width: "Auto" }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider-content"
          style={{ height: "100%", width: "100%" }}
        >
          <img src={JS} alt="html" style={{ height: "100%", width: "Auto" }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider-content"
          style={{ height: "100%", width: "100%" }}
        >
          <img
            src={ReactJS}
            alt="html"
            style={{ height: "100%", width: "Auto" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider-content"
          style={{ height: "100%", width: "100%" }}
        >
          <img
            src={NodeJS}
            alt="html"
            style={{ height: "100%", width: "Auto" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider-content"
          style={{ height: "100%", width: "100%" }}
        >
          <img
            src={MongoDB}
            alt="html"
            style={{ height: "100%", width: "Auto" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider-content"
          style={{ height: "100%", width: "100%" }}
        >
          <img
            src={BootStrap}
            alt="html"
            style={{ height: "100%", width: "Auto" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider-content"
          style={{ height: "100%", width: "100%" }}
        >
          <img
            src={Tailwind}
            alt="html"
            style={{ height: "100%", width: "Auto" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider-content"
          style={{ height: "100%", width: "100%" }}
        >
          <img
            src={Github}
            alt="html"
            style={{ height: "100%", width: "Auto" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider-content"
          style={{ height: "100%", width: "100%" }}
        >
          <img
            src={Postman}
            alt="html"
            style={{ height: "100%", width: "Auto" }}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSlider;
