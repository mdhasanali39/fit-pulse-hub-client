import { FaUsers } from "react-icons/fa6";
import { MdForum, MdOutlineSportsGymnastics } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";

import MenuItem from "../../MenuItem";

const AdminMenus = () => {
  return (
    <div className="flex flex-col gap-6">
      <MenuItem
        icon={FaUsers}
        label="All subscribers"
        address="all-subscribers"
      />
      <MenuItem 
      icon={MdOutlineSportsGymnastics}
        label="all trainers"
        address="all-trainers"
      />
      <MenuItem
        icon={GiGymBag}
        label="applied trainers"
        address="applied-trainers"
      />
      <MenuItem
        icon={MdForum}
        label="add new forum"
        address="add-new-forum"
      />
      <MenuItem
        icon={MdAccountBalanceWallet}
        label="balance"
        address="balance"
      />
    </div>
  );
};

export default AdminMenus;
