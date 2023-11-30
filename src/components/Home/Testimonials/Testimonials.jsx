import Title from "../../Shared/Title/Title";
import { FaQuoteLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className="mt-20">
      <Title
        heading_first="What Clients"
        heading_last="Says"
        subHeading="What our satisfied clients say's"
      ></Title>
      <div className="mt-14">
        <Swiper
          spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
          {testimonials.map(
            ({ clientMessage, clientName, clientTitle }, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-1/2 mx-auto mb-4">
                  <FaQuoteLeft size={30} className="text-action-text"/>
                  <p className="text-center">
                    {clientMessage}
                  </p>
                  </div>
                  <div className="border border-action-text p-4 rounded-full w-[60px] h-[60px] relative overflow-hidden">
                    <img
                      src="https://i.ibb.co/P67TjCm/muscle-7053338.png"
                      alt={clientName}
                      className="absolute w-3/4 object-cover left-1/2 -translate-x-1/2 -bottom-1"
                    />
                  </div>
                  <h4 className="text-lg text-center  font-semibold">
                    {clientName}
                  </h4>
                  <h4 className="text-lg text-center  mb-10">
                    {clientTitle}
                  </h4>
                </div>
              </SwiperSlide>
            )
          )}
          {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

// Testimonials array
const testimonials = [
  {
    clientMessage:
      "Joining this gym was one of the best decisions I've made for my fitness journey. The trainers are knowledgeable, the facilities are top-notch, and the sense of community is inspiring. I've achieved fitness goals I never thought possible.",
    clientName: "Alex Morgan",
    clientTitle: "Fitness Enthusiast",
  },
  {
    clientMessage:
      "The online workout programs offered by this gym are a game-changer. The variety of classes and the convenience of working out from home make it easy to stay committed. The trainers are motivating, and the results are real!",
    clientName: "Jessica Ramirez",
    clientTitle: "Remote Worker & Fitness Fanatic",
  },
  {
    clientMessage:
      "As a beginner, I was a bit nervous about starting my fitness journey, but the trainers here made me feel welcome and supported. The personalized training plans have helped me build confidence and strength. I can't recommend this gym enough!",
    clientName: "Brian Turner",
    clientTitle: "Fitness Novice turned Enthusiast",
  },
  {
    clientMessage:
      "The gym's nutrition counseling services have been a game-changer for me. The personalized meal plans have not only helped me reach my fitness goals but have also improved my overall well-being. The staff is knowledgeable and supportive.",
    clientName: "Sophie Anderson",
    clientTitle: "Health and Wellness Advocate",
  },
  {
    clientMessage:
      "I've been a member of this gym for years, and it continues to exceed my expectations. The state-of-the-art equipment, diverse class offerings, and friendly atmosphere keep me motivated. It's more than a gym; it's a fitness family.",
    clientName: "Chris Mitchell",
    clientTitle: "Long-time Gym Enthusiast",
  },
];
