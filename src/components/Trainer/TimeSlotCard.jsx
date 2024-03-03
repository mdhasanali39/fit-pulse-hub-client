import { useState } from "react";
import { FaAngleDown,FaAngleUp } from "react-icons/fa6";

const TimeSlotCard = ({
  startTime,
  endTime,
  slotName,
  slot_id,
  trainer_email,
  handleSlotClicked,
  booked,
  inManageSlots,
  isTrainerCard,
  memberName,
}) => {
  
  const [active,setActive] = useState(false)

  return (
    <div>
      {handleSlotClicked && 
        <div
          onClick={() => handleSlotClicked(slot_id, trainer_email)}
          className={`flex flex-wrap gap-3 border p-4 ${
            trainer_email ? "md:w-2/5" : "w-3/4"
          } mx-auto`}
        >
          <h2 className="text-black-text text-lg font-semibold pr-1 border-r-4 border-action-text">
            {slotName}
          </h2>
          <h2 className="text-black-text text-lg font-semibold pr-1 border-r-4 border-action-text">
            Start: {startTime}
          </h2>
          <h2 className="text-black-text text-lg font-semibold">
            End: {endTime}
          </h2>
        </div>
      }
      { inManageSlots && 
        <div
          className={`flex flex-wrap gap-3 border p-4
            w-3/4 mx-auto`}
        >
          <h2 className="text-black-text text-lg font-semibold pr-1 border-r-4 border-action-text">
            {slotName}
          </h2>
          <h2 className="text-black-text text-lg font-semibold pr-1 border-r-4 border-action-text">
            Start: {startTime}
          </h2>
          <h2 className="text-black-text text-lg font-semibold">
            End: {endTime}
          </h2>
          {booked && <div className="relative">
          <h2 onClick={()=>setActive(!active)} className="flex items-end  text-black-text text-lg font-bold">booked {active ? <FaAngleUp/> : <FaAngleDown/>}</h2>
          {active && <p className="whitespace-nowrap absolute -top-[200%] -right-[180%] z-[100] border border-black  shadow-md px-4 py-2 font-semibold">Booked by: {memberName}</p>}
          </div>}
        </div>}

        {isTrainerCard &&
          <div className="text-lg font-semibold bg-action-text text-center whitespace-nowrap border p-1 px-2 my-3">
          {slotName}
        </div>}
    </div>
  );
};

export default TimeSlotCard;
