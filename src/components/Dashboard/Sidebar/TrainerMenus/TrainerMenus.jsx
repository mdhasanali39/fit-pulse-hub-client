import MenuItem from "../../MenuItem";
import { MdManageSearch } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { MdForum } from "react-icons/md";

const TrainerMenus = () => {
  return (
    <div className="flex flex-col gap-6">
      <MenuItem
        icon={MdManageSearch}
        label="manage slots"
        address="manage-slots"
      />
      <MenuItem
        icon={MdManageAccounts}
        label="manage members"
        address="manage-members"
      />
      <MenuItem icon={MdForum} label="add new forum" address="add-new-forum" />
      <MenuItem
        icon={IoIosAddCircle}
        label="add new class"
        address="add-new-class"
      />
    </div>
  );
};

export default TrainerMenus;
