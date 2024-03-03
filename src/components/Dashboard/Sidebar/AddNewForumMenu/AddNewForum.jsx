import toast from "react-hot-toast";
import { saveForumPost } from "../../../../api/forum";
import useAuth from "../../../../hooks/useAuth";
import useRole from "../../../../hooks/useRole";
import Title from "../../../Shared/Title/Title";

const AddNewForum = () => {
    const [role] = useRole();
    const {user} =useAuth()

    const handleAddPost = async(e) =>{
        try {
            e.preventDefault();
            const whoPosted = role === "admin"? "admin": "trainer";
            const name = user?.displayName
            const form = e.target;
            const post_text = form['post-text'].value;
    
            const postData = {
                post_text,
                postBy: whoPosted,
                name: name,
                image:user?.photoURL
            }
            const result = await saveForumPost(postData)
            if(result.insertedId){
                toast.success("Post added Successfully")
            }
    
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <Title heading_first="add new" heading_last="forum post"></Title>
      <div className="w-3/4 mx-auto bg-action-bg bg-opacity-40 p-4 rounded-md">
        <form onSubmit={handleAddPost}>
          {/* post Text  */}
          <div className="flex flex-col">
            <label
              htmlFor="post-text"
              className="text-lg text-black-text font-semibold "
            >
              Your Post Text
            </label>
            <textarea
              name="post-text"
              id="post-text"
              placeholder="Your Post Text....."
              required
              className=" outline-none border placeholder-black px-3 py-4 rounded-md"
            ></textarea>
          </div>
          {/* add button  */}
          <div className="text-center py-7">
            <button
              type="submit"
              className="text-lg text-white font-semibold px-7 py-2 rounded-lg bg-action-bg border hover:bg-white hover:text-black hover:border-action-text transition ease-linear duration-300"
            >
              Add Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewForum;
