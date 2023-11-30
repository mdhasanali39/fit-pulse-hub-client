import axiosSecure from "."

// save trainer
export const saveTrainer = async (trainerData,email) =>{
    const {data} = await axiosSecure.post(`/save-trainer/${email}`, trainerData)
    return data;
}
// get all trainers data 
export const getTrainers = async ()=>{
    const {data} = await axiosSecure.get("/trainers");
    return data
}
// get all applied trainers
export const getAppliedTrainers = async ()=>{
    const {data} = await axiosSecure.get("/applied-trainers");
    return data;
}

// get single trainer data 
export const getSingleTrainer = async id =>{
    const {data} = await axiosSecure.get(`/trainer/${id}`);
    return data
}

// get time slots
export const getTimeSlots = async ()=>{
    const {data} = await axiosSecure.get("/time-slots");
    return data;
}
// get single slot 
export const getSingleSlot = async id =>{
    const {data} = await axiosSecure.get(`/time-slot/${id}`)
    return data;
}
// check is unverified 
export const checkIsUnverified = async email =>{
    const {data} = await axiosSecure.get(`/unverified-trainer/${email}`)
    return data.isTrainer
}