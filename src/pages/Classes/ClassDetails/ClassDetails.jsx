import { Link, useLoaderData } from "react-router-dom";
import Title from "../../../components/Shared/Title/Title";

const ClassDetails = () => {
  const classData = useLoaderData();

  return (
    <div className="mt-8">
        <Title heading_first="details of" heading_last={classData?.class_name} subHeading="see full details of particular class"></Title>
      <div className="border w-3/5 mx-auto rounded-md p-4 my-10">
        <div>
            <img className="h-[300px] w-full object-cover object-top rounded-md" src={classData?.image} alt={classData?.class_name}/>
        </div>
        <h2 className="text-3xl font-bold mt-3">{classData?.class_name}</h2>
        <p className="text-xl font-semibold">{classData?.description}</p>
        <h2 className="text-xl font-semibold">Details:</h2>
        <p className="font-medium">{classData?.details}</p>
        <h2 className="text-xl font-semibold">Duration: {classData?.duration}</h2>
        <div>
          <h2 className="text-xl font-semibold">Benefits:</h2>
          {classData?.benefits?.map((benefit, idx) => (
            <span key={benefit?._id} className="flex mt-3">
              <span className="bg-black-text rounded-md text-white px-2 w-8 mx-2">
                {idx + 1}
              </span>
              {benefit}
            </span>
          ))}
        </div>
        <div className="my-7">
          <Link to="/trainer">
            <button className="flex gap-1 items-center mx-auto uppercase text-lg text-black font-semibold px-4 py-1 rounded-lg bg-action-bg  hover:bg-black-text hover:text-white transition ease-linear duration-300">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
