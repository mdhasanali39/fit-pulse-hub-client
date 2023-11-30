import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {
    const location = useLocation()
    if(location.pathname === '/'){
    console.log(location);
        window.document.title = "FitPulseHub | Home"
    }
    useEffect(()=>{
        window.document.title = `FitPulseHub | ${location.pathname.slice(1,location.pathname.length)}`
    },[location.pathname])

    return (
    <>
        <div className="sticky top-0 left-0 z-50 max-w-[1300px] mx-auto px-4 font-Roboto-condensed">
            <Navbar></Navbar>
            </div>
        <div className="max-w-[1300px] mx-auto px-4 font-Roboto-condensed relative overflow-hidden">
            <div>
            <Outlet></Outlet>
            </div>
            {/* footer  */}
            <Footer></Footer>
        </div>
    </>
    );
};

export default MainLayout;