import MenuItem from "../../MenuItem";
import { RxActivityLog } from "react-icons/rx";
import { IoSettings } from "react-icons/io5";
import { MdRecommend } from "react-icons/md";

const MemberMenus = () => {
  return (
    <div className="flex flex-col gap-6">
      <MenuItem icon={RxActivityLog} label="activity log" address="activity-log" />
      <MenuItem icon={IoSettings} label="profile setting" address="profile-settings" />
      <MenuItem icon={MdRecommend} label="recommended classes" address="recommendation-classes" />
    </div>
  );
};

export default MemberMenus;
