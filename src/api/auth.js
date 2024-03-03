import axiosSecure from ".";

// save user 
export const saveUser = async(user) =>{
    const userData = {
        name: user?.displayName,
        email:user?.email,
        role:"member"
    }
    const {data} = await axiosSecure.post(`/create-user/${user?.email}`, userData)
    return data;
}

// update user profile 
export const updateUser = async (updatedUserInfo,email) =>{
    const {data} = await axiosSecure.put(`/update-user/${email}`,updatedUserInfo)
    return data;
}
// get single user or from how many days user created account 
export const getSingleUser = async email =>{
    const {data} = await axiosSecure.get(`/get-user/${email}`)
    return data;
}

// get role 
export const getRole = async email =>{
    const {data} = await axiosSecure.get(`/user-role/${email}`)
    return data.role;
}
// get users they are trainer 
// export const getUsers = async email =>{
//     const {data} = await axiosSecure.get(`/user-role/${email}`)
//     return data.role;
// }
