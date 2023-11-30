import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import { useEffect } from "react";

const DashboardLayout = () => {
    const location = useLocation()
    
    console.log(location);
    useEffect(()=>{
        window.document.title = `FitPulseHub | ${location.pathname.slice(1,location.pathname.length)}`
    },[location.pathname])
    
    return (
        <div className="h-screen md:flex overflow-hidden">
            {/* Sidebar  */}
            <div className="flex-1">
            <Sidebar></Sidebar>
            </div>
            {/* outlet  */}
            <div className="flex-[3] p-4 overflow-hidden overflow-y-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;