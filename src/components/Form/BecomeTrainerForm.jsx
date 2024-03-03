import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { saveTrainer } from "../../api/trainer";
import { saveImage } from "../../utils/utils";

const BecomeTrainerForm = () => {
  const { user } = useAuth();
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [timeInWeek, setTimeInWeek] = useState(0);
  const navigate = useNavigate()

  // console.log(selectedSkills);
  // console.log(timeInWeek);

  useEffect(() => {
    axios.get("/skills.json").then((res) => {
      setSkills(res.data);
    });
  }, []);

  const hanldeSkillSelect = skill =>{
    if(!selectedSkills.includes(skill)){
      setSelectedSkills([...selectedSkills,skill])
    }
  }

  const handleApply = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const experience = form["years-of-experience"].value;
    const timeInDay = form["available-time-day"].value; // available time in day
    

    if (age <= 23 || age > 65) {
      toast.error("age should minimum: 24 and maximum: 65 . ex: 24");
      return;
    }
    if (timeInWeek <= 11 || timeInWeek > 32) {
      toast.error("available time in week should minimum: 12 hour and maximum: 32. ex: 12");
      return;
    }
    // get image display_url
    const image = form.photo.files[0]
    const {data} = await saveImage(image)

    console.log(data);

    const trainerData  = {
        trainer_name:fullName,
        trainer_email:email,
        trainer_age:age,
        image_url:data.display_url,
        skills: selectedSkills,
        experience: experience,
        available_time_in_week: timeInWeek,
        available_time_in_day: timeInDay,
        status: "unverified"
    }

    // try {
    //   const data = await saveTrainer(trainerData,email)
    //   if(data.status){
    //     toast.success(data.status)
    //     navigate("/trainer")
    //   }
    //   if(data.insertedId){
    //     toast.success("Applied successfully")
    //     navigate("/trainer")
    //   }
    //   // console.log(data);
    // } catch (err) {
    //   console.log(err);
    // }

    console.log(trainerData);
  };

  return (
    <div className="w-3/5 mx-auto">
      {/* heading  */}
      <h2 className="text-3xl font-semibold text-center my-10">
        Fill out the <span className="text-action-text">form to join</span>
      </h2>
      <form onSubmit={handleApply}>
        <div className="space-y-4">
          {/* name  */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-lg text-black-text font-semibold "
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Full Name"
              required
              className=" outline-none border placeholder-black px-3 py-4 rounded-md"
            />
          </div>
          {/* email  */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-lg text-black-text font-semibold "
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={user?.email}
              readOnly
              className=" outline-none border px-3 py-4 cursor-context-menu rounded-md"
            />
          </div>
          {/* age  */}
          <div className="flex flex-col">
            <label
              htmlFor="age"
              className="text-lg text-black-text font-semibold "
            >
              Your Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Your Age"
              required
              className=" outline-none border placeholder-black px-3 py-4 rounded-md"
            />
          </div>
          {/* profile photo */}
          <div className="flex flex-col">
            <label
              htmlFor="photo"
              className="text-lg text-black-text font-semibold "
            >
              Your Photo
            </label>
            <input
              type="file"
              name="photo"
              id="photo"
              accept="image/*"
              required
              className=" outline-none border placeholder-black px-3 py-4 rounded-md"
            />
            {/* requirement message  */}
            <p className="text-black-text text-sm mt-1 ml-1 font-semibold">
              Image size should be like this :{" "}
              <a
                href="https://i.ibb.co/5xL0185/young-adult-doing-indoor-sport-gym.jpg"
                target="_blank"
                rel="noreferrer"
              >
                Click
              </a>
            </p>
          </div>
          {/* select skills  */}
          <div>
            <h2 className="text-lg font-semibold">Select Skills</h2>
            <div
              onChange={(e) => hanldeSkillSelect(e.target.parentNode.textContent)
              }
              className="border pl-3 py-4"
            >
              {skills.map((s, idx) => (
                <label key={idx} className="flex text-lg text-black-text ">
                  <input
                   type="checkbox" className="mr-1" />
                  {s.skill.split(" ").join("-")}
                </label>
              ))}
            </div>
          </div>
          {/* years of experience  */}
          <div className="flex flex-col">
            <label
              htmlFor="experience"
              className="text-lg text-black-text font-semibold "
            >
              Year of experience
            </label>
            <input
              type="number"
              name="years-of-experience"
              id="experience"
              placeholder="Year of experience"
              required
              className=" outline-none border placeholder-black px-3 py-4 rounded-md"
            />
          </div>
          {/* available time in week  */}
          <div className="flex flex-col">
            <label
              htmlFor="available-week"
              className="text-lg text-black-text font-semibold "
            >
              Available Time in Week
            </label>
            <input
              onChange={(e) => setTimeInWeek(e.target.value)}
              type="number"
              name="available-time-week"
              id="available-week"
              placeholder="Available Time in Week"
              required
              className=" outline-none border placeholder-black px-3 py-4 rounded-md"
            />
          </div>
          {/* available time in day  */}
          <div className="flex flex-col">
            <label
              htmlFor="available-day"
              className="text-lg text-black-text font-semibold "
            >
              Available Time in Day
            </label>
            <input
              type="text"
              name="available-time-day"
              id="available-day"
              value={Math.round(timeInWeek / 4)}
              readOnly
              className=" outline-none border placeholder-black px-3 py-4 rounded-md"
            />
          </div>
          {/* apply button  */}
          <div className="text-center py-7">
            <button
              type="submit"
              className="text-lg text-black-text font-semibold px-7 py-2 rounded-lg bg-action-bg border hover:bg-white hover:text-black hover:border-action-text transition ease-linear duration-300"
            >
              Apply
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BecomeTrainerForm;
