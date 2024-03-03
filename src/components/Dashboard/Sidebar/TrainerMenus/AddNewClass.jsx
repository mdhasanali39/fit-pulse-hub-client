import toast from "react-hot-toast";
import { saveClass } from "../../../../api/classes";
import useAuth from "../../../../hooks/useAuth";
import Title from "../../../Shared/Title/Title";

const AddNewClass = () => {
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const class_name = form.name.value;
    const description = form.description.value;
    const details = form.details.value;
    const benefits = form.benefits.value;
    const image = form["photo-url"].value;
    const duration = form.duration.value;

    const classData = {
      class_name,
      description,
      details,
      benefits: [...benefits.split(',')],
      image,
      duration,
    };
    try {
      const res = await saveClass(classData, user?.email);
      if (res.insertedId) {
        toast.success("New class added successfully");
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    console.table(class_name, description, details, benefits, image, duration);
  };

  return (
    <div className="">
      <Title
        heading_first="add new"
        heading_last="class"
        subHeading="new classes will be added here"
      ></Title>
      <div className="w-3/4 mx-auto bg-action-bg bg-opacity-40 p-4 mb-5 rounded-md">
        <form onSubmit={handleSubmit} >
          <div className="space-y-4">
            {/* class name  */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-lg text-black-text font-semibold "
              >
                Class Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Class Name"
                required
                className=" outline-none border placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* class duration  */}
            <div className="flex flex-col">
              <label
                htmlFor="duration"
                className="text-lg text-black-text font-semibold "
              >
                Class Duration
              </label>
              <input
                type="text"
                name="duration"
                id="duration"
                placeholder="Class Duration"
                required
                className=" outline-none border placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* class description  */}
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="text-lg text-black-text font-semibold "
              >
                Class Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Short description"
                className="max-w-full outline-none border placeholder-black px-3 py-4 rounded-md"
              ></textarea>
            </div>
            {/* class details  */}
            <div className="flex flex-col">
              <label
                htmlFor="details"
                className="text-lg text-black-text font-semibold "
              >
                Class Details
              </label>
              <textarea
                name="details"
                id="details"
                placeholder="Class Details"
                className="max-w-full outline-none border placeholder-black px-3 py-4 rounded-md"
              ></textarea>
            </div>

            {/* class image url  */}
            <div className="flex flex-col">
              <label
                htmlFor="photo-url"
                className="text-lg text-black-text font-semibold "
              >
                Class image Url
              </label>
              <input
                type="url"
                name="photo-url"
                id="photo-url"
                placeholder="Class img Url"
                required
                className=" outline-none border placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* class benefits  */}
            <div className="flex flex-col">
              <label
                htmlFor="benefits"
                className="text-lg text-black-text font-semibold "
              >
                Class Benefits
              </label>
              <textarea
                name="benefits"
                id="benefits"
                placeholder="Class Benefits"
                className="max-w-full outline-none border placeholder-black px-3 py-4 rounded-md"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewClass;
