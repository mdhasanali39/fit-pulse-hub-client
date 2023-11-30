import axiosSecure, { axiosPublic } from "."

// save class 
export const saveClass = async (classData,email) =>{
    const {data} = await axiosSecure.post(`/save-class/${email}`, classData);
    return data
}
// get all classes
export const getAllClasses = async() =>{
    const {data} = await axiosPublic("/all-classes")
    return data;
}
// get single class
export const getSingleClass = async id =>{
    const {data} = await axiosPublic(`/single-class/${id}`)
    return data;
}
