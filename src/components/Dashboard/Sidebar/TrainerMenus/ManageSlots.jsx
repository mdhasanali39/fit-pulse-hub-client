import { useQuery } from "@tanstack/react-query";
import { getSingleTrainer, getTimeSlots } from "../../../../api/trainer";
import useAuth from "../../../../hooks/useAuth";
import TimeSlotCard from "../../../Trainer/TimeSlotCard";
import Title from "../../../Shared/Title/Title";
import axiosSecure from "../../../../api";
import { useEffect, useState } from "react";


const ManageSlots = () => {
  const { user,loading } = useAuth();
  const [slots, setSlots] = useState([])
  const [timeSlotsAll,setTimeSlotsAll] = useState([])
  const [processing,setProcessing] = useState(false)

 // console.log(timeSlotsAll);

  const { data: singleTrainer = {} } = useQuery({
    enabled: !loading && !!user.email,
    queryKey: ["singleTrainer", user?.email],
    queryFn: async () => await getSingleTrainer(user?.email),
  });

  // get slots - how much(this trainer)
  useEffect(() => {
    setProcessing(true)
    const slotsArr = [];
    for (let i = 1; i <= parseInt(singleTrainer?.available_time_in_day); i++) {
      slotsArr.push(i);
    }
    setSlots(slotsArr)
    setProcessing(false)
  }, [singleTrainer?.available_time_in_day]);

  
  // get timeSlots 
  let { data: timeSlots = [],isLoading } = useQuery({
    queryKey: ["allSlots"],
    queryFn: async () => {
     const res = await getTimeSlots()
     return res;
    }
  });
  // get 
  const { data = {},isLoading:bookedSlotsLoading } = useQuery({
    queryKey: ["bookedSlots", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booked-slots/${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    setProcessing(true)
    timeSlots?.forEach((timeSlotItem) => {
      let matched = data?.findBookedSlotsIds?.find(
        (bookedSlotItem) => bookedSlotItem?._id === timeSlotItem?._id
      );
      if (matched) {
        timeSlotItem.isBooked = true;
      } else{
        timeSlotItem.isBooked = false;
      }
    });
    setTimeSlotsAll([...timeSlots])
    setProcessing(false)
  }, [data?.findBookedSlotsIds, timeSlots]);


  // console.log(timeSlotsAll);

  return (
    <div>
      <Title
        heading_first="manage"
        heading_last="slots"
        subHeading="let's manage all of your slots"
      ></Title>
      <div className="space-y-3">
        {isLoading || bookedSlotsLoading || processing ? <span>loading...</span> : timeSlotsAll?.slice(0, slots.length).map((timeSlot,idx) => (
          <TimeSlotCard
            key={timeSlot?._id}
            startTime={timeSlot.startTime}
            endTime={timeSlot.endTime}
            slotName={timeSlot.slotName}
            inManageSlots={true}
            booked={timeSlot?.isBooked}
            memberName={data?.bookedMemberName[idx || 1]}
          ></TimeSlotCard>
        ))}
      </div>
    </div>
  );
};

export default ManageSlots;
