import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiWifiOffLine } from "react-icons/ri";

const OfflineMessage = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  console.log(isOnline);

  useEffect(() => {
    const checkUserOnline = () => {
      window.location.reload()
      setIsOnline(window.navigator.onLine);
    };

    window.addEventListener("online", checkUserOnline);
    window.addEventListener("offline", checkUserOnline);
    // let's cleanup listener
    return () => {
      window.removeEventListener("online", checkUserOnline);
      window.removeEventListener("offline", checkUserOnline);
    };
  }, [isOnline]);
//   useEffect(()=>{
//     if(!isOnline ){
//         window.location.reload()
//     }
//   },[isOnline])

  return <div className={`${isOnline ? "hidden": "flex"}  flex-col justify-center items-center min-h-[86vh]`}>
    
    <RiWifiOffLine size={100}/>
    <p className="text-2xl font-semibold">You are offline. Please check your internet connection</p>

  </div>;
};

export default OfflineMessage;
