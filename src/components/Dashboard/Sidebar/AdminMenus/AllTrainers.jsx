import { useQuery } from "@tanstack/react-query";
import { getTrainers } from "../../../../api/trainer";
import AllTrainersRow from "./RowCard/AllTrainersRow";
import Title from "../../../Shared/Title/Title";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosSecure from "../../../../api";

const AllTrainers = () => {
  const [amount,setAmount] = useState(150)
  const [salaryStatus, setSalaryStatus] = useState("unpaid")


  // get all trainers 
  const { data: trainers = [], refetch } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => await getTrainers(),
  });
  // console.log(trainers);

  useEffect(()=>{
   const isPaid = trainers.find(item => item.salary === "paid")
   if(isPaid){
    setSalaryStatus("paid")
   }
   console.log(isPaid);
  },[trainers])
  

  useEffect(()=>{
    const updateTrainer = async() =>{
      const {data} = await axiosSecure.patch("/status-unpaid",{salary:"unpaid"})
        if(data.modifiedCount >0){
          setSalaryStatus("unpaid")
          refetch()
        }
        console.log(data);
    }
    updateTrainer()
  },[])

  // useEffect(()=>{
    // const month_ms = ((((1000 * 60) * 60) * 24) * 30)
    // let salaryStatus = "unpaid"
    // const interval = setInterval(async() => {
        //  update trainer salary status to unpaid every month 
        // const {data} = await axiosSecure.patch("/update-trainers",{salary:"unpaid"})
        // if(data.modifiedCount >0){
        //   setSalaryStatus("unpaid")
        //   // refetch()
        // }
        // console.log(data);
    // },2592000000);
    // return ()=> {
    //   return clearInterval(interval)
    // }
  // },[])


  console.log(salaryStatus);
  return (
    <div className="overflow-x-auto  min-h-[90vh]">
      <Title
        heading_first="all"
        heading_last="trainers"
        subHeading="our awesome trainers"
      ></Title>

      {/* TODO: conditionally render payment card section interval one month(30days) */}
        {salaryStatus === "unpaid" && <div className="w-1/2 mx-auto space-y-3 my-9  border bg-black-text rounded-md p-4 text-white">
          <h2 className="font-bold text-3xl text-center">----Monthly Payment-----</h2>
          <h2 className="font-bold text-xl">
            Monthly Payment amount for every trainer: ${amount}
          </h2>
          <p>
            Total pending payment amount ${amount * trainers?.length} of{" "}
            {trainers.length} trainers
          </p>
          <Link to={`/trainerPayment?tpa=${amount * trainers?.length}&tid=${trainers.map(t=>t?._id)}`}> {/* tpa -> trainer payment amount - payment by admin and tid is trainers ids */}
          <button
            type="submit"
            className="flex mx-auto gap-1 items-center uppercase text-lg text-black font-semibold mt-2 px-4 py-1 rounded-lg bg-action-bg  hover:bg-white   transition ease-linear duration-300"
          >
            Pay Now
          </button>
          </Link>
        </div>}


      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer, idx) => (
            <AllTrainersRow
              key={trainer?._id}
              trainer={trainer}
              idx={idx}
            ></AllTrainersRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTrainers;
