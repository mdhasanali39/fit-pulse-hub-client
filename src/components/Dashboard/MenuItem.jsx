import { NavLink } from "react-router-dom";

const MenuItem = ({icon:Icon, label, address}) => {
    return (
        <NavLink to={address}
        className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white underline"
              : "text-black-text"
          }
        >
        <p className="flex items-center gap-2">
        <Icon size={26                                                                                  }></Icon>
        <span className="text-2xl font-semibold capitalize">{label}</span>
        </p>
        </NavLink>
    );
};

export default MenuItem;