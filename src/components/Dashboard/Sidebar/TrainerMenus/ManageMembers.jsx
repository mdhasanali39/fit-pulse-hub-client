import { useQuery } from "@tanstack/react-query";
import { getBookedByMembers } from "../../../../api/trainer";
import useAuth from "../../../../hooks/useAuth";
import Title from "../../../Shared/Title/Title";
import ManageMembersRow from "./Rows/ManageMembersRow";

const ManageMembers = () => {
    const {user} = useAuth()
    const {data:bookedByMembers = []} = useQuery({
        queryKey: ["bookedMembers",user?.email],
        queryFn: async() => await getBookedByMembers(user?.email)
    })
    // console.log(bookedMembers);
    return (
        <div className="overflow-x-auto  min-h-[90vh]">
      <Title
        heading_first="manage"
        heading_last="members"
        subHeading="Manage all of your members"
      ></Title>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Booked Slot</th>
          </tr>
        </thead>
        <tbody>
          {
            bookedByMembers.map((member,idx) => <ManageMembersRow key={member?._id} member={member} idx={idx}></ManageMembersRow>)
          }
        </tbody>
      </table>
    </div>
    );
};

export default ManageMembers;