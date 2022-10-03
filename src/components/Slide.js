import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y, Autoplay } from "swiper";
import "swiper/css";
import "./Slide.css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

SwiperCore.use([A11y, Autoplay]);

const pics = [
  {
    id: 1,
    username: "- Depoimento 1",
    testimonial:
      "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in varius velit, eget dignissim est. Praesent accumsan in enim id porta. Sed vel tincidunt neque, a porttitor elit. Phasellus est nulla, suscipit in dolor a, pellentesque aliquam quam. Vestibulum vitae purus consectetur, porta dui vel, feugiat felis.'",

  },
  {
    id: 2,
    username: "- Depoimento 2",
    testimonial:
      "'Suspendisse a cursus urna. Vestibulum turpis ipsum, imperdiet ac aliquet nec, tempor at leo. Morbi accumsan quis urna vel malesuada.'",
  },
  {
    id: 3,
    username: "- Depoimento 3",
    testimonial:
      "'Maecenas pretium magna sed nunc sagittis, sit amet suscipit turpis mattis. Vivamus tincidunt leo sed metus mollis, nec dapibus lacus gravida. Duis augue neque, tempus eu quam non, pulvinar lacinia nibh.'",
  },
  {
    id: 4,
    username: "- Depoimento 4",
    testimonial:
      "'Quisque pellentesque ex quis lorem ullamcorper mollis. Sed ornare tortor ut mauris auctor luctus.'",
  },
  {
    id: 5,
    username: "- Depoimento 5",
    testimonial:
      "'Aliquam congue mi nec tortor sollicitudin molestie. Sed vel lorem tellus. Donec velit ante, placerat quis interdum nec, tincidunt vitae quam. Nam neque erat, sagittis vitae posuere non, accumsan id nisi. Duis est sapien, vulputate eu leo quis, vehicula pellentesque neque. Nam varius urna eget porttitor porta.'",
  },
];

function Slides() {
  return (
    <>
      <Swiper
        speed={1000}
        spaceBetween={1}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        className="swiper"
      >
        {pics.map((user) => (
          <SwiperSlide key={user.id} className="slide">
            <div className="slideContent">
              <div className="text">
                <h5 className="userText">{user.testimonial}</h5>
                <p className="userName">{user.username}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slides;
