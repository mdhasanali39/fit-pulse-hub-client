import { useQuery } from "@tanstack/react-query";
import { getSubscribers } from "../../../../api/newsletter";
import SubscribersRow from "./RowCard/SubscribersRow";
import Title from "../../../Shared/Title/Title";

const AllSubscribers = () => {
    const {data:subscribers = []}= useQuery({
        queryKey: ["subscribers"],
        queryFn:async()=> await getSubscribers()
    })
    console.log(subscribers);
    return (
        <div className="overflow-x-auto">
          <Title heading_first="all" heading_last="subscribers" subHeading="list of all subscribers"></Title>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Subscribe Date</th>
            </tr>
          </thead>
          <tbody>
            {
                subscribers.map((subscriber,idx) => <SubscribersRow key={subscriber?._id} subscriber={subscriber} idx={idx}></SubscribersRow>)
            }
          </tbody>
        </table>
      </div>
    );
};

export default AllSubscribers;