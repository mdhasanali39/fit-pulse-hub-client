import axiosSecure from "."

// save forum post 
export const saveForumPost = async (postData) =>{
    const {data} = await axiosSecure.post("/save-forum-post",postData)
    return data;
}
// get all forum posts 
export const getAllForumPosts = async () =>{
    const {data} = await axiosSecure.get("/all-forum-posts")
    return data;
}