import { BiLogOut } from "react-icons/bi";
import AdminMenus from "./AdminMenus/AdminMenus";
import useRole from "../../../hooks/useRole";
import TrainerMenus from "./TrainerMenus/TrainerMenus";
import MemberMenus from "./MemberMenus/MemberMenus";


const Sidebar = () => {
    const [role] = useRole()
    return (
        <div className="flex flex-col items-center bg-orange-600 min-h-screen relative">
            {/* logo here  */}
            <div className="my-10">
                <h2>FitPulseHub</h2>
            </div>
            {/* all menus here  */}

                {role === "admin" && <AdminMenus></AdminMenus> }
                {role === "trainer" && <TrainerMenus></TrainerMenus>}
                {role === "member" && <MemberMenus></MemberMenus>}


            

            {/* sidebar bottom */}
            {/* <div className="absolute bottom-8">
                <button className="btn btn-ghost btn-md text-xl font-bold hover:text-white">
                <BiLogOut color="white" className="-mr-1" /> LogOut</button>
            </div> */}
        </div>
    );
};

export default Sidebar;