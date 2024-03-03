import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import { useEffect } from "react";
import { FaBars } from "react-icons/fa6";

const DashboardLayout = () => {
    const location = useLocation()
    

    console.log(location);
    useEffect(()=>{
        window.document.title = `FitPulseHub | ${location.pathname.slice(1,location.pathname.length)}`
    },[location.pathname])
    
    return (
        <div className="min-h-screen md:flex relative">
            {/* Sidebar  */}
            <div className="flex-1 fixed z-[99] min-w-[50%] -translate-x-[560px] lg:translate-x-0 lg:min-w-[25%] ">
            <Sidebar></Sidebar>
            </div>
            {/* outlet  */}
            <div className={`flex-[3] lg:ml-[25%] p-4`}>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;