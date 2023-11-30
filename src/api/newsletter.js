import axiosSecure from "."

export const getSubscribers = async() =>{
    const {data} = await axiosSecure.get("/subscribers")
    return data
}