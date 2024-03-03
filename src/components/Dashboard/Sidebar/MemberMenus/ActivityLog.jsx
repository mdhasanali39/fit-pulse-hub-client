import { useQuery } from "@tanstack/react-query";
import { getSingleBookedByMember, getSingleSlot } from "../../../../api/trainer";
import useAuth from "../../../../hooks/useAuth";
import Title from "../../../Shared/Title/Title";
import { getSingleUser } from "../../../../api/auth";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const ActivityLog = () => {
  const { user, loading} = useAuth();
  const { data: singleBooked = {} } = useQuery({
    enabled:!loading && !!user.email,
    queryKey: ["singleBooked", user?.email],
    queryFn: async () => getSingleBookedByMember(user?.email),
  });
//   get single slot 
  const {data:singleSlot} = useQuery({
    enabled:!!singleBooked?.slot_id,
    queryKey:["singleSlot",singleBooked?.slot_id],
    queryFn: async()=>getSingleSlot(singleBooked?.slot_id)
  })
  // get member since (dynamic) days   and also you get single user(TODO: for this, change res.send from database) 
  // ** singleUser.totalDays to get member since days  
  const {data:singleUser = {}} = useQuery({
    enabled:!loading && !!user.email,
    queryKey:["singleUser"],
    queryFn:async()=> await getSingleUser(user?.email)
  })
  console.log(singleUser);
  return (
    <div>
      <Title heading_first="my todays" heading_last="activity"></Title>
      {/* member since  */}
      <div className="flex justify-end mt-10 mb-5">
          <p className="max-w-min whitespace-nowrap flex items-center gap-1 text-xl font-semibold border px-4 py-2 "><GoDotFill color="yellowGreen" /> Member since {singleUser?.totalDays} Days <IoCalendarNumberOutline/></p>
      </div>
      <div>
        <h2 className="text-lg font-semibold pl-4 border">
        <span className="border-r">My trainer:</span> {singleBooked?.trainer_name}</h2>
        <div>
          {
            <div
            className={`flex flex-wrap gap-3 border p-4 "w-3/4"
            } mx-auto`}
          >
          <h2 className="text-lg font-semibold">My slot:</h2>
            <h2 className="text-black-text text-lg font-semibold pr-1 border-r-4 border-action-text">
              {singleSlot?.slotName}
            </h2>
            <h2 className="text-black-text text-lg font-semibold pr-1 border-r-4 border-action-text">
              Start: {singleSlot?.startTime}
            </h2>
            <h2 className="text-black-text text-lg font-semibold">
              End: {singleSlot?.endTime}
            </h2>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
