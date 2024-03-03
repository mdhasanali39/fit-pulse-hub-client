import { BiLogOut } from "react-icons/bi";
import AdminMenus from "./AdminMenus/AdminMenus";
import useRole from "../../../hooks/useRole";
import TrainerMenus from "./TrainerMenus/TrainerMenus";
import MemberMenus from "./MemberMenus/MemberMenus";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [role] = useRole();
  return (
    <div className="flex flex-col items-center bg-orange-600 min-h-screen relative py-4">
      {/* logo  */}
      <div className="bg-black-text w-full flex justify-center py-3 mb-8">
        <Link to={"/"}>
          <img
            className=""
            src="https://i.ibb.co/pK0hVjH/fit-pulse.png"
            alt="fit pulse logo"
          />
        </Link>
      </div>
      {/* all menus here  */}
        <div className="w-3/4 mx-auto">
        {role === "admin" && <AdminMenus></AdminMenus>}
      {role === "trainer" && <TrainerMenus></TrainerMenus>}
      {role === "member" && <MemberMenus></MemberMenus>}
        </div>

      {/* sidebar bottom */}
      {/* <div className="absolute bottom-8">
                <button className="btn btn-ghost btn-md text-xl font-bold hover:text-white">
                <BiLogOut color="white" className="-mr-1" /> LogOut</button>
            </div> */}
    </div>
  );
};

export default Sidebar;
