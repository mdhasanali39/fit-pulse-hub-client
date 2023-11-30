import { useQuery } from "@tanstack/react-query";
import { getCountSubscriberPaidMember, getLastSixPayTransaction } from "../../../../../api/balance";
import SimpleChart from "./SimpleChart";
import Title from "../../../../Shared/Title/Title";
import StateCard from "./StateCard/StateCard";
import SixPayments from "./SixPayments/SixPayments";

const Balance = () => {
  // get total count of  newsletter subscribers and paid membership
  const { data = {} } = useQuery({
    queryKey: ["totalSubscriber", "totalMemberships"],
    queryFn: async () => await getCountSubscriberPaidMember(),
  });

  // get last six payment transaction - made by members
  const {data:payments = []} = useQuery({
    queryKey: ["payments"],
    queryFn:async()=> await getLastSixPayTransaction()
  })
  console.log(payments);
  return (
    <div>
      <Title heading_first="Balance" subHeading="look be careful"></Title>
      {/* Total Remaining and Total Payment */}
        <div className="my-10">
        <StateCard></StateCard>
        </div>
      {/* simple - newsletter subscribers vS paid membership pie chart  */}
      <div>
      <h2 className="text-3xl font-bold text-center">
      ----Newsletter subscribers vS Paid membership pie chart----
        </h2>
      <SimpleChart
        totalSubscribersCount={data?.totalSubscribersCount}
        totalPaidMembersCount={data?.totalPaidMembersCount}
      />
      </div>
      {/* six payments details  */}
      <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-7">
          ----Last six payment transaction - membership payment----
        </h2>
        <SixPayments payments={payments}></SixPayments>
      </div>
    </div>
  );
};

export default Balance;
