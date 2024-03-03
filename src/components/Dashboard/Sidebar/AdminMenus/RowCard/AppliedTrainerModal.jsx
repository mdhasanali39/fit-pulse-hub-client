import { FaTimes } from "react-icons/fa";

const AppliedTrainerModal = ({ trainer, handleAccept, trainerLoading }) => {
  const {
    _id,
    trainer_name,
    trainer_email,
    trainer_age,
    image_url,
    skills,
    available_time_in_week,
    available_time_in_day,
    experience,
  } = trainer || {};

  if (trainerLoading) {
    return <span>loading...</span>;
  }
  return (
    <tr>
      <td>
        <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
            <span className="font-bold">Applied by:</span> {trainer_name}</h3>
            <p className="pt-1 font-medium text-lg">
            <span className="font-bold">Email: </span>
             {trainer_email}</p>
            <p className="pt-1 font-medium text-lg">
            <span className="font-bold">Age: </span>
             {trainer_age}</p>
            <p className="pt-1 font-medium text-lg">
            <span className="font-bold">Photo: </span>
             {image_url}</p>
            <p className="pt-1 font-medium text-lg">
              <span className="font-bold">Available time in week: </span>
              {available_time_in_week}
            </p>
            <p className="pt-1 font-medium text-lg">
              <span className="font-bold">Available time in day: </span>
              {available_time_in_day}
            </p>
            <p className="pt-1 font-medium text-lg">
              <span className="font-bold">experience: </span> {experience} years
            </p>
            <div className="mt-2">
              <h2 className="text-lg font-bold">Skills:</h2>
              {skills?.map((skill, idx) => (
                <span key={idx} className="mr-2 font-medium">
                  <span className="font-bold px-2 border bg-black-text text-white mr-1 rounded-md">
                    {idx + 1}
                  </span>
                  {skill}
                </span>
              ))}
            </div>
            <div className="modal-action">
              <form method="dialog" className="flex gap-4">
                {/* accept button  */}
                <button
                  onClick={() => handleAccept(trainer_email, _id)}
                  className="flex gap-1 items-center  uppercase text-lg text-black font-semibold px-4 py-1 rounded-lg bg-action-bg  hover:bg-black-text hover:text-white   transition ease-linear duration-300"
                >
                  Accept
                </button>
                {/* reject button  */}
                <button className="flex gap-1 items-center  uppercase text-lg text-black font-semibold px-4 py-1 rounded-lg bg-red-500  hover:bg-black-text hover:text-white   transition ease-linear duration-300">Reject</button>

                {/* close button  */}
                <button className="flex gap-1 items-center absolute top-5 right-4  uppercase text-lg text-black font-semibold px-4 py-2 rounded-lg bg-red-500  hover:bg-black-text hover:text-white   transition ease-linear duration-300"><FaTimes/></button>
              </form>
            </div>
          </div>
        </dialog>
      </td>
    </tr>
  );
};

export default AppliedTrainerModal;
