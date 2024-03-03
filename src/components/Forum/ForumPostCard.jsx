import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";

const ForumPostCard = ({ post, handleUpVote, handleDownVote }) => {
  const { user } = useAuth();

  return (
    <div className="flex items-center p-4 py-6 border-t border-r rounded-md">
      {/* left  */}
      <div className="flex-1 flex flex-col items-center">
        <div className="w-[80px] h-[80px] p-1 bg-action-bg rounded-full mb-3">
          <img
            className="rounded-full w-full h-full object-cover"
            src={post?.image}
            alt="user image"
          />
        </div>
        <div>
          <h2 className="font-semibold">{post?.name}</h2>
          <h4 className="text-action-text font-bold">@{post?.postBy}</h4>
        </div>
      </div>
      {/* right  */}
      <div className="flex-[6]">
        <div className="bg-black-text bg-opacity-[.08] p-3 min-h-[160px] w-full rounded-md">
          {/* post text */}
          <p>{post?.post_text}</p>
        </div>
        <p className="font-medium my-3">posted: 12/3/2023</p>
        {/* upVote/downVote */}
        <div className="flex  max-w-min bg-black-text bg-opacity-5 border rounded-md">
          <div
           onClick={() => handleUpVote(post?._id, user?.email)}
          title="Up Vote"
           className="flex gap-1 p-[6px] min-w-[60px] hover:bg-action-bg hover:bg-opacity-25 transition ease-linear duration-200">
            <BiSolidUpvote
              size={18}
              className="select-none  "
            />
            <span>{post?.upvotes || 0}</span>
          </div>
          <div
           onClick={() => handleDownVote(post?._id, user?.email)}
              title="Down Vote"
           className="flex gap-1 p-[6px] min-w-[40px] border-l  border-black-text border-opacity-60 pl-2 hover:bg-red-600 hover:bg-opacity-25 transition ease-linear duration-200">
            <BiSolidDownvote
              size={18}
              className="select-none "
            />
            <span>{post?.downvotes || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
ForumPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  handleDownVote: PropTypes.func.isRequired,
  handleUpVote: PropTypes.func.isRequired,
};
export default ForumPostCard;
