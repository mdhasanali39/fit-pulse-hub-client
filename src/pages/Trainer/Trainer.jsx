import { useQuery } from "@tanstack/react-query";
import Cover from "../../components/Shared/Cover/Cover";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  checkIsUnverified,
  getTimeSlots,
  getTrainers,
} from "../../api/trainer";
import TrainerCard from "../../components/Trainer/TrainerCard";
import useRole from "../../hooks/useRole";

const Trainer = () => {
  const { user, loading } = useAuth();
  const [role] = useRole();
  console.log(role);

  // for check currently logged in user are trainer or no
  const { data: verified } = useQuery({
    enabled: !loading && !!user.email,
    queryKey: ["isTrainer", user?.email],
    queryFn: async () => await checkIsUnverified(user?.email),
  });

  // load trainers data
  const { data: trainers = [], isLoading } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => await getTrainers(),
  });
  // console.log(trainers);

  // load time slots data
  const { data: timeSlots = [] } = useQuery({
    queryKey: ["timeSlots"],
    queryFn: async () => await getTimeSlots(),
  });

  console.log(timeSlots);

  return (
    <div className="min-h-[40vh]">
      {/* banner  */}
      <Cover
        heading_first="all"
        heading_last="trainer"
        subHeading="get trained by which trainer you like"
        image="https://i.ibb.co/D13J0DK/trainer-bg.jpg"
        color="text-white"
      ></Cover>
      {/* all trainers  */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-8">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          trainers.map((trainer) => (
            <TrainerCard
              key={trainer._id}
              trainer={trainer}
              timeSlots={timeSlots}
            ></TrainerCard>
          ))
        )}
      </div>

      {/* be a trainer */}
      {role === "member" && (
        <div className="mt-10 bg-black-text p-8 rounded-md">
          {/* {!verified && (
            <dev className="flex flex-col">
              <span className="text-white text-3xl font-semibold mb-1">
                You Successfully applied{" "}
                <span className="text-xl">to become a trainer</span>
              </span>
              <span className="text-action-text font-semibold text-xl">
                Waiting for admin response
              </span>
            </dev>
          )} */}

            <p className="text-white text-3xl font-semibold mb-1">
            To be a trainer today!
          </p>
          <Link to="/become-trainer">
            <button className="flex gap-1 items-center  uppercase text-lg text-black font-semibold px-4 py-1 rounded-lg bg-action-bg  hover:bg-white   transition ease-linear duration-300">
              Become a Trainer
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Trainer;
