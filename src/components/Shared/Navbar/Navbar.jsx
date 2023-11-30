import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";
import NavItems from "./NavItems";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isItemClicked, setIsItemClicked] = useState(false);
  const [active, setActive] = useState(false);

  const {logOut} = useAuth()

  // handle item click
  const handleItemClick = () => {
    setIsItemClicked(true);
    setMenuActive(false);
  };

  // handle log-out
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out successful");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // handle open menu
  const handleMenuOpen = () => {
    setMenuActive(!menuActive);
    setIsItemClicked(false);
  };

  return (
    <nav
      style={{
        background:"linear-gradient(90deg, rgba(13,13,13,1) 32%, rgba(31,77,25,1) 100%)",
      }}
      className={`flex justify-between items-center relative px-4  py-6`}
    >
      {/* logo  */}
      <div>
        <img
          className=""
          src="https://i.ibb.co/pK0hVjH/fit-pulse.png"
          alt="fit pulse logo"
        />
      </div>

      {/* for small and medium device */}
      <div className="lg:hidden">
        {/* menu open icon  */}
        <span
          onClick={handleMenuOpen}
          className={`${menuActive ? "hidden" : "block"} text-2xl`}
        >
          <FaBars />
        </span>
        {/* menu close icon  */}
        <span
          onClick={() => setMenuActive(!menuActive)}
          className={`${menuActive ? "block" : "hidden"} text-2xl`}
        >
          <AiOutlineClose />
        </span>
      </div>
      <ul
        className={`${
          menuActive
            ? "fixed bg-white border shadow-lg w-3/4 top-[72px]  right-4 text-center space-y-5 pt-16 h-[89.5vh] z-50"
            : "fixed bg-white w-1/2 top-[72px] translate-x-[600px] right-4 text-center space-y-5 pt-16 h-[89.5vh]"
        } ${
          isItemClicked &&
          "fixed bg-white w-1/2 top-[72px] translate-x-[600px] right-0 text-center space-y-5 pt-16 h-[89.5vh]"
        } transition ease-linear duration-300 lg:hidden`}
      >
        {/* nav links  */}
        <NavItems
          handleItemClick={handleItemClick}
          active={active}
          setActive={setActive}
          handleLogOut={handleLogOut}
        ></NavItems>
      </ul>
      {/* for large device  */}
      <ul className="hidden lg:flex gap-6 justify-center items-center">
        <NavItems
          handleItemClick={handleItemClick}
          active={active}
          setActive={setActive}
          handleLogOut={handleLogOut}
        ></NavItems>
      </ul>
    </nav>
  );
};

export default Navbar;
