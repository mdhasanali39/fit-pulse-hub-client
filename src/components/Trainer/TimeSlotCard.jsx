const TimeSlotCard = ({ startTime, endTime, slotName,slot_id,trainer_id,handleSlotClicked }) => {
  return (
    <div>
      {startTime ? (
        <div
        onClick={()=>handleSlotClicked(slot_id,trainer_id)}
         className="flex flex-wrap gap-3 border p-4 md:w-2/5 mx-auto">
          <h2 className="text-black-text text-lg font-semibold pr-1 border-r-4 border-action-text">
            {slotName}
          </h2>
          <h2 className="text-black-text text-lg font-semibold pr-1 border-r-4 border-action-text">
            Start: {startTime}
          </h2>
          <h2 className="text-black-text text-lg font-semibold">End: {endTime}</h2>
        </div>
      ) : (
        <div className="text-lg font-semibold bg-action-text text-center whitespace-nowrap border p-1 px-2 my-3">
          {slotName}
        </div>
      )}
    </div>
  );
};

export default TimeSlotCard;
