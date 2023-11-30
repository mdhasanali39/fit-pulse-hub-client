// import { useContext } from "react";
// import { BiLogOut } from "react-icons/bi";
// import { AuthContext } from "../../../providers/AuthProvider";


// const MenuDropdown = ({active,setActive}) => {
//   const {user} = useContext(AuthContext)

//     return (
//         <div>
//           <div className="flex lg:block">
//             <div className="relative left-1/2 max-[1023.9px]:-translate-x-1/2">
//               <div onClick={() => setActive(!active)}>
//                 <img
//                   className="w-8 h-8 object-cover rounded-full"
//                   src={user.photoURL}
//                 />
//               </div>
//               <div
//                 className={`${
//                   active ? "block" : "hidden"
//                 } absolute max-[1023.9px]:left-1/2 max-[1023.9px]:-translate-x-1/2 max-[1023.9px]:-top-[170px] z-50 lg:right-[5%] min-w-max border border-action-primary-clr bg-white p-4 rounded-md`}
//               >
//                 <div onClick={() => setActive(!active)}>
//                   <img
//                     className="w-12 h-12 mx-auto object-cover mb-4 rounded-full"
//                     src={user.photoURL}
//                   />
//                 </div>
//                 <h3 className="text-center">{user.displayName}</h3>
//                 {/* <button
//                   onClick={handleLogOut}
//                   className="flex gap-1 items-center text-lg text-white font-semibold px-4 py-1 rounded-lg bg-action-primary-clr border hover:bg-white hover:text-action-primary-clr hover:border-action-primary-clr transition ease-linear duration-300"
//                 >
//                   <span>
//                     <BiLogOut />
//                   </span>
//                   Log-out
//                 </button> */}
//               </div>
//             </div>
//           </div>
//         </div>
//     );
// };

// export default MenuDropdown;