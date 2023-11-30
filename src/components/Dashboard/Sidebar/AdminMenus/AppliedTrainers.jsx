import { useQuery } from "@tanstack/react-query";
import { getAppliedTrainers, getSingleTrainer } from "../../../../api/trainer";
import AppliedTrainersRow from "./RowCard/AppliedTrainersRow";
import { useState } from "react";
import AppliedTrainerModal from "./RowCard/AppliedTrainerModal";
import axiosSecure from "../../../../api";
import toast from "react-hot-toast";
import Title from "../../../Shared/Title/Title";

const AppliedTrainers = () => {
  const [trainerData, setTrainerData] = useState({});
  const [trainerLoading,setTrainerLoading] = useState(false)
  // all trainers 
  const { data: appliedTrainers = [],refetch } = useQuery({
    queryKey: ["appliedTrainer"],
    queryFn: async () => await getAppliedTrainers(),
  });

  console.log(appliedTrainers);

  // handle show trainer details modal 
  const handleShowModal = async (id) => {
    const trainerData = await getSingleTrainer(id);
    setTrainerData(trainerData);
    document.getElementById("my_modal").showModal()
  };
  // hanlde accept 
  const handleAccept = async(email,id) =>{
    const res = await axiosSecure.patch(`/update-trainer/${email}/${id}`,{status: "verified", role: "trainer"})
    if(res.data?.trainerUpdated?.modifiedCount >0){
      toast.success(`Now ${email} has been trainer`)
      refetch()
    }
    console.log(res.data);
  }

  return (
    <div>
      <div className="overflow-x-auto">
      <Title heading_first="applied" heading_last="trainers" subHeading="all applied trainers"></Title>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appliedTrainers.map((trainer, idx) => (
              <AppliedTrainersRow
                key={trainer?._id}
                trainer={trainer}
                idx={idx}
                handleShowModal={handleShowModal}
                
              ></AppliedTrainersRow>
            ))}
            {trainerData && (
              <AppliedTrainerModal 
              trainer={trainerData}
               handleAccept={handleAccept}
               ></AppliedTrainerModal>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedTrainers;
