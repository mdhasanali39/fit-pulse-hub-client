import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div style={{background: "linear-gradient(90deg, rgba(13,13,13,1) 32%, rgba(31,77,25,1) 100%)"}} className="flex flex-col lg:flex-row items-center pt-12 lg:pt-0 min-h-[86vh]">
      {/* banner text */}
      <div className="flex-1 px-4 md:px-0 md:pl-10">
        <div className="space-y-3">
          <h2 className="text-4xl max-[767px]:text-center ml:text-7xl text-action-text font-bold">
            Elevate Your <br /> Fitness Journey
          </h2>
          <p className="text-white max-[767px]:text-center lg:w-full">
            Embark on a transformative fitness experience with our
            state-of-the-art gym facilities and personalized training programs.
            Unleash your potential, achieve your goals, and sculpt a stronger,
            healthier version of yourself. Your fitness journey starts here.
          </p>
          {/* cta button  */}
          <Link to="/classes" className="">
            <button className="flex max-[767px]:mx-auto items-center gap-2 text-lg text-black font-semibold bg-action-bg px-5 py-3 mt-3">
              Start Your Fitness Odyssey
              <FaArrowRightLong className=""/>
            </button>
          </Link>
        </div>
      </div>
      {/* banner image */}
      <div className="flex-1 self-end">
        <div>
          <img
            className="h-[560px] w-auto"
            src="https://i.ibb.co/6JnJmsR/bg.png"
            alt="banner image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
