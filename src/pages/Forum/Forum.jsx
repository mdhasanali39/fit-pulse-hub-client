import { useQuery } from "@tanstack/react-query";
import ForumPostCard from "../../components/Forum/ForumPostCard";
import { getAllForumPosts } from "../../api/forum";
import { useEffect, useState } from "react";
import axiosSecure from "../../api";
import useAuth from "../../hooks/useAuth";
import toast from 'react-hot-toast'

const Forum = () => {
    const {user} = useAuth()
    // const [userId,setUserId] = useState(undefined)
    const [votedUser, setVotedUser] = useState({})


    const {data:posts = [],refetch} = useQuery({
        queryKey: ['posts'],
        queryFn: async()=> await getAllForumPosts()
    })
    // get only user id 
    // console.log(userId);
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         const res = await axiosSecure.get(`/get-user/${user?.email}?onlyId=${true}`)
    //         setUserId(res.data)
    //     }
    //     fetchData()
    // },[user?.email])


    // handle up vote 
    
    const handleUpVote = async(postId, userEmail) => {
        if(!user?.email){
           return toast.error("Please login to upvote or downvote")
        }
        // here used bracket notation 
        if(votedUser[postId] === "upvoted"){
            return console.log('already upVoted');
        } 
        setVotedUser({...votedUser,[postId] : 'upvoted'})
        const res = await axiosSecure.put(`/upvote/${postId}`,{email:userEmail})
        if(res.data.modifiedCount >0){
            refetch()
        }
        // console.log(postId,userEmail);
    }
    console.log(votedUser);
    // handle down vote 
    const handleDownVote = async(postId, userEmail) => {
        if(!user){
            return toast.error("Please login to upvote or downvote")
         }
        if(votedUser[postId]=== 'downvoted'){
            return console.log('already downVoted');
        }
        setVotedUser({...votedUser,[postId] : 'downvoted'})
        const res = await axiosSecure.put(`/downvote/${postId}`,{email:userEmail})
        if(res.data.modifiedCount >0){
            refetch()
        }
        // console.log(postId,userEmail);
    }

    return (
        <div className="mt-16 mb-8 flex flex-col gap-5">
            {
                posts &&
                posts.map(post=> <ForumPostCard 
                key={post._id}
                post={post}
                handleUpVote={handleUpVote}
                handleDownVote={handleDownVote}
                ></ForumPostCard>)
            }
        </div>
    );
};

export default Forum;