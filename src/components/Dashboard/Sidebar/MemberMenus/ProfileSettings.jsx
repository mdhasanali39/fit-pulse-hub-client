import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Title from "../../../Shared/Title/Title";
import { saveImage } from "../../../../utils/utils";
import { FaRegEdit } from "react-icons/fa";
import { updateUser } from "../../../../api/auth";
import toast from "react-hot-toast";

const ProfileSettings = () => {
  const { user, updateUserProfile } = useAuth();
  const [photoUrl, setPhotoUrl] = useState(undefined);
  const [activeUpdate, setActiveUpdate] = useState(false);

  const handleUploadImage = async (image) => {
    if (image) {
      const { data } = await saveImage(image);
      setPhotoUrl(data?.display_url);
      console.log(data);
    }
  };
  console.log({ photoUrl });
  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
    
        const updateProfileInfo = {
            name,
            image:photoUrl
        }
        const res = await updateUser(updateProfileInfo,user?.email)
        if(res.modifiedCount >0){
            toast.success("Your profile updated successfully")
            await updateUserProfile(name,photoUrl)
            setActiveUpdate(false)
        }
        console.log(res);
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div>
      <Title heading_first="My " heading_last="Profile"></Title>

      <div className="w-3/4 mx-auto mt-10 drop-shadow-xl shadow-lg rounded-md border py-16 relative">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex gap-20">
            {/* profile photo  */}
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] p-1 bg-action-bg rounded-full mb-4">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src={photoUrl || user?.photoURL}
                  alt="user image"
                />
              </div>
              <label
                className={`text-action-text disabled:text-gray-500 font-bold text-lg ${
                  !activeUpdate && "text-opacity-30 border-opacity-30"
                }  p-2 rounded-md border border-dashed border-black-text`}
              >
                <input
                  onChange={(e) => handleUploadImage(e.target.files[0])}
                  disabled={!activeUpdate}
                  type="file"
                  accept="image/*"
                  name="photo"
                  required
                  className="absolute -top-[1000px]"
                />
                Upload Image
              </label>
            </div>
            {/* profile info  */}
            <div>
              {/* full name  */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-lg text-black-text font-semibold "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={user?.displayName}
                  readOnly={!activeUpdate}
                  required
                  className=" outline-none border placeholder-black px-3 py-4 rounded-md"
                />
              </div>
              {/* user email  */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-lg text-black-text font-semibold "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  readOnly
                  required
                  className=" outline-none border placeholder-black px-3 py-4 rounded-md"
                />
              </div>
            </div>
          </div>
          {/* update button  */}
          <div className="text-center py-7">
            {activeUpdate ? (
              <button
                type="submit"
                className="text-lg text-white font-semibold px-7 py-2 rounded-lg bg-action-bg border hover:bg-white hover:text-black hover:border-action-text transition ease-linear duration-300"
              >
                Update Profile
              </button>
            ) : (
              ""
            )}
          </div>
        </form>
        {/* edit button - for toggle update button and photo upload */}
        <button
          onClick={() => setActiveUpdate(!activeUpdate)}
          className="btn btn-outline btn-sm flex absolute top-[5%] right-[5%] text-black-text font-semibold transition ease-linear duration-300"
        >
          {activeUpdate ? (
            "Cancel"
          ) : (
            <>
              <FaRegEdit size={20} /> Edit
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
