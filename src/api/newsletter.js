import axiosSecure from "."

// get newsletter subscribers 
export const getSubscribers = async() =>{
    const {data} = await axiosSecure.get("/subscribers")
    return data
}