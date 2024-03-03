import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import TimeSlotCard from "./TimeSlotCard";
import { Link } from "react-router-dom";

const TrainerCard = ({ trainer, timeSlots }) => {
  const {_id,trainer_email, trainer_name, image_url, experience, available_time_in_day } =
    trainer || {};

    // get slots - how much 
  const slots = [];
  for (let i = 1; i <= parseInt(available_time_in_day); i++) {
    slots.push(i);
  }

  return (
    <div className="border  rounded-md">
      <div>
        <img
          className="h-[350px] w-full object-cover object-top rounded-t-md"
          src={image_url}
          alt={trainer_name}
        />
      </div>
      <h2 className="text-2xl font-semibold text-center mt-3">
        {trainer_name}
      </h2>
      <h4 className="text-xl font-semibold text-center mt-3">
        Experience: {experience} years
      </h4>
      {/* social  */}
      <div className="flex justify-center gap-2 mt-2 text-gray-600 ">
        <span className="text-xl border rounded-full p-2 hover:bg-action-bg transition ease-linear duration-300 hover:text-white">
          <FaFacebook />
        </span>
        <span className="text-xl border rounded-full p-2 hover:bg-action-bg transition ease-linear duration-300 hover:text-white">
          <FaTwitter />
        </span>
        <span className="text-xl border rounded-full p-2 hover:bg-action-bg transition ease-linear duration-300 hover:text-white">
          <FaYoutube />
        </span>
        <span className="text-xl border rounded-full p-2 hover:bg-action-bg transition ease-linear duration-300 hover:text-white">
          <FaInstagram />
        </span>
      </div>
      {/* time slots  */}
      <div className="flex gap-1  overflow-x-auto">
        {timeSlots.slice(0, slots.length).map((tiemSlot) => (
          <TimeSlotCard
            key={tiemSlot._id}
            slotName={tiemSlot.slotName}
            isTrainerCard={true}
          ></TimeSlotCard>
        ))}
      </div>
      {/* know more button  */}
      <div className="mb-6 mt-7">
        <Link to={`/trainer-details/${trainer_email}`}>
        <button
          type="submit"
          className="flex gap-1 items-center mx-auto uppercase text-lg text-black font-semibold px-4 py-1 rounded-lg bg-action-bg border hover:bg-white  hover:border-action-text transition ease-linear duration-300"
        >
          Know More
        </button>
        </Link>
      </div>
    </div>
  );
};

TrainerCard.propTypes = {
  trainer: PropTypes.object.isRequired,
  timeSlots: PropTypes.array.isRequired,
};

export default TrainerCard;
