import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getTimeSlots } from "../../../api/trainer";
import TimeSlotCard from "../TimeSlotCard";
import Title from "../../Shared/Title/Title";
import Cover from "../../Shared/Cover/Cover";

const TrainerDetails = () => {
  const trainer = useLoaderData();
  const navigate = useNavigate()
  console.log(trainer);

  // get slots - how much
  const slots = [];
  for (let i = 1; i <= parseInt(trainer?.available_time_in_day); i++) {
    slots.push(i);
  }

  // load time slots data
  const { data: timeSlots = [] } = useQuery({
    queryKey: ["timeSlots"],
    queryFn: async () => await getTimeSlots(),
  });

  console.log(timeSlots);

  const handleSlotClicked = (slotId, trainerId) =>{
    console.log("slot",slotId, "trainer id", trainerId);
    navigate(`/book-package?slot=${slotId}&trainer=${trainerId}`)

  }


  return (
    <div className="mb-10">
      {/* heading  */}
      <Cover
        heading_first="Trainer Details"
        image="https://i.ibb.co/HFTCgHp/about-bg.jpg"
        subHeading={`see below the available slot of ${trainer.trainer_name}`}
        color="text-white"
      ></Cover>
      <div className="mt-10">
        <h2 className="text-uppercase text-5xl font-bold text-action-text text-center my-8">Here is all of <span className="text-black-text">{trainer.trainer_name}</span> time slots</h2>
        <div className="space-y-3">
          {timeSlots?.slice(0, slots.length).map((timeSlot) => (
            <TimeSlotCard
              key={timeSlot?._id}
              startTime={timeSlot.startTime}
              endTime={timeSlot.endTime}
              slotName={timeSlot.slotName}
              slot_id={timeSlot._id}
              trainer_id={trainer?._id}
              handleSlotClicked={handleSlotClicked}
            ></TimeSlotCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
